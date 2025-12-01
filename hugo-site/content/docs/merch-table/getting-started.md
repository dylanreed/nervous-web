---
title: "Getting Started"
weight: 1
description: "Connect your Discord server to your Shopify store."
---

Merch Table connects your Discord community to your Shopify store, letting you offer exclusive perks to your members. Setup takes about 10 minutes.

## What You Can Do

- **Sync Discord roles** as Shopify customer tags
- **Create automatic discounts** for specific Discord roles
- **Restrict VIP products** to customers with certain Discord roles

## Prerequisites

Before starting, you'll need:

- A **Shopify store** with admin access
- A **Discord server** where you have Administrator permissions
- Your community members will need Shopify accounts with matching email addresses

---

## Step 1: Install the App

1. Install Merch Table from the Shopify App Store
2. After installation, you'll see the app dashboard

---

## Step 2: Connect Your Discord Server

### Invite the Discord Bot

1. On the Dashboard tab, click the "Invite Discord Bot" link
2. Select your Discord server and authorize the bot

### Connect the Server

1. Copy the **Connection Code** shown on the dashboard
2. In your Discord server, run:

```
/connect
```

3. Enter the connection code when prompted
4. Wait a few seconds - the dashboard will show "Connected"

---

## Step 3: Configure Discord Roles

1. Go to the **Discord Roles** tab in your Shopify app
2. Toggle **ON** the roles you want to sync (e.g., VIP, Member, Subscriber)
3. Toggle **OFF** admin/moderator roles you don't want synced
4. Click **Save Configuration**

When customers link their accounts, these roles become Shopify customer tags (e.g., `discord_vip`).

---

## Step 4: Have Customers Link Accounts

Your community members link their Discord to Shopify by:

1. Running `/link_shopify` in your Discord server
2. Entering their email address in the popup (must match their Shopify account)
3. Clicking Submit to complete the link

Their Discord roles are now synced as Shopify customer tags!

---

## Quick Test

Verify everything is working:

1. Run `/shopify_info` to confirm connection
2. Have a test user run `/link_shopify` and complete the flow
3. Check Shopify Admin → Customers to see their Discord role tags

---

## Next Steps

- Set up [Role-Based Discounts](/docs/merch-table/discounts/) for your members
- Create [VIP Products](/docs/merch-table/vip-products/) exclusive to certain roles
- Review all [Commands](/docs/merch-table/commands/) available
