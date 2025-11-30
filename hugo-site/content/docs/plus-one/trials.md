---
title: "Trial Invites"
weight: 4
description: "Grant temporary access to new members with trial invites."
---

Trial invites let you give new members a probationary period before they get full access. When someone joins via a trial invite, they receive a temporary role that automatically expires.

## How Trials Work

1. User creates a trial invite: `/invite create trial:true`
2. New member joins using the invite
3. New member receives the trial role
4. After the trial period, the role is automatically removed
5. The member stays in the server (just without the trial role)

---

## Setting Up Trials

### Step 1: Create a Trial Role

Create a Discord role for trial members. This role should have limited permissions compared to full members.

**Example permissions for trial role:**
- View basic channels
- Send messages in limited channels
- No access to member-only areas

### Step 2: Configure Trial Settings

```
/plusone config trial days:14 role:@Trial
```

| Option | Description |
|--------|-------------|
| `days` | How long the trial lasts |
| `role` | The role to grant during trial |

### Step 3: Position the Role

The bot's role must be **above** the trial role in your server's role hierarchy:

```
Bot Role        ← Must be here or higher
Trial Role      ← The role granted to trial members
@everyone
```

---

## Creating Trial Invites

Users with invite privileges can create trial invites:

```
/invite create trial:true
```

The invite works like a normal invite, but the person who joins gets the trial role.

---

## What Happens When Trial Ends

When the trial period expires:

1. The trial role is automatically removed
2. The member stays in the server
3. They lose access to trial-only channels

**What you might do next:**
- Manually grant them a full member role
- Let them apply through your normal process
- Remove them if they weren't active

---

## Disabling Trials

To turn off trial invites:

```
/plusone config trial days:0
```

Existing trial members keep their role until it expires. New trial invites can't be created.

---

## Trial Duration Examples

| Duration | Use Case |
|----------|----------|
| 7 days | Quick vibe check |
| 14 days | Standard probation |
| 30 days | Extended evaluation |

---

## Tips

### Combine with Verification

Use trials alongside your existing verification process. Trial members can prove themselves before getting full access.

### Channel Strategy

Create channels specifically for trial members:
- A welcome channel explaining the trial
- Limited chat access to basic areas
- No access to sensitive or member-only content

### Tracking Trials

Use `/plusone audit` to see which trial invites have been used and by whom.

### Conversion Path

Make it clear to trial members how they can become full members. Consider:
- Instructions in the trial welcome channel
- A way to request full membership
- Automatic promotion if they're active

---

## Troubleshooting

### Trial role not being assigned

1. Check the bot's role is above the trial role
2. Verify the bot has Manage Roles permission
3. Confirm trial is enabled: `/plusone status`

### Trial role not being removed

1. The bot must stay in the server
2. Check the bot has Manage Roles permission
3. Trial removals run on a schedule - give it a few minutes

### Can't create trial invites

1. Check trials are enabled: `/plusone status`
2. Verify you have invite privileges
3. Ensure you have remaining quota
