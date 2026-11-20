# Talking and approvals

[All topics](README.md) · [Glossary](glossary.md)

_Chat with your identity, decide what it may do on its own, and approve what waits for you._

Talk to your identity in Chat. When it wants to do something that sends, spends or changes things, it asks you
first: that is an [approval](glossary.md#approval).

## Say hello

1. Open **Identity → Chat**.
2. Pick the identity at the top, if you have several.
3. Pick a brain chip above the box (the first free one is fine).
4. Type "Hi! What can you do?" and press **Send**.

**Stop generating** stops a reply that is still being written. Your draft is kept if you leave the page.

## The four kinds of conversation

An identity's **Identity → Chat** tab has a sub-tab for each, and one to search them:

- **Chat**: you and your identity, here in the app.
- **Messages**: its [Sneed SMS](glossary.md#sneed-sms) mailbox: messages from your phone, other identities and other people.
- **Discord**: its Discord conversations. See [Put your identity on Discord](08-put-your-identity-on-discord.md).
- **Phone**: texts and Telegram chats from your phone. See [Your phone](10-your-phone.md).

**Search** finds earlier messages: type a word or two and pick this identity or **Every identity**. Results are
newest first, with the date, where it was said (Chat, the Hologram Companion, Sneed SMS, Discord…) and the words found marked;
click one to open that conversation at that message, and **Back to results** to return. It finds a message that
holds every word you typed, in what the hub still keeps (the recent conversation and its archive). Only you see it,
nothing leaves this PC, and while the hub is locked it finds nothing until you unlock it.

## What needs your OK

Anything that sends a message, sends tokens, votes, buys or changes settings waits for you, unless you allowed
it. You see it in three places:

- **Today → Needs you first**, for every Identity.
- The identity's **Overview** says in one line what needs you; **Open Today** shows Today for that identity.
- Right in Chat, under the reply.

Press **Approve** to run it once, or **Don't** to drop it. Unanswered approvals expire after a week (an
[allowance](glossary.md#allowance) after a day).

**Notes** are not approvals: a reply your identity declined, a message a persona wrote for you, a note a guest left
on Discord. Today keeps them under **Notes**, apart from what waits for your OK, and an identity shows them as
"N notes", never as "to review". Dismiss them when you have read them; a note older than a week goes by itself.

An approval covers exactly the action on its card. If the identity then wants to do something more, that waits
for its own OK. When an approved action may or may not have happened (the network lost the answer), it is not
tried again: the approval closes and Today lists the action as one that may or may not have gone out, where you
check it before anything is sent again.

An approval for a send shows the full address it pays and is fixed to that address and amount: see
[Money: wallet, shop and voting](18-money-wallet-shop-and-voting.md).

**Sending to a registered name.** When a message or a payment goes to a name from the registry (not one of your
contacts or identities), the hub checks who holds that name with a lookup the whole network vouches for. If that
check can't be made just now, nothing is sent: you're told why, and you can try again in a few minutes, or use a
contact or the full address instead.

You can also answer from your phone: reply **yes** within 10 minutes, or text `pending` and then `yes 2`.

In the app, answer with the buttons. A line like `yes 2` followed by an authenticator code typed in Chat, said to
the voice box or said at the Hologram Companion approves nothing: the code is not checked, no brain sees it, and it is kept
masked. Where a code is needed, the app asks for it.

## Change settings by asking

You can ask your identity to change the app for you: "rename yourself to Mika", "quiet hours 23 to 7", "set my
time zone to Toronto", "use claude", "run a dream". Ask in Chat, by text from your phone, on Telegram or in a
Discord DM. "What are my settings?" lists them.

How far it goes depends on the setting:

- **Done at once**: its name, your name, the time zone, quiet hours, the Discord persona, dreaming, the old
  names it still answers to, and at the Hologram Companion: quiet hours, the character slot, listening, spoken commands and
  who answers its chat. Only when you ask yourself, in a message that quotes nobody else; otherwise it waits for
  your OK like any other change.
- **Waits for your yes**: the public name, the brain and its monthly budget, answering Discord DMs, answering
  messages on its own, and clearing the Hologram Companion's chat. Asked on Discord, these wait for the app or your phone.
- **Approved in the app or from your phone only**: what it may do on its own (autonomy), answering your texts,
  and answering strangers.

Everything else (keys, pairing, backups, security, payments) is changed in the app only; it tells you where.

## What it does on its own

Open **Identity → Permissions** → **Actions & autonomy**. **How much can it do on its own?**
has three cards:

- **Ask me first**: it reads new messages and suggests what to do; every action waits for your OK (When you're
  using it: Approval required for every write; On a new message: Propose).
- **Everyday things on its own**: replies, reminders and notes happen on their own; everything else waits (Allowed
  actions run automatically; Auto; the allow list becomes "Reply with a message" and "Write a memory note").
- **Everything within my limits**: while you use it every action runs; on its own, what your allow list names
  (All actions run automatically; Auto; your allow list and spend caps stay as they are). Money needs a spend cap
  and purchases always ask.

Picking a card saves nothing yet. Under the cards, **Before you save: what changes** lists, for each kind of person
(you in this app, your phone, a friend on Discord…), every action whose answer changes, and any change to who it
answers. **Save** makes the change; **Cancel** leaves everything as it was. Choosing "All actions run automatically"
still asks you to confirm first, as before.

**Customise…** holds the two settings the cards are made of (a change there is tried the same way):

- **On a new message** ([autonomy](glossary.md#autonomy)): **Off** (it only acts when you ask; the default), **Propose**
  (it suggests an action and waits for your OK), or **Auto** (it runs the actions you allowed, within caps).
- **When you're using it**: **Approval required for every write** (the default), **Allowed actions run
  automatically, the rest wait**, or **All actions run automatically**.

A new identity starts with nothing allowed on its own. Sending tokens is never on its automatic list until you
add it and set a spend cap, and buying in the shop always waits for your OK.

**Who it answers**, the first card on the same tab, says in one line each who gets an answer (you, your phone,
strangers; for a Hologram Companion, the people at it and strangers on Discord) and holds two switches:

- **Answer my phone even when autonomy is off**: your own phone always gets an answer.
- **Reply to strangers (in character, no tools)**: whether people the hub doesn't know get a short reply. Off
  for a new identity; turn it on if you want strangers answered.

**What it can do**, the last card, is read-only: for every action the hub knows, whether it runs, asks you first,
is held for your OK, or is not offered, for you in this app, your phone, a friend or a stranger on Discord (and,
in Advanced, an AI app with a write key). It is read from the hub's own rules (the tool matrix) for your
settings, and it also says when all writes are stopped or Unsafe mode is on. In Simple mode it shows one line per
kind of person; **Every action, one by one** opens the table.

## Its personality

**Identity → Personality** is the one place for who it is and how it talks: its name
(**Rename**), its **Personality** (the same everywhere or one per channel: [Identities](02-identities.md)), its brain and
budget, the starter profiles, **Try this sentence**, and the channel parts: the Hologram Companion's character (a paired Hologram Companion), the Discord persona, what the Hologram Companion says aloud, and in Advanced the
**Ghostwriter** (who words a message its brain declined to write). A Chat can still use another persona or brain
for that chat only.

## Details

**Starter profiles.** On Personality, **Starter profiles** (Conversation only, Remember and share, Assisted actions)
show exactly what would change before you press **Apply**. **Undo** puts the last settings back. A profile never
turns on money or voting.

**Try this sentence.** Type a message and pick who sends it; it shows who would answer and whether it would need
your OK. Nothing is sent or run.

**Did these go out?** When the hub stopped in the middle of a send, or a send was still running after 10 minutes,
it can't tell if it happened, and the same send is not tried again until you look. Check, then
press **Discard** or **Send again** (which might send it twice). All of them are listed. A money move or a
vote stays until you look at it; anything else nobody touched for a week is discarded for you.

**When two of your AIs talk** they stop by themselves once only goodbyes are left, and after 8 replies each.

**Who is who.** Your phone is an [owner device](glossary.md#owner-device) (full access). Your other identities are [peers](glossary.md#peer).
A [friend](glossary.md#friend) gets public answers only. A [stranger](glossary.md#stranger) gets a short chat reply or nothing.

**Messages are postcards.** Sneed messages are not encrypted and can't be taken back. Never send passwords or
anything private. Each identity can send one every 10 minutes ([Sneed Premium](glossary.md#sneed-premium) allows one a minute).

**Stop everything.** Text `stop all writes` from your phone and every identity stops acting on its own: what it
wants to do waits for your OK, a settings change you ask for in a chat waits too, and running coding tasks stop.
A connected AI app, device or [bridge](glossary.md#bridge) is refused any change (it can still read) until you text
`resume writes`. The hub's own notes stop too: no facts are taken from conversations and no conversation summaries
are written; the conversations wait and are summed up after `resume writes`. See [Your phone](10-your-phone.md).

**Activity.** [Activity](glossary.md#activity) in the ☰ menu shows every request: what was asked, who acted, how it
ended, and what still needs you. Tick **Needs attention** to see only those.
