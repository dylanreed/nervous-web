---
title: "Troubleshooting"
weight: 5
description: "Solutions to common Merch Table issues."
---

Having trouble with Merch Table? This guide covers the most common issues and their solutions.

## Bot Not Responding to Commands

### Check if the bot is online

Look for the bot in your server's member list. If it shows as offline, the bot may be experiencing downtime.

### Verify the server is connected

Run `/shopify_info` to check if your Discord server is connected to your Shopify store. If not connected, you'll need to run `/connect` with your connection code.

### Check bot permissions

The bot needs these permissions:
- View Channels
- Send Messages
- Use Application Commands

---

## Connection Issues

### Connection code not working

Connection codes expire after 10 minutes. Get a fresh code from your Shopify app dashboard.

### Dashboard doesn't show "Connected"

1. Verify you entered the correct connection code
2. Wait a few seconds and refresh the dashboard
3. Try disconnecting and reconnecting

---

## Roles Not Syncing

### Role not appearing as a Shopify tag

1. Check that the role is toggled **ON** in the Discord Roles tab
2. Have the customer run `/shopify_status` to trigger a sync
3. Verify the customer's account is linked

### Customer doesn't have the tag

1. Confirm they completed the `/link_shopify` process
2. Check they verified their email
3. Ensure they logged into Shopify to complete linking

### Role was removed but tag remains

Role removal syncs automatically, but can take a few minutes. If the tag persists, have the customer run `/shopify_status` to force a sync.

---

## Account Linking Problems

### "Email not found" error

The customer's email must match an existing Shopify customer account. They need to:
1. Create a Shopify account with the same email
2. Or use the email already on their Shopify account

### Verification email not received

1. Check spam/junk folders
2. Verify they entered the correct email address
3. Try the linking process again

### Link expired

Verification links expire after 10 minutes. Have the customer run `/link_shopify` again to get a fresh link.

---

## Discount Issues

### Discount not applying at checkout

1. Verify the customer's account is linked
2. Check they have the required Discord role
3. Confirm the role is enabled in the Discord Roles tab
4. Have them run `/shopify_status` to verify their tags

### Wrong discount amount

Check the discount configuration in the Discounts tab to verify the amount is set correctly.

---

## VIP Page Problems

### VIP page not loading

1. Verify App Proxy is configured correctly in Partner Dashboard
2. Check the proxy URL is exactly: `https://discord-shopify-web.fly.dev/proxy`
3. Confirm the subpath settings are correct

### VIP page shows "access denied"

The customer either:
- Hasn't linked their Discord account
- Doesn't have the required Discord role
- Has a role that isn't synced (check Discord Roles tab)

### Products not appearing on VIP page

1. Verify the product was added in the Product Visibility tab
2. Check the customer has the required role
3. Confirm the role is toggled ON in Discord Roles

---

## Cart Validation Issues

### Validation not blocking purchases

1. Verify Cart Validation is enabled in Theme Customizer
2. Check it's toggled ON in App embeds
3. Save and refresh your store

### Customers seeing errors incorrectly

If customers with valid roles see errors:
1. Have them run `/shopify_status` to refresh their tags
2. Check the product's role requirements

---

## Getting More Help

If these solutions don't resolve your issue:

1. **Check our FAQ** at [/faq/](/faq/) for more answers
2. **Contact support** through our [contact page](https://calendly.com/nervous/intro)
3. **Provide details** including:
   - What you were trying to do
   - What happened instead
   - Any error messages
   - Your Discord server ID and Shopify store URL
