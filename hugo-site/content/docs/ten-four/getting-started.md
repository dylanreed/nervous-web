---
title: "Getting Started"
weight: 1
description: "Set up 10-4 ticketing in your Discord server in minutes."
---

Getting 10-4 running in your server takes just a few minutes. The bot uses an interactive setup wizard that guides you through configuration without touching any config files.

## Prerequisites

Before starting, make sure you have:

- **Administrator permissions** in your Discord server
- A **channel for the ticket panel** (where users will click to create tickets)
- A **support role** for your team members
- A **log channel** for ticket transcripts

## Step 1: Invite the Bot

Contact us to get 10-4 added to your server. We'll provide an invite link with the correct permissions pre-configured.

## Step 2: Run the Setup Wizard

Once the bot is in your server, run the setup command:

```
/setup_ten_four
```

The bot will create a private setup channel and guide you through four steps:

### Select Panel Channel

Choose the channel where the "Create Ticket" button will appear. This is typically a support or help channel that all members can see.

### Select Support Role

Choose the role that your support team members have. Anyone with this role will be able to see and respond to tickets.

### Select Log Channel

Choose a private channel where ticket transcripts will be saved when tickets are closed. Only staff should have access to this channel.

### Configure Reminder Time

Choose how long a ticket can sit inactive before a reminder is sent. Options range from 6 to 72 hours, or you can disable reminders entirely.

## Step 3: Finish Setup

Click "Finish Setup" and the bot will:

1. Save your configuration
2. Post a ticket panel in your selected channel
3. Delete the setup channel

Your ticketing system is now live! Users can click the "Create Ticket" button to open a support ticket.

## Quick Test

Verify everything is working:

1. Go to your panel channel
2. Click "Create Ticket"
3. A new private channel should appear (e.g., `ticket-0001`)
4. Send a test message
5. Click "Close" to close the ticket
6. Check your log channel for the transcript

## Next Steps

- Learn about [Commands](/docs/ten-four/commands/) available to your team
- Set up [Multiple Categories](/docs/ten-four/categories/) for different ticket types
- Configure [Inactivity Reminders](/docs/ten-four/reminders/) to catch stale tickets
