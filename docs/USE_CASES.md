<p align="center">
  <img src="../assets/waifu-ai-hero.png" alt="The Waifu AI Desktop crew" width="70%">
</p>

<h1 align="center">📘 Waifu AI Desktop: Use Cases</h1>

<p align="center"><b>Ten case studies, from one companion on a desk to fifty bots across a team.<br>
How people set up Waifu AI Desktop, what each setup costs, and where the limits are.</b></p>

<p align="center">
  <a href="../README.md">🏠 Home</a> ·
  <a href="guides/README.md">📖 User guides</a> ·
  <a href="FAQ.md">❓ FAQ</a> ·
  <a href="NETWORK.md">🌐 The Waifu AI Network</a>
</p>

---

## About this paper

Waifu AI Desktop is one app with many shapes. The same building blocks make a quiet desk buddy, a
private notebook that never touches the cloud, or a network of bots run by a whole team. This paper walks through
**ten case studies** in three groups:

| Group | Case studies | Size |
|---|---|---|
| 🌱 **Simple** | 1 to 4 | 1 or 2 companions, set up in an evening |
| ⚙️ **Advanced** | 5 to 7 | 3 to 4 identities, 1 to 2 Hologram Companions, automation and approvals |
| 🏢 **Enterprise** | 8 to 10 | 14 to 50 identities, several hubs, a team of people |

Every case study uses features that exist in **Waifu AI Desktop v0.99.14**. Where a setup reaches a limit of the
app, we say so and show how the case study works around it. The people and businesses are illustrations, not
customers.

### The building blocks

| Block | What it is | Where to read more |
|---|---|---|
| 💖 **Hub** | The app on your Windows PC. Everything runs here. One person, one hub, is the usual setup. | [Getting started](guides/01-getting-started.md) |
| 🤖 **AI identity** | A companion with its own name, memory, key and personality. No device needed. | [Companions and brains](guides/02-companions-and-brains.md) |
| ✨ **Hologram Companion** | A companion with a body: a device on your Wi-Fi that speaks, rings alarms and changes the lights. | [Your Hologram Companion](guides/05-your-hologram-companion.md) |
| 🧠 **Brain** | What thinks for a companion: the free on-chain AI, a local model on your PC, or Claude / ChatGPT with your key and a monthly budget. | [Companions and brains](guides/02-companions-and-brains.md) |
| 🎼 **Orchestrator** | One identity per hub that runs jobs across your other identities, inside limits you set. | [Companions and brains](guides/02-companions-and-brains.md) |
| 💬 **Channels** | The app's Chat, a Discord bot per identity, one Telegram bot per hub, and Sneed SMS from your phone. | [Talking everywhere](guides/03-talking-everywhere.md) |
| ✅ **Approvals** | Anything that sends, spends or changes things waits for your OK in the app or on your phone. | [Money and safety](guides/06-money-and-safety.md) |
| 🗂️ **Memory bank** | One shared memory for all the companions you enroll (optional). | [Memory and dreams](guides/04-memory-and-dreams.md) |
| 🔌 **Connected apps** | Your own scripts and AI tools can talk to a companion through the hub's local tool API or MCP, with a key you control. | [FAQ](FAQ.md) |

---

## At a glance

```mermaid
xychart-beta
    title "Identities per case study"
    x-axis ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    y-axis "Identities" 0 --> 55
    bar [1, 2, 1, 2, 3, 4, 3, 50, 16, 14]
```

```mermaid
xychart-beta
    title "Monthly AI budgets set, in US dollars (the ceiling, not the bill)"
    x-axis ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    y-axis "USD per month" 0 --> 250
    bar [0, 20, 0, 20, 45, 45, 50, 220, 160, 130]
```

A monthly budget is a **ceiling** you set per identity. When an identity reaches it, the free brain answers until
the 1st. Most months cost well under the ceiling. Free brains (the on-chain AI and local models) cost nothing.

```mermaid
quadrantChart
    title How independent vs how big
    x-axis "Few identities" --> "Many identities"
    y-axis "You approve everything" --> "Runs on its own"
    quadrant-1 "Automated fleets"
    quadrant-2 "Power users"
    quadrant-3 "Personal"
    quadrant-4 "Supervised teams"
    "Case 1 Desk buddy": [0.08, 0.15]
    "Case 2 Duo": [0.15, 0.25]
    "Case 3 Private notebook": [0.08, 0.1]
    "Case 4 Memory keeper": [0.15, 0.35]
    "Case 5 Trader": [0.3, 0.6]
    "Case 6 Streamer": [0.35, 0.75]
    "Case 7 Developer": [0.3, 0.55]
    "Case 8 Influencer": [0.95, 0.7]
    "Case 9 Retailer": [0.75, 0.45]
    "Case 10 Esports org": [0.7, 0.4]
```

