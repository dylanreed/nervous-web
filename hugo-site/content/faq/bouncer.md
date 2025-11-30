---
title: "bouncer"
weight: 6
questions:
  - q: "What's the difference between timeout and quarantine?"
    a: "Timeout restricts a user's ability to send messages for a set period. Quarantine removes all their roles and assigns a quarantine role, completely isolating them. When quarantine ends, their original roles are automatically restored."
  - q: "Can I timeout someone for longer than Discord's 28-day limit?"
    a: "Yes! bouncer supports indefinite timeouts and any duration you need—30 minutes, 7 days, 60 days, or longer."
  - q: "What if I make a bulk role change mistake?"
    a: "bouncer keeps a 24-hour rollback window for bulk role operations. Use <code>/bulkrole rollback</code> to undo changes, with full operation history available."
  - q: "How does the pre-ban feature work?"
    a: "Use <code>/preban</code> with a user ID to ban known troublemakers before they even join your server. Great for dealing with raiders or users banned from partner servers."
---
