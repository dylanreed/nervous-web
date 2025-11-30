# TenFour

## Discord Ticketing That Just Works

Stop fighting with complicated bots. Start helping your community.

---

## The Problem With Ticketing Bots

You've tried them. We've all tried them.

**Web dashboards** that require you to leave Discord just to change a setting. **Reaction-based menus** that feel like you're stuck in 2018. **15-minute setup processes** that make you question if support tickets are even worth it.

Your community deserves better. Your support team deserves better.

---

## Meet TenFour

TenFour is the ticketing bot we wished existed. Built from the ground up with one goal: **make support simple**.

### Setup in 60 Seconds

No, really. Here's how it works:

1. Run `/setup_ten_four`
2. Pick where you want the ticket panel
3. Choose your support team role
4. Select your log channel
5. Done.

That's it. No web dashboard. No account creation. No configuration files. Everything happens right in Discord, exactly where you already are.

---

## Features That Matter

### Modern Discord UI

TenFour uses Discord's latest features—buttons, dropdown menus, and modals. No more reaction-based interfaces that confuse your users. Just clean, intuitive interactions that feel native to Discord.

**Ticket Panel**
Your users see a professional embed with a "Create Ticket" button. One click, and they're in their own private support channel.

**Action Buttons**
Every ticket has clear action buttons: Claim, Add User, Close. Your team knows exactly what they can do at a glance.

---

### Private Ticket Channels

When a user creates a ticket, TenFour spins up a private channel visible only to:

- The user who opened it
- Your support team
- The bot itself

No more support requests getting lost in public channels. No more users feeling embarrassed to ask for help.

---

### Claim System

Multiple support staff online? No problem.

The **Claim** button lets team members take ownership of tickets. Once claimed, everyone knows who's handling it. No duplicate responses. No confusion.

---

### Add Collaborators

Sometimes you need to bring in a specialist. The **Add User** button lets you invite anyone to the ticket—whether that's a senior team member, a developer, or the user's friend who can help explain the issue.

---

### Beautiful Transcripts

When a ticket closes, TenFour generates a complete transcript:

- **HTML file** styled to look like Discord
- **Full message history** with timestamps
- **User avatars** and bot badges
- **Attachment links** preserved
- **Metadata** (duration, message count, rating)

Your log channel receives a clean summary embed with the transcript attached. Perfect for record-keeping, training, or reviewing past issues.

---

### Satisfaction Ratings

Know how your team is doing. When a ticket closes, users can rate their experience with a simple thumbs up or thumbs down.

Ratings appear in transcripts, so you can identify patterns and improve your support quality over time.

---

### Inactivity Reminders

Tickets shouldn't die in silence.

TenFour monitors ticket activity and sends gentle reminders when things go quiet. Configurable from 12 hours to 72 hours—or disable entirely if you prefer.

Users get a friendly nudge: *"Do you still need help?"* with buttons to keep the ticket open or close it.

---

### Category Routing

For larger teams, TenFour supports ticket categories. Route billing questions to your billing team. Send technical issues to developers. Each category can have its own:

- Button on the ticket panel
- Custom emoji
- Assigned support role
- Intake form questions

Start simple with a single "Create Ticket" button. Add categories when you're ready.

---

## The TenFour Philosophy

### No Web Dashboard

Other bots make you leave Discord to configure them. We think that's backwards.

TenFour's setup wizard runs entirely in Discord. Change settings? Discord. View transcripts? Discord. Your team never has to context-switch.

### Simple Defaults, Powerful Options

TenFour works out of the box with sensible defaults:

- Ratings enabled (30-second delay)
- Reminders at 24 hours
- Standard actions (Claim, Add User, Close)

But everything is configurable for servers that need more control.

### Your Data, Your Server

TenFour is self-hosted. You run it on your infrastructure. Your conversations stay on your database. No third-party access to your support tickets.

---

## Technical Details

### Tech Stack

- **Runtime:** Node.js 20+
- **Language:** TypeScript
- **Discord Library:** discord.js v14
- **Database:** PostgreSQL with Prisma ORM
- **Deployment:** Docker, Fly.io, or any Node.js host

### Requirements

- Node.js 20 or higher
- PostgreSQL database
- Discord bot token with required permissions

### Permissions Needed

| Permission | Purpose |
|------------|---------|
| Manage Channels | Create/delete ticket channels |
| View Channels | See channels and messages |
| Send Messages | Send embeds and responses |
| Manage Messages | Clean up if needed |
| Embed Links | Rich ticket embeds |
| Attach Files | Transcript files |
| Read Message History | Generate transcripts |
| Mention Everyone | Ping support roles |

---

## Who Uses TenFour?

### Gaming Communities

Handle ban appeals, bug reports, and player support without cluttering your main channels.

### SaaS Products

Provide customer support right where your users hang out. No separate help desk needed.

### Creator Communities

Manage Patreon questions, collaboration requests, and fan support professionally.

### Open Source Projects

Triage issues, answer questions, and onboard contributors with organized ticket channels.

### Any Discord Server

If you've ever wished for a simple way to handle support requests, TenFour is for you.

---

## Comparison

| Feature | TenFour | Other Bots |
|---------|---------|------------|
| Setup Time | 60 seconds | 10-15 minutes |
| Web Dashboard | Not needed | Required |
| Modern UI | Buttons & Menus | Reactions |
| Transcripts | Beautiful HTML | Plain text |
| Self-Hosted | Yes | Sometimes |
| Open Source | Yes | Rarely |

---

## Getting Started

### Step 1: Deploy TenFour

Clone the repository and deploy to your preferred host:

```bash
git clone https://github.com/your-repo/tenfour
cd tenfour
npm install
```

### Step 2: Configure Environment

```bash
cp .env.example .env
# Add your Discord token, client ID, and database URL
```

### Step 3: Set Up Database

```bash
npm run db:push
```

### Step 4: Register Commands

```bash
npm run register
```

### Step 5: Start the Bot

```bash
npm run dev
```

### Step 6: Configure Your Server

Run `/setup_ten_four` in your Discord server and follow the wizard.

---

## Roadmap

### Current (v1)

- [x] Setup wizard
- [x] Ticket creation (button + slash command)
- [x] Claim, Add User, Close actions
- [x] HTML transcripts
- [x] Satisfaction ratings
- [x] Inactivity reminders
- [x] Category routing

### Future (v2)

- [ ] Analytics dashboard
- [ ] Response time tracking
- [ ] Canned responses
- [ ] Ticket priorities
- [ ] SLA monitoring

---

## Open Source

TenFour is open source under the MIT license. Contributions welcome.

- **Repository:** [GitHub](#)
- **Issues:** [Report bugs](#)
- **Discussions:** [Ask questions](#)

---

## Support

Yes, even the support bot needs support sometimes.

- **Documentation:** Comprehensive setup guide included
- **GitHub Issues:** For bugs and feature requests
- **Discord:** Join our community server

---

## Ready to Simplify Support?

TenFour is free, open source, and ready to deploy.

Your community is waiting. Your support team is ready.

**Set up TenFour in 60 seconds.**

---

*TenFour - Because support shouldn't be complicated.*
