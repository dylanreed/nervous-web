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

## Documentation

### Getting Started

Ten-Four uses an interactive setup wizard. Run `/setup_ten_four` and the bot walks you through three simple steps:

1. **Select your panel channel** — Where the "Create Ticket" button appears
2. **Select your support role** — Who can see and respond to tickets
3. **Select your log channel** — Where transcripts are saved when tickets close

### Commands

| Command | Description |
|---------|-------------|
| `/setup_ten_four` | Launch the interactive setup wizard |
| `/ticket` | Manually create a ticket (alternative to button) |
| `/ping` | Check if the bot is online |

### Ticket Actions

Each ticket channel includes action buttons:

- **Claim** — Mark yourself as handling this ticket
- **Add User** — Bring another team member into the conversation
- **Close** — Close the ticket (prompts for optional rating)

### Multi-Category Support

Route different ticket types to different teams. Each category can have:

- Custom name and emoji
- Dedicated support role
- Separate permission settings

Users see category buttons on the panel and choose the type of help they need.

### Transcripts

When a ticket closes, Ten-Four automatically:

1. Fetches the complete message history (up to 500 messages)
2. Formats it as a readable transcript with timestamps
3. Posts it to your log channel as a text file
4. Deletes the ticket channel

Transcripts include message content, author info, timestamps, attachments, and embed content.

### Inactivity Reminders

Configure how long a ticket can sit idle before the bot sends a reminder. The reminder pings your support team and asks the user if they still need help or want to close the ticket.

### Satisfaction Ratings

Optionally prompt users to rate their support experience when closing tickets. Ratings are stored and can be used to track support quality over time.
