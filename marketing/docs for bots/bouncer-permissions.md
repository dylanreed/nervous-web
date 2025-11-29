# Bouncer Bot Permissions Guide

This guide explains the Discord permissions required to use Bouncer Bot commands and how to set up roles for your moderation team.

---

## Quick Reference

| Permission Level | Commands Available |
|-----------------|-------------------|
| **Moderate Members** | `/timeout`, `/untimeout`, `/timeouts`, `/quarantine`, `/unquarantine`, `/quarantine-list`, `/warn`, `/modhistory`, `/watchlist`, `/modreport` |
| **Manage Messages** | `/wipe` |
| **Ban Members** | `/preban` |
| **Manage Roles** | `/bulkrole` |
| **Manage Server** | `/config`, `/rules`, `/reverse`, `/leaveralert` |

---

## Detailed Permission Breakdown

### Moderate Members
**Discord Permission:** `MODERATE_MEMBERS`

This is the primary permission for most moderation tasks.

**Grants access to:**
- `/timeout` - Apply timeouts to users
- `/untimeout` - Remove timeouts
- `/timeouts` - View active timeouts
- `/quarantine` - Quarantine users
- `/unquarantine` - Release quarantined users
- `/quarantine-list` - View quarantined users
- `/warn` - Issue warnings
- `/modhistory` - View user moderation history
- `/watchlist` - Manage the watchlist
- `/modreport` - Generate moderation reports

---

### Manage Messages
**Discord Permission:** `MANAGE_MESSAGES`

Required for message management operations.

**Grants access to:**
- `/wipe` - Delete messages from users

---

### Ban Members
**Discord Permission:** `BAN_MEMBERS`

Required for ban-related operations.

**Grants access to:**
- `/preban` - Preemptively ban user IDs

---

### Manage Roles
**Discord Permission:** `MANAGE_ROLES`

Required for bulk role operations.

**Grants access to:**
- `/bulkrole add` - Add roles in bulk
- `/bulkrole remove` - Remove roles in bulk
- `/bulkrole rollback` - Undo bulk operations
- `/bulkrole history` - View operation history

**Note:** The bot can only manage roles that are lower in the hierarchy than the bot's highest role.

---

### Manage Server
**Discord Permission:** `MANAGE_GUILD`

Required for server configuration and administrative commands.

**Grants access to:**
- `/config` - Configure bot settings
- `/rules` - Manage server rules
- `/reverse` - Reverse moderation actions
- `/leaveralert` - Configure leaver alerts

---

## Recommended Role Setup

### Option 1: Single Moderator Role

Create one role with all necessary permissions:

**Role: Moderator**
```
✅ Moderate Members
✅ Manage Messages
✅ Ban Members
✅ Manage Roles
✅ Manage Server
```

This gives full access to all Bouncer Bot commands.

---

### Option 2: Tiered Moderation Team

For larger servers, split permissions across multiple roles:

**Role: Junior Moderator**
```
✅ Moderate Members
```
*Can:* Timeout users, warn users, quarantine users, view history

**Role: Senior Moderator**
```
✅ Moderate Members
✅ Manage Messages
✅ Ban Members
```
*Additional:* Wipe messages, preban users

**Role: Admin**
```
✅ Moderate Members
✅ Manage Messages
✅ Ban Members
✅ Manage Roles
✅ Manage Server
```
*Additional:* Configure bot, manage rules, bulk role operations, reverse actions

---

## Bot Permission Requirements

The bot itself needs these permissions to function. Ensure the bot's role has:

### Required Permissions
| Permission | Purpose |
|-----------|---------|
| **Moderate Members** | Apply/remove timeouts |
| **Manage Roles** | Quarantine system, bulk role operations |
| **Ban Members** | Preban functionality |
| **Manage Messages** | Message wiping |
| **Send Messages** | Respond to commands |
| **Embed Links** | Display rich embeds |
| **Read Message History** | Message wiping with date filters |

### Role Hierarchy

**Important:** The bot's role must be positioned **above** any roles it needs to manage.

```
Server Owner
  ↓
Admin (your admins)
  ↓
Bouncer Bot  ← Bot role here
  ↓
Moderator
  ↓
Quarantined  ← Must be below bot
  ↓
Members
  ↓
@everyone
```

If the bot's role is below a user's highest role, it cannot:
- Timeout that user
- Quarantine that user
- Manage their roles

---

## Setting Up the Quarantine Role

1. Create a role called "Quarantined" (or similar)
2. Position it **below** the bot's role
3. Configure channel permissions:
   - Deny `View Channel` for most channels
   - Allow `View Channel` only for a quarantine/appeals channel
4. Run `/config quarantine-role role:@Quarantined`

---

## Troubleshooting

### "Permission Denied" Errors

**Problem:** Bot says you can't moderate a user

**Solutions:**
- Ensure your role has the required Discord permission
- Check that your role is higher than the target user's highest role
- Verify the bot's role is higher than the target user's role

### Bot Can't Assign Roles

**Problem:** Quarantine or bulk role operations fail

**Solutions:**
- Move the bot's role higher in the role hierarchy
- Ensure the target roles are below the bot's role
- Check that the bot has `Manage Roles` permission

### Commands Not Appearing

**Problem:** Slash commands don't show up

**Solutions:**
- Wait up to 1 hour for global command propagation
- Re-invite the bot with the `applications.commands` scope
- Ensure you have the required permission to see the command

---

## Invite Link Permissions

When inviting the bot, use an invite link with these scopes and permissions:

**Scopes:**
- `bot`
- `applications.commands`

**Bot Permissions:**
- Manage Roles
- Kick Members
- Ban Members
- Moderate Members
- Manage Messages
- Read Message History
- Send Messages
- Embed Links

**Permission Integer:** `1376537225286`

You can generate an invite link at:
`https://discord.com/developers/applications/[YOUR_CLIENT_ID]/oauth2`
