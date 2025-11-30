---
title: "Permissions"
weight: 3
description: "Permission requirements and role hierarchy for Bouncer."
---

This guide explains the Discord permissions required to use Bouncer commands and how to set up roles for your moderation team.

## Quick Reference

| Permission | Commands |
|------------|----------|
| **Moderate Members** | `/timeout`, `/untimeout`, `/timeouts-list`, `/quarantine`, `/unquarantine`, `/quarantine-list`, `/warn`, `/modhistory`, `/watchlist` |
| **Manage Messages** | `/wipe` |
| **Ban Members** | `/preban` |
| **Manage Roles** | `/bulkrole` |
| **Manage Server** | `/config`, `/rules`, `/reverse`, `/leaveralert`, `/modreport` |

---

## Role Hierarchy

Bouncer enforces Discord's role hierarchy for all moderation actions.

### Who Can Moderate Whom

1. **Server Owner** - Can moderate anyone
2. **Administrator** - Can moderate anyone except the owner
3. **Moderator** - Can moderate users with roles lower than their highest role

### Example Setup

```
Server Owner         → Cannot be moderated
Administrator        → Can moderate everyone below
Senior Moderator     → Can moderate users below this role
Bouncer Bot          → Place here or higher
Junior Moderator     → Can moderate regular members
Quarantined          → Place below bot
Members              → Can be moderated
@everyone            → Base level
```

**Important:** The bot's role must be positioned **above** any roles it needs to manage.

---

## Recommended Role Configurations

### Single Moderator Role

For smaller servers, create one role with all permissions:

**Role: Moderator**
- Moderate Members
- Manage Messages
- Ban Members
- Manage Roles
- Manage Server

This gives full access to all Bouncer commands.

### Tiered Moderation Team

For larger servers, split permissions across roles:

**Junior Moderator**
- Moderate Members

*Can:* Timeout users, warn users, quarantine users, view history

**Senior Moderator**
- Moderate Members
- Manage Messages
- Ban Members

*Additional:* Wipe messages, preban users

**Admin**
- Moderate Members
- Manage Messages
- Ban Members
- Manage Roles
- Manage Server

*Additional:* Configure bot, manage rules, bulk role operations, reverse actions

---

## Setting Up the Quarantine Role

1. Create a role called "Quarantined"
2. Position it **below** the bot's role
3. Configure channel permissions:
   - Deny "View Channel" for most channels
   - Allow "View Channel" only for a quarantine/appeals channel
4. Run `/config quarantine-role role:@Quarantined`

---

## Common Permission Errors

### "I cannot moderate this user"

**Causes:**
- Target user has a role equal to or higher than the bot
- Target is the server owner

**Solution:** Move the bot's role higher in Server Settings → Roles.

### "You cannot moderate this user"

**Causes:**
- Your role is not high enough to moderate the target
- You lack the required Discord permission

**Solution:** Get a higher role or the required permission from your server admin.

### Bot Can't Assign Roles

**Causes:**
- Bot role is too low in hierarchy
- Target role is above bot's role

**Solution:**
1. Go to Server Settings → Roles
2. Drag the bot's role above the roles it needs to manage
3. Ensure quarantine role is below the bot's role

### Commands Not Appearing

Commands only appear to users with the required permission. If you don't see a command:

1. Verify you have the correct Discord permission
2. Try restarting Discord
3. Wait up to an hour for command propagation (for new bot installs)
