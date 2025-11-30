---
title: "Transcripts"
weight: 4
description: "Automatic ticket history preservation for audit trails and quality review."
---

Every ticket generates a complete transcript when closed. Transcripts provide a permanent record of support interactions for audit trails, quality review, and training.

## What's Included

Transcripts capture the complete ticket history:

- **Messages** — Full text of every message in the ticket
- **Authors** — Who sent each message (username and ID)
- **Timestamps** — When each message was sent
- **Attachments** — Links to any files shared in the ticket
- **Embeds** — Content from any embedded messages

## Transcript Format

Transcripts are saved as text files with a clear, readable format:

```
=== TICKET TRANSCRIPT ===
Ticket: #0042
Created: 2024-01-15 14:30 UTC
Closed: 2024-01-15 15:45 UTC
Created by: username#1234

--- Messages ---

[14:30] username#1234:
Hi, I'm having trouble with my account.

[14:32] support_staff#5678:
Hi! I'd be happy to help. Can you tell me more about the issue?

[14:35] username#1234:
I can't access my premium features even though I subscribed.

...
```

## Where Transcripts Go

Transcripts are posted to your designated log channel as a file attachment. The embed includes:

- Ticket number
- Who created the ticket
- Who closed the ticket
- Duration the ticket was open
- Link to download the full transcript

## Message Limits

10-4 fetches up to **500 messages** per ticket for the transcript. For most support tickets, this is more than enough. If a ticket exceeds 500 messages, the most recent 500 are captured.

## Privacy Considerations

Transcripts contain the full conversation history. Consider:

- **Who has access** — Only staff with access to the log channel can see transcripts
- **Retention policy** — Decide how long to keep transcripts
- **Sensitive information** — Train staff to avoid requesting sensitive data in tickets when possible

## Using Transcripts

### Quality Review

Review transcripts to assess support quality:

- Response time
- Tone and professionalism
- Issue resolution
- Customer satisfaction

### Training

Use transcripts as training material for new support staff. Real examples are more valuable than hypothetical scenarios.

### Dispute Resolution

If there's ever a question about what was said, the transcript provides an authoritative record.

### Analytics

Track patterns across transcripts:

- Common issues
- Peak support times
- Resolution rates
