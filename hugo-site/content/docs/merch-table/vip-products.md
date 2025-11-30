---
title: "VIP Products"
weight: 4
description: "Create exclusive products visible only to specific Discord roles."
---

Merch Table lets you restrict product visibility based on Discord roles. Create VIP-only products, early access items, or exclusive merch that only certain community members can see and purchase.

## How It Works

1. You mark products as VIP and select which roles can access them
2. Products are added to a "VIP Exclusives" collection
3. Customers access the VIP section via a special URL
4. Only customers with the required Discord roles can view and purchase

---

## Setting Up VIP Products

### Step 1: Configure the App Proxy

This is a one-time setup in the Shopify Partner Dashboard:

1. Go to [partners.shopify.com](https://partners.shopify.com)
2. Open your app's settings
3. Add an App Proxy with these settings:
   - **Subpath prefix:** `apps`
   - **Subpath:** `merch-table`
   - **Proxy URL:** `https://discord-shopify-web.fly.dev/proxy`

### Step 2: Configure VIP Settings

1. Go to the **Product Visibility** tab in your Shopify app
2. Fill in your settings:
   - **Discord Invite URL** - For customers who need to join your Discord
   - **Page Title** - e.g., "VIP Exclusives"
   - **Description** - Explain what the VIP section offers
3. Click **Save Settings**

### Step 3: Add VIP Products

1. Click **+ Add Product**
2. Select a product from your catalog
3. Choose which Discord roles can see this product
4. The product is automatically added to a "VIP Exclusives" collection

### Step 4: Link to Your VIP Section

Add the VIP page to your store's navigation:

```
https://yourstore.com/apps/merch-table/vip
```

---

## Customer Experience

### Linked Customers

Customers with linked accounts and the required roles:
1. Visit the VIP page
2. See all products they have access to
3. Add items to cart and checkout normally

### Unlinked Customers

Customers without linked accounts see:
1. A message explaining the VIP section
2. Instructions to link their Discord account
3. A link to your Discord server

---

## Cart Validation (Optional)

Prevent customers from purchasing VIP products they shouldn't have access to:

### Enable Cart Validation

1. In Shopify admin, go to **Online Store → Themes → Customize**
2. Click **App embeds** in the left sidebar
3. Find "Cart Validation" and toggle it **ON**
4. Click **Save**

### What It Does

If a customer without the required Discord role tries to add a VIP product to their cart, they'll see a friendly error message explaining they need the specific role to purchase.

This prevents workarounds like sharing direct product links.

---

## Managing VIP Products

### View VIP Products

The **Product Visibility** tab shows all VIP products and their required roles.

### Change Role Requirements

Click on any product to modify which roles can access it.

### Remove VIP Status

Click the remove icon to make a product visible to everyone again.

---

## Tips

### Exclusive Drops

Use VIP products for:
- Early access to new releases
- Limited edition items
- Member-only merchandise
- Subscriber rewards

### Multiple Tiers

Create different access levels:

| Product Type | Required Role |
|--------------|---------------|
| Early Access | `discord_member` |
| Exclusive Merch | `discord_vip` |
| Ultra Limited | `discord_founder` |

### Promotion

Announce VIP products in your Discord to drive engagement and reward loyal members.
