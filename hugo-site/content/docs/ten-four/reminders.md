---
title: "Inactivity Reminders"
weight: 5
description: "Automatic alerts to prevent tickets from going cold."
---

10-4 monitors ticket activity and sends reminders when tickets sit idle too long. This prevents support requests from falling through the cracks.

## How It Works

The bot runs hourly checks on all open tickets:

1. Checks the last activity timestamp for each ticket
2. Compares against your configured threshold
3. Sends a reminder to tickets that exceed the threshold
4. Tracks which tickets have been reminded to avoid duplicates

## What Counts as Activity

Activity is tracked when:

- A message is sent in the ticket channel
- Any user (creator or support) sends a message

The timestamp updates with every message, resetting the inactivity timer.

## Reminder Message

When a ticket goes inactive, 10-4 posts a reminder that:

- Mentions your support role
- Asks the user if they still need help
- Provides options to keep the ticket open or close it

This serves two purposes:

1. **Alerts support** — Your team sees tickets that need attention
2. **Checks with user** — The user can close resolved tickets they forgot about

## Configuration

During setup, you can configure:

- **Reminder threshold** — How many hours of inactivity before a reminder is sent
- **Support role to mention** — Who gets pinged in the reminder

Common configurations:

| Community Type | Threshold | Notes |
|----------------|-----------|-------|
| High-volume support | 4-8 hours | Quick turnaround expected |
| Standard community | 24 hours | Daily check-in on tickets |
| Low-volume/hobbyist | 48-72 hours | More relaxed expectations |

## Best Practices

### Set Realistic Thresholds

Match your threshold to your team's availability. Don't set 4-hour reminders if you can only check tickets once a day.

### Monitor Reminder Frequency

If you're getting too many reminders, either:

- Your threshold is too short
- You need more support staff
- Tickets are being left open after resolution

### Use Reminders as a Metric

Track how often reminders fire. Frequent reminders might indicate:

- Understaffing
- Need for better ticket routing
- Training opportunities

### Close Resolved Tickets

Train your team to close tickets promptly after resolution. Open tickets continue to be monitored and can generate unnecessary reminders.

## Disabling Reminders

If you don't want inactivity reminders, you can disable them during setup. However, we recommend keeping them enabled—they're a safety net that catches forgotten tickets.
