# Stripe Bot Licensing Implementation Plan

*Reference document for implementing single-server licensing with Stripe*

---

## Overview

Each bot subscription is tied to one Discord server. Customers provide their Server ID at checkout, and the bot validates authorization on every command.

---

## Part 1: Stripe Setup

### 1.1 Create Products & Prices

For each bot, create in Stripe Dashboard:

```
Product: Bouncer
├── Price: Starter ($5/month)
├── Price: Pro ($10/month)
└── Price: Enterprise ($12/month)

Product: 10-4 Ticketing
├── Price: Starter ($6/month)
...etc for all 6 bots
```

### 1.2 Create Payment Links with Custom Fields

For each price, create a Payment Link with:

1. **Custom field: Discord Server ID**
   - Label: "Discord Server ID"
   - Type: Text (required)
   - Help text: "Right-click your server → Copy Server ID (Developer Mode required)"

2. **Custom field: Discord Username**
   - Label: "Your Discord Username"
   - Type: Text (required)
   - Help text: "e.g., username#1234 or @username"

### 1.3 Set Up Webhook Endpoint

In Stripe Dashboard → Developers → Webhooks:

1. Add endpoint: `https://api.nervous.net/webhooks/stripe`
2. Listen for events:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.paid`
   - `invoice.payment_failed`

---

## Part 2: Backend Service

### 2.1 Database Schema

```sql
-- Subscriptions table
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY,
    stripe_subscription_id VARCHAR(255) UNIQUE NOT NULL,
    stripe_customer_id VARCHAR(255) NOT NULL,
    discord_server_id VARCHAR(255) NOT NULL,
    discord_username VARCHAR(255),
    bot_name VARCHAR(50) NOT NULL,  -- 'bouncer', 'ten-four', etc.
    tier VARCHAR(50) NOT NULL,       -- 'starter', 'pro', 'enterprise'
    status VARCHAR(50) NOT NULL,     -- 'active', 'canceled', 'past_due'
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Index for fast bot lookups
CREATE INDEX idx_subscriptions_server_bot
ON subscriptions(discord_server_id, bot_name);

-- Audit log for support
CREATE TABLE subscription_events (
    id UUID PRIMARY KEY,
    subscription_id UUID REFERENCES subscriptions(id),
    event_type VARCHAR(100) NOT NULL,
    event_data JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);
```

### 2.2 Webhook Handler

```
POST /webhooks/stripe

On checkout.session.completed:
  1. Extract custom fields (server_id, discord_username)
  2. Extract subscription_id, customer_id, price_id
  3. Map price_id → bot_name + tier
  4. Insert into subscriptions table
  5. Log event

On customer.subscription.updated:
  1. Find subscription by stripe_subscription_id
  2. Update tier if price changed
  3. Update status
  4. Log event

On customer.subscription.deleted:
  1. Find subscription by stripe_subscription_id
  2. Set status = 'canceled'
  3. Log event

On invoice.payment_failed:
  1. Find subscription by stripe_subscription_id
  2. Set status = 'past_due'
  3. Log event
  4. (Optional) Notify customer via Discord DM
```

### 2.3 Authorization API

```
GET /api/v1/authorize?server_id={id}&bot={name}

Response:
{
  "authorized": true,
  "tier": "pro",
  "features": ["feature1", "feature2", ...],
  "expires_at": null  // or date if past_due
}

or

{
  "authorized": false,
  "reason": "no_subscription"  // or "canceled", "past_due"
}
```

---

## Part 3: Bot Integration

### 3.1 Authorization Check

Each bot needs middleware that runs before every command:

```python
# Pseudocode for bot command middleware

async def check_authorization(ctx):
    server_id = ctx.guild.id
    bot_name = "bouncer"  # hardcoded per bot

    response = await http.get(
        f"https://api.nervous.net/api/v1/authorize",
        params={"server_id": server_id, "bot": bot_name}
    )

    if not response["authorized"]:
        await ctx.send(
            "⚠️ This server doesn't have an active subscription.\n"
            "Visit https://nervous.net/bots/bouncer/pricing to subscribe."
        )
        return False

    # Store tier in context for feature gating
    ctx.subscription_tier = response["tier"]
    ctx.features = response["features"]
    return True
```

### 3.2 Feature Gating by Tier

```python
# Example: Bouncer extended timeouts (Pro+ only)

