---
title: "Commands"
weight: 2
description: "Discord commands for Merch Table."
---

Merch Table uses Discord slash commands. All commands start with `/`.

## User Commands

These commands are available to all members in your Discord server.

### /link_shopify

Link your Discord account to your Shopify customer account.

**Process:**
1. Run `/link_shopify`
2. Enter your email address (must match your Shopify account)
3. Click the verification link sent to your email
4. Log into Shopify to complete the link

Once linked, your Discord roles sync automatically as Shopify customer tags.

---

### /unlink_shopify

Remove the link between your Discord and Shopify accounts.

After unlinking:
- Your Discord role tags are removed from your Shopify account
- You'll need to link again to restore the connection

---

### /shopify_status

Check your current link status and synced roles.

**Shows:**
- Whether your account is linked
- Which Discord roles are synced to Shopify
- Your Shopify customer email (if linked)

Use this to verify your roles synced correctly after linking.

---

## Admin Commands

These commands require **Administrator** or **Manage Server** permission in Discord.

### /connect

Connect your Discord server to your Shopify store.

**Usage:**
```
/connect
```

When prompted, enter the connection code from your Shopify app dashboard.

This is a one-time setup step. After connecting, the dashboard shows your server's status.

---

### /shopify_info

View connection information for your server.

**Shows:**
- Connected Shopify store name
- Store URL
- Connection status
- Number of linked members

Use this to verify your server is properly connected.

---

## Permission Requirements

| Command | Who Can Use |
|---------|-------------|
| `/link_shopify` | Any member |
| `/unlink_shopify` | Any member |
| `/shopify_status` | Any member |
| `/connect` | Server administrators |
| `/shopify_info` | Server administrators |
