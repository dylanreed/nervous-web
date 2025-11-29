# Permissions

## Bot Permissions

Plus One requires the following Discord permissions to function:

### Required Permissions

| Permission | Why It's Needed |
|------------|-----------------|
| **Manage Server** | Read server invites to track which invite was used when members join |
| **Manage Roles** | Add and remove trial roles from members |
| **Create Instant Invite** | Generate invite links on behalf of users |

### Permission Integer

When generating an OAuth2 invite URL, use permission integer: `268435488`

This is calculated as:
- Manage Server (32)
- Manage Roles (268435456)
- Create Instant Invite (1)

### OAuth2 Scopes

The bot requires these scopes:
- `bot` - Standard bot functionality
- `applications.commands` - Slash command registration

## Privileged Intents

Enable these in the Discord Developer Portal under Bot > Privileged Gateway Intents:

| Intent | Why It's Needed |
|--------|-----------------|
| **Server Members** | Detect when members join/leave to track invite usage and manage trials |

## Role Hierarchy

For trial roles to work, the bot's highest role must be **above** the trial role in the server's role list.

```
Bot Role        <- Must be here or higher
Trial Role      <- The role granted to trial members
@everyone
```

If the bot's role is below the trial role, it cannot add or remove that role from members.

## User Permissions

### Admin Commands

All `/plusone` commands require **Manage Server** permission.

### Invite Commands

Who can use `/invite` commands is configurable via privilege rules:

**Default behavior** (no rules configured):
- Users with Manage Server permission can create invites

**Custom rules** can be added for:
- Specific roles
- Specific permissions
- Specific users

Example configurations:

```
# Allow anyone with the "Member" role
/plusone config privilege-add type:role value:<member-role-id>

# Allow anyone who can moderate members
/plusone config privilege-add type:permission value:MODERATE_MEMBERS

# Allow a specific trusted user
/plusone config privilege-add type:user value:<user-id>
```

### Available Permission Values

When using `type:permission`, these values are recognized:

- `ADMINISTRATOR`
- `MANAGE_GUILD`
- `MANAGE_ROLES`
- `KICK_MEMBERS`
- `BAN_MEMBERS`
- `MODERATE_MEMBERS`

## Troubleshooting

### "Cannot create trial invites"

The bot cannot manage the trial role. Check:
1. Bot has Manage Roles permission
2. Bot's highest role is above the trial role

### "Failed to create invite"

The bot cannot create invites in this channel. Check:
1. Bot has Create Instant Invite permission
2. Channel permissions don't override this

### Invite tracking not working

The bot cannot read server invites. Check:
1. Bot has Manage Server permission
2. Privileged intents are enabled in Developer Portal
