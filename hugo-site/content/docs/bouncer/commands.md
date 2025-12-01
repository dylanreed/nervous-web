---
title: "Commands"
weight: 2
description: "Complete reference for Bouncer slash commands."
---

Bouncer uses Discord slash commands for all moderation actions. All commands start with `/`.

## Slash Commands Overview

| Command | Description | Permission |
|---------|-------------|------------|
| `/timeout` | Temporarily restrict a user | Moderate Members |
| `/untimeout` | Remove a timeout | Moderate Members |
| `/timeouts list` | View active timeouts | Moderate Members |
| `/quarantine` | Isolate a user | Manage Roles |
| `/unquarantine` | Release from quarantine | Manage Roles |
| `/quarantine-list` | View quarantined users | Manage Roles |
| `/warn` | Issue a warning | Moderate Members |
| `/reverse` | Reverse a moderation action | Manage Server |
| `/modhistory` | View user's moderation history | Moderate Members |
| `/config` | Configure bot settings | Manage Server |
| `/wipe` | Delete user's messages | Manage Messages |
| `/rules` | Manage server rules | Manage Server |
| `/preban` | Ban a user before they join | Ban Members |
| `/watchlist` | Monitor suspicious users | Moderate Members |
| `/leaveralert` | Alert when watched users leave | Manage Server |
| `/bulkrole` | Mass role operations | Manage Roles |
| `/modreport` | Generate activity reports | Manage Server |

---

## Timeout Commands

### /timeout

Temporarily restrict a user from sending messages or joining voice channels.

| Option | Required | Description |
|--------|----------|-------------|
| `user` | Yes | The user to timeout |
| `duration` | Yes | How long (e.g., `30m`, `2h`, `7d`, `indefinite`) |
| `reason` | No | Reason for the timeout |

**Examples:**
```
/timeout user:@JohnDoe duration:30m reason:Spamming in general
/timeout user:@JaneDoe duration:7d reason:Repeated rule violations
/timeout user:@Troll duration:indefinite reason:Pending investigation
```

### /untimeout

Remove an active timeout from a user.

| Option | Required | Description |
|--------|----------|-------------|
| `user` | Yes | The user to untimeout |
| `reason` | No | Reason for removing the timeout |

### /timeouts list

View all currently active timeouts in the server. No options required.

---

## Quarantine Commands

Quarantine removes all roles from a user and assigns a quarantine role, isolating them while preserving their original roles for restoration.

### /quarantine

Place a user in quarantine.

| Option | Required | Description |
|--------|----------|-------------|
| `user` | Yes | The user to quarantine |
| `duration` | No | How long (e.g., `1h`, `24h`, `indefinite`) |
| `reason` | No | Reason for quarantine |

**How it works:**
1. All user roles are stored
2. All roles are removed from the user
3. Quarantine role is assigned
4. When released, original roles are restored

### /unquarantine

Release a user from quarantine and restore their original roles.

| Option | Required | Description |
|--------|----------|-------------|
| `user` | Yes | The user to release |
| `reason` | No | Reason for release |

### /quarantine-list

View all currently quarantined users. No options required.

---

## Warning Commands

### /warn

Issue a warning to a user. Can reference server rules for consistency.

| Option | Required | Description |
|--------|----------|-------------|
| `user` | Yes | The user to warn |
| `rule` | No | Rule number violated |
| `reason` | No | Additional explanation |

**Examples:**
```
/warn user:@JohnDoe reason:Please keep discussions civil
/warn user:@JaneDoe rule:3 reason:This is your second warning
```

### /reverse

Reverse a previous moderation action.

| Option | Required | Description |
|--------|----------|-------------|
| `reason` | Yes | Reason for reversing |
| `id` | No | Specific action ID to reverse |
| `user` | No | Reverse last action for this user |

Reversed actions remain in history but are marked as reversed.

---

## History & Reports

### /modhistory

View the complete moderation history for a user.

| Option | Required | Description |
|--------|----------|-------------|
| `user` | Yes | The user to look up |
| `page` | No | Page number (10 items per page) |

### /modreport

Generate moderation activity reports.

| Option | Required | Description |
|--------|----------|-------------|
| `period` | Yes | Time period (e.g., `7d`, `30d`, `90d`) |
| `format` | No | Output: `embed`, `csv`, or `text` |

**Report includes:**
- Total moderation actions
- Actions by type
- Top 5 moderators by action count
- Most moderated users
- Rule violation statistics

---

## Configuration

### /config log-channel

Set the channel for moderation logs.

```
/config log-channel channel:#mod-logs
```

### /config quarantine-role

Set the role assigned to quarantined users.

```
/config quarantine-role role:@Quarantined
```

### /config view

View current server configuration.

---

## Message Management

### /wipe

Delete messages from a user with optional date filtering.

| Option | Required | Description |
|--------|----------|-------------|
| `user` | Yes | User whose messages to delete |
| `channel` | No | Channel to delete from (defaults to current) |
| `from` | No | Start date (YYYY-MM-DD) |
| `to` | No | End date (YYYY-MM-DD) |

**Note:** Discord only allows deleting messages less than 14 days old.

---

## Server Rules

### /rules add

Add a server rule.

| Option | Required | Description |
|--------|----------|-------------|
| `number` | Yes | Rule number (1-99) |
| `text` | Yes | Rule description |

### /rules remove

Remove a server rule by number.

### /rules list

Display all configured server rules.

---

## Preemptive Moderation

### /preban

Ban a user by ID before they join the server.

| Option | Required | Description |
|--------|----------|-------------|
| `user_id` | Yes | Discord user ID (18-digit number) |
| `reason` | No | Reason for the preban |

### /watchlist add

Add a user to the watchlist for monitoring.

| Option | Required | Description |
|--------|----------|-------------|
| `user` | Yes | User to watch |
| `reason` | No | Why they're being watched |

### /watchlist remove

Remove a user from the watchlist.

### /watchlist view

View all users currently on the watchlist.

### /leaveralert enable

Enable alerts when watched users leave the server.

| Option | Required | Description |
|--------|----------|-------------|
| `channel` | Yes | Channel for leaver alerts |

### /leaveralert disable

Disable leaver alerts. No options required.

---

## Bulk Role Management

### /bulkrole add

Add a role to multiple users based on criteria.

| Option | Required | Description |
|--------|----------|-------------|
| `role` | Yes | Role to add |
| `target` | No | Users with this role (filter) |
| `joined_after` | No | Users who joined after date |

### /bulkrole remove

Remove a role from multiple users.

| Option | Required | Description |
|--------|----------|-------------|
| `role` | Yes | Role to remove |
| `target` | No | Only from users with this role |

### /bulkrole rollback

Undo a bulk role operation (available for 24 hours).

| Option | Required | Description |
|--------|----------|-------------|
| `operation_id` | Yes | The operation ID to rollback |

### /bulkrole history

View recent bulk role operations from the last 7 days.

---

## Duration Formats

| Format | Duration |
|--------|----------|
| `30m` | 30 minutes |
| `2h` | 2 hours |
| `1d` | 1 day |
| `7d` | 7 days |
| `2w` | 2 weeks |
| `indefinite` | No expiration |

Discord's native timeout maximum is 28 days. Longer durations are managed by the bot's scheduler.
