---
title: "merch table"
slug: "merchtable"
weight: 1
tagline: "Turn your community into customers."
subtitle: "Connect your community to your Shopify store."
intro: "Merch Table lets you offer exclusive products to members based on their Discord roles — Server Boosters, Patreon supporters, or any custom role you create. Perfect for creators, gaming communities, and anyone who wants to reward their most engaged Discord members with exclusive merch."
image: "norris-builder.webp"
imageAlt: "merch table illustration"
price: "Starting at $29.99/month"
ctaText: "Get merch table"
docsSlug: "merch-table"
features:
  - "Role-based product access — restrict products to specific Discord roles"
  - "Automatic sync — customer tags update when roles change"
  - "Cart validation — prevents unauthorized purchases at checkout"
  - "Simple linking — members connect accounts with <code>/link_shopify</code>"
  - "Admin dashboard — manage visibility rules and monitor linked accounts"
useCases:
  - "Server Boosters — Exclusive merch for members who boost your server"
  - "Patreon Supporters — Sync Patreon roles to unlock special products"
  - "VIP Members — Reward your most active community members"
  - "Early Access — Let specific roles purchase new drops first"
  - "Limited Editions — Restrict rare items to long-time members"

problem:
  intro: "Running exclusive merch for your Discord community is a hassle:"
  points:
    - "No way to verify Discord roles on your Shopify store"
    - "Manual verification doesn't scale"
    - "Exclusive products get shared with non-members"
    - "Role changes don't sync to store access"
    - "No connection between your community and commerce"

solution:
  intro: "Merch Table bridges your Discord server and Shopify store. Members link their accounts once, and their Discord roles automatically control what they can purchase."
  sections:
    - title: "Role-Based Product Access"
      text: "Restrict any product to specific Discord roles. Only members with the right roles can see and purchase exclusive items."
    - title: "Automatic Sync"
      text: "When a member gains or loses a role in Discord, their Shopify customer tags update automatically. No manual intervention required."
    - title: "Cart Validation"
      text: "Even if someone finds a direct link to a restricted product, Merch Table validates their roles at checkout. No unauthorized purchases slip through."
    - title: "Simple Account Linking"
      text: "Members connect their Discord and Shopify accounts with a single slash command: <code>/link_shopify</code>. The bot handles the OAuth flow and links the accounts securely."
    - title: "Admin Dashboard"
      text: "Manage visibility rules, monitor linked accounts, and troubleshoot issues from a clean admin interface."

commands:
  - category: "Member Commands"
    items:
      - "/link_shopify"
      - "/unlink_shopify"
      - "/shopify_status"
  - category: "Admin Commands"
    items:
      - "/merchtable config"
      - "/merchtable rules add"
      - "/merchtable rules remove"
      - "/merchtable rules list"
  - category: "Troubleshooting"
    items:
      - "/merchtable lookup"
      - "/merchtable sync"

builtRight:
  - "<strong>Secure OAuth</strong> — Industry-standard authentication for both Discord and Shopify"
  - "<strong>Real-time sync</strong> — Role changes reflect immediately"
  - "<strong>Shopify native</strong> — Works with your existing store setup"
  - "<strong>Privacy-focused</strong> — Only stores the minimum data needed"

bestFor:
  - "Server Boosters — Exclusive merch for members who boost your server"
  - "Patreon Supporters — Sync Patreon roles to unlock special products"
  - "VIP Members — Reward your most active community members"
  - "Early Access — Let specific roles purchase new drops first"
  - "Limited Editions — Restrict rare items to long-time members"

getStarted:
  intro: "Set up Merch Table in minutes:"
  steps:
    - "Install Merch Table on your Shopify store"
    - "Connect your Discord server"
    - "Set up visibility rules (which roles can see which products)"
    - "Members link their accounts with <code>/link_shopify</code> in Discord"
    - "Linked members with the right roles can purchase exclusive products"
---
