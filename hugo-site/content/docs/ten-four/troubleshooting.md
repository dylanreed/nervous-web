---
title: "Troubleshooting"
weight: 6
description: "Solutions to common Ten-Four issues."
---

Having trouble with Ten-Four? This guide covers the most common issues and their solutions.

## Bot Doesn't Respond to Commands

### Check if the bot is online

Look for the bot in your server's member list. If it shows as offline (gray dot), the bot may be experiencing downtime.

### Verify permissions

Make sure the bot has these permissions in your server:

- View Channels
- Send Messages
- Use Application Commands

### Wait for command propagation

Discord can take up to an hour to propagate slash commands to all servers. If you just added the bot, wait and try again.

### Try in a different channel

Some channels may have permission overrides that prevent the bot from responding. Try the command in a different channel.

## "Missing Permissions" Errors

### Re-invite with correct permissions

The bot needs specific permissions to function. Contact us for a fresh invite link with all required permissions.

### Check role hierarchy

The bot's role must be **higher** in the role list than any roles it needs to interact with. Go to Server Settings → Roles and drag the bot's role higher.

### Check channel overrides

Individual channels can override server permissions. Check the channel's permission settings to ensure the bot isn't blocked.

## Tickets Not Being Created

### Check panel channel permissions

The bot needs these permissions in the panel channel:

- View Channel
- Send Messages
- Embed Links

### Verify setup completed

Run `/ping` to check if the bot is responding. If it is, run `/setup_ten_four` to reconfigure.

### Check for error messages

The bot may be posting error messages that explain the issue. Check your server's system messages channel.

## Transcripts Not Generating

### Check log channel permissions

The bot needs these permissions in your log channel:

- View Channel
- Send Messages
- Attach Files
- Embed Links

### Verify log channel exists

If your log channel was deleted, transcripts have nowhere to go. Run setup again to select a new log channel.

### Check message history permission

The bot needs "Read Message History" permission in ticket channels to generate transcripts.

## Commands Not Appearing

### Wait for propagation

Slash commands can take up to an hour to appear after the bot joins. Wait and try again.

### Try typing the command

Start typing `/setup` in the message box. Discord should show matching commands as you type.

### Check bot permissions

The bot needs "Use Application Commands" permission. This is usually included by default, but verify in your server settings.

## Reminders Not Sending

### Check reminder configuration

Reminders may be disabled or set to a very long threshold. Run setup again to verify settings.

### Verify bot uptime

If the bot was offline, it may have missed reminder checks. Reminders will resume when the bot is back online.

### Check for activity

Remember that any message in a ticket resets the inactivity timer. The ticket may be more active than you think.

## Getting More Help

If these solutions don't resolve your issue:

1. **Check our FAQ** at [/faq/](/faq/) for more answers
2. **Contact support** through our [contact page](https://calendly.com/nervous/intro)
3. **Provide details** including:
   - What you were trying to do
   - What happened instead
   - Any error messages you saw
   - Your server ID (for debugging)
