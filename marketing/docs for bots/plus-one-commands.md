# Commands Reference

## User Commands

These commands are available to users with invite privileges.

### `/invite create`

Create a new single-use invite link.

**Options:**
- `trial` (optional): If true, creates a trial invite that grants temporary access

**Example:**
```
/invite create
/invite create trial:true
```

The invite link expires after 7 days if unused. Trial invites grant the configured trial role, which is automatically removed after the trial period ends.

---

### `/invite list`

View your invite history and remaining quota.

Shows:
- Current quota status
- Pending invites (created but not yet used)
- Used invites count
- Expired invites count

---

### `/invite revoke`

Delete an unused invite and restore your quota.

**Options:**
- `code` (required): The invite code to revoke

**Example:**
```
/invite revoke code:abc123
```

Only works on invites you created that haven't been used yet.

---

## Admin Commands

These commands require the **Manage Server** permission.

### `/plusone config quota-mode`

Set how invite quotas are calculated.

**Options:**
- `mode` (required): One of:
  - `fixed` - Everyone gets the same quota
  - `tiered` - Quota based on user's roles
  - `replenishing` - Quota restores over time
  - `earned` - Quota manually granted by admins

**Example:**
```
/plusone config quota-mode mode:tiered
```

---

### `/plusone config quota-fixed`

Set the default invite quota (used in fixed mode and as fallback).

**Options:**
- `amount` (required): Number of invites (0-100)

**Example:**
```
/plusone config quota-fixed amount:5
```

---

### `/plusone config quota-tier`

Add or update a role-based quota tier.

**Options:**
- `role` (required): The role to configure
- `amount` (required): Number of invites for this role
- `priority` (optional): Higher priority wins if user has multiple roles (default: 0)

**Example:**
```
/plusone config quota-tier role:@Moderator amount:10 priority:5
/plusone config quota-tier role:@Member amount:3 priority:1
```

---

### `/plusone config quota-replenish`

Configure automatic quota restoration (for replenishing mode).

**Options:**
- `amount` (required): Invites to restore per period
- `days` (required): Days between restorations

**Example:**
```
/plusone config quota-replenish amount:1 days:30
```

This grants 1 invite every 30 days, up to the default quota maximum.

---

### `/plusone config trial`

Configure trial invites.

**Options:**
- `days` (required): Trial duration in days (use 0 to disable)
- `role` (required when enabling): Role to grant during trial

**Example:**
```
/plusone config trial days:14 role:@Trial
/plusone config trial days:0  # Disable trial invites
```

When trial expires, the role is removed but the user stays in the server.

---

### `/plusone config privilege-add`

Define who can create invites.

**Options:**
- `type` (required): Rule type - `role`, `permission`, or `user`
- `value` (required): Role ID, permission name, or user ID
- `quota` (optional): Override quota for this rule

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

If no rules are configured, defaults to allowing users with Manage Server permission.

---

### `/plusone config privilege-remove`

Remove a privilege rule.

**Options:**
- `rule_id` (required): The rule ID (shown in `/plusone status`)

**Example:**
```
/plusone config privilege-remove rule_id:3
```

---

### `/plusone grant`

Manually grant invite quota to a user (earned mode only).

**Options:**
- `user` (required): User to grant quota to
- `amount` (required): Number of invites to grant

**Example:**
```
/plusone grant user:@someone amount:5
```

---

### `/plusone status`

Display current bot configuration.

Shows:
- Quota mode and default quota
- Replenish rate (if applicable)
- Trial invite settings
- Quota tiers
- Privilege rules

---

### `/plusone audit`

View invite usage history.

**Options:**
- `user` (optional): Filter by invite creator

**Example:**
```
/plusone audit
/plusone audit user:@someone
```

Shows total invites created, used, pending, and expired.
