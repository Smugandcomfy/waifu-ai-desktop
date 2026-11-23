# ChatGPT, roaming and drafts

[All topics](README.md) · [Glossary](glossary.md)

_Let ChatGPT read the memories you approve, use your identities at more than one device, and get back what you were typing._

_This topic is about Advanced mode (☰ menu → Simple | Advanced)._

Three optional things that build on memory. ChatGPT can read the memories you choose. An identity can speak at a
device in another room. And a message you were typing is kept if the page reloads. All three are off, or do
nothing, until you use them.

## Connect ChatGPT

ChatGPT can read the memories you approve from **one** identity, and ask this hub to send a message that you then
review. It works through a [connector](glossary.md#connector) and a [gateway](glossary.md#gateway). A hub that never sets this up contacts
nothing new.

### You'll need

- The current Terms of Use, accepted. They say what leaves this PC through the gateway. If you have not accepted
  them, the section says so and links to them.
- A hub [passphrase](glossary.md#passphrase): **Settings → Security & backups → Keys**. On a hub that
  Windows protects with its own key, you can say Yes in a window on this PC instead.
- A gateway: one you run, one someone you trust runs for you, or the official Waifu AI gateway. You need its web
  address (it starts with `https://`), the hub ID it gave you and its credential.
- An identity that is already [enrolled](glossary.md#enrol) in your [memory bank](glossary.md#memory-bank).

### Steps

1. Open **Memory → ChatGPT memory sharing**.
2. Type the gateway's address and press **Trust this gateway**. If you paste the longer address ending in `/mcp`
   (the one ChatGPT uses), the hub keeps only the gateway's address and says which address it kept.
3. Type the hub ID, paste the credential and pick the identity.
4. Tick what you want to allow besides memories (see below). You can leave all three unticked.
5. Press **Create ChatGPT pairing code**.
6. Type the code on the connector's ChatGPT authorization page. The code is shown for a few minutes only.

The hub talks only to a gateway address you trusted. Type who runs it (yourself, a friend, Waifu AI) in **Who runs
it** when you trust it, or later with **Save who runs it**: the section then shows "Run by" beside the address. It is
a label for you; it changes nothing else.

### What ChatGPT gets

At first, nothing. You choose each memory:

1. In the same section, type a few words in **Find a memory to share** and press **Search**.
2. Read the memory and press **Share this version with ChatGPT**.

A memory from your private notes (the notes only you may read) is marked **From your private notes**, here and in the
list of approved memories. It is information only: you can still share it, and ChatGPT then reads it like any other.

When a memory changes, the new version needs your approval again. **Withdraw approval** takes one back.
ChatGPT can never write a memory.

Three more permissions, each off until you tick it:

- **Message requests.** A message ChatGPT wants to send waits for you under **ChatGPT message requests**, with who
  it is from, who it reaches and its full text. Today lists it too, with the first 140 characters of the text
  (**Open** shows the rest), and an open page shows a short note when a new one arrives. It goes out only when you press **Approve and
  send this message**; **Cancel request** drops it. A request you leave for 15 minutes expires and nothing is
  sent. A request to someone who is not one of your contacts is listed too, named the way ChatGPT wrote it, and can
  only be canceled. If you have Telegram or Discord set up, you get a message about waiting requests at most once
  per connection every 2 hours, plus one "more are waiting" line; Today always lists every request. When ChatGPT
  asks again with the same text to the same recipient within a day, the new request is marked **Repeat of an
  earlier request** with the time of the first one. It is still a request of its own: review it,
  and approve or cancel it, like any other.
- **Conversation access.** You review each piece of a conversation before it is shared: at most 20 turns, and
  long turns are cut short. New or changed turns need your approval again.
- **The identity's label, its ID, its device status and its reminder text.**

Approval codes are never passed on.

### Pause, stop or disconnect

- **Pause access** stops ChatGPT reading until you press **Enable access** (it asks for your passphrase).
- **Stop trusting this gateway** and **Disconnect and revoke** end the connection.

These stop what comes next. They cannot take back what ChatGPT or the gateway already received.

### Check it

- **Check connection** asks the gateway whether the link is up. "Connected" means the link to the gateway works,
  not that ChatGPT made a call.
- **Preview permission changes** shows what a change would allow, without making it.
- **Start connection test** gives you a one-use challenge to run from ChatGPT (it lasts two minutes), then
  **Check remote result** shows the call the hub saw. It returns no memory text and sends no message.
- To check that a pause works, press **Pause access for revocation check** and ask ChatGPT to read again: it
  should be refused there. The app cannot see a call that was refused before it reached the hub.

### When something is wrong

- **"Waifu AI: a ChatGPT connection was closed for safety"** as a desktop pop-up: the gateway closed the connection
  because a used sign-in token was presented again. Pair again. The pop-up follows the connected identity's
  notification level: none when it is Off.
- **"ChatGPT connector paused"** on Today, or **"Gateway credential rejected"** in Settings: the gateway refused
  the hub's credential, so the hub stopped trying. Press **Retry now** if the gateway was mistaken. Otherwise get
  a new credential from whoever runs the gateway, type it under **Replace credential and pair again**, and enter
  the new code in ChatGPT. The memories and conversations you approved stay approved.
- **"This gateway's name now points at a private or local network address"**: the gateway's address used to be a
  public site and now leads to a computer on a home or office network, so the hub stopped connecting to it. Your
  approvals are kept. If you run the gateway yourself, put its address right and press **Retry now**. If you do not
  know why it changed, press **Stop trusting this gateway**. **Disconnect and revoke** works again once the address
  is right.
- **"Set a hub passphrase before connecting ChatGPT"**: set one, then press **Check protection again**.
- **The section asks for the Terms of Use**: read and accept them, then press **Check again**. A connector that
  was already set up stays off until then. You can still press **Pause access**, **Stop trusting this gateway** or
  **Disconnect and revoke** without accepting them: each only takes access away. Memory search, the connection
  test and the message requests appear once the Terms are accepted and the hub has a passphrase.
- **ChatGPT is told the history is full** ("Connector history capacity reached"): decide the pending requests,
  check the uncertain ones, and press **Remove completed message text**. The text of a sent request also goes by
  itself 7 days after it was sent; a request that was not sent keeps its text for a day; one whose outcome is
  unknown keeps it until it is settled, for 30 days at most (Activity says when that text is removed). The send
  record (without the text) is kept 30 days, so the same request is never sent twice.
- **A request expired**: it waited more than 15 minutes. Nothing was sent; ask ChatGPT again.
- **"Uncertain"** on a sent request: it may already have reached the recipient. Press **Check exact provider
  receipt** before asking again. Checking never sends it a second time. Today counts it until you settle it: once
  you know (you asked the recipient, say), press **Mark as checked**. It is still never sent again.

## Devices and roaming

[Roaming](glossary.md#roaming) is for an identity whose Hologram Companion is reached through a [bridge](glossary.md#bridge). Each device keeps its own
identity. What it can recall follows your memory bank's permissions. Nothing from roaming is sent to ChatGPT or to
a gateway.

### Steps

1. Open **Memory → Devices and roaming**.
2. Pick the bridge, type a [place](glossary.md#place) for it (your own word, such as "Home office") and press **Assign
   place**. If no bridge is listed, make one first: see [Your Hologram Companion](17-your-hologram-companion.md).
3. When you are at that device, pick it, tick **Allow spoken replies here for 15 minutes** if it may speak, and
   press **Continue here**. **Leave** ends it.

### What you can do there

- **Recall a memory.** Type what you want and press **Recall privately**: the answer shows on this page. Press
  **Speak this answer here** to have the Hologram Companion say it. A private memory asks first: for your passphrase, or Yes in
  a window on this PC when the hub has no passphrase.
- **Leave a reminder for that place.** Type the text, a time and a delivery window in minutes, and press
  **Schedule at this destination**. It is spoken only there, only while you are present with speech allowed, only
  inside the window, and never twice. **Cancel destination reminder** removes one that has not been picked up.
  Leaving, or restarting Waifu AI, cancels it: schedule it again.
- **Carry a conversation over** (a [handoff](glossary.md#handoff)). Pick the conversation and press **Create handoff**. Type
  the code at the destination's page and press **Open conversation**, then **Continue this thread in Chat**. The
  code lasts two minutes and opens once. The chat there must be empty: finish or clear what is in it first.

### When something is wrong

- **"Continue here and enable spoken replies first"**: press **Continue here** with **Allow spoken replies here
  for 15 minutes** ticked. Until then a recalled memory is shown on the page and not spoken, and a reminder can't
  be scheduled.
- **"Handoff unavailable"** or **"Conversation handoff expired"**: the code is older than two minutes, was
  already used, or was made for another place. Make a new one.
- **"Finish your draft or pending approval and start a new chat before importing this thread"**: the chat at the
  destination is not empty.
- **"Could not be played"** on a spoken answer or a destination reminder: the Hologram Companion said it could not play it.
  Nothing is repeated by itself; speak it or schedule it again if you still want it.

## Saved drafts

On an unlocked hub that has a passphrase or Windows's key, what you type in Chat and in Messages is saved on this
PC as a [saved draft](glossary.md#saved-draft).

- When you open a composer that has one, press **Restore saved draft** or **Discard saved draft**. Restoring fills the box.
  It never sends a message and never brings back an approval.
- **"Draft changed in another tab. Reload before saving."**: the same draft was edited in another window. Your
  text here is kept. Reload the saved draft, then keep the one you want.
- Locking the hub clears the page's copy.
- Drafts are not in any backup.