---

# 🌱 Simple setups

## Case study 1: The desk buddy

**Who:** Mia, a student. She wants a cute companion on her desk that wakes her up, reminds her about classes and chats
in the evening. She doesn't want to pay for anything.

**Setup:** one Hologram Companion on the **free on-chain brain**. No API key, no Discord, no Internet Identity.

```mermaid
flowchart LR
    MIA(["🙋 Mia"]) -- "talks, sets reminders" --> HC["✨ Hologram Companion<br/>'Pip'<br/>free on-chain brain"]
    HC --- HUB["💖 Hub on Mia's PC"]
    HUB -- "free answers" --> LLM["🤖 On-chain AI"]
    HC -- "alarms, lights" --> ROOM(["🛏️ Her room"])
```

| Setting | Choice |
|---|---|
| Identities | 1: Pip, a Hologram Companion |
| Brain | Free on-chain AI ($0) |
| What it says aloud | Speak |
| Quiet hours | 23:00 to 07:00 |
| Approvals | Default: every write waits for Mia |

**A day with Pip:** 7:30 the alarm rings and the lights come on. "Remind me at 2 to email my tutor." In the evening:
"What do I have tomorrow?"

**Why it works:** nothing to buy and nothing to configure beyond the wizard. **Good to know:** the free brain is
simpler than Claude or ChatGPT, and day pages and dreams need a paid key. Pip is online only while the PC is on.

## Case study 2: The duo

**Who:** Sam, who works from home. Sam wants one companion on the desk and a second one that hangs out in the
Discord server Sam runs for friends.

**Setup:** two identities on **one Claude key**, each with its own monthly budget.

```mermaid
flowchart LR
    SAM(["🙋 Sam"]) --> HC["✨ 'Juno'<br/>Hologram Companion<br/>Claude · $10/mo"]
    SAM --> APP["💬 App Chat"]
    APP --> BOT["🤖 'Kit'<br/>AI identity<br/>Claude · $10/mo"]
    BOT -- "own bot token" --> DIS(["🎮 Sam's Discord server"])
    FRIENDS(["👥 Friends"]) -- "chat only" --> DIS
    HC <-. "message each other" .-> BOT
```

| | Juno | Kit |
|---|---|---|
| Kind | Hologram Companion | AI identity |
| Brain | Claude | Claude |
| Monthly budget | $10 | $10 |
| Channels | Voice, app | Discord, app |
| Guests | none | Friends chat with Kit, no tools, $1/day guest budget |

**Why it works:** the two companions message each other, so Kit can tell Juno to remind Sam about tonight's game.
Friends on Discord get chat only: no tools, no memory, no wallet. **Ceiling:** $20 a month.

## Case study 3: The private notebook

**Who:** Dr. Okafor, a therapist who journals between sessions. Notes must never leave the PC.

**Setup:** one AI identity on a **local model** (Ollama or LM Studio on the same PC). No paid AI, no shared memory
bank, no public name.

```mermaid
flowchart LR
    DR(["🙋 Dr. Okafor"]) -- "app Chat only" --> ID["🤖 'Ledger'<br/>AI identity<br/>local brain"]
    ID --- HUB["💖 Hub"]
    HUB -- "on this PC" --> LOCAL["🖥️ Local model<br/>Ollama / LM Studio"]
    HUB -. "notes stay here" .-> DISK[("🔒 Encrypted<br/>data folder")]
```

| Setting | Choice |
|---|---|
| Brain | Local model, $0 |
| Memory bank | Off: notes stay on this PC (up to 200 per identity) |
| Discord / Telegram / Sneed | Off |
| Passphrase | On |
| Backups | Weekly, to an encrypted drive |

**Why it works:** the conversation goes from the app to a model running on the same PC and back. **Good to know:**
local models are smaller than Claude or ChatGPT, and a good one wants a PC with plenty of memory. The anonymous daily
usage report contains counts only, never notes or messages; you can read each report in Settings.

