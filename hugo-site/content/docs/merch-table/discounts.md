---
title: "Role-Based Discounts"
weight: 3
description: "Create automatic discounts for Discord role holders."
---

Merch Table lets you create automatic discounts that apply to customers based on their Discord roles. VIP members, subscribers, and other role holders get discounts automatically at checkout.

## How It Works

1. Discord roles sync as customer tags (e.g., `discord_vip`)
2. You create discounts targeting specific tags
3. Customers with matching tags see discounts applied automatically

---

## Setting Up Discounts

### Step 1: Ensure Roles Are Syncing

Before creating discounts, verify the Discord roles you want to target are enabled:

1. Go to the **Discord Roles** tab in your Shopify app
2. Confirm the relevant roles are toggled **ON**
3. Save your configuration

### Step 2: Create a Discount

1. Go to the **Discounts** tab in your Shopify app
2. Click **+ Add Discount**
3. Select a Discord role tag (e.g., `discord_vip`)
4. Choose the discount type:
   - **Percentage** - e.g., 15% off
   - **Fixed amount** - e.g., $10 off
5. Click **Create Discount**

The discount is now active and applies automatically at checkout.

---

## Discount Examples

| Role | Tag | Discount |
|------|-----|----------|
| VIP | `discord_vip` | 20% off everything |
| Subscriber | `discord_subscriber` | 15% off everything |
| Member | `discord_member` | 10% off first order |

---

## How Customers Get Discounts

Customers don't need to enter a code. The process is automatic:

1. Customer links their Discord account via `/link_shopify`
2. Their Discord roles sync as Shopify customer tags
3. At checkout, discounts matching their tags apply automatically

---

## Managing Discounts

### View Active Discounts

The **Discounts** tab shows all role-based discounts you've created, including:
- Target role/tag
- Discount amount
- Usage count

### Edit a Discount

Click on any discount to modify:
- Discount percentage/amount
- Minimum purchase requirements
- Product restrictions

### Delete a Discount

Click the delete icon next to any discount to remove it. This takes effect immediately.

---

## Tips

### Stacking Discounts

If a customer has multiple roles with discounts, Shopify's standard discount stacking rules apply. Consider this when setting up multiple role discounts.

### Role Hierarchy

Create tiered discounts that reward higher engagement:

| Role | Discount |
|------|----------|
| New Member | 5% off |
| Active Member | 10% off |
| VIP | 20% off |

### Testing

1. Link your own Discord account
2. Assign yourself the target role
3. Run `/shopify_status` to verify the tag synced
4. Add items to cart and check that the discount applies
