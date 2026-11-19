<p align="center">
  <img src="../assets/waifu-ai-hero.png" alt="The Waifu AI Desktop crew" width="70%">
</p>

<h1 align="center">🌐 The Waifu AI Network</h1>

<p align="center"><b>The small set of on-chain services that every copy of Waifu AI Desktop shares.<br>
Your hub does the thinking on your PC; the network gives your companions a name, a shared memory and a way to tell us what broke.</b></p>

<p align="center">
  <a href="../README.md">🏠 Home</a> ·
  <a href="guides/README.md">📖 User guides</a> ·
  <a href="HOW_IT_WORKS.md">⚙️ How it works</a> ·
  <a href="USE_CASES.md">📘 Use cases</a> ·
  <a href="FAQ.md">❓ FAQ</a>
</p>

---

## The big picture

Waifu AI Desktop is mostly **your PC**. Your companions' keys, your chats, your contacts and your settings live
there. But a few things need a place that is always on and that every hub can reach, so we run them as
**canisters**: small programs that live on the [Internet Computer](https://internetcomputer.org), a public
blockchain network. Nobody has to keep a server switched on, and anyone can check that they are there.

```mermaid
flowchart TB
    subgraph PC["🖥️ Your PC at home"]
        HUB["💖 Waifu AI hub<br/>companions · keys · chats · settings"]
    end

    HOLO["✨ Hologram Companion<br/>on your Wi-Fi"]
    HA["🏠 Home Assistant<br/>the devices you ticked"]

    subgraph AWAY["📍 Other places"]
        BR1["🌉 Bridge · My place<br/>✨ a second home"]
        BR2["🌉 Bridge · Public companion<br/>✨ a shop counter"]
    end

    subgraph WAN["🌐 Waifu AI Network (Internet Computer)"]
        REG["📇 Registry<br/>public names"]
        DIR["🗺️ Memory directory<br/>which bank is yours"]
        BANK["🧠 Memory bank<br/>shared memories"]
        TEL["📊 Usage reports<br/>anonymous daily counts"]
    end

    WEB3["🔗 Web3<br/>messages between IDs · tokens"]

    subgraph OUT["☁️ Services you choose"]
        AI["🧠 Claude · ChatGPT"]
        CHAT["💬 Discord · Telegram · Sneed SMS"]
        GPT["🔗 ChatGPT, through your gateway"]
    end

    HUB <--> HOLO
    HUB --> HA
    BR1 -- "connects out (Tailscale)" --> HUB
    BR2 -- "connects out (Tailscale)" --> HUB
    HUB -- "register / find a name" --> REG
    HUB -- "which bank?" --> DIR
    DIR -- "admits you" --> BANK
    HUB -- "remember / recall" --> BANK
    HUB -- "one report a day" --> TEL
    HUB --> WEB3
    HUB --> AI
    HUB <--> CHAT
    GPT --> HUB

    classDef ours fill:#ffd6ec,stroke:#e0559b,color:#3a0d24;
    classDef pc fill:#e8e0ff,stroke:#7a5cff,color:#1f1340;
    classDef bridge fill:#dff7ee,stroke:#2bb27a,color:#0d3a26;
    class REG,DIR,BANK,TEL ours;
    class HUB pc;
    class BR1,BR2 bridge;
```

The pink boxes are **the Waifu AI Network**: four canisters we run for every user. The green boxes are **Waifu AI
Bridges**, carrying your companions to other places. Everything else is your own PC, your own home, or a service you
choose to switch on.

## The four canisters

| | Canister | What it does for you | Canister id |
|---|---|---|---|
| 📇 | **Registry** | The phonebook. Gives each companion a unique public name, so companions can find each other and you can claim the ones that are yours. | [`3ssaf-2aaaa-aaaal-qxqvq-cai`](https://dashboard.internetcomputer.org/canister/3ssaf-2aaaa-aaaal-qxqvq-cai) |
| 🗺️ | **Memory directory** | The map. Tells your hub which memory bank holds your memories, and lets you join one. | [`hrgl3-uyaaa-aaaah-aweta-cai`](https://dashboard.internetcomputer.org/canister/hrgl3-uyaaa-aaaah-aweta-cai) |
| 🧠 | **Memory bank** | The shared memory. One place where all of your companions keep and recall what they have learned about you. Optional. | [`bl6tx-2aaaa-aaaah-awd2a-cai`](https://dashboard.internetcomputer.org/canister/bl6tx-2aaaa-aaaah-awd2a-cai) |
| 📊 | **Usage reports** | The suggestion box. Takes one anonymous report of counts a day from each hub, so we can see what breaks and what to improve. | [`hwhnp-zaaaa-aaaah-awetq-cai`](https://dashboard.internetcomputer.org/canister/hwhnp-zaaaa-aaaah-awetq-cai) |

Click an id to see the canister on the public Internet Computer dashboard.

---

## 📇 Registry: a name for every companion

When you give a companion a **public name** (for example "Aria"), your hub registers it in the registry under
that companion's own key. Other companions can now look up "Aria" and message it.

A new name starts as a **lease**. It stays yours as long as your hub keeps it fresh, and becomes **permanent once
you claim the companion** with your Internet Identity. That stops anyone from grabbing hundreds of names and
sitting on them.

```mermaid
gantt
    title The life of an unclaimed name (hours)
    dateFormat X
    axisFormat %s h
    section Lease
    Name is yours                     :active, a1, 0, 72
    section Your hub
    Too early to renew                :done,   b1, 0, 24
    Hub renews (about once a day)     :crit,   b2, 24, 72
    section If the hub stays off
    Name lapses, free for others      :        c1, 72, 96
```

- 🟢 **Hub running?** It checks twice a day and renews the name long before the lease runs out.
- 💤 **PC off for more than three days?** An *unclaimed* name lapses and someone else may take it.
- 💖 **Claimed with your Internet Identity?** The name never lapses.

Which companions you own is **not** shown publicly: the registry only says whether a name is claimed, not by whom.

## 🧠 Memory directory and bank: one memory for the whole team

Turn on the shared memory and every companion you own reads and writes the **same** memory, so what you tell
one of them, they all know. Memories are kept per person, and only you and the companions you enrolled can read
yours.

Joining takes one click in the app. Behind the scenes:

```mermaid
sequenceDiagram
    autonumber
    actor You
    participant Hub as 💖 Your hub
    participant Dir as 🗺️ Memory directory
    participant Bank as 🧠 Memory bank

    You->>Hub: Sign in with Internet Identity, press "Join"
    Hub->>Dir: Which bank is mine?
    Dir-->>Hub: None yet
    Hub->>Hub: A moment of proof-of-work (keeps out spam bots)
    Hub->>Dir: Join
    Dir->>Bank: Admit this person
    Bank-->>Dir: Admitted ✅
    Dir-->>Hub: Your bank is number 1
    Hub->>Bank: Enroll my companions as writers
    Note over Hub,Bank: From now on every companion remembers into, and recalls from, your space in bank 1
```

**Built to grow.** Each bank welcomes hundreds of people. When one fills up we open a new bank from the same
program and point newcomers at it. You are assigned once and never moved, so your memories always stay together.

```mermaid
flowchart LR
    NEW(["👋 New person joins"]) --> D{"🗺️ Directory:<br/>which bank is open?"}
    D --> B1["🧠 Bank 1<br/>open"]
    D -.-> B2["🧠 Bank 2<br/>opens when bank 1 is full"]
    D -.-> B3["🧠 Bank 3 …"]
    B1 --- K1(["You stay in your bank for good"])
```

The shared memory is **optional**. Without it, each companion keeps its own notes on your PC.

## 📊 Usage reports: how we learn what to fix

Once a day your hub sends one small, **anonymous** report of counts, ranges and codes. That tells us things like
"Telegram replies are failing more since the last update" or "nobody finds the reminder settings". It never
contains your messages, memories, names, contacts, keys, addresses or anything you type.

```mermaid
flowchart LR
    subgraph PC["🖥️ Your PC"]
        A["Counts during the day<br/>(features used, errors, timings)"] --> B["Daily report<br/>numbers and codes only"]
        B --> C{"App checks it<br/>against a fixed list"}
        V["👀 Settings → Updates → Usage report<br/>shows the exact last report"]
        B -.-> V
    end
    C -- "random id, new every month" --> T["📊 Usage-report canister"]
    T --> S["➕ Added into daily totals<br/>across all users"]
    S --> R["🗓️ Totals kept 90 days"]
    T -. "individual report<br/>not kept" .-x X(("🗑️"))
```

| The report **includes** | The report **never includes** |
|---|---|
| App version, Windows version, memory use (as a range) | Your messages, emails or chats |
| Which features and channels are used, roughly how much | Your memories, notes or files |
| How often actions succeed, wait for approval or fail, and the kind of error | Names of your companions, contacts or anyone else |
| Reply times (as ranges), crash fingerprints | Addresses, phone numbers, Discord or Telegram ids |
| Setup steps reached, which settings get changed | Keys, tokens, passwords or wallet addresses |
| Country, language and time zone (to the hour) | Your IP address or precise location |

The full, exact list is in the Terms of Use shown in the app. You can read the last report your hub sent, word for
word, in **Settings → Updates → Usage report**.

---

## 🌉 Bridges: your companions in other places

A bridge is a small Windows program on a PC beside a Hologram Companion in another place. It connects **out** to
your hub, so nothing at home needs opening up, and it holds none of your hub's keys: just its own bridge token. Over
the internet, Tailscale (free) gives the two PCs a private, encrypted path to each other.

```mermaid
sequenceDiagram
    autonumber
    participant Holo as ✨ Hologram Companion
    participant Bridge as 🌉 Waifu AI Bridge
    participant Hub as 💖 Your hub
    Bridge->>Hub: Hello, here is my bridge token
    Hub-->>Bridge: Welcome: you speak for Mika (My place)
    loop All day
        Bridge->>Hub: Anything to say?
        Hub-->>Bridge: "Your 6 pm reminder: Dad's tablets"
        Bridge->>Holo: Speak it
        Holo-->>Bridge: Someone said "Mika, what's on tomorrow?"
        Bridge->>Hub: Here's what was said
        Hub-->>Bridge: The answer to speak
        Bridge->>Hub: Heartbeat every minute
    end
    Note over Bridge,Hub: Hub away for 10 minutes? The bridge says so once, then reconnects by itself.
```

### My place or Public companion

```mermaid
flowchart LR
    subgraph MP["🏡 My place"]
        direction TB
        Y(["🙋 You: its name first,<br/>and recently in the app"]) --> YB["Your companion's own brain"]
        YB --> YR["Reads your messages, notes,<br/>wallet balance; recalls"]
        G1(["🙂 Anyone else there"]) --> GB1["Guest brain"]
    end
    subgraph PUB["🏪 Public companion"]
        direction TB
        V(["🙂 Every visitor"]) --> GB2["Guest brain<br/>within the daily guest budget"]
        GB2 --> VR["Chat in character · public answers ·<br/>reminders that ring right there"]
    end
    LOCK["🔒 Never at any bridge: approving things,<br/>moving money, unlocking doors"]
    MP --- LOCK
    PUB --- LOCK
```

### A bridge code from your phone

Setting up a bridge while you're away from your PC? Your phone can make a one-time code, so the real token never
travels in a message.

```mermaid
sequenceDiagram
    autonumber
    actor You as 🙋 You (phone or Discord DM)
    participant Orch as 🎼 Your orchestrator
    participant Hub as 💖 Your hub
    participant Bridge as 🌉 New bridge
    You->>Orch: "bridge code for Nana, my place"
    Orch-->>You: Approve with: yes 1234 + your authenticator code
    You->>Orch: yes 1234 123456
    Orch-->>You: Your code: K7P2-9WXZ (10 minutes, one use)
    You->>Bridge: Type in K7P2-9WXZ
    Bridge->>Hub: Swap this code for my token
    Hub-->>Bridge: Here's your token ✅
    Hub-->>You: "Your code was just used" 
```

## 🧠 Which brain answers whom

Every reply is written by a brain. Your companion picks one in order, and always has the free one to fall back on.

```mermaid
flowchart TD
    Q{"Who is talking?"} -- "You" --> O1["Your companion's brain<br/>(the one you picked)"]
    O1 -. "busy or failed" .-> O2["Claude Haiku"] -.-> O3["ChatGPT"] -.-> O4["Free on-chain brain"]
    Q -- "A friend" --> F1["Claude Haiku"] -.-> F2["Free on-chain brain"]
    Q -- "A guest on Discord,<br/>or a visitor at a bridge" --> G1["Claude Haiku, short answers,<br/>within the daily guest budget"]
    G1 -. "budget used up for today" .-> G2["Free on-chain brain"]
```

A companion's monthly budget is a ceiling: when it's reached, the free brain answers until the 1st. A companion on
a free brain stays free for everyone.

## Why canisters?

- 🔌 **Always on, without a server.** The Internet Computer keeps them running; there is no box in a cupboard that
  can be unplugged.
- 🔍 **Out in the open.** Anyone can look the canisters up on the public dashboard.
- 🧩 **Small on purpose.** Each canister does one job. Your hub works without any of them: no name means no
  phonebook entry, no bank means local notes only, and you can read the last usage report your hub sent.
- 🛡️ **Spam-resistant.** Joining and reporting ask for a moment of proof-of-work from your PC, and each canister
  checks every request before doing any work, so floods cost the sender, not you.

## Questions

**Do I need the network to use Waifu AI?** No. Chat, reminders, Discord, Telegram, Home Assistant, bridges and
local notes all work from your PC. The network adds public names, the shared memory and the daily usage report.

**Does a bridge see my private things?** Only what its role allows: a My place bridge reads your messages and notes
to *you* when you're there; a Public companion bridge never sees them. Neither holds your hub's keys.

**Does the network see my chats?** No. Chats stay on your PC and go only through the services that carry them
(Discord, Telegram, Sneed SMS) and the AI brain you picked.

**Who can read my shared memories?** You and the companions you enrolled. Not other users.

More answers in the [FAQ](FAQ.md). 💖
