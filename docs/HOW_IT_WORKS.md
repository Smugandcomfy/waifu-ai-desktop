<h1 align="center">⚙️ How Waifu AI works</h1>

<p align="center"><b>The thinking happens on your PC. Everything else is a service you choose to switch on.</b></p>

<p align="center">
  <a href="../README.md">🏠 Home</a> ·
  <a href="https://claude.ai/artifact/Hi2RCPNv8xwBT3G7P8QTPZ">📗 Handbook</a> ·
  <a href="guides/README.md">📖 User guides</a> ·
  <a href="USE_CASES.md">📘 Use cases</a> ·
  <a href="NETWORK.md">🌐 Network</a> ·
  <a href="FAQ.md">❓ FAQ</a>
</p>

---

## The big picture

<p align="center"><img src="../assets/diagrams/how-it-works.svg" alt="How Waifu AI fits together" width="100%"></p>

Waifu AI is one program on your PC: the **hub**. The window you see is its page. The hub holds a key for every
identity, writes their replies with the brain you picked, keeps your conversations and notes, and runs your
reminders. The app window is for this PC only. A Waifu AI Bridge in another place, or a device on your Wi-Fi
that you allowed, reaches just its own small door, with its own token, and never the app itself.

A few things need a place that is always on and that every hub can reach, so they run as four small
**canisters** on the Internet Computer: a registry of public names, a memory directory, the shared memory bank,
and the anonymous usage reports. The hub works without any of them. See [The Waifu AI Network](NETWORK.md).

## One door for every action

<p align="center"><img src="../assets/diagrams/one-door.svg" alt="One door for every action: it arrives, who is asking, the checks, the answer" width="100%"></p>

A message can reach an identity nine ways: the app's Chat, voice, the Hologram Companion itself, a Hologram
Companion in another place through **Waifu AI Bridge**, Sneed SMS, Telegram, Discord, an AI app over MCP, and the
local tool API. Whichever way it comes, it goes through the same
door, and the hub asks the same questions:

1. **Who is asking?** You (proven by the app or a phone you trusted), your orchestrator inside a job you
   started, a connected app with its own key, someone at a bridge, or a peer, a friend or a stranger.
2. **What kind of action?** A read, a change to the identity's own state, a write that reaches out, or a move
   of money.
3. **What did you allow?** The identity's autonomy settings, its allow list and its spend caps.
4. **Is anything holding it?** A turn that read someone else's words, "stop all writes", or a locked hub.

There is only one place to check, so a new feature can't forget a check. Every write is logged: **☰ → Activity**
shows who asked, what ran and how it ended.

## Who may do what

> 📗 The [Handbook](https://claude.ai/artifact/Hi2RCPNv8xwBT3G7P8QTPZ) has an interactive version: switch situations and watch the cells change.

<p align="center"><img src="../assets/diagrams/permissions.svg" alt="Who may do what on a normal day" width="100%"></p>

This is the permission table the app is tested against, for a new hub on a normal day. A few situations change it:

| When… | What changes |
|---|---|
| **The turn read someone else's words** (a web page, a picture, a stranger's message, something heard in the room) | Every write in that turn waits for your OK, even with Unsafe mode on. |
| **You texted `stop all writes`** | No write runs on its own anywhere. Chat and reads carry on. `resume writes` lifts it. |
| **You loosened an identity's autonomy** | Allowed actions run within their caps. Money still needs a spend cap. |
| **Unsafe mode is on** | What *you* ask from your own Discord DM runs at once, until the time you picked. Nothing changes for anyone else. |

**Never, whatever the setting:** a spoken "yes" never approves anything; an AI never approves for you; letting
another account spend your tokens always waits for you and always expires; a connected app never moves money on
its own; nothing unlocks a door, disarms an alarm or opens a camera from Discord; keys, pairing and the
orchestrator role change only in the app.

## Who counts as who

| Role | What they get |
|---|---|
| **You** | Everything, under your own autonomy settings. In the app, or from a phone you trusted. |
| **Peer** | An identity on a hub paired with yours: public reads and a balance check. Never your notes or wallet. |
| **Friend** | Public reads, such as who your identity is. Chat only. |
| **Stranger** | Nothing, unless you turn on "Reply to strangers": then chat in character, with no tools. |
| **At a My place bridge** | You, when you start with the identity's name and you've used the app in the last 15 minutes: your messages, notes and wallet can be read to you there. Anyone else there is a guest. |
| **At a Public companion bridge** | A friendly guest: chat in character, public answers, a reminder that rings right there. Nothing can be changed. |

You set roles under **People**. Discord guests in your server, and visitors at a bridge, get chat only: no tools,
memory or wallet. They're answered by the guest brain (Claude Haiku with short answers, when you have a Claude
key) within each identity's daily guest budget, then by the free brain.

## Brains

| Brain | Cost | Uses tools | Day pages & dreams | Sees pictures |
|---|---|:-:|:-:|:-:|
| **On-chain agent** | Free, no key | ✅ | — | — |
| **Personas**: Easy, Spicy, Smol, Coder | Free | — | — | — |
| **Local model** (Ollama, LM Studio) | Free | ✅ | — | — |
| **Claude** | You pay Anthropic | ✅ | ✅ | ✅ |
| **ChatGPT** | You pay OpenAI | ✅ | ✅ | ✅ |
| **Outside AI (MCP)** | Your own | — | — | — |

If a brain is busy or fails, the next one answers, ending with the free one. A monthly budget per identity is a
ceiling: when it's spent, that identity uses the free brain until the 1st.

## What runs where

| Piece | Where it runs | What it holds | Who can reach it |
|---|---|---|---|
| **The hub** | Your PC, on `127.0.0.1` | Every identity's key, settings, conversations, notes, queues | Only this PC |
| **The app window** | A window on your PC | Nothing: it asks the hub | Opened from the Waifu AI icon |
| **A brain** | On-chain, your provider, or your PC | Nothing between turns | The hub sends it one turn at a time |
| **The Waifu AI Network** | Internet Computer | Public names, shared memories, daily totals | See [Network](NETWORK.md) |
| **Web3** | Internet Computer | Messages between IDs, tokens, your sign-in | Signed by your identities or by you |
| **Hologram Companion** | Its room, on your Wi-Fi | Its character, voice, alarms, memory cards | The hub, or Waifu AI Bridge beside it |
| **Waifu AI Bridge** | A Windows PC beside a Hologram Companion in another place | Its pairing and its bridge tokens; none of your hub's keys | It connects out to your hub, over your network or Tailscale |
| **Home Assistant** | Your home network | Your home's devices | The hub, only for the devices you ticked |
| **Your phone** | Anywhere | Nothing of the hub's | It messages your identities |

**Your data folder** is under `%APPDATA%`, apart from the app folder, which is why updating is safe. Back it up
from **Settings → Security & backups**. Never copy files out of it by hand while the hub runs.

<p align="center">Ready? Start with <a href="guides/01-getting-started.md"><b>Getting started</b></a>. 💖</p>

<sub>Waifu AI Desktop v0.99.18. Defaults and limits may change in later versions.</sub>
