# Bouncer Bot Commands

A comprehensive guide to all 17 slash commands available in Bouncer Bot.

---

## Timeout Management

### `/timeout`
Temporarily restrict a user from sending messages or joining voice channels.

**Options:**
- `user` (required) - The user to timeout
- `duration` (required) - How long (e.g., `30m`, `2h`, `7d`, `indefinite`)
- `reason` (optional) - Reason for the timeout

**Examples:**
```
/timeout user:@JohnDoe duration:30m reason:Spamming in general
/timeout user:@JaneDoe duration:7d reason:Repeated rule violations
/timeout user:@Troll duration:indefinite reason:Pending investigation
```

### `/untimeout`
Remove an active timeout from a user.

**Options:**
- `user` (required) - The user to untimeout
- `reason` (optional) - Reason for removing the timeout

**Examples:**
```
/untimeout user:@JohnDoe reason:Timeout served, warning issued
/untimeout user:@JaneDoe reason:Appeal accepted
```

### `/timeouts`
View all currently active timeouts in the server.

**Options:** None

**Example:**
```
/timeouts
```

---

## Quarantine System

Quarantine removes all roles from a user and assigns a quarantine role, effectively isolating them while preserving their original roles for restoration.

### `/quarantine`
Place a user in quarantine.

**Options:**
- `user` (required) - The user to quarantine
- `duration` (optional) - How long (e.g., `1h`, `24h`, `indefinite`)
- `reason` (optional) - Reason for quarantine

**Examples:**
```
/quarantine user:@SuspiciousUser reason:Possible compromised account
/quarantine user:@RuleBreaker duration:24h reason:Cooling off period
/quarantine user:@Spammer duration:indefinite reason:Under investigation
```

### `/unquarantine`
Remove a user from quarantine and restore their original roles.

**Options:**
- `user` (required) - The user to unquarantine
- `reason` (optional) - Reason for release

**Examples:**
```
/unquarantine user:@SuspiciousUser reason:Account verified as safe
/unquarantine user:@RuleBreaker reason:Quarantine period complete
```

### `/quarantine-list`
View all currently quarantined users.

**Options:** None

**Example:**
```
/quarantine-list
```

---

## Warnings & Infractions

### `/warn`
Issue a warning to a user. Can be linked to server rules.

**Options:**
- `user` (required) - The user to warn
- `rule` (optional) - Rule number violated (use `/rules list` to see rules)
- `reason` (optional) - Additional notes

**Examples:**
```
/warn user:@JohnDoe reason:Please keep discussions civil
/warn user:@JaneDoe rule:3 reason:This is your second warning
/warn user:@Newbie rule:1
```

### `/reverse`
Reverse a previous moderation action (warning, timeout, quarantine, etc.).

**Options:**
- `reason` (required) - Reason for reversing
- `id` (optional) - The specific action ID to reverse
- `user` (optional) - Reverse the last action for this user

**Examples:**
```
/reverse reason:Warning issued in error id:clxx123abc
/reverse reason:User appealed successfully user:@JohnDoe
```

---

## Moderation History

### `/modhistory`
View the moderation history for a user.

**Options:**
- `user` (required) - The user to look up
- `page` (optional) - Page number for pagination

**Examples:**
```
/modhistory user:@JohnDoe
/modhistory user:@JaneDoe page:2
```

---

## Server Configuration

### `/config`
Configure Bouncer Bot settings for your server.

**Subcommands:**

#### `/config quarantine-role`
Set the role assigned to quarantined users.

**Options:**
- `role` (required) - The quarantine role

**Example:**
```
/config quarantine-role role:@Quarantined
```

#### `/config log-channel`
Set the channel for moderation logs.

**Options:**
- `channel` (required) - The log channel

**Example:**
```
/config log-channel channel:#mod-logs
```

#### `/config view`
View current server configuration.

**Example:**
```
/config view
```

---

## Message Management

### `/wipe`
Delete messages from a user with optional date filtering. Shows a confirmation before executing.

**Options:**
- `user` (required) - The user whose messages to delete
- `after` (optional) - Only delete messages after this date (YYYY-MM-DD)
- `before` (optional) - Only delete messages before this date (YYYY-MM-DD)

**Examples:**
```
/wipe user:@Spammer
/wipe user:@JohnDoe after:2024-01-15
/wipe user:@JaneDoe after:2024-01-01 before:2024-01-31
```

---

## Server Rules

### `/rules`
Manage server rules that can be referenced in warnings.

**Subcommands:**

#### `/rules list`
Display all server rules.

**Example:**
```
/rules list
```

#### `/rules add`
Add a new rule.

**Options:**
- `number` (required) - Rule number
- `text` (required) - Rule text

