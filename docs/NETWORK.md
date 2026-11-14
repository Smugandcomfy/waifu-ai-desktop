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
    subgraph PC["🖥️ Your PC"]
        HUB["💖 Waifu AI hub<br/>companions · keys · chats · settings"]
    end

    subgraph WAN["🌐 Waifu AI Network (Internet Computer)"]
        REG["📇 Registry<br/>public names"]
        DIR["🗺️ Memory directory<br/>which bank is yours"]
        BANK["🧠 Memory bank<br/>shared memories"]
        TEL["📊 Usage reports<br/>anonymous daily counts"]
    end

    WEB3["🔗 Web3"]

    subgraph OUT["☁️ Services you choose"]
        AI["Claude / ChatGPT"]
        CHAT["Discord · Telegram"]
        HOME["Home Assistant · email<br/>(coming in a later version)"]
    end

    HOLO["✨ Hologram Companion<br/>on your Wi-Fi"]

    HUB -- "register / find a name" --> REG
    HUB -- "which bank?" --> DIR
    DIR -- "admits you" --> BANK
    HUB -- "remember / recall" --> BANK
    HUB -- "one report a day" --> TEL
    HUB --> WEB3
    HUB --> AI
    HUB --> CHAT
    HUB --> HOME
    HUB <--> HOLO

    classDef ours fill:#ffd6ec,stroke:#e0559b,color:#3a0d24;
    classDef pc fill:#e8e0ff,stroke:#7a5cff,color:#1f1340;
    class REG,DIR,BANK,TEL ours;
    class HUB pc;
```

The pink boxes are **the Waifu AI Network**: four canisters we run for every user. Everything else is either your
own PC or a service you choose to switch on.

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

**Built to grow.** A bank holds a few thousand people. When one fills up we open a new bank from the same
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

## Why canisters?

- 🔌 **Always on, without a server.** The Internet Computer keeps them running; there is no box in a cupboard that
  can be unplugged.
- 🔍 **Out in the open.** Anyone can look the canisters up on the public dashboard.
- 🧩 **Small on purpose.** Each canister does one job. Your hub works without any of them: no name means no
  phonebook entry, no bank means local notes only, and you can read the last usage report your hub sent.
- 🛡️ **Spam-resistant.** Joining and reporting ask for a moment of proof-of-work from your PC, and each canister
  checks every request before doing any work, so floods cost the sender, not you.

## Questions

**Do I need the network to use Waifu AI?** No. Chat, reminders, Discord, Telegram and local notes all work from
your PC. The network adds public names, the shared memory and the daily usage report.

**Does the network see my chats?** No. Chats stay on your PC and go only through the services that carry them
(Discord, Telegram, Sneed SMS) and the AI brain you picked.

**Who can read my shared memories?** You and the companions you enrolled. Not other users.

More answers in the [FAQ](FAQ.md). 💖