## Case study 4: The memory keeper

**Who:** the Rivera family. One companion helps with the household; a second one keeps the kids' homework schedule.
Both should know the same family facts.

**Setup:** two AI identities sharing the **memory bank**, with **day pages** and **dreams** on a ChatGPT key.

```mermaid
flowchart TB
    PARENT(["🙋 Ana, the parent"]) --> HOME["🤖 'Hearth'<br/>ChatGPT · $10/mo"]
    PARENT --> STUDY["🤖 'Quill'<br/>ChatGPT · $10/mo"]
    HOME -- "remember / recall" --> BANK[("🧠 Memory bank<br/>Ana's space")]
    STUDY -- "remember / recall" --> BANK
    PHONE(["📱 Ana's phone"]) -- "Telegram" --> HOME
    HOME -. "every evening" .-> DAY["📅 Day page"]
    HOME -. "once a day" .-> DREAM["🌙 Dream: tidy memory"]
```

**A day:** "Remember that Leo's swim class moved to Thursday." Quill knows it too, because both read the same bank.
In the evening Hearth writes a short day page; overnight it dreams, fixing wrong notes and merging duplicates.

**Why it works:** one memory for the family, Hearth on Ana's phone through Telegram, and every send still waits
for her OK. **Ceiling:** $20 a month, including the day pages and dreams.

---

# ⚙️ Advanced setups

## Case study 5: The day trader's desk

**Who:** Raj trades crypto from home with his **own trading bot**, a script he wrote. He wants a companion that
watches his wallets, speaks his bot's alerts at his desk, and briefs him every morning, even on his phone.

**What Waifu AI does and doesn't do here:** Waifu AI **does not trade, swap or read market prices**. Raj's own
script does the trading. Waifu AI is the **messenger, notebook and wallet watcher** around it.

**Setup:** three identities, one Hologram Companion, Claude for the orchestrator, and a connected-app key for his
script.

```mermaid
flowchart LR
    subgraph PC["🖥️ Raj's PC"]
        BOT["📈 Raj's own trading script"]
        HUB["💖 Hub"]
        ORCH["🎼 'Atlas'<br/>orchestrator<br/>Claude · $30/mo"]
        ANA["🤖 'Ledger'<br/>analyst notes<br/>ChatGPT · $15/mo"]
        HC["✨ 'Tick'<br/>Hologram Companion<br/>free brain"]
    end
    BOT -- "alerts through the<br/>local tool API (app key)" --> HC
    PHONE(["📱 Raj's phone"]) -- "Telegram: brief me" --> ORCH
    ORCH -- "asks" --> ANA
    ORCH -- "says it aloud" --> HC
    LEDGERS[("🪙 ICP · ckBTC · ckETH")] -- "deposit notices" --> HUB
```

| | Atlas | Ledger | Tick |
|---|---|---|---|
| Role | Orchestrator | Keeps trade notes and day pages | Desk voice |
| Brain | Claude | ChatGPT | Free on-chain AI |
| Monthly budget | $30 | $15 | $0 |
| Orchestrator limits | 30 min a job, 3 steps, $0.50 a job, $5 a day | | |
| Wallet sends | Wait for approval in the app | n/a | n/a |

**A day:**
- **Morning:** Raj texts Atlas on Telegram, "brief me". Atlas runs a job: it reads Ledger's notes from yesterday and
  Tick reads the summary aloud.
- **During the day:** his script sends alerts through the hub's local tool API, and Tick says them out loud at his
  desk ("BTC position closed, plus 2.1 percent"). Deposits into his wallets are announced (tiny ones are skipped).
- **A reminder every 30 minutes:** "check your stops".
- **Away from the desk:** he texts Atlas on Telegram and gets the latest from Ledger's notes.

**Safety:** a connected app's key can be read-only. Any send it asks for (a message, a payment) waits for Raj's
OK, which is why his script speaks through Tick instead of texting him. The orchestrator is never offered the
wallet. **Ceiling:** $45 a month, plus the orchestrator's own $5-a-day cap.

## Case study 6: The streamer's studio

**Who:** Luna streams three nights a week. She wants a companion on stage, one at her desk, a moderator bot and a
hype bot in her Discord, and she wants to run it all from her Discord DMs while she's live.

**Setup:** two Hologram Companions and two Discord bots. The on-stage companion is the **orchestrator**, and
**Unsafe mode** is on for stream nights only.

