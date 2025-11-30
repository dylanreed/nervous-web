---
title: "Getting Started"
weight: 1
description: "Set up Bouncer moderation bot in your Discord server."
---

Getting Bouncer running in your server takes just a few minutes. After inviting the bot, you'll configure logging and optional features using slash commands.

## Prerequisites

Before starting, make sure you have:

- **Administrator permissions** in your Discord server
- A **channel for moderation logs** (private, staff-only)
- A **quarantine role** if you want to use the quarantine feature

## Step 1: Invite the Bot

Contact us to get Bouncer added to your server. We'll provide an invite link with the correct permissions pre-configured.

## Step 2: Set Up Mod Logging

Create a private channel for moderation logs, then configure the bot:

```
/config log-channel #mod-logs
```

All moderation actions will now be logged to this channel with full details.

## Step 3: Set Up Quarantine Role (Optional)

If you want to use the quarantine feature to isolate users during investigations:

1. Create a role called "Quarantined" (or similar)
2. Remove all channel permissions for this role
3. Optionally create a quarantine channel only this role can see
4. Configure the bot:

```
/config quarantine-role @Quarantined
```

**Important:** The quarantine role must be positioned below Bouncer's role in your server's role hierarchy.

## Step 4: Create Server Rules (Optional)

Define rules that can be referenced when issuing warnings:

```
/rules add number:1 text:Be respectful to all members
/rules add number:2 text:No spam or self-promotion
/rules add number:3 text:Keep discussions in appropriate channels
```

When warning users, you can reference these rules for consistency:

```
/warn user:@someone rule:1
```

## Step 5: Verify Setup

View your current configuration:

```
/config view
```

This shows your log channel, quarantine role, and other settings.

## Quick Test

Verify everything is working:

1. Run `/config view` to confirm settings
2. Try `/timeout user:@yourself duration:1m reason:Testing` (then `/untimeout`)
3. Check your log channel for the logged actions

## Next Steps

- Learn about all [Commands](/docs/bouncer/commands/) available to your team
- Review the [Permissions](/docs/bouncer/permissions/) guide for role setup
- Check [Troubleshooting](/docs/bouncer/troubleshooting/) if you encounter issues