@bot.command()
async def timeout(ctx, user, duration):
    if not await check_authorization(ctx):
        return

    # Extended timeouts require Pro or Enterprise
    if duration > 28 days:
        if ctx.subscription_tier == "starter":
            await ctx.send(
                "⚠️ Extended timeouts (>28 days) require Pro or Enterprise.\n"
                "Upgrade at https://nervous.net/bots/bouncer/pricing"
            )
            return

    # ... rest of command
```

### 3.3 Caching (Important for Performance)

Don't call the API on every command. Cache authorization:

```python
# Cache authorization for 5 minutes
authorization_cache = TTLCache(maxsize=1000, ttl=300)

async def check_authorization(ctx):
    cache_key = f"{ctx.guild.id}:{bot_name}"

    if cache_key in authorization_cache:
        cached = authorization_cache[cache_key]
        ctx.subscription_tier = cached["tier"]
        return cached["authorized"]

    # ... fetch from API and cache result
```

### 3.4 Grace Period for Payment Failures

Don't immediately cut off access:

```python
if response["authorized"] == False and response["reason"] == "past_due":
    # Allow 3-day grace period
    if response.get("past_due_since"):
        days_overdue = (now - response["past_due_since"]).days
        if days_overdue <= 3:
            # Still allow access, but warn
            await ctx.send(
                "⚠️ Your subscription payment failed. "
                "Please update your payment method to avoid interruption."
            )
            return True

    # Past grace period
    await ctx.send("⚠️ Subscription inactive due to payment failure.")
    return False
```

---

## Part 4: Customer Self-Service

### 4.1 Stripe Customer Portal

Enable Customer Portal in Stripe for:
- Updating payment method
- Viewing invoices
- Canceling subscription

Link from website: `https://billing.stripe.com/p/login/xxx`

### 4.2 Server Transfer

Allow customers to move their subscription to a different server:

**Option A: Customer Portal custom field update**
- Stripe supports this in portal settings

**Option B: Discord command**
```
/transfer-license NEW_SERVER_ID
```
- Requires customer to be admin of both servers
- Updates subscription record via API
- Clears authorization cache for old server

### 4.3 Bot Commands for Subscription Info

```
/subscription
→ "This server has Bouncer Pro. Renews on Jan 15, 2025."
→ "Manage your subscription: https://billing.nervous.net"
```

---

## Part 5: Website Integration

### 5.1 Update Payment Links

Replace mock URLs in pricing.md files with real Stripe Payment Links:

```yaml
tiers:
  - name: "Starter"
    price: "$5"
    checkoutUrl: "https://buy.stripe.com/live_xxxxxx"
```

### 5.2 Add Help Content

Create `/faq/server-id/` page explaining:
- How to enable Developer Mode in Discord
- How to copy Server ID
- What happens if they enter wrong ID
- How to transfer to different server

---

## Part 6: Launch Checklist

### Stripe Setup
- [ ] Create all products and prices
- [ ] Create payment links with custom fields
- [ ] Set up webhook endpoint
- [ ] Test in Stripe test mode
- [ ] Enable Customer Portal

### Backend
- [ ] Deploy webhook handler
- [ ] Deploy authorization API
- [ ] Set up database tables
- [ ] Test full purchase flow

### Bots
- [ ] Add authorization middleware to each bot
- [ ] Add feature gating by tier
- [ ] Add caching
- [ ] Add /subscription info command
- [ ] Test with test subscriptions

### Website
- [ ] Replace mock checkout URLs with real ones
- [ ] Add Server ID help page
- [ ] Add link to Customer Portal

### Go Live
- [ ] Switch Stripe to live mode
- [ ] Update webhook URL to production
- [ ] Update payment links to live versions
- [ ] Monitor first few purchases

---

## Support Scenarios

### "I entered the wrong Server ID"
→ Direct to Customer Portal to update, or handle via support ticket

### "I want to move to a different server"
→ Customer Portal or /transfer-license command

### "Bot stopped working"
→ Check subscription status, payment failures, server ID match

### "I canceled but bot still works"
→ Cache TTL - will expire within 5 minutes

---

## Future Enhancements

- **Multi-server licenses**: Enterprise tier could allow 3-5 servers
- **Team/org accounts**: One billing account, multiple servers
- **Annual discounts**: 2 months free with annual billing
- **Bundle checkout**: Single payment link for multiple bots
