  Merch Table Setup Guide

  Overview

  Merch Table connects your Discord server to your Shopify store, allowing you to:
  - Sync Discord roles as Shopify customer tags
  - Create automatic discounts for specific Discord roles
  - Restrict VIP products to customers with certain Discord roles

  ---
  Step 1: Install the App

  1. Install Merch Table from the Shopify App Store
  2. After installation, you'll see the app dashboard

  ---
  Step 2: Connect Your Discord Server

  1. Invite the Discord Bot
    - On the Dashboard tab, click the "Invite Discord Bot" link
    - Select your Discord server and authorize the bot
  2. Connect the Server
    - Copy the Connection Code shown on the dashboard
    - In your Discord server, type /connect
    - Enter the connection code when prompted
    - Wait a few seconds - the dashboard will show "Connected"

  ---
  Step 3: Configure Discord Roles

  1. Go to the Discord Roles tab
  2. Toggle ON the roles you want to sync to Shopify (e.g., VIP, Member, Subscriber)
  3. Toggle OFF admin/moderator roles you don't want synced
  4. Click Save Configuration

  When customers link their accounts, these roles become Shopify customer tags (e.g., discord_vip)

  ---
  Step 4: Customers Link Their Accounts

  Your community members link their Discord to Shopify by:

  1. Running /link_shopify in your Discord server
  2. Entering their email address (must match their Shopify account)
  3. Clicking the verification link sent to their email
  4. Logging into Shopify to complete the link

  Their Discord roles are now synced as Shopify customer tags!

  ---
  Step 5: Set Up Role-Based Discounts (Optional)

  1. Go to the Discounts tab
  2. Click + Add Discount
  3. Select a Discord role tag (e.g., discord_vip)
  4. Set the discount type (percentage or fixed amount)
  5. Click Create Discount

  Customers with that role automatically get the discount at checkout!

  ---
  Step 6: Set Up VIP Products (Optional)

  Create an exclusive section for Discord members:

  A. Configure App Proxy (One-time setup)
  1. Go to your https://partners.shopify.com
  2. Open your app's settings
  3. Add an App Proxy with these settings:
    - Subpath prefix: apps
    - Subpath: merch-table
    - Proxy URL: https://discord-shopify-web.fly.dev/proxy

  B. Configure VIP Settings
  1. Go to the Product Visibility tab
  2. Fill in your Discord invite URL, page title, and description
  3. Click Save Settings

  C. Add VIP Products
  1. Click + Add Product
  2. Select a product and choose which Discord roles can see it
  3. Products are automatically added to a "VIP Exclusives" collection

  D. Link to Your VIP Section
  - Add this URL to your store's navigation: https://yourstore.com/apps/merch-table/vip

  ---
  Step 7: Enable Cart Validation (Optional)

  Prevent customers without required roles from purchasing VIP products:

  1. In Shopify admin, go to Online Store → Themes → Customize
  2. In the Theme Customizer, click App embeds (left sidebar)
  3. Find "Cart Validation" and toggle it ON
  4. Click Save

  Customers without the required Discord role will see a friendly error message when trying to add VIP
  products to cart.

  ---
  Discord Commands Reference

  | Command         | Description                                      |
  |-----------------|--------------------------------------------------|
  | /connect        | Connect Discord server to Shopify (Admin only)   |
  | /link_shopify   | Link Discord account to Shopify customer account |
  | /unlink_shopify | Unlink Discord account from Shopify              |
  | /shopify_status | Check link status and synced roles               |
  | /shopify_info   | View connected store info (Admin only)           |

  ---
  Troubleshooting

  Bot not responding to commands?
  - Make sure the bot has been invited and has proper permissions
  - Try /shopify_info to verify the server is connected

  Customer's roles not syncing?
  - Check that the role is toggled ON in the Discord Roles tab
  - Have the customer run /shopify_status to trigger a sync

  VIP page not loading?
  - Verify App Proxy is configured correctly in Partner Dashboard
  - The proxy URL must be exactly https://discord-shopify-web.fly.dev/proxy

  ---
  Would you like me to add this as a new tab in the dashboard, or is this text format what you needed?
