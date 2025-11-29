# Setup Guide

## Prerequisites

- Node.js 20+
- PostgreSQL database
- Discord bot application

## Creating a Discord Bot

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and give it a name
3. Go to the "Bot" section and click "Add Bot"
4. Copy the bot token (you'll need this later)
5. Under "Privileged Gateway Intents", enable:
   - Server Members Intent
   - Message Content Intent (optional, not currently used)

## Inviting the Bot

1. In the Developer Portal, go to "OAuth2" > "URL Generator"
2. Select scopes:
   - `bot`
   - `applications.commands`
3. Select bot permissions:
   - Manage Server
   - Manage Roles
   - Create Instant Invite
4. Copy the generated URL and open it in your browser
5. Select your server and authorize the bot

## Local Development

### 1. Clone and Install

```bash
git clone <repository-url>
cd plus-one
npm install
```

### 2. Set Up PostgreSQL

Create a database:

```bash
createdb plusone
```

Or use Docker:

```bash
docker run -d --name plusone-db \
  -e POSTGRES_DB=plusone \
  -e POSTGRES_PASSWORD=postgres \
  -p 5432:5432 \
  postgres:16
```

### 3. Configure Environment

Create a `.env` file (or export variables):

```bash
DISCORD_TOKEN=your-bot-token-here
DATABASE_URL=postgres://postgres:postgres@localhost:5432/plusone
```

### 4. Run Migrations

```bash
npm run build
npm run db:migrate
```

### 5. Start the Bot

For development (auto-reload):

```bash
npm run dev
```

For production:

```bash
npm run build
npm start
```

## Deploying to Fly.io

### 1. Install Fly CLI

```bash
# macOS
brew install flyctl

# Other platforms
curl -L https://fly.io/install.sh | sh
```

### 2. Login and Launch

```bash
fly auth login
fly launch
```

When prompted:
- Choose a unique app name
- Select a region close to your users
- Say "no" to setting up a Postgres database (we'll do it separately)
- Say "no" to deploying now

### 3. Create Postgres Database

```bash
fly postgres create --name plusone-db
fly postgres attach plusone-db
```

This automatically sets the `DATABASE_URL` secret.

### 4. Set Discord Token

```bash
fly secrets set DISCORD_TOKEN=your-bot-token-here
```

### 5. Deploy

```bash
fly deploy
```

### 6. Run Migrations

Connect to your database and run the schema:

```bash
fly postgres connect -a plusone-db
```

Then paste the contents of `src/db/schema.sql`.

### Monitoring

View logs:

```bash
fly logs
```

Check status:

```bash
fly status
```

## Initial Configuration

Once the bot is running in your server:

1. **Set who can create invites:**
   ```
   /plusone config privilege-add type:role value:<role-id>
   ```

2. **Configure quota mode:**
   ```
   /plusone config quota-mode mode:fixed
   /plusone config quota-fixed amount:3
   ```

3. **Optional: Enable trial invites:**
   ```
   /plusone config trial days:7 role:@TrialMember
   ```

4. **Verify configuration:**
   ```
   /plusone status
   ```

See [Commands](commands.md) for the full reference.
