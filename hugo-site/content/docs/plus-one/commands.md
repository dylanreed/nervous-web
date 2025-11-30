---
title: "Commands"
weight: 2
description: "Complete reference for Plus One slash commands."
---

Plus One uses Discord slash commands. All commands start with `/`.

## User Commands

These commands are available to users with invite privileges.

### /invite create

Create a new single-use invite link.

| Option | Required | Description |
|--------|----------|-------------|
| `trial` | No | If true, creates a trial invite |

**Examples:**
```
/invite create
/invite create trial:true
```

The invite link expires after 7 days if unused. Trial invites grant the configured trial role, which is automatically removed after the trial period ends.

---

### /invite list

View your invite history and remaining quota.

**Shows:**
- Current quota status
- Pending invites (created but not yet used)
- Used invites count
- Expired invites count

---

### /invite revoke

Delete an unused invite and restore your quota.

| Option | Required | Description |
|--------|----------|-------------|
| `code` | Yes | The invite code to revoke |

**Example:**
```
/invite revoke code:abc123
```

Only works on invites you created that haven't been used yet.

---

## Admin Commands

These commands require **Manage Server** permission.

### /plusone config quota-mode

Set how invite quotas are calculated.

| Option | Required | Description |
|--------|----------|-------------|
| `mode` | Yes | `fixed`, `tiered`, `replenishing`, or `earned` |

**Example:**
```
/plusone config quota-mode mode:tiered
```

See [Quota Modes](/docs/plus-one/quotas/) for details on each mode.

---

### /plusone config quota-fixed

Set the default invite quota (used in fixed mode and as fallback).

| Option | Required | Description |
|--------|----------|-------------|
| `amount` | Yes | Number of invites (0-100) |

**Example:**
```
/plusone config quota-fixed amount:5
```

---

### /plusone config quota-tier

Add or update a role-based quota tier.

| Option | Required | Description |
|--------|----------|-------------|
| `role` | Yes | The role to configure |
| `amount` | Yes | Number of invites for this role |
| `priority` | No | Higher priority wins if user has multiple roles |

**Example:**
```
/plusone config quota-tier role:@Moderator amount:10 priority:5
/plusone config quota-tier role:@Member amount:3 priority:1
```

---

### /plusone config quota-replenish

Configure automatic quota restoration (for replenishing mode).

| Option | Required | Description |
|--------|----------|-------------|
| `amount` | Yes | Invites to restore per period |
| `days` | Yes | Days between restorations |

**Example:**
```
/plusone config quota-replenish amount:1 days:30
```

Grants 1 invite every 30 days, up to the default quota maximum.

---

### /plusone config trial

Configure trial invites.

| Option | Required | Description |
|--------|----------|-------------|
| `days` | Yes | Trial duration (use 0 to disable) |
| `role` | Yes* | Role to grant during trial (*required when enabling) |

**Examples:**
```
/plusone config trial days:14 role:@Trial
/plusone config trial days:0
```

When trial expires, the role is removed but the user stays in the server.

---

### /plusone config privilege-add

Define who can create invites.

| Option | Required | Description |
|--------|----------|-------------|
| `type` | Yes | `role`, `permission`, or `user` |
| `value` | Yes | Role ID, permission name, or user ID |
| `quota` | No | Override quota for this rule |

**Valid permission values:**
- `ADMINISTRATOR`
- `MANAGE_GUILD`
- `MANAGE_ROLES`
- `KICK_MEMBERS`
- `BAN_MEMBERS`
- `MODERATE_MEMBERS`

**Examples:**
```
/plusone config privilege-add type:role value:123456789
/plusone config privilege-add type:permission value:MODERATE_MEMBERS
/plusone config privilege-add type:user value:987654321 quota:50
```

---

### /plusone config privilege-remove

Remove a privilege rule.

| Option | Required | Description |
|--------|----------|-------------|
| `rule_id` | Yes | The rule ID (shown in `/plusone status`) |

---

### /plusone grant

Manually grant invite quota to a user (earned mode only).

| Option | Required | Description |
|--------|----------|-------------|
| `user` | Yes | User to grant quota to |
| `amount` | Yes | Number of invites to grant |

**Example:**
```
/plusone grant user:@someone amount:5
```

---

### /plusone status

Display current bot configuration.

**Shows:**
- Quota mode and default quota
- Replenish rate (if applicable)
- Trial invite settings
- Quota tiers
- Privilege rules

---

### /plusone audit

View invite usage history.

| Option | Required | Description |
|--------|----------|-------------|
| `user` | No | Filter by invite creator |

**Example:**
```
/plusone audit
/plusone audit user:@someone
```

Shows total invites created, used, pending, and expired.

---

## Permission Summary

| Command | Who Can Use |
|---------|-------------|
| `/invite create` | Users with invite privileges |
| `/invite list` | Users with invite privileges |
| `/invite revoke` | Users with invite privileges |
| `/plusone config *` | Manage Server permission |
| `/plusone grant` | Manage Server permission |
| `/plusone status` | Manage Server permission |
| `/plusone audit` | Manage Server permission |
