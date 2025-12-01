---
title: "Bouncer Pricing"
layout: "pricing"
bot: "bouncer"
botTitle: "bouncer"
image: "norris-security.webp"
tagline: "Because your community deserves better than chaos."
tiers:
  - name: "Starter"
    price: "$5"
    features:
      - "Warn, mute, kick, ban"
      - "Moderation logging"
      - "Basic timeouts (up to 28 days)"
      - "Role hierarchy protection"
      - "Owner protection"
  - name: "Pro"
    price: "$10"
    features:
      - "Everything in Starter"
      - "Extended timeouts (beyond 28 days)"
      - "Quarantine system with role restoration"
      - "Searchable mod history"
      - "Action reversal with audit trail"
      - "Mod reports & analytics"
  - name: "Enterprise"
    price: "$12"
    features:
      - "Everything in Pro"
      - "Bulk role operations"
      - "24-hour bulk rollback"
      - "Preban by user ID"
      - "Watchlist with alerts"
      - "CSV export for compliance"
      - "Priority support"
comparison:
  - feature: "Warn/Mute/Kick/Ban"
    starter: true
    pro: true
    enterprise: true
  - feature: "Moderation logging"
    starter: true
    pro: true
    enterprise: true
  - feature: "Basic timeouts (≤28 days)"
    starter: true
    pro: true
    enterprise: true
  - feature: "Role hierarchy protection"
    starter: true
    pro: true
    enterprise: true
  - feature: "Owner protection"
    starter: true
    pro: true
    enterprise: true
  - feature: "Extended timeouts (>28 days)"
    starter: false
    pro: true
    enterprise: true
  - feature: "Quarantine system"
    starter: false
    pro: true
    enterprise: true
  - feature: "Searchable mod history"
    starter: false
    pro: true
    enterprise: true
  - feature: "Action reversal with audit"
    starter: false
    pro: true
    enterprise: true
  - feature: "Mod reports & analytics"
    starter: false
    pro: true
    enterprise: true
  - feature: "Bulk role operations"
    starter: false
    pro: false
    enterprise: true
  - feature: "24-hour bulk rollback"
    starter: false
    pro: false
    enterprise: true
  - feature: "Preban by user ID"
    starter: false
    pro: false
    enterprise: true
  - feature: "Watchlist with alerts"
    starter: false
    pro: false
    enterprise: true
  - feature: "CSV export"
    starter: false
    pro: false
    enterprise: true
  - feature: "Priority support"
    starter: false
    pro: false
    enterprise: true
---