```mermaid
flowchart TB
    LUNA(["🙋 Luna"]) -- "her own Discord DM" --> STAGE
    subgraph HUB["💖 Hub on Luna's streaming PC"]
        STAGE["✨🎼 'Stage'<br/>orchestrator<br/>Claude · $25/mo"]
        DESK["✨ 'Desk'<br/>ChatGPT · $10/mo"]
        MOD["🤖 'Mod'<br/>free on-chain brain"]
        HYPE["🤖 'Hype'<br/>ChatGPT · $10/mo"]
    end
    STAGE -- "says lines on stream" --> DESK
    STAGE -- "asks" --> MOD
    STAGE -- "asks" --> HYPE
    MOD -- "bot token 1" --> SERVER(["🎮 Luna's Discord"])
    HYPE -- "bot token 2" --> SERVER
    FANS(["👥 Viewers"]) -- "chat only" --> SERVER
```

**Unsafe mode, honestly:** with it on, Luna's requests from her own Discord DM run at once, with no confirmation.
She sets it to **turn itself off** soon after the stream ends. It never lifts the protections on
connected apps, doors and alarms, or keys and pairing, and it gives viewers nothing extra. If her Discord account
were stolen, the thief could act as her until it turns off, which is why she keeps it short.

**Why it works:** one message from her DM starts a job: "Stage, tell Desk to announce the giveaway, and have Hype post
the rules." Two of her own bots can talk to each other at most twice per channel every 10 minutes, so they can't
loop. **Ceiling:** $45 a month; viewers chat inside each bot's $1-a-day guest budget.

## Case study 7: The developer's lab

**Who:** Chen, a solo developer. Chen wants a lead assistant that coordinates coding sessions, a private notebook
for client secrets, and a desk companion, and works with a friend who runs a hub of their own.

**Setup:** three identities, coding sessions connected from Discord, a local brain for private notes, the memory bank
for the shared work notes, and a **paired hub** with a friend.

```mermaid
flowchart LR
    subgraph A["💖 Chen's hub"]
        LEAD["🎼 'Lead'<br/>orchestrator<br/>Claude · $40/mo"]
        NOTES["🤖 'Vault'<br/>local brain · $0<br/>never in the bank"]
        DESKC["✨ 'Bit'<br/>ChatGPT · $10/mo"]
    end
    CODE["🧑‍💻 Coding sessions<br/>connected via MCP"] -- "connected from Discord<br/>with an authenticator code" --> LEAD
    LEAD -- "remember / recall" --> BANK[("🧠 Memory bank")]
    LEAD -- "speaks" --> DESKC
    subgraph B["💖 Friend's hub"]
        PEER["🤖 'Rook'"]
    end
    LEAD <-. "paired over Sneed:<br/>messages + public reads" .-> PEER
```

| | Lead | Vault | Bit |
|---|---|---|---|
| Brain | Claude | Local model | ChatGPT |
| Budget | $40 | $0 | $10 |
| Memory bank | Enrolled | **Not** enrolled: notes stay on the PC | Enrolled |
| Connected apps | Coding sessions (approved in the app) | none | none |

**How the friend fits in:** the two hubs pair with a short code over Sneed. After that, Lead and Rook can message
each other. A paired companion gets public reads only (plus a balance check), never Chen's notes or wallet.
Chen's orchestrator runs jobs on Chen's hub only; it can't drive Rook.

**Ceiling:** $50 a month.

---

# 🏢 Enterprise setups

Enterprise setups are teams of people. Three facts shape them:

1. **One orchestrator per hub**, and it works on its own hub only.
2. **AI keys are per hub.** All identities on a hub share its Claude / ChatGPT key, each with its own budget. To
   separate keys (per department, per client), give each one its own hub.
3. **Per-person and per-hub ceilings:**
   - 300 replies a day to people on Discord and Telegram, per hub;
   - 25 claimed public names per person;
   - 32 companions sharing one person's memory bank.

So a big setup is **several hubs, each run by one team member**, paired with each other.

## Case study 8: The influencer network (50 bots)

**Who:** Nova, a creator with a large fan community. Nova's team runs **50 identities**: fan-club bots in different
Discord servers, each with its own persona, plus **three orchestrators** that keep them on message.

**Setup:** three hubs on three PCs, one per team member (Nova, a community manager and a moderator lead). Each hub
has its own AI key, one orchestrator and 15 to 16 bots.

