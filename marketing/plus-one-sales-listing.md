# Plus One

## Sustainable Growth for Private Communities

Your community is exclusive for a reason. Plus One lets you grow carefully by putting invite power in the hands of your trusted members—with the controls you need to keep it sustainable.

---

## The Problem

Growing a private Discord server is a balancing act. Open invites flood your community with strangers. Closed invites put all the work on moderators. Neither approach scales.

You need something in between: a way to let trusted members vouch for new people, without losing control.

## The Solution

Plus One creates single-use Discord invite links that your members can share. Each invite is tracked, quota-limited, and optionally time-limited. You always know who invited whom, and you decide how many invites each member gets.

---

## Features

### Controlled Invite Generation

Members generate real Discord invite links through a simple slash command. Each link works once, then expires. No more anonymous invite codes floating around the internet.

```
/invite create
```

### Flexible Quota System

Choose how members earn their invites:

- **Fixed** — Everyone gets the same number of invites
- **Tiered** — Different roles get different quotas
- **Replenishing** — Invites restore over time (e.g., 1 per month)
- **Earned** — Admins manually grant invites as rewards

### Trial Invites

Let new members prove themselves before getting full access. Trial invites grant a temporary role that automatically expires after a set period. The member stays in the server but loses access to private channels.

```
/invite create trial:true
```

Perfect for:
- Vetting new members before giving full access
- Time-limited promotions or events
- "Try before you buy" community access

### Complete Audit Trail

See exactly who invited whom and when. Track pending invites, used invites, and expired invites. Identify your best recruiters and spot patterns.

```
/plusone audit user:@member
```

### Privilege Control

Define exactly who can create invites:
- Specific roles
- Specific permissions
- Individual users

Override quotas for special cases without changing your global settings.

---

## How It Works

### For Members

1. Run `/invite create` to generate a single-use invite link
2. Share the link with someone you want to invite
3. When they join, the invite is marked as used
4. Check your remaining quota with `/invite list`

### For Admins

1. Set your quota mode: `/plusone config quota-mode mode:tiered`
2. Configure role quotas: `/plusone config quota-tier role:@Trusted amount:5`
3. Optionally enable trials: `/plusone config trial days:14 role:@Trial`
4. Define who can invite: `/plusone config privilege-add type:role value:@Member`

---

## Use Cases

### Exclusive Communities

Keep your server invite-only while empowering trusted members to bring in quality people. Each member stakes their reputation on who they invite.

### Paid Communities

Give paying members a set number of invites. Higher tiers get more invites. Track referrals automatically.

### Gaming Guilds

Let officers invite new recruits with trial access. After a trial period, promote them or let their access expire naturally.

### Professional Networks

Control growth while rewarding active members with invite privileges. Audit who's bringing in valuable connections.

---

## Commands

### Member Commands

| Command | Description |
|---------|-------------|
| `/invite create` | Generate a new invite link |
| `/invite create trial:true` | Generate a trial invite |
| `/invite list` | View your invites and quota |
| `/invite revoke code:abc123` | Delete an unused invite |

### Admin Commands

| Command | Description |
|---------|-------------|
| `/plusone config quota-mode` | Set quota calculation mode |
| `/plusone config quota-fixed` | Set default quota amount |
| `/plusone config quota-tier` | Configure role-based quotas |
| `/plusone config quota-replenish` | Set replenish rate |
| `/plusone config trial` | Configure trial invites |
| `/plusone config privilege-add` | Define who can invite |
| `/plusone grant` | Manually grant quota |
| `/plusone status` | View current configuration |
| `/plusone audit` | View invite history |

---

## Requirements

Plus One needs these Discord permissions:
- **Manage Server** — To track invite usage
- **Manage Roles** — To assign/remove trial roles
- **Create Instant Invite** — To generate invite links

---

## Get Started

1. Add Plus One to your server
2. Run `/plusone status` to see the default configuration
3. Configure your quota mode and privileges
4. Your members can start creating invites immediately

---

## Pricing

Contact us for pricing details.