**Example:**
```
/rules add number:1 text:Be respectful to all members
/rules add number:2 text:No spam or self-promotion
/rules add number:3 text:Keep discussions in appropriate channels
```

#### `/rules remove`
Remove a rule.

**Options:**
- `number` (required) - Rule number to remove

**Example:**
```
/rules remove number:5
```

---

## Preemptive Moderation

### `/preban`
Ban a user ID before they join the server.

**Options:**
- `user_id` (required) - The Discord user ID to preban
- `reason` (optional) - Reason for the preban

**Examples:**
```
/preban user_id:123456789012345678 reason:Known raid account
/preban user_id:987654321098765432 reason:Ban evasion from alt
```

### `/watchlist`
Manage users on the server watchlist for monitoring.

**Subcommands:**

#### `/watchlist add`
Add a user to the watchlist.

**Options:**
- `user` (required) - User to watch
- `reason` (optional) - Why they're being watched

**Example:**
```
/watchlist add user:@SuspiciousUser reason:New account, unusual behavior
```

#### `/watchlist remove`
Remove a user from the watchlist.

**Options:**
- `user` (required) - User to remove

**Example:**
```
/watchlist remove user:@ClearedUser
```

#### `/watchlist view`
View all users on the watchlist.

**Example:**
```
/watchlist view
```

### `/leaveralert`
Configure alerts when watched users leave the server.

**Subcommands:**

#### `/leaveralert channel`
Set the channel for leaver alerts.

**Options:**
- `channel` (required) - Alert channel

**Example:**
```
/leaveralert channel:#mod-alerts
```

#### `/leaveralert disable`
Disable leaver alerts.

**Example:**
```
/leaveralert disable
```

---

## Bulk Role Management

### `/bulkrole`
Perform bulk role operations with rollback capability.

**Subcommands:**

#### `/bulkrole add`
Add a role to all members with a specific role.

**Options:**
- `target-role` (required) - Role whose members will receive the new role
- `role-to-add` (required) - Role to add
- `reason` (optional) - Reason for the operation

**Example:**
```
/bulkrole add target-role:@Members role-to-add:@Event-Access reason:Special event access
```

#### `/bulkrole remove`
Remove a role from all members with a specific role.

**Options:**
- `target-role` (required) - Role whose members will lose the role
- `role-to-remove` (required) - Role to remove

**Example:**
```
/bulkrole remove target-role:@Members role-to-remove:@Event-Access
```

#### `/bulkrole rollback`
Undo a previous bulk role operation (within 24 hours).

**Options:**
- `operation-id` (required) - The operation ID to rollback

**Example:**
```
/bulkrole rollback operation-id:clxx456def
```

#### `/bulkrole history`
View recent bulk role operations.

**Example:**
```
/bulkrole history
```

---

## Moderation Reports

### `/modreport`
Generate moderation activity reports.

**Options:**
- `period` (required) - Time period: `day`, `week`, `month`, or `all`
- `format` (optional) - Output format: `embed` (default), `csv`, or `text`

**Examples:**
```
/modreport period:week
/modreport period:month format:csv
/modreport period:all format:text
```

---

## Permission Requirements

| Command | Required Permission |
|---------|-------------------|
| `/timeout`, `/untimeout`, `/timeouts` | Moderate Members |
| `/quarantine`, `/unquarantine`, `/quarantine-list` | Moderate Members |
| `/warn` | Moderate Members |
| `/reverse` | Manage Server |
| `/modhistory` | Moderate Members |
| `/config` | Manage Server |
| `/wipe` | Manage Messages |
| `/rules` | Manage Server |
| `/preban` | Ban Members |
| `/watchlist` | Moderate Members |
| `/leaveralert` | Manage Server |
| `/bulkrole` | Manage Roles |
| `/modreport` | Moderate Members |

---

## Duration Formats

When specifying durations, use these formats:
- `30s` - 30 seconds
- `30m` - 30 minutes
- `2h` - 2 hours
- `7d` - 7 days
- `2w` - 2 weeks
- `1mo` - 1 month
- `indefinite` - No expiration (manual removal required)

---

## Tips

1. **Use rules with warnings** - Set up server rules with `/rules add` and reference them when warning users with `/warn user:@User rule:1`

2. **Check history before action** - Use `/modhistory` to see a user's previous infractions before deciding on action severity

3. **Quarantine for investigation** - Use `/quarantine` with `indefinite` duration when you need time to investigate a situation

4. **Rollback mistakes** - Bulk operations can be rolled back within 24 hours using `/bulkrole rollback`

5. **Track patterns** - Use `/modreport` weekly to identify moderation trends and repeat offenders