```mermaid
flowchart TB
    subgraph H1["💖 Hub 1 · Nova · Claude + OpenAI keys"]
        O1["🎼 Orchestrator 'Nova Prime'<br/>Claude · $40"]
        B1["🤖 × 16 fan bots<br/>7 ChatGPT · 5 on-chain · 4 personas"]
        O1 --> B1
    end
    subgraph H2["💖 Hub 2 · community manager · own keys"]
        O2["🎼 Orchestrator 'Echo'<br/>Claude · $40"]
        B2["🤖 × 16 fan bots<br/>7 ChatGPT · 5 on-chain · 4 personas"]
        O2 --> B2
    end
    subgraph H3["💖 Hub 3 · moderator lead · own keys"]
        O3["🎼 Orchestrator 'Ward'<br/>Claude · $40"]
        B3["🤖 × 15 fan bots<br/>6 ChatGPT · 5 on-chain · 4 personas"]
        O3 --> B3
    end
    B1 --> D1(["🎮 Servers A–F"])
    B2 --> D2(["🎮 Servers G–L"])
    B3 --> D3(["🎮 Servers M–R"])
    O1 <-. "paired hubs:<br/>messages" .-> O2
    O2 <-. "paired hubs" .-> O3
```

**The 50 identities**

```mermaid
pie showData
    title The 50 identities by brain
    "Orchestrators (Claude)" : 3
    "Fan bots (ChatGPT, $5/mo each)" : 20
    "Fan bots (free on-chain AI)" : 15
    "Fan bots (personas, no tools)" : 12
```

| Setting | Choice |
|---|---|
| Bots | Each has its own Discord bot token and a persona of up to 1,200 characters |
| Guests (fans) | Chat only: no tools, memory or wallet; 20 replies per fan per day; $1 a day guest budget per bot |
| Orchestrators | Claude, $40/month each; job limits raised to 6 steps, $2 a job, $20 a day (passphrase needed) |
| Approvals | Anything a bot sends outside chat waits for the hub owner |
| Public names | Each person claims up to 25: 16 + 16 + 15 = 47 bots named, 3 orchestrators unnamed |
| Memory bank | Each team member's bots share that person's bank space (up to 32 each) |

**Why three hubs, not one:**
- **Replies.** One hub answers people on Discord and Telegram at most **300 times a day**. Three hubs give the network
  **900**, about 18 replies per bot per day.
- **Names.** A person can claim **25** public names; three people can claim 75.
- **Memory.** A person's memory bank space takes **32** companions; three spaces hold all 50.
- **Keys.** Each hub has its own AI keys, so the team splits the bill and sees each member's spend.
- **Orchestrators.** Each hub has exactly one.

**What it can't do:** the bots don't sell anything or take payments. They can talk about Nova's merch and share the
store link from their persona; the sale happens in Nova's own store.

**Ceiling:** about $220 a month in budgets (3 × $40 + 20 × $5). The 27 free-brain bots cost nothing.

## Case study 9: The retail floor (15 Hologram Companions)

**Who:** Willow & Thread, a clothing retailer with **five stores**. Each store has three Hologram Companions as
friendly product guides: one at the door, one in the fitting area, one at the counter. Head office runs one
**orchestrator**, itself a Hologram Companion, that keeps all 15 on message.

**Setup:** one hub at head office. Each store has a small **bridge box** (for example a Raspberry Pi) on the store's
Wi-Fi that connects its Hologram Companions back to the hub over a private network (such as Tailscale).

```mermaid
flowchart TB
    subgraph HQ["🏢 Head office"]
        HUB["💖 Hub"]
        ORCH["✨🎼 'Maven'<br/>orchestrator<br/>Hologram Companion · Claude · $40"]
        HUB --- ORCH
    end
    subgraph S1["🏬 Store 1"]
        BR1["📦 Bridge"] --- A1["✨ Door"] & A2["✨ Fitting"] & A3["✨ Counter"]
    end
    subgraph S2["🏬 Store 2"]
        BR2["📦 Bridge"] --- C1["✨ Door"] & C2["✨ Fitting"] & C3["✨ Counter"]
    end
    subgraph S3["🏬 Stores 3–5"]
        BR3["📦 Bridges"] --- D1["✨ × 9"]
    end
    HUB <-- "private network" --> BR1
    HUB <-- "private network" --> BR2
    HUB <-- "private network" --> BR3
    ORCH -- "the same line,<br/>all stores at once" --> A1 & C1 & D1
```

