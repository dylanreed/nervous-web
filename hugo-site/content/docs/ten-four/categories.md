---
title: "Multiple Categories"
weight: 3
description: "Route different ticket types to different support teams."
---

10-4 supports multiple ticket categories, allowing you to route different types of requests to different teams.

## How Categories Work

Instead of a single "Create Ticket" button, your panel can show multiple buttons:

- 🛠️ **Technical Support** → Routes to your dev team
- 💳 **Billing Questions** → Routes to your billing team
- 💬 **General Questions** → Routes to community managers

Each category can have its own:

- **Name and emoji** for the button
- **Support role** who can see tickets in that category
- **Description** to help users choose the right category

## Setting Up Categories

During the setup wizard, you can add multiple categories:

1. Run `/setup_ten_four`
2. Complete the initial setup (panel, default role, log channel)
3. Click "Add Category" to create additional categories
4. For each category, select:
   - Category name
   - Emoji (appears on the button)
   - Support role for that category

## Category Permissions

When a user creates a ticket in a specific category:

- Only the support role for **that category** can see the ticket
- The ticket creator can always see their ticket
- Users with multiple support roles can see tickets from all their categories

## Example Setup

A gaming community might set up:

| Category | Emoji | Support Role | Use Case |
|----------|-------|--------------|----------|
| Bug Reports | 🐛 | @QA Team | Game bugs and glitches |
| Account Issues | 👤 | @Support | Login problems, bans |
| Billing | 💳 | @Billing | Purchase issues, refunds |
| General | 💬 | @Moderators | Everything else |

## Best Practices

### Keep it Simple

Don't create too many categories. 3-5 is usually ideal. Too many options can confuse users.

### Use Clear Names

Category names should be obvious. Users should immediately know which to pick.

### Match Your Team Structure

Categories work best when they align with your actual team structure. If you have specialized teams, create categories for them.

### Have a Catch-All

Include a "General" or "Other" category for requests that don't fit elsewhere.
