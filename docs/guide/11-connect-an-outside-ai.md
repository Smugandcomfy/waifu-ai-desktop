# Connect an outside AI

[All topics](README.md) · [Glossary](glossary.md)

_Let an AI app on your PC, or a device, use one identity's tools with a key you control._

_This topic is about Advanced mode (☰ menu → Simple | Advanced)._

An AI app such as Claude Desktop or Cursor can use one of your identities through [MCP](glossary.md#mcp): read its
balances and memory, and (if you allow it) send messages. Each app gets its own key.

## You'll need

- [Advanced mode](glossary.md#advanced-mode).
- An AI app that supports MCP, on this PC (or on your Wi-Fi with [LAN tools](glossary.md#lan-tools) on).

## Steps

1. Open **Identity → Connections & devices** and find **Outside AIs & devices**.
2. Give the client a name, pick its kind, and press **Add a client**.
3. Copy the key now: it is shown once. **Copy config** gives a ready snippet for the app.
4. Paste the snippet into your AI app's MCP settings and restart the app.
5. Ask the app something like "what is my identity's name?" to check it works.

A new key is read-only. Tick **Allow writes** to let the app send or remember. Its writes still wait for your OK
on Today unless [autonomy](glossary.md#autonomy) allows them, and a send of tokens or a purchase always waits.

## What a connected app can't do

- **It has its own limit.** Each key may call the hub about 60 times a minute. A busy app slows only itself, not
  your other apps.
- **Money always waits for you.** A send of tokens or a purchase an app asks for is an approval you give in the
  app or on your phone, whatever autonomy, the allow list or the caps say. Giving an [allowance](glossary.md#allowance) is never
  open to an app.
- **Your OK comes first after it reads.** After an app reads someone else's words (the identity's inbox,
  [Activity](glossary.md#activity), money history), it is marked for a day, also across a restart: its changes wait for your OK,
  even one that would otherwise run at once, until the day is over, you approve one of its held changes, or you
  remove its key.
- **The same message twice** within 5 minutes is refused the second time.
- **"Stop all writes" stops it too.** While writes are stopped from your phone, an app's change is refused, not
  kept for later. Reading still works.
- **What you said stays yours.** When an app talks to the identity, the answer is written without your notes and
  without your recent conversations, the other identities' included. In Activity an app sees only that identity's
  rows, without message text. A [day page](glossary.md#day-page) is read only for you.

The same rules hold for a device's own AI and for a [bridge](glossary.md#bridge). A bridge can read public things only: who
the identity is and what the shop shows.

## Details

**Revoke** next to a key cuts that client off at once. After a hub is restored from a backup, make new keys: the
old ones don't travel.

**Outside AI as the brain.** On **Identity → Personality**, **Brain that answers messages** can be
**Outside AI (MCP)**: your connected app answers the identity's messages. If it doesn't pick a message up within
10 minutes, the fallback brain you choose answers instead.

**Devices.** The same keys work for a device's own AI (the Tool API). **Developer tools** at the bottom of
Connections lets you try a key: simulate a device calling in, or call one tool.

**Announce to a device.** An AI identity's **Announce to a device** card sends each incoming message to a voice
device on your network (such as Home Assistant) as a short text.

**Just the memory.** A separate small memory bridge lets an AI tool in a terminal read and write your
[memory bank](glossary.md#memory-bank) as one more enrolled writer. Invite its ID under **Memory → Memory members**.
Anything you enrol can read everything shared in your memory bank, including the summaries of your private phone and
Discord conversations. That is on purpose, so your own AI tools work together; enrol only tools you trust.
