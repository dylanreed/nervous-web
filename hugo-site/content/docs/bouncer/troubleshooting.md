---
title: "Troubleshooting"
weight: 4
description: "Solutions to common Bouncer issues."
---

Having trouble with Bouncer? This guide covers the most common issues and their solutions.

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

Some channels may have permission overrides that prevent the bot from responding.

---

## "Missing Permissions" Errors

### Check role hierarchy

The bot's role must be **higher** in the role list than any roles it needs to interact with. Go to Server Settings → Roles and drag the bot's role higher.

### Check channel overrides

Individual channels can override server permissions. Check the channel's permission settings to ensure the bot isn't blocked.

### Re-invite with correct permissions

If permissions are missing, contact us for a fresh invite link with all required permissions.

---

## Cannot Timeout or Quarantine Users

### Target has higher role

You can only moderate users whose highest role is below your highest role.

### Bot role too low

Move the bot's role above the target user's highest role in Server Settings → Roles.

### Target is server owner

The server owner cannot be moderated by anyone, including bots.

---

## Quarantine Not Working

### Quarantine role not configured

Run `/config view` to check if a quarantine role is set. If not:

```
/config quarantine-role role:@Quarantined
```

### Quarantine role too high

The quarantine role must be positioned below the bot's role in the hierarchy.

### Roles not being restored

If original roles aren't restored after unquarantine, check that:
- The bot's role is above the roles being restored
- The roles still exist (weren't deleted)

---

## Logs Not Being Posted

### Log channel not configured

Run `/config view` to verify a log channel is set. If not:

```
/config log-channel channel:#mod-logs
```

### Log channel permissions

The bot needs these permissions in your log channel:

- View Channel
- Send Messages
- Embed Links

### Log channel deleted

If your log channel was deleted, logs have nowhere to go. Configure a new log channel.

---

## Commands Not Appearing

### Missing permission

Commands only appear to users who have the required Discord permission. Check that you have the correct permission for the command you're trying to use.

### Wait for propagation

Slash commands can take up to an hour to appear after the bot joins.

### Try typing the command

Start typing `/timeout` in the message box. Discord should show matching commands as you type.

---

## Message Wipe Issues

### Messages older than 14 days

Discord only allows deleting messages less than 14 days old. Older messages cannot be bulk deleted.

### Missing permissions

The bot needs "Manage Messages" permission in the channel you're trying to wipe.

### Channel permission overrides

Check that the channel doesn't have permission overrides blocking the bot.

---

## Bulk Role Operations Failing

### Bot role too low

The bot can only manage roles that are lower than its highest role. Move the bot's role higher in the hierarchy.

### Missing Manage Roles permission

Verify the bot has the "Manage Roles" permission.

### Rollback expired

Bulk role rollbacks are only available for 24 hours after the operation.

---

## Getting More Help

If these solutions don't resolve your issue:

1. **Check our FAQ** at [/faq/](/faq/) for more answers
2. **Contact support** through our [contact page](https://calendly.com/nervous/intro)
3. **Provide details** including:
   - What you were trying to do
   - What happened instead
   - Any error messages you saw
   - Your server ID (for debugging)
