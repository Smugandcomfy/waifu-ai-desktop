# Waifu AI Desktop: FAQ

Quick answers to the questions people ask most. For step-by-step help, see the [user guides](guides/README.md);
for the big picture, [how it works](HOW_IT_WORKS.md).

**Jump to:** [The basics](#the-basics) · [Getting set up](#getting-set-up) · [Brains and cost](#brains-and-cost) ·
[Talking](#talking) · [Memory](#memory) · [Your Hologram Companion](#your-hologram-companion) ·
[Waifu AI Bridge](#waifu-ai-bridge) · [Your home](#your-home-home-assistant) · [Money](#money) · [Privacy and safety](#privacy-and-safety) · [Updates and data](#updates-and-data) ·
[When something goes wrong](#when-something-goes-wrong)

## The basics

### What is Waifu AI Desktop?
A hub that runs on your Windows PC, where you make AI companions. Each has its own name, memory, personality
and secret key, which makes it a real identity on the Internet Computer. You can talk to them in the app, on
Discord, on Telegram or from your phone, and a Hologram Companion device can give one a voice. 💖

### Do I need an account?
No. There's nothing to sign up for. An Internet Identity (free) is only needed if you want to claim your
companions as yours in the public registry, or use the shared memory bank.

### Is it free?
The app and the default on-chain brain are free to use. If you choose a Claude or ChatGPT brain, you pay that
provider directly with your own API key. Everyday chatting usually costs a few cents a day, and each companion
has a monthly budget you set.

### Does it run in the cloud?
No. The hub runs on your PC, and the window is its page. That also means your companions are online only while
Waifu AI is running.

### What's the difference between a Hologram Companion and an AI identity?
A **Hologram Companion** is made for the hologram device: it speaks its replies and has a Device tab. You can
start it with a practice ("mock") device and connect a real one later. An **AI identity** has no device but
chats, messages, remembers and goes on Discord all the same. Not sure? Pick the Hologram Companion with the
practice device.

### What are Simple and Advanced?
The app starts in **Simple** mode with the everyday screens: Today, your companions, Reminders, People and
Settings. **Advanced** adds the wallet, voting, the shop, outside AI apps and developer settings. It hides nothing
for safety; it just keeps things tidy. Switch in the **☰** menu at the top left, or in **Settings → Appearance →
Mode**.

### Where did everything go?
Since 0.99.14, your companions sit in the left column between **Today** and **Reminders**. Each one's
**Conversations** (Chat, Messages, Discord, Phone) and **Memory** (Notes & facts, Context) are tabs on its own
page. The hub's tools (Activity, Help, Appearance, Desktop pop-ups, Your account, Quit) are in the **☰** menu.
**Settings** has nine tabs: You & account, Your phone, Brains & cost, Quiet & away, Security & backups, Memory,
Updates, Appearance and Developer (Advanced). Old bookmarks still open the right place.

### Can I change how it looks?
Yes! **Settings → Appearance → Theme** has six: **Kawaii** (the default), **Kawaii Night**, **Daylight**,
**Sandstone**, **Slate** and **Midnight**. 🎀

## Getting set up

### What do I need?
A 64-bit Windows PC with an internet connection. That's it to start. The zip carries everything the app needs;
there's no installer.

### Windows says "Windows protected your PC". Is that OK?
Yes. The app isn't code-signed yet, so SmartScreen asks the first time. Click **More info → Run anyway**.

### How do I make a companion?
**+ New identity** under your companions in the left column (or **Create your first identity** on Today). Pick the type, give it a name,
choose a device (practice or real), protect the key, and optionally give it a public name. If you close the
window halfway, press **Resume setting up**: nothing is ever created twice. See [Getting started](guides/01-getting-started.md).

### Can I run it on two PCs, or on my phone?
Run **one hub** per person: two hubs with the same companion would both answer the same messages. Your phone is
a remote control instead: text your companions over Telegram or Sneed SMS. To put a Hologram Companion in
another place, use [Waifu AI Bridge](guides/08-waifu-ai-bridge.md) on a PC beside it: still one hub. To move to a new PC, use **Export
hub** and **Restore hub…**, then stop the old one.

### What is a public name?
An optional name in the public registry, so people can find and message your companion by name instead of its
long address. Names are 3 to 32 lower-case letters, numbers and dashes, free, and first come, first served. A
name you've claimed with Internet Identity renews itself each year while your hub runs: nothing to do.

### What's an ID (or principal)?
Your companion's public address on the Internet Computer, a bit like an account number. The app calls it the
**ID**. Share it so others can
message it. It never reveals the key.

## Brains and cost

### Which brains can I use?
- **On-chain agent**: free, no key, can use your companion's tools. The default.
- **Personas** (Easy, Spicy, Smol, Coder): free characters for fun chat in the Chat tab. They can't use tools.
- **Local model**: a model you run on your own PC (such as Ollama or LM Studio). Free, works offline, weaker.
- **Claude** or **ChatGPT**: smarter, paid with your own API key.

### How do I add a Claude or ChatGPT key?
**Settings → Brains & cost → AI providers → Guided setup: get and test a key** does it with you. Then pick the
brain on the companion's **Behaviour** tab. See [Companions and brains](guides/02-companions-and-brains.md).

### Is my API key safe?
It stays on your PC, is encrypted there, and is never shown in full again. Your messages go to that provider to
be answered.

### How much will it cost?
Usually a few cents a day for everyday chatting. A new companion gets a **$10 monthly budget** the first time you
pick Claude or ChatGPT. When the budget runs out, it switches to the free brain until the 1st and tells you once.
A budget of 0 turns paid brains off for that companion.

### Why do day pages and dreams need Claude or ChatGPT?
Writing a good summary of your day takes a strong brain. Without a key your companion still remembers what you
tell it; it just doesn't write day pages or dream.

### What is the orchestrator?
One companion you let run small jobs across the others: "ask the others whether the reminder went out, then
tell me." Give the role on a companion's **Behaviour** tab → **Orchestrator** card (it needs a Claude or ChatGPT
brain and your passphrase). A hub has one. Each job stops at the first limit it reaches: by default 30 minutes, 3
back-and-forth steps, $0.50 a job and $5 a day, all changeable on the card. It never touches keys, spend caps,
passphrases, pairing or its own role, and messages to people, money and most settings still wait for your OK.
See [Companions and brains](guides/02-companions-and-brains.md#the-orchestrator-).

### My companion said its key is missing. Why?
Its brain is set to Claude or ChatGPT but there's no key in **Settings → Brains & cost**. Paste the key, or
switch its brain to the free **On-chain agent**.

## Talking

### Where can I talk to my companions?
In each companion's **Conversations → Chat** in the app, on **Discord** (each companion can have its own bot), on
**Telegram**, and over **Sneed SMS** from your phone. A Hologram Companion can also be spoken to out loud. See
[Talking everywhere](guides/03-talking-everywhere.md).

### What is Sneed SMS?
A messaging service on the Internet Computer that your companions use as their mailbox. You can write to them
from Sneed Hub on your phone. Messages are **not encrypted**, so treat them like postcards.

### Why can a companion only send one Sneed message every 10 minutes?
That's Sneed's limit for ordinary senders. Sneed Premium allows one a minute, and the hub notices and uses it.
Receiving isn't limited, messages between your own companions stay inside the hub with no limit, and Telegram
has no such limit.

### What is an approval?
Something a companion wants to do (send a message, send tokens, vote, buy, change a setting) that waits for your
OK. Press **Approve** or **Don't** on Today, or reply `yes` from your phone. What you approve is exactly what is
sent.

### Can my companion act on its own?
Only if you allow it, per companion: **Behaviour → Actions & autonomy**. **Off** (the default) means it acts only
when you ask; **Propose** means it suggests and waits; **Auto** runs only the actions you allowed, within caps.
Buying always waits, and money asked for by a connected app always waits.

### On Discord my bot said "approve it in the app". Why?
On Discord, anything more than a simple setting (a message, a post, a vote, a reminder, a payment) waits for
your OK in the app or on your phone. A Discord account is a weaker lock than your phone, so "yes" on Discord
never approves it. Questions still get answered at once. The one exception is Unsafe mode, below.

### What is Unsafe mode?
An optional switch, off by default, that lets what **you** ask from your own Discord DM run at once with **no
confirmation**, money included, and lets the orchestrator's jobs run the same way. ⚠️ It really does skip the
"are you sure?", so anyone who gets into your Discord account could act as you. Connected AI apps still always
ask, anything that read someone else's words still waits, doors and alarms never run from Discord, and nobody
else gains anything. Turn it on in **Settings → Security & backups → Unsafe mode** (with your passphrase, and
ideally an auto-off time). While it's on, a red banner shows on every page. **Turn it off from anywhere**: the
banner's **Turn it off**, a text or Discord DM saying `unsafe off`, or `stop all writes`. See
[Talking everywhere](guides/03-talking-everywhere.md#unsafe-mode-your-discord-dm-with-no-brakes-).

### Can I connect a coding session from Discord?
Yes, from your own Discord DM: reply `connect`, the request's code, and the 6-digit code your authenticator app
shows now. It needs an authenticator set up in **Settings → Security & backups → Task approvals** (Advanced mode,
with a passphrase). It works once per request, only in your DM, and never from Telegram.

### Can strangers talk to my companion?
On Discord, people in your server are **guests**: chat only, no tools, no memory, no wallet, within a daily
budget (default $1.00). On Telegram, an untrusted chat gets one polite sentence and nothing else. Strangers on
Sneed land in the inbox; a short in-character reply is off unless you turn on **Reply to strangers**. Visitors at a
Public companion bridge chat as friendly guests, within the same kind of daily guest budget.

### Why did my message get "not sent again"?
The same text to the same place within 5 minutes counts as a repeat. If you approve it yourself, you're asked
"approve again to send it twice".

### Do my companions talk to each other?
Yes. Ask one to message another, and it answers in its own voice using your shared memory. They stop by
themselves when only goodbyes are left, and after 8 replies each, so two eager AIs can't chat all night on your
budget.

### I renamed a companion. Does the old name still work?
Yes: it still answers to its former names ("ask <old name> …"), and nobody else on your hub can take them, until
you text "forget former names".

### What can I text from my phone?
`pending`, `yes 2` / `no 2`, `remind me at 7 to …`, `vacation on` / `off`, `pause <name>` / `resume <name>`,
`stop all writes` / `resume writes`, `unsafe off`, `run a dream`, `did the dream work?`, and `help`. The full list is in
[Talking everywhere](guides/03-talking-everywhere.md#texts-your-phone-understands).

### Can other AI apps connect to my companion?
Yes, in **Advanced** mode: the companion's **Connections → Outside AIs & devices → Add a client** makes a key
for an AI app that supports MCP (such as Claude Desktop or Cursor). A new key is read-only. Even with writes
allowed, money always waits for your OK.

## Memory

### Do my companions remember things?
Yes. Say "Remember that…" and it's kept. They also pick up lasting facts as you chat, and every evening a short
day page sums up the day. See [Memory and dreams](guides/04-memory-and-dreams.md).

### What is dreaming?
Once a day, one companion with a Claude or ChatGPT key rereads the day and tidies the memory: fixes wrong notes,
merges duplicates, and keeps a short page per person. It costs a few cents a night at most. Set it up in
**Settings → Memory → Dreaming**, or press **Dream now** on Today's **Memory overnight** card.

### What is the memory bank?
An optional shared memory on the Internet Computer. Enrol your companions and what you tell one, the others
know too. Waifu AI runs a memory service for everyone and every hub is already set to use it: sign in with
Internet Identity in **Settings → You & account** and press **Enroll** on each companion's **Memory**
tab.

### Is my memory shared with other people?
No. Only you and your own enrolled companions can read your memories. Guests and friends never get them.

### Can I fix or delete a memory?
Yes. On a companion's **Memory** tab, every note has **Why?**, **Correct** and **Forget**. **Settings → Memory
→ Clean-up** suggests notes worth dropping, and nothing is forgotten until you tick it.

### Can it set reminders?
Yes: "remind me at 7:30 to call mum", "in 20 minutes", "every weekday at 9". In Chat, from your phone, on
Discord or out loud. The **Reminders** page lists them all.

### Why did "next Friday" get a question instead of a reminder?
Said on a Thursday, it could mean tomorrow or the week after, so your companion asks. "Friday at 7" gets "am or
pm?". Say "tomorrow at 3pm" or "friday at 7pm".

## Your Hologram Companion

### Do I need the hologram device?
No. Everything works without it. A Hologram Companion can start with a practice device that shows its spoken
replies as text, and you can connect the real device later.

### How do I connect my real device?
It must be on the same Wi-Fi as your PC (or reachable over a private network such as Tailscale). On the
companion's **Device** tab, press **Guided setup**, or enter the address and pair with the code the device
shows. See [Your Hologram Companion](guides/05-your-hologram-companion.md).

### Can it do things just because someone said so in the room?
Only the lights change at once. Every other change waits for your OK on your screen, and a spoken "yes" never
confirms it. Private things (messages, balances, notes) are shared out loud only when the line starts with the
wake word and you've used the app or texted from your phone in the last 15 minutes.

### What happens when the device is offline?
You're told once, by text, after about ten minutes. Messages are still answered, just not spoken, and old
announcements become one short line when it's back.

## Waifu AI Bridge

### What is Waifu AI Bridge?
A small Windows program that lets a Hologram Companion in **another place** (your parents' house, a studio, a shop
counter) talk to your hub at home. It runs on a PC beside the device and connects out to your hub. See
[08 · Waifu AI Bridge](guides/08-waifu-ai-bridge.md).

### Do I need a second PC?
Yes, a Windows PC that stays on at the other place, on the same Wi-Fi as the Hologram Companion. A small mini-PC is
ideal. One bridge looks after one Hologram Companion.

### What's the difference between My place and Public companion?
**My place** is for somewhere you control: when you've used the app in the last 15 minutes, the companion there
knows it's you and can read you your messages, notes and wallet balance. **Public companion** is for places with
visitors: it chats with everyone as friendly guests, and nobody there can change your hub.

### Do I need Tailscale?
Only when the other place is on a different network from your hub. Tailscale is free, takes a few minutes to set
up on both PCs, and gives them a private, encrypted path to each other.

### What does a Public companion cost me?
Visitors are answered by the guest brain (Claude Haiku with short answers, if you've added a Claude key) within the
companion's **daily guest budget**, $1.00 unless you change it. Once that's used up for the day, it carries on with
the free brain. Your own companion's brain is kept for you.

### Can I set a bridge up when I'm away from my PC?
Yes. Text your phone or message your Discord DM: *"bridge code for Mika"*. Approve it, and you get a one-time code to
type into the bridge. The real token never appears in a chat.

### How do I stop a bridge?
Press **Revoke** on the companion's Device card, or text *"revoke the bridge for Mika"*. It stops at once. You can
also give a bridge an expiry date when you make it.

### Can I change things out loud through a bridge?
Not yet: asking for changes by voice through a bridge comes in a later update. Questions, reminders and, at My
place, reading you your messages all work today. For changes, use the app or your phone.

## Your home (Home Assistant)

### Can my companions control my lights and heating?
Yes, if you use Home Assistant. Connect it in **Settings → Home**, tick the devices your companions may use, and
say "turn on the living room lights". See [09 · Your home](guides/09-home-assistant.md).

### Can a companion unlock my front door?
Only with your OK: unlocking, disarming and opening always ask you in the app, or need your authenticator code by
text. It never happens by voice or from Discord, and between 01:00 and 06:00 it's done in the app only.

### Can guests or visitors control my home?
No. Only you control your home. Friends, guests, Discord servers and visitors at a bridge never do.

### Can it tell me when a door is left open?
Yes: set an alert in **Settings → Home → Alerts** for a door, a lock, a sensor or a device going offline.

## Money

### Can my companion hold money?
Yes, in **Advanced** mode. Its address is also a wallet that can hold ICP, ckBTC, ckETH, SNEED, sGLDT and other
ICRC-1 tokens you add. Transfers are real and final.

### Will it ever spend without asking?
Not unless you set it up to. Every send waits for your OK by default. You can allow sends within per-token caps,
or an optional daily limit for moving tokens between your own companions, but buying always waits, and a send
asked by a connected app or on Discord always waits for you in the app or on your phone.

### Will it tell me when tokens arrive?
Yes, at the notification level you chose, with the sender's name when the hub is sure who it was. Tiny "dust"
deposits get no notice, so nobody can make your companion talk all day.

### Can it shop?
**Money → Shop** lists stores your companion can buy from. You pay on the store's own checkout with a short pay
code; your companion never sees a card, and every purchase waits for your OK. The shop is an early feature.

### Can it vote?
Yes: add your companion's principal as a hotkey on one of your neurons. A hotkey can vote but can never move or
withdraw the stake.

## Privacy and safety

### What stays on my PC?
Your companions' keys, your passphrase, your API keys and bot tokens, your conversations, local notes and
contacts.

### What does the app send over the internet?
Only what the features you use need: messages through Discord, Telegram or Sneed SMS; replies through Claude or
ChatGPT when you use them; calls to the Internet Computer (wallets, registry, memory bank); the update check; and
the anonymous daily usage report (below). The app's own page is reachable only from your PC.

### What's in the anonymous usage report?
Counts only, once a day: the app version and system type, which features and kinds of brain are used, roughly
how many companions you have, how often actions succeed or fail, error codes, timing ranges and crash signatures.
**Never** your messages, memories, contacts, names, keys, addresses, Discord or phone ids, or anything you type.
It has no permanent id, just a random number replaced every month. **Settings → Updates → Usage report** shows
the last report exactly as sent. The Terms of Use describe it.

### Are my keys encrypted?
On Windows, yes, from the first start, with a key Windows keeps for your account. Setting a passphrase encrypts
them (plus API keys, conversations and notes) with your passphrase instead, which also protects them from other
programs running as you.

### What if I forget my passphrase?
It can't be recovered. With a key backup or hub export you can bring your companions back (see
[Troubleshooting](guides/07-updates-and-troubleshooting.md#i-forgot-my-passphrase)). Without one, they're gone.

### Is there an emergency stop?
Text `stop all writes` from your phone: the whole hub stops acting on its own, connected apps are refused any
change, Unsafe mode ends and the orchestrator's jobs stop, until you text `resume writes`.

## Updates and data

### How do I update?
**Settings → Updates** tells you when a new version is out. Press **Download**, unzip it into a new folder,
quit Waifu AI and start it from the new folder. Your companions stay where they are. See
[Updates and troubleshooting](guides/07-updates-and-troubleshooting.md).

### Where is my data?
In Waifu AI's data folder in your Windows profile (under `%APPDATA%`), separate from the app folder, so moving
or updating the app is safe.

### How do I back up?
**Settings → Security & backups**: **Back up keys** (just your companions) or **Export hub** (everything, up to
128 MB). **Scheduled backups** can do it daily or weekly. Keep the files off this PC.

### How do I stop or uninstall it?
**☰ → Quit** (the menu at the top left) stops it. To uninstall, quit and delete the app folder. Your companions
stay in the data folder until you delete that too, so back up first.

## When something goes wrong

### My companion doesn't answer
Check the status light (Offline means no internet), **Today → Waiting for you** (it may want your OK), and its
**Brain that answers messages** ("(no key)" needs a key). More in
[Troubleshooting](guides/07-updates-and-troubleshooting.md#my-companion-doesnt-answer).

### "Invalid signature" or "ingress expired" on every send
Your PC's clock is off. Turn on automatic time in Windows settings.

### "Rate limited" when a companion sends
Sneed allows one message every 10 minutes per companion. It goes when the window opens.

### A companion stopped answering for the rest of the day
It reached a daily cap (**Settings → Quiet & away → Away**, default 200 messages a day per companion,
fewer for unknown senders). You were told when it happened. Your own phone is never held by it.

### Where do I get help?
Press **☰ → Help** in the app, or the **?** on any card. Still stuck? **Settings → Security & backups →
Sessions and diagnostics → Copy diagnostics**, and open an [issue](../../../issues). Never post keys, passphrases, API keys or bot tokens.
