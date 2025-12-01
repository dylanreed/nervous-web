---
title: "Commands"
weight: 2
description: "Complete reference for 10-4 slash commands and ticket actions."
---

10-4 uses Discord slash commands for setup and management. All commands start with `/`.

## Slash Commands

| Command | Description | Who Can Use |
|---------|-------------|-------------|
| `/setup_ten_four` | Launch the interactive setup wizard | Server Administrators |
| `/ticket` | Manually create a ticket | Anyone |
| `/stats` | View ticket statistics | Server Administrators |
| `/ping` | Check if the bot is online | Anyone |

### /setup_ten_four

Starts the configuration wizard to set up 10-4 in your server. This command:

- Creates a private setup channel
- Walks you through panel, role, and log channel selection
- Can be run again to reconfigure settings

### /ticket

Creates a ticket without using the panel button. Useful for:

- Testing ticket creation
- Creating tickets on behalf of users
- Situations where the panel isn't accessible

### /stats

View ticket statistics for your server. Shows:

- Total tickets created
- Currently open tickets
- Closed tickets
- Average resolution time

Useful for tracking your team's performance and identifying trends.

### /ping

Quick health check that returns the bot's latency. Use this to verify the bot is online and responding.

## Ticket Actions

Each ticket channel includes action buttons. These are not slash commands—they're buttons that appear in the ticket channel.

### Claim

**Who can use:** Support team members

Marks you as the person handling this ticket. When you claim a ticket:

- Your name appears in the ticket embed
- Other team members know you're working on it
- Helps prevent duplicate responses

### Add User

**Who can use:** Support team members

Opens a menu to add another team member to the ticket. Use this to:

- Loop in specialists for complex issues
- Escalate to senior staff
- Get a second opinion

The added user gains access to the ticket channel and can see the full history.

### Close

**Who can use:** Ticket creator or support team members

Closes the ticket. The process:

1. Click "Close" button
2. Confirm you want to close
3. (Optional) User rates their experience
4. Transcript is generated and saved
5. Ticket channel is deleted

## Permission Requirements

10-4 checks permissions before executing actions:

| Action | Required Permission |
|--------|---------------------|
| Setup wizard | Administrator |
| Create ticket | None (any member) |
| Claim ticket | Support role |
| Add user | Support role |
| Close ticket | Ticket creator OR support role |
| View transcripts | Access to log channel |
