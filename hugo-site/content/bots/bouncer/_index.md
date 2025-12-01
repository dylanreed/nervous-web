---
title: "bouncer"
slug: "bouncer"
weight: 4
tagline: "Because your community deserves better than chaos."
subtitle: "Enterprise-grade Discord moderation with complete audit trails."
intro: "Enterprise-grade Discord moderation with complete audit trails. Features timeouts (including beyond Discord's 28-day limit), intelligent quarantine with automatic role restoration, rule-linked warnings, bulk role management with 24-hour rollback, pre-ban protection, and comprehensive moderation reports with CSV export. Built for communities that need accountability, consistency, and control."
image: "norris-security.webp"
imageAlt: "bouncer illustration"
price: "$14.99/month"
ctaText: "Get bouncer"
docsSlug: "bouncer"
features:
  - "Timeouts & Quarantine with auto-expiry"
  - "Complete moderation history & analytics"
  - "Bulk role operations with rollback"
  - "Pre-ban & watchlist for raid protection"
  - "Rule-linked warning system"
  - "CSV export for compliance"

problem:
  intro: "Managing a growing Discord server is chaos:"
  points:
    - "Mods forget why someone was warned three months ago"
    - "Bulk role updates go wrong with no way to undo them"
    - "Raiders slip through because you can't pre-ban by ID"
    - "Discord's 28-day timeout limit isn't enough for serious cases"
    - "No visibility into which mods are active or what rules get broken most"

solution:
  intro: "bouncer is a moderation powerhouse designed for servers that need more than basic tools."
  sections:
    - title: "Flexible Discipline"
      text: "<strong>Timeouts</strong> that work your way—30 minutes, 7 days, or indefinite. Go beyond Discord's 28-day limit when you need to. <strong>Quarantine</strong> isolates problem members by removing all roles and assigning a quarantine role. When it's over, their original roles are automatically restored. No spreadsheets required. <strong>Warnings</strong> link directly to your server rules. Track which rules get broken and how often."
    - title: "Complete History"
      text: "Every action is logged. Every action can be searched. <code>/modhistory @user</code> shows you everything—warnings, timeouts, bans, the works—with pagination for long histories. Made a mistake? <code>/reverse</code> undoes it and logs that too."
    - title: "Bulk Operations Without Fear"
      text: "Need to add a role to everyone who joined after a certain date? <code>/bulkrole</code> handles it. Made an error? Rollback within 24 hours. Full operation history included."
    - title: "Raid Protection"
      text: "<code>/preban</code> lets you ban known troublemakers by user ID before they ever join. <code>/watchlist</code> monitors suspicious members and alerts you when they leave."
    - title: "Actionable Reports"
      text: "<code>/modreport</code> generates analytics: actions by type, top moderators by activity, most moderated users, and rule violation breakdown. Export to CSV for external analysis or share the embed in your staff channel."

commands:
  - category: "Timeouts"
    items:
      - "/timeout"
      - "/untimeout"
      - "/timeouts-list"
  - category: "Quarantine"
    items:
      - "/quarantine"
      - "/unquarantine"
      - "/quarantine-list"
  - category: "Warnings"
    items:
      - "/warn"
      - "/reverse"
  - category: "History"
    items:
      - "/modhistory"
      - "/modreport"
  - category: "Bulk Roles"
    items:
      - "/bulkrole add"
      - "/bulkrole remove"
      - "/bulkrole rollback"
      - "/bulkrole history"
  - category: "Messages"
    items:
      - "/wipe"
  - category: "Protection"
    items:
      - "/preban"
      - "/watchlist"
      - "/leaveralert"
  - category: "Rules"
    items:
      - "/rules list"
      - "/rules add"
      - "/rules remove"
  - category: "Config"
    items:
      - "/config log-channel"
      - "/config quarantine-role"
      - "/config view"

builtRight:
  - "<strong>Permission-aware</strong> — Can't moderate users with equal or higher roles"
  - "<strong>Owner protected</strong> — Server owners can never be moderated"
  - "<strong>Auto-expiry</strong> — Timeouts and quarantines end on schedule"
  - "<strong>Audit-ready</strong> — Every action logged with moderator, reason, and timestamp"

bestFor:
  - "Large gaming communities"
  - "Creator and streamer servers"
  - "Educational Discord servers"
  - "Professional communities needing compliance"
  - "Any server with a moderation team"

getStarted:
  intro: "Add bouncer to your server and run:"
  steps:
    - "<code>/config log-channel #mod-logs</code> — Set your logging channel"
    - "<code>/config quarantine-role @Quarantine</code> — Set your quarantine role"
    - "Start moderating with confidence"
---
