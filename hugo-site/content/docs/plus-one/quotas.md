---
title: "Quota Modes"
weight: 3
description: "Configure how invite quotas work for your community."
---

Plus One offers four quota modes to match different community needs. Choose the mode that fits how you want to manage invite distribution.

## Quota Modes Overview

| Mode | Description | Best For |
|------|-------------|----------|
| **Fixed** | Everyone gets the same number | Simple communities |
| **Tiered** | Quota based on Discord roles | Hierarchical communities |
| **Replenishing** | Quota restores over time | Ongoing access |
| **Earned** | Admins manually grant invites | Reward-based systems |

---

## Fixed Mode

Everyone with invite privileges gets the same quota.

### Setup

```
/plusone config quota-mode mode:fixed
/plusone config quota-fixed amount:3
```

### How It Works

- All privileged users get 3 invites (or whatever amount you set)
- Once used, invites don't come back
- Admins can grant additional invites manually

### Best For

- Small, close-knit communities
- Simple "bring a friend" systems
- Communities where everyone is equal

---

## Tiered Mode

Quota based on the user's Discord roles. Higher roles can get more invites.

### Setup

```
/plusone config quota-mode mode:tiered
/plusone config quota-tier role:@Founder amount:20 priority:10
/plusone config quota-tier role:@Moderator amount:10 priority:5
/plusone config quota-tier role:@Member amount:3 priority:1
```

### How It Works

- Each role has a quota amount and priority
- Users get the quota from their highest-priority role
- If a user has multiple roles, priority determines which quota applies

### Priority Example

A user with both @Moderator (priority 5) and @Member (priority 1) gets 10 invites (the higher priority role).

### Best For

- Communities with established hierarchies
- Rewarding trusted members with more invites
- Different membership tiers

---

## Replenishing Mode

Quota automatically restores over time.

### Setup

```
/plusone config quota-mode mode:replenishing
/plusone config quota-fixed amount:5
/plusone config quota-replenish amount:1 days:30
```

### How It Works

- Users start with the fixed quota (5 invites)
- Every 30 days, they regain 1 invite
- Quota never exceeds the maximum (5)

### Configuration

| Setting | Description |
|---------|-------------|
| `quota-fixed` | Maximum quota cap |
| `quota-replenish amount` | Invites restored per period |
| `quota-replenish days` | Days between restorations |

### Best For

- Ongoing community growth
- Preventing invite hoarding
- Sustainable, steady expansion

---

## Earned Mode

Admins manually grant invites to specific users.

### Setup

```
/plusone config quota-mode mode:earned
```

### Granting Invites

```
/plusone grant user:@someone amount:5
```

### How It Works

- Users start with 0 invites
- Admins grant invites as rewards or recognition
- Quota accumulates (doesn't reset)

### Best For

- Reward systems for active members
- Contest prizes
- Exclusive communities with vetted inviters

---

## Checking Configuration

View your current quota settings:

```
/plusone status
```

Shows:
- Current quota mode
- Default quota amount
- Replenish rate (if applicable)
- All configured tiers

---

## Changing Modes

You can switch modes at any time:

```
/plusone config quota-mode mode:tiered
```

**Note:** Existing quotas may be affected when switching modes. Users keep invites they've already created, but their available quota recalculates based on the new mode.

---

## Tips

### Start Simple

Begin with fixed mode while you learn how your community uses invites. You can always switch to a more complex mode later.

### Monitor Usage

Use `/plusone audit` to see how invites are being used. This helps you tune quota amounts.

### Combine with Trials

Any quota mode works with trial invites. Consider using trials to vet new members before they get full access.
