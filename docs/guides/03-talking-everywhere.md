# 03 · Talking everywhere

In the app, on Discord, on Telegram or from your phone: your companion is the same everywhere, and it asks you
before it does anything big. 💬

**Conversations** has a tab for each place: **Chat** (here in the app), **Messages** (its Sneed SMS mailbox),
**Discord** and **Phone** (Telegram and texts from your phone).

## Chat in the app

1. Open **Conversations → Chat** and pick your companion at the top.
2. Pick a brain chip above the box (the first free one is fine).
3. Type and press **Send**. **Stop generating** stops a reply mid-way; your draft is kept if you leave.

**Change settings by asking.** "Rename yourself to Aria", "quiet hours 23 to 7", "set my time zone to
Toronto", "use claude", "what are my settings?". Small things happen at once; bigger ones (the brain, its
budget, its public name) wait for your yes; and keys, backups, security and payments are changed in the app
only (it tells you where).

## Approvals: you stay in charge ✅

Anything that sends a message, sends tokens, votes, buys or changes settings **waits for your OK**, unless you
allowed it. You'll see it:

- on **Today → Waiting for you**, for every companion;
- under **Approvals** on the companion's Overview;
- right in Chat, under the reply.

Press **Approve** to run it once, or **Don't** to drop it. What you approve is exactly what is sent: an
approval shows the whole text and who it really goes to. Unanswered approvals expire after a week.

From your phone: reply **yes** within 10 minutes, or text `pending` and then `yes 2` / `no 2`.

### What it does on its own

**Behaviour → Actions & autonomy** sets two things:

- **On a new message**: **Off** (it only acts when you ask; the default), **Propose** (it suggests and waits
  for your OK), or **Auto** (it runs the actions you allowed, within caps you set).
- **When you're using it**: **Approval required for every write** (the default), **Allowed actions run
  automatically, the rest wait**, or **All actions run automatically**.

A new companion starts with nothing allowed on its own. Sending tokens is never automatic until you add it and
set a spend cap, and buying always waits for you. **Starter profiles** (Conversation only, Remember and share,
Assisted actions) set these in one go, show exactly what will change, and have **Undo**. **Try this sentence**
shows who would answer a message and whether it would need your OK, without sending anything.

Two handy switches on the same card: **Answer my phone even when autonomy is off**, and **Reply to strangers
(in character, no tools)**, which is off for a new companion.

## Discord 🎮

Your companion can have its own Discord bot. In your server it chats with your members; in a private message
(DM) with you, it's your whole hub.

![The Discord card on a companion's Connections tab, before a token is saved](../../assets/screenshots/discord-card.png)

**You'll need:** a Discord account (turn on two-factor login), a Discord server you own (in Discord: **+** →
**Create My Own**; it's free), and Waifu AI running on this PC.

**The easy way:** the companion's **Connections → Discord → Guided setup** walks you through every step and
checks each one.

**By hand:**

1. Go to discord.com/developers, press **New Application**, name it after your companion, press **Create**.
2. Open **Bot**. Add a picture if you like. Turn **Public Bot** off. Leave **Message Content** off.
3. Press **Reset Token**, confirm, and **Copy**. Never share this token.
4. In Waifu AI, on **Connections → Discord**, paste it under **Bot token** and press **Save**, then **Test**.
5. Press **Invite to a server**, pick your server and press **Authorize**.
6. Under **To finish setting up**, press **Add this server** (or **allow #channel**).
7. **Pair my Discord account**: send the bot the `pair …` line it shows, in a DM. Now it knows you're you.

**Good to know:**

- In a channel it answers when mentioned (or answers everything in a **listen** channel, which needs Message
  Content switched on in the Developer Portal).
- Everyone else in your server is a **guest**: chat only, no tools, no memory, no wallet. **Guest limits** caps
  their daily cost (default $1.00 a day).
- On Discord, anything more than a simple setting (a message, a post, a vote, a reminder, a payment) waits for
  your OK **in the app or on your phone**. "yes" on Discord never approves it.
- Money asked for in a server channel moves to your DM.
- Send the bot a picture and a Claude or ChatGPT brain can look at it. Pictures are never saved.
- The bot is online only while Waifu AI runs.

## Telegram 📱

The easiest way to text a companion from your phone, with no send limits.

The **Telegram** card on **Connections** has a **Guided setup**. Or by hand:

1. In Telegram, open **BotFather**, send `/newbot` and answer its questions. Copy the token.
2. In Waifu AI, open **Settings → Connections → Your phone → Telegram (optional)**, paste the token and press
   **Save token**.
3. Pick the **Identity that answers** and press **Test**.
4. From your phone, message the bot. It says it doesn't know you yet.
5. Back in Waifu AI, under **Waiting**, press **Trust this chat**.

Done: that chat is now you. Strangers who find your bot get one polite sentence and nothing else. One Telegram
bot per hub.

## Your phone, over Sneed SMS

Sneed SMS is a messaging service on the Internet Computer that your companions use as their mailbox. You can
write to them from Sneed Hub on your phone, signed in with Internet Identity.

1. From your phone, send one of your companions a Sneed message (to its principal).
2. In Waifu AI, open **Conversations → Messages**.
3. On that message, press **Trust as my phone**.

Your phone is now an **owner device**: every companion answers it with full access, and it can approve things.
**Settings → Connections → Your phone → Guided setup** does this with you.

⚠️ Sneed messages are **not encrypted**: treat them like postcards. Each sender can send one every 10 minutes
(Sneed Premium allows one a minute). Messages between your own companions stay inside the hub and skip the
limit.

### Texts your phone understands

| Text | What it does |
|---|---|
| `pending`, then `yes 2` / `no 2` | Answer what's waiting for you |
| `yes` / `no` | Answer the one thing asked in the last 10 minutes |
| `remind me at 7 to call mum` | Set a reminder |
| `vacation on` / `vacation off` | Nobody acts on anything while you're away |
| `pause Aria` / `resume Aria` | Stop or restart one companion acting on its own |
| `stop all writes` / `resume writes` | The emergency brake for the whole hub |
| `run a dream` / `did the dream work?` | Tidy the memory now, or hear how the last one went |
| `forget former names` | Let go of old names after a rename |
| `help` | The list |

A sentence that only *contains* a command word is just talk: "don't pause Aria" pauses nothing.

**What your phone is told:** **Settings → Notifications & away** has quiet hours, vacation mode, a morning
callback and the **owner feed** (a short digest of what your companions did, off until you switch it on).

## When your companions talk to each other

Send one a message as another (or just ask: "ask Mika what she thinks"). The other answers in its own voice,
using the shared memory. Between companions on the same hub a turn takes seconds. They stop by themselves when
only goodbyes are left, and after 8 replies each, so two chatty AIs can't run up your bill.

Next: [Memory and dreams](04-memory-and-dreams.md).
