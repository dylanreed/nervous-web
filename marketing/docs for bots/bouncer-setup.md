# Bouncer Bot Setup Guide

This guide walks you through setting up Bouncer Bot from scratch, including creating the Discord application, configuring your environment, and deploying the bot.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Discord Application Setup](#discord-application-setup)
3. [Local Development Setup](#local-development-setup)
4. [Database Setup](#database-setup)
5. [Redis Setup](#redis-setup)
6. [Environment Configuration](#environment-configuration)
7. [Running the Bot](#running-the-bot)
8. [Server Configuration](#server-configuration)
9. [Production Deployment](#production-deployment)
10. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **PostgreSQL 14+** - [Download here](https://www.postgresql.org/download/)
- **Redis 6+** - [Download here](https://redis.io/download/)
- **Git** - [Download here](https://git-scm.com/)

Verify your installations:

```bash
node --version    # Should be v18.x.x or higher
npm --version     # Should be 8.x.x or higher
psql --version    # Should be 14.x or higher
redis-cli --version  # Should be 6.x or higher
```

---

## Discord Application Setup

### Step 1: Create a Discord Application

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Click **New Application** in the top right
3. Enter a name for your bot (e.g., "Bouncer Bot")
4. Accept the Developer Terms of Service
5. Click **Create**

### Step 2: Configure the Bot

1. In your application, navigate to the **Bot** section in the left sidebar
2. Click **Add Bot** and confirm
3. Under the bot's username, click **Reset Token**
4. Copy and save this token securely - you'll need it for your `.env` file

> **Security Warning:** Never share your bot token or commit it to version control. Anyone with the token can control your bot.

### Step 3: Configure Privileged Gateway Intents

Still in the **Bot** section, scroll down to **Privileged Gateway Intents** and enable:

- **Server Members Intent** - Required for member events and bulk role operations
- **Message Content Intent** - Required for message wipe functionality

Click **Save Changes**.

### Step 4: Get Your Application ID

1. Navigate to **General Information** in the left sidebar
2. Copy the **Application ID** (also called Client ID)
3. Save this for your `.env` file

### Step 5: Generate the Invite URL

1. Navigate to **OAuth2** > **URL Generator**
2. Under **Scopes**, select:
   - `bot`
   - `applications.commands`
3. Under **Bot Permissions**, select:
   - View Channels
   - Send Messages
   - Embed Links
   - Read Message History
   - Manage Messages
   - Manage Roles
   - Moderate Members
   - Ban Members
   - Kick Members
4. Copy the generated URL at the bottom
5. Open this URL in your browser to invite the bot to your server

Alternatively, use this URL template (replace `YOUR_CLIENT_ID`):
```
https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=1376537225286&scope=bot%20applications.commands
```

---

## Local Development Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/bouncer-bot.git
cd bouncer-bot
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs all required packages including:
- `discord.js` - Discord API library
- `@prisma/client` - Database ORM
- `ioredis` - Redis client
- TypeScript and development tools

### Step 3: Generate Prisma Client

```bash
npm run db:generate
```

This generates the TypeScript types for your database models.

---

## Database Setup

### Option A: Local PostgreSQL

#### macOS (using Homebrew)

```bash
# Install PostgreSQL
brew install postgresql@14

# Start PostgreSQL service
brew services start postgresql@14

# Create database
createdb bouncer
```

#### Ubuntu/Debian

```bash
# Install PostgreSQL
sudo apt update
sudo apt install postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database
sudo -u postgres createdb bouncer
```

#### Windows

1. Download and install PostgreSQL from https://www.postgresql.org/download/windows/
2. During installation, set a password for the `postgres` user
3. Open pgAdmin or psql and create a database called `bouncer`

#### Create a Database User (Recommended)

```bash
# Connect to PostgreSQL
psql -U postgres

# Create user and database
CREATE USER bouncer WITH PASSWORD 'your_secure_password';
CREATE DATABASE bouncer OWNER bouncer;
GRANT ALL PRIVILEGES ON DATABASE bouncer TO bouncer;

# Exit
\q
```

Your connection string will be:
```
postgresql://bouncer:your_secure_password@localhost:5432/bouncer
```

### Option B: Cloud PostgreSQL

#### Supabase (Free Tier Available)

1. Create an account at [Supabase](https://supabase.com/)
2. Create a new project
3. Go to **Settings** > **Database**
4. Copy the connection string (use the "Connection string" under "Connection pooling" for production)

#### Railway (Free Tier Available)

1. Create an account at [Railway](https://railway.app/)
2. Create a new project
3. Add a PostgreSQL database
4. Copy the connection string from the database settings

#### Neon (Free Tier Available)

1. Create an account at [Neon](https://neon.tech/)
2. Create a new project
3. Copy the connection string from the dashboard

### Initialize the Database

After setting up PostgreSQL, push the schema:

```bash
npm run db:push
```

This creates all the necessary tables in your database.

---

## Redis Setup

### Option A: Local Redis

#### macOS (using Homebrew)

```bash
# Install Redis
brew install redis

# Start Redis service
brew services start redis

# Verify it's running
redis-cli ping
# Should respond: PONG
```

#### Ubuntu/Debian

```bash
# Install Redis
sudo apt update
sudo apt install redis-server

# Start Redis service
sudo systemctl start redis-server
sudo systemctl enable redis-server

# Verify it's running
redis-cli ping
# Should respond: PONG
```

#### Windows

1. Download Redis from https://github.com/microsoftarchive/redis/releases
2. Extract and run `redis-server.exe`

Or use WSL (Windows Subsystem for Linux) and follow the Ubuntu instructions.

#### Docker

```bash
docker run -d --name redis -p 6379:6379 redis:7-alpine
```

Your connection string will be:
```
redis://localhost:6379
```

### Option B: Cloud Redis

#### Upstash (Free Tier Available)

1. Create an account at [Upstash](https://upstash.com/)
2. Create a new Redis database
3. Copy the connection string (use the `redis://` format)

#### Redis Cloud (Free Tier Available)

1. Create an account at [Redis Cloud](https://redis.com/try-free/)
2. Create a new database
3. Copy the connection string

---

## Environment Configuration

Create a `.env` file in the project root:

```bash
cp .env.example .env  # If example exists, or create new
```

Edit the `.env` file with your values:

```env
# Discord Configuration (Required)
DISCORD_TOKEN=your_bot_token_here
DISCORD_CLIENT_ID=your_application_id_here

# Database Configuration (Required)
DATABASE_URL=postgresql://bouncer:your_password@localhost:5432/bouncer

# Redis Configuration (Required)
REDIS_URL=redis://localhost:6379

# Environment (Optional)
NODE_ENV=development

# Logging (Optional)
LOG_LEVEL=info
```

### Environment Variables Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `DISCORD_TOKEN` | Yes | Bot token from Discord Developer Portal | `MTIz...abc` |
| `DISCORD_CLIENT_ID` | Yes | Application ID from Discord Developer Portal | `123456789012345678` |
| `DATABASE_URL` | Yes | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |
| `REDIS_URL` | Yes | Redis connection string | `redis://localhost:6379` |
| `NODE_ENV` | No | Environment mode | `development` or `production` |
| `LOG_LEVEL` | No | Logging verbosity | `debug`, `info`, `warn`, `error` |

---

## Running the Bot

### Development Mode (with hot reload)

```bash
npm run dev
```

This uses `tsx` to watch for file changes and automatically restart the bot.

### Production Mode

```bash
# Build TypeScript
npm run build

# Start the bot
npm start
```

### Verify the Bot is Running

You should see output similar to:

```
[INFO] Connecting to database...
[INFO] Database connected
[INFO] Connecting to Redis...
[INFO] Redis connected
[INFO] Logging in to Discord...
[INFO] Logged in as Bouncer Bot#1234
[INFO] Registered 17 slash commands
[INFO] Scheduler started
```

The bot should now appear online in your Discord server.

---

## Server Configuration

After the bot is online in your server, configure it with these slash commands:

### 1. Set Up Mod Logging (Recommended)

Create a channel for moderation logs, then:

```
/config log-channel #mod-logs
```

All moderation actions will now be logged to this channel.

### 2. Set Up Quarantine Role (Required for Quarantine Feature)

Create a role called "Quarantined" with minimal permissions, then:

```
/config quarantine-role @Quarantined
```

**Quarantine Role Setup Tips:**
- Place the role below the bot's role in the hierarchy
- Remove all channel permissions for this role
- Consider creating a "quarantine" channel only this role can see

### 3. Set Up Leaver Alerts (Optional)

If you want to be notified when watched users leave:

```
/leaveralert #mod-alerts
```

### 4. Create Server Rules (Optional)

Define rules that can be referenced in warnings:

```
/rules create 1 "Be Respectful" "Treat all members with respect and courtesy."
/rules create 2 "No Spam" "Do not spam messages, emojis, or mentions."
/rules create 3 "No NSFW" "Keep all content appropriate for all ages."
```

### 5. Verify Configuration

View your current configuration:

```
/config view
```

---

## Production Deployment

### Option A: Docker

#### Build the Image

```bash
docker build -t bouncer-bot .
```

#### Run with Docker

```bash
docker run -d \
  --name bouncer-bot \
  --restart unless-stopped \
  -e DISCORD_TOKEN=your_token \
  -e DISCORD_CLIENT_ID=your_client_id \
  -e DATABASE_URL=your_database_url \
  -e REDIS_URL=your_redis_url \
  -e NODE_ENV=production \
  bouncer-bot
```

#### Docker Compose

Create a `docker-compose.yml`:

```yaml
version: '3.8'

services:
  bot:
    build: .
    restart: unless-stopped
    environment:
      - DISCORD_TOKEN=${DISCORD_TOKEN}
      - DISCORD_CLIENT_ID=${DISCORD_CLIENT_ID}
      - DATABASE_URL=${DATABASE_URL}
      - REDIS_URL=redis://redis:6379
      - NODE_ENV=production
    depends_on:
      - redis
      - db

  db:
    image: postgres:16-alpine
    restart: unless-stopped
    environment:
      - POSTGRES_USER=bouncer
      - POSTGRES_PASSWORD=your_password
      - POSTGRES_DB=bouncer
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    restart: unless-stopped
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

Run with:
```bash
docker-compose up -d
```

### Option B: Fly.io

#### Install Fly CLI

```bash
# macOS
brew install flyctl

# Windows
powershell -Command "iwr https://fly.io/install.ps1 -useb | iex"

# Linux
curl -L https://fly.io/install.sh | sh
```

#### Login and Launch

```bash
# Login to Fly.io
fly auth login

# Launch the app (first time)
fly launch
```

#### Set Secrets

```bash
fly secrets set DISCORD_TOKEN=your_token
fly secrets set DISCORD_CLIENT_ID=your_client_id
fly secrets set DATABASE_URL=your_database_url
fly secrets set REDIS_URL=your_redis_url
```

#### Deploy

```bash
fly deploy
```

#### Monitor

```bash
# View logs
fly logs

# Check status
fly status
```

### Option C: Railway

1. Create a new project at [Railway](https://railway.app/)
2. Connect your GitHub repository
3. Add PostgreSQL and Redis services
4. Set environment variables in the Railway dashboard
5. Railway will automatically deploy on push to main

### Option D: VPS (DigitalOcean, Linode, etc.)

1. Create a VPS with Ubuntu 22.04+
2. Install Node.js, PostgreSQL, and Redis
3. Clone your repository
4. Set up environment variables
5. Use PM2 to manage the process:

```bash
# Install PM2
npm install -g pm2

# Build the bot
npm run build

# Start with PM2
pm2 start dist/index.js --name bouncer-bot

# Save process list
pm2 save

# Set up startup script
pm2 startup
```

---

## Troubleshooting

### Bot Won't Start

**Error: "Missing Access" or "Missing Permissions"**
- Ensure the bot has all required permissions in your server
- Check that the bot's role is high enough in the role hierarchy

**Error: "Used disallowed intents"**
- Enable Server Members Intent and Message Content Intent in the Developer Portal

**Error: "Invalid token"**
- Regenerate your bot token in the Developer Portal
- Update your `.env` file with the new token

### Database Issues

**Error: "Connection refused"**
- Ensure PostgreSQL is running: `sudo systemctl status postgresql`
- Check your connection string format
- Verify the database exists

**Error: "Prisma schema not in sync"**
```bash
npm run db:push
```

### Redis Issues

**Error: "Connection refused"**
- Ensure Redis is running: `redis-cli ping`
- Check your Redis URL format

### Commands Not Appearing

**Slash commands not visible in Discord:**
- Wait a few minutes - Discord caches commands
- Try restarting Discord
- Verify the bot has `applications.commands` scope

### Permission Errors

**"I cannot moderate this user"**
- The target user has a role equal to or higher than the bot
- The target is the server owner (cannot be moderated)

**"You cannot moderate this user"**
- Your role is not high enough to moderate the target user
- You lack the required Discord permissions

### Logs and Debugging

Enable debug logging:
```env
LOG_LEVEL=debug
```

View logs in development:
```bash
npm run dev
```

View logs in production (Docker):
```bash
docker logs -f bouncer-bot
```

---

## Next Steps

After setup is complete:

1. Review the [Commands Reference](./commands.md) for all available commands
2. Review the [Permissions Guide](./permissions.md) for permission requirements
3. Configure your server settings using `/config`
4. Set up moderation logging to track all actions
5. Create server rules for consistent moderation

---

## Getting Help

If you encounter issues not covered here:

1. Check the [GitHub Issues](https://github.com/yourusername/bouncer-bot/issues)
2. Review the main [README](../README.md)
3. Open a new issue with:
   - Your error message
   - Steps to reproduce
   - Your environment (OS, Node version, etc.)