**Short prompts, one voice:** each store companion has a **short character prompt** in its character slots (the
device keeps a small budget for it). For example:

> You are Fern, a guide at Willow & Thread. Be warm and brief. Help shoppers find sizes and styles. Today's
> highlights are in your notes. For prices and payment, invite them to the counter.

| | Maven (head office) | 15 store companions |
|---|---|---|
| Kind | Hologram Companion | Hologram Companions |
| Brain | Claude, $40/mo | ChatGPT, $8/mo each |
| Role | Orchestrator | Product guides |
| Quiet hours | Store hours | Follow the hub: silent after closing |
| Approvals | The owner, in the app | Shoppers chat only |

**A morning:** the manager tells Maven in the app, "Announce the scarf sale in every store at 10." Maven runs a job
and has each store's door companion say the line (up to 300 characters, never in quiet hours).

**What it can't do:** the companions **don't take payments** and don't ring up sales; the till does. They don't read
live stock levels for shoppers either: they talk from their prompt and the notes head office gives them. Waifu AI's
Shop feature is for **buying**, not selling, and is still in early access. The value here is a consistent,
friendly voice in every store, updated from one place.

**Ceiling:** $160 a month (Maven $40 + 15 × $8).

## Case study 10: The esports org

**Who:** Red Comet Gaming, a team with a front office and a team house. Fans get Discord bots per game; staff get
companions that handle schedules, supplies and team chat.

**Setup:** two hubs, each with its own keys and orchestrator, paired. **14 identities** in all.

```mermaid
flowchart LR
    subgraph FO["💖 Front office hub · company keys"]
        OF["🎼 'Director'<br/>Claude · $40"]
        F1["🤖 Game bot: tactical shooter<br/>ChatGPT · $6"]
        F2["🤖 Game bot: MOBA<br/>ChatGPT · $6"]
        F3["🤖 Game bot: fighting<br/>ChatGPT · $6"]
        F4["🤖 Game bot: racing<br/>ChatGPT · $6"]
        F5["🤖 Schedule bot<br/>ChatGPT · $6"]
        BUY["🤖 'Quartermaster'<br/>buys supplies · ChatGPT · $10"]
        OF --> F1 & F2 & F3 & F4 & F5
    end
    subgraph TH["💖 Team house hub · coach's keys"]
        OT["🎼 'Coach'<br/>Claude · $30"]
        H1["✨ Lounge companion<br/>ChatGPT · $10"]
        H2["✨ Gym companion<br/>ChatGPT · $10"]
        T1["🤖 × 4 practice bots<br/>free on-chain AI"]
        OT --> H1 & H2 & T1
    end
    F1 & F2 & F3 & F4 & F5 --> FANS(["🎮 Fan servers"])
    BUY -- "shop shelf · every buy<br/>approved in the app" --> SHOP(["🛒 Independent stores"])
    OF <-. "paired hubs" .-> OT
```

| | Front office (7) | Team house (7) |
|---|---|---|
| Run by | Operations manager | Head coach |
| AI keys | Company keys | Coach's own keys |
| Orchestrator | Director (Claude, $40) | Coach (Claude, $30) |
| Discord | 5 fan bots, chat only for fans | 4 practice bots in the team's private server |
| Devices | none | 2 Hologram Companions |
| Spending | Quartermaster buys from the shop: every buy waits for the manager's OK in the app, at most 3 a day | none |

**Why it works:** each department pays for its own AI and approves its own actions, and the two orchestrators keep
each house in step. The Coach's companions read out practice times and quiet the house at night with quiet hours.

**What it can't do:** fan bots don't sell merch or take payments; they point fans to the store. The Shop buys from
independent stores, and it is in early access.

**Ceiling:** $130 a month in budgets.

---

# 🔍 Analysis

## What the ten case studies use

| | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Hologram Companions | 1 | 1 | | | 1 | 2 | 1 | | 16 | 2 |
| AI identities | | 1 | 1 | 2 | 2 | 2 | 2 | 50 | | 12 |
| Hubs | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 3 | 1 | 2 |
| Orchestrator | | | | | ✅ | ✅ | ✅ | ✅ ×3 | ✅ | ✅ ×2 |
| Paid brain | | ✅ | | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Free / local brain | ✅ | | ✅ | | ✅ | ✅ | ✅ | ✅ | | ✅ |
| Discord bots | | 1 | | | | 2 | | 47 | | 9 |
| Telegram / phone | | | | ✅ | ✅ | | | | | |
| Memory bank | | | | ✅ | | | ✅ | ✅ | | |
| Connected apps | | | | | ✅ | | ✅ | | | |
| Unsafe mode | | | | | | ✅ | | | | |

## Patterns

**1. Start free, add a key when it pays off.** Case studies 1 and 3 cost nothing. A Claude or ChatGPT key adds day
pages, dreams and an orchestrator, and a per-identity budget keeps each one inside a ceiling.

**2. Mix brains by job.** The bigger setups put Claude on the one identity that thinks hardest (the orchestrator),
ChatGPT on identities that talk a lot, and free brains on simple bots. In case study 8, 27 of 50 identities cost
nothing.

**3. One orchestrator per hub, one hub per person.** Teams scale by adding hubs, not by stuffing one hub. Each hub
brings its own orchestrator, AI keys, reply allowance, public names and memory space.

**4. Approvals stay with a person.** Even the 50-bot network sends nothing, spends nothing and changes nothing without
its hub owner, unless that owner switches Unsafe mode on for a short window.

## The limits to plan around (v0.99.14)

```mermaid
xychart-beta
    title "Per-hub and per-person ceilings vs the 50-bot network"
    x-axis ["Replies a day (per hub)", "Claimed names (per person)", "Bank companions (per person)"]
    y-axis "Count" 0 --> 1000
    bar [300, 25, 32]
    line [900, 75, 96]
```

*Bars: one hub or one person. Line: what case study 8's three hubs and three people get together.*

| Limit | Value | What it means |
|---|---|---|
| Orchestrators | 1 per hub | Directs that hub's identities only |
| AI keys | 1 Claude + 1 OpenAI key per hub | Separate keys = separate hubs; budgets are per identity |
| Replies to people on Discord and Telegram | 300 a day per hub; 60 per person per identity | Big communities need several hubs |
| Fan (guest) limits per bot | 20 replies per fan a day, $1 a day guest budget | Chat only for fans |
| Telegram | 1 bot per hub | Use Discord for many bots |
| Claimed public names | 25 per person | Unclaimed names are 72-hour leases the hub renews |
| Memory bank | 32 companions per person's space | Spread big teams across people |
| Local notes | 200 per identity | The bank holds more |
| Hologram Companions | On the hub's network, a private network, or through a bridge box | Remote stores need a bridge |
| Shop | Buying only, early access, every buy approved in the app | No selling or payment taking |
| Uptime | While the PC is on | Use an always-on PC for business setups |

**Not in v0.99.14:** selling or taking payments, trading or market prices, email, and Home Assistant. Email and
Home Assistant are planned. Watch the [Releases](https://github.com/Smugandcomfy/waifu-ai-desktop/releases) page.

## Choosing your setup

```mermaid
flowchart TD
    Q1{"Do you want a<br/>device that talks?"} -- yes --> Q2{"More than one<br/>place or room?"}
    Q1 -- no --> Q3{"Must everything<br/>stay on your PC?"}
    Q2 -- "no" --> C1["Case study 1 or 2"]
    Q2 -- "yes, one building" --> C6["Case study 6"]
    Q2 -- "yes, several sites" --> C9["Case study 9"]
    Q3 -- yes --> C3["Case study 3"]
    Q3 -- no --> Q4{"How many companions?"}
    Q4 -- "1 to 3" --> Q5{"Automation or<br/>your own scripts?"}
    Q5 -- no --> C4["Case study 4"]
    Q5 -- yes --> C57["Case study 5 or 7"]
    Q4 -- "10 or more" --> Q6{"Several people<br/>running it?"}
    Q6 -- yes --> C810["Case study 8 or 10"]
    Q6 -- no --> C9b["Start with one hub and<br/>grow to more"]
```

---

<p align="center">Ready to build yours? Start with <a href="guides/01-getting-started.md"><b>Getting started</b></a>. 💖</p>

<sub>The case studies are illustrations. Features, limits and defaults are those of Waifu AI Desktop v0.99.14 and
may change in later versions. Budgets are ceilings you set, not prices; AI providers bill you directly for your own
keys.</sub>
