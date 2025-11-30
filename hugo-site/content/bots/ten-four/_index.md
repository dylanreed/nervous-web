---
title: "Ten-Four Ticketing"
slug: "ten-four"
weight: 6
tagline: "Turn support chaos into organized conversations."
subtitle: "Professional ticketing workflows for Discord communities."
image: "ten_four_walkies.png"
imageAlt: "Ten-Four Ticketing illustration"
price: "Starting at $xx.xx/month"
ctaText: "Get Ten-Four"
docsSlug: "ten-four"
features:
  - "One-click ticket creation with private channels"
  - "Multi-category routing to different support teams"
  - "Claim system so teams know who's handling what"
  - "Automatic transcript generation for audit trails"
  - "Inactivity reminders to prevent tickets going cold"
  - "Optional satisfaction ratings for quality tracking"
useCasesTitle: "Perfect For"
useCases:
  - "Gaming communities — player support, bug reports, appeals"
  - "SaaS products — customer support, technical issues, billing"
  - "Content creators — subscriber support, collaboration requests"
  - "NFT/Web3 projects — holder support, whitelist issues, technical help"
  - "Brand communities — customer service, feedback collection"
---

When your community needs help, they shouldn't have to shout into the void. Ten-Four creates private ticket channels where users get dedicated support without cluttering your public channels. Staff can claim tickets, loop in teammates, and close with optional ratings—while every conversation gets preserved as a searchable transcript.

---

## How It Works

### 1. Setup Wizard

Run `/setup_ten_four` and the bot walks you through configuration in three simple steps:

1. **Select your panel channel** — Where the "Create Ticket" button appears
2. **Select your support role** — Who can see and respond to tickets
3. **Select your log channel** — Where transcripts are saved when tickets close

No config files, no complicated permissions. Just click through the wizard and you're ready to go.

### 2. Ticket Creation

Users click a button in your panel channel to create a private ticket. The bot:

- Creates a new private channel (e.g., `ticket-0042`)
- Sets permissions so only the user and support team can see it
- Posts a welcome message with action buttons
- Tracks activity on every message

### 3. Ticket Management

Each ticket channel includes action buttons for your support team:

| Button | What It Does |
|--------|--------------|
| **Claim** | Mark yourself as handling this ticket |
| **Add User** | Bring another team member into the conversation |
| **Close** | Close the ticket with optional satisfaction rating |

### 4. Transcripts

When a ticket closes, Ten-Four automatically:

1. Fetches the complete message history (up to 500 messages)
2. Formats it as a readable transcript with timestamps
3. Posts it to your log channel as a text file
4. Deletes the ticket channel

Transcripts include message content, author info, timestamps, attachments, and embed content—everything you need for audit trails and quality review.

---

## Commands

| Command | Description |
|---------|-------------|
| `/setup_ten_four` | Launch the interactive setup wizard |
| `/ticket` | Manually create a ticket (alternative to button) |
| `/ping` | Check if the bot is online |

---

## Features In Depth

### Multi-Category Support

Route different ticket types to different teams. Each category can have:

- Custom name and emoji
- Dedicated support role
- Separate permission settings

Users see category buttons on the panel and choose the type of help they need. Technical issues go to your dev team, billing questions go to support, general inquiries go to community managers.

### Inactivity Reminders

Configure how long a ticket can sit idle before the bot sends a reminder. The reminder:

- Pings your support team so nothing falls through the cracks
- Asks the user if they still need help or want to close the ticket
- Runs hourly checks to catch stale tickets

### Satisfaction Ratings

Optionally prompt users to rate their support experience when closing tickets:

- Quick thumbs up/thumbs down rating
- Configurable delay before ticket channel is deleted
- Ratings stored for tracking support quality over time

---

## Test Checklist

After setup, verify everything works:

- [ ] `/ping` responds with latency
- [ ] `/setup_ten_four` creates setup channel
- [ ] Setup wizard completes all 3 steps
- [ ] Ticket panel appears in selected channel
- [ ] Clicking "Create Ticket" creates private channel
- [ ] Ticket channel only visible to creator + support role
- [ ] "Claim" button works and updates embed
- [ ] "Add User" adds user to channel
- [ ] "Close" shows confirmation dialog
- [ ] Closing ticket generates transcript
- [ ] Transcript appears in log channel
- [ ] Ticket channel is deleted after close

---

## Troubleshooting

### Bot doesn't respond to commands

1. Check bot is online (green dot in member list)
2. Verify the bot was invited with correct permissions
3. Wait a few minutes for Discord to propagate commands

### "Missing Permissions" errors

1. Re-invite the bot with the correct permissions
2. Ensure the bot's role is higher than roles it needs to manage
3. Check channel-specific permission overwrites

### Transcripts not generating

1. Check bot has "Read Message History" permission
2. Verify log channel exists and bot can send messages there

### Commands not appearing

1. Try in a different channel
2. Wait up to 1 hour for command propagation
3. Contact support if commands still don't appear

---

## Required Permissions

Ten-Four needs these Discord permissions to function:

| Permission | Why It's Needed |
|------------|-----------------|
| Manage Channels | Create/delete ticket channels |
| View Channels | See channels to interact with |
| Send Messages | Send bot messages and embeds |
| Manage Messages | Delete messages if needed |
| Embed Links | Send rich ticket embeds |
| Attach Files | Send transcript files |
| Read Message History | Generate ticket transcripts |
| Mention Everyone | Mention support roles in tickets |
