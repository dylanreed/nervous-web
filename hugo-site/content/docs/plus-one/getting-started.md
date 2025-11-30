---
title: "Getting Started"
weight: 1
description: "Set up Plus One invite management in your Discord server."
---

Plus One gives you control over how members invite others to your private community. Setup takes just a few minutes.

## What Plus One Does

- **Controlled Invites** - Privileged users generate single-use invite links
- **Flexible Quotas** - Set how many invites each member gets
- **Trial Access** - Optionally grant temporary roles to new invitees
- **Full Tracking** - See who invited whom

## Prerequisites

Before starting, make sure you have:

- **Administrator permissions** in your Discord server
- A plan for who should be able to create invites

---

## Step 1: Invite the Bot

Contact us to get Plus One added to your server. We'll provide an invite link with the correct permissions pre-configured.

---

## Step 2: Configure Who Can Invite

Set which users can create invite links. You can base this on roles, permissions, or specific users.

**By role:**
```
/plusone config privilege-add type:role value:123456789
```
(Replace with your role ID)

**By permission:**
```
/plusone config privilege-add type:permission value:MODERATE_MEMBERS
```

**By specific user:**
```
/plusone config privilege-add type:user value:987654321
```

If you don't configure any rules, users with Manage Server permission can create invites by default.

---

## Step 3: Set Invite Quotas

Choose how invite quotas work for your community:

**Fixed quota (same for everyone):**
```
/plusone config quota-mode mode:fixed
/plusone config quota-fixed amount:3
```

**Role-based tiers:**
```
/plusone config quota-mode mode:tiered
/plusone config quota-tier role:@Moderator amount:10 priority:5
/plusone config quota-tier role:@Member amount:3 priority:1
```

See [Quota Modes](/docs/plus-one/quotas/) for all options.

---

## Step 4: Enable Trials (Optional)

Grant new invitees a temporary role that expires after a set period:

```
/plusone config trial days:14 role:@Trial
```

See [Trial Invites](/docs/plus-one/trials/) for details.

---

## Step 5: Verify Setup

Check your configuration:

```
/plusone status
```

This shows your quota mode, trial settings, privilege rules, and more.

---

## Quick Test

1. Run `/invite list` to see your quota
2. Run `/invite create` to generate an invite link
3. The invite expires after 7 days if unused
4. Run `/invite list` again to see your pending invite

---

## For Your Members

Members with invite privileges can:

1. **Check quota:** `/invite list`
2. **Create invite:** `/invite create`
3. **Revoke unused invite:** `/invite revoke code:abc123`

---

## Next Steps

- Learn about [Quota Modes](/docs/plus-one/quotas/) to find the right fit
- Set up [Trial Invites](/docs/plus-one/trials/) for probationary access
- Review all [Commands](/docs/plus-one/commands/) available
