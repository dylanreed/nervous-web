---
title: "plus one"
slug: "plusone"
weight: 5
tagline: "Grow your community without losing control."
subtitle: "Sustainable Growth for Private Communities"
intro: "Give your trusted members the power to invite others—with limits you control. plus one creates single-use Discord invites with optional trial periods, tracks who invited whom, and automatically manages temporary access. Perfect for private communities, exclusive servers, and invite-only spaces."
image: "plus-one.webp"
imageAlt: "plus one illustration"
imageStyle: "transform: scale(1.3);"
price: "Starting at $xx.xx/month"
ctaText: "Get plus one"
docsSlug: "plus-one"
features:
  - "Single-use invite links with quota limits"
  - "Trial invites with auto-expiring roles"
  - "Full invite tracking and audit logs"
  - "Flexible quota modes (fixed, tiered, earned, or replenishing)"

problem:
  intro: "Growing a private Discord server is a balancing act. Open invites flood your community with strangers. Closed invites put all the work on moderators. Neither approach scales."
  points:
    - "Open invites flood your community with strangers"
    - "Closed invites put all the work on moderators"
    - "No way to let trusted members vouch for new people"
    - "Anonymous invite codes float around the internet"
    - "Can't track who invited whom"

solution:
  intro: "plus one creates single-use Discord invite links that your members can share. Each invite is tracked, quota-limited, and optionally time-limited. You always know who invited whom, and you decide how many invites each member gets."
  sections:
    - title: "Controlled Invite Generation"
      text: "Members generate real Discord invite links through a simple slash command. Each link works once, then expires. No more anonymous invite codes floating around the internet."
    - title: "Flexible Quota System"
      text: "Choose how members earn their invites: <strong>Fixed</strong> — Everyone gets the same number. <strong>Tiered</strong> — Different roles get different quotas. <strong>Replenishing</strong> — Invites restore over time. <strong>Earned</strong> — Admins manually grant invites as rewards."
    - title: "Trial Invites"
      text: "Let new members prove themselves before getting full access. Trial invites grant a temporary role that automatically expires after a set period. Perfect for vetting new members, time-limited promotions, or 'try before you buy' community access."
    - title: "Complete Audit Trail"
      text: "See exactly who invited whom and when. Track pending invites, used invites, and expired invites. Identify your best recruiters and spot patterns."
    - title: "Privilege Control"
      text: "Define exactly who can create invites: specific roles, specific permissions, or individual users. Override quotas for special cases without changing your global settings."

commands:
  - category: "Member Commands"
    items:
      - "/invite create"
      - "/invite create trial:true"
      - "/invite list"
      - "/invite revoke"
  - category: "Admin Commands"
    items:
      - "/plusone config quota-mode"
      - "/plusone config quota-fixed"
      - "/plusone config quota-tier"
      - "/plusone config quota-replenish"
      - "/plusone config trial"
      - "/plusone config privilege-add"
      - "/plusone grant"
      - "/plusone status"
      - "/plusone audit"

builtRight:
  - "<strong>Real Discord invites</strong> — Uses Discord's native invite system"
  - "<strong>Automatic expiry</strong> — Single-use links that can't be reused"
  - "<strong>Full accountability</strong> — Every invite tracked to its creator"
  - "<strong>Flexible controls</strong> — From simple quotas to complex tiered systems"

bestFor:
  - "Exclusive Communities — Keep your server invite-only while empowering trusted members"
  - "Paid Communities — Give paying members invites; higher tiers get more"
  - "Gaming Guilds — Let officers invite recruits with trial access"
  - "Professional Networks — Control growth while rewarding active members"

getStarted:
  intro: "Set up plus one in minutes:"
  steps:
    - "Add plus one to your server"
    - "Run <code>/plusone status</code> to see the default configuration"
    - "Configure your quota mode and privileges"
    - "Your members can start creating invites immediately"
---
