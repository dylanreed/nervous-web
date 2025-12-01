---
title: "Troubleshooting"
weight: 5
description: "Solutions to common Plus One issues."
---

Having trouble with Plus One? This guide covers the most common issues and their solutions.

## Bot Doesn't Respond to Commands

### Check if the bot is online

Look for the bot in your server's member list. If it shows as offline, the bot may be experiencing downtime.

### Verify permissions

Make sure the bot has these permissions:
- View Channels
- Send Messages
- Use Application Commands

### Wait for command propagation

Discord can take up to an hour to propagate slash commands after the bot joins.

---

## "You don't have permission to create invites"

### No privilege rules configured

If you haven't set up any privilege rules, only users with Manage Server permission can create invites by default.

**Solution:** Add privilege rules:
```
/plusone config privilege-add type:role value:<role-id>
```

### Missing required role/permission

Check that you have one of the roles or permissions configured in the privilege rules.

**Check your configuration:**
```
/plusone status
```

---

## "You've used all your invites"

### Quota exhausted

You've used all the invites available to you.

**Options:**
- Wait for quota to replenish (if using replenishing mode)
- Ask an admin to grant more invites
- Revoke unused invites to get quota back

### Check remaining quota

```
/invite list
```

### Revoke unused invites

If you have pending (unused) invites, you can revoke them:
```
/invite revoke code:abc123
```

---

## Invite Link Not Working

### Invite expired

Plus One invites expire after 7 days if unused. Create a new invite.

### Invite already used

Each invite is single-use. Once someone joins with it, the invite becomes invalid.

### Check invite status

```
/invite list
```

This shows which invites are pending, used, or expired.

---

## Trial Role Issues

### Trial role not being assigned

1. **Check role hierarchy:** The bot's role must be above the trial role
2. **Verify permissions:** Bot needs Manage Roles permission
3. **Confirm trials are enabled:** Run `/plusone status`

### Trial role not being removed

1. The bot must remain in the server
2. Check bot has Manage Roles permission
3. Role removal runs on a schedule - wait a few minutes

### "Cannot create trial invites"

1. Trials must be enabled: `/plusone status`
2. You need invite privileges
3. You need remaining quota

---

## Quota Not Updating

### Tiered mode not applying

If you're using tiered mode and quotas seem wrong:

1. Check tier priorities - higher priority wins
2. Verify the user has the expected role
3. Run `/plusone status` to see tier configuration

### Replenishing not working

Quota replenishes on a schedule, not instantly. Check:

1. The replenish configuration: `/plusone status`
2. That enough time has passed since last replenish
3. That you're not already at max quota

---

## Commands Not Appearing

### Missing permission

Admin commands (`/plusone config`, etc.) only appear for users with Manage Server permission.

### User commands not showing

`/invite` commands only appear for users with invite privileges. Check that privilege rules are configured.

### Wait for propagation

Slash commands can take up to an hour to appear after configuration changes.

---

## Invite Tracking Issues

### Can't see who used an invite

Run the audit command:
```
/plusone audit
```

Or filter by user:
```
/plusone audit user:@someone
```

### New member not tracked

The bot tracks invites it creates. If someone joins via a different invite (not created by Plus One), it won't be tracked.

### User left the server

When a user leaves the server, their unused (pending) invites are automatically expired. This is normal cleanup behavior - the invites can no longer be used and don't count against anyone's quota.

---

## Permission Errors

### "Failed to create invite"

The bot needs Create Instant Invite permission in the channel where invites are generated.

### "Cannot manage trial role"

1. Move the bot's role above the trial role
2. Verify bot has Manage Roles permission

---

## Getting More Help

If these solutions don't resolve your issue:

1. **Check our FAQ** at [/faq/](/faq/) for more answers
2. **Contact support** through our [contact page](https://calendly.com/nervous/intro)
3. **Provide details** including:
   - What you were trying to do
   - What happened instead
   - Any error messages
   - Your server ID
