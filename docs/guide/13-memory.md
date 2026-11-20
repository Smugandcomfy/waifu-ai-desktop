# Memory

[All topics](README.md) · [Glossary](glossary.md)

_How your identities remember, day pages and "what did we do yesterday?", dreaming, clean-up, and the optional memory bank._

Your identities remember what you tell them and what you do together. It works from the first day with nothing
to set up; a memory bank is an optional extra that lets all of them share one memory.

## How memory works

There are four places an identity's memory lives, from closest to widest:

1. **On the Codie**: a real Hologram Companion keeps a few memory cards of its own. You can read them here and delete one.
2. **Notes on this PC**: what each identity learns ("remember that…", facts from conversations, summaries) is
   kept on this PC. This always works, with or without a bank.
3. **The [memory bank](glossary.md#memory-bank)** (optional): a shared store on the [Internet Computer](glossary.md#internet-computer). Enrolled identities
   write there, so what you tell one, the others know too.
4. **[Context](glossary.md#context)**: the last few turns of all your conversations, which every brain reads, so one identity
   can pick up where another left off.

On top of that, after you're done for the day, a [day page](glossary.md#day-page) sums the day up in a few lines.

## Look at what it knows

1. Open **Identity → Memory**.
2. **[Notes & facts](glossary.md#notes--facts)** shows what it knows, in three sub-tabs: **On the Codie**, **On this PC** and **Memory
   bank** (with the nightly pages). Each list shows 20 at a time, with a find box.
   The bank shows 20 at a time with **Load more**, and can be filtered by where a memory was learned and by
   label. The other lists show 20 with a find box once they are longer.

To teach it something, just say it: "Remember that my sister's name is Ana." Press **Why?** on a memory to see
where it came from. **Correct** fixes it; **Forget** removes it.

**Forgetting reaches the pages too.** Forget removes the memory, and it also takes it out of the pages written from your
conversations: the day and week pages that say it are written again without it, and the nightly dream's pages
stop showing the lines that say it. Saying "forget that…" to your identity does the same. Two limits: a page
that says the same thing in other words is not caught, and the conversation itself stays in your history. To
keep it forgotten, the hub keeps the forgotten words on this PC, stored like your other files, so a later
rewrite does not bring the fact back. Tell it the fact again and it is remembered again.

## Days, and "what did we do yesterday?"

1. Talk with your identity during the day.
2. After you're done for the day (half an hour after the last message, in the evening), the day page is written.
3. On Sunday night, a week page is written too.
4. Ask "what did we do yesterday?" or "what happened last week?": the answer comes from those pages.
5. "What do you remember from yesterday?" (or "from Monday", "from 3 days ago") reads that day's page to you.
   "What do you remember about the trip?" searches your notes instead.

A day's page is read only when you ask: in the app, by voice, or from your own phone or DM. Anyone else who asks
gets the ordinary notes they are allowed to see.

**Memory → Days** lists the last 14 pages, and says where each is kept: a page in your memory
bank can be read by every identity in that bank. **Rebuild** writes one again, **Correct** lets you
fix it in your own words, and **Forget** removes it.

Day pages need a Claude or ChatGPT key (see [Brains and cost](04-brains-and-cost.md)). Without one, Days says why none can be
written.

## Dreaming

Once a day, after your day ends, one identity with a Claude or ChatGPT key "dreams": it rereads the day's
conversations and tidies the memory. It fixes notes the conversations show were wrong, merges duplicates, lets
small old notes sink, and keeps one short page per person plus a dashboard every identity reads first.

1. Add a Claude or ChatGPT key: **Settings → Brains & keys → AI providers**.
2. Open **Memory → Dreaming**.
3. Check it is on and pick **Who dreams** (Automatic is fine).
4. Press **Dream now** to try it at once. It says "Dream started" straight away, then the outcome when the dream
   ends, a few minutes later. Today's **Memory overnight** card has the same button and the last result.

From your phone, Telegram or your Discord DM you can also say "run a dream": you get one line when it is done.
"Did the dream work?" tells you when the last one ran and what it changed.

[Dreaming](glossary.md#dreaming) costs a few cents a night at most, from that identity's budget. What another AI said stays
marked unverified.

## Clean-up

1. Open **Memory → Clean-up**.
2. Read the suggestions: each note has the reason (duplicate, out of date, nothing was said…).
3. Tick the ones to drop and press **Forget selected**. Each reason shows 25 at a time with **Show more**;
   **Select all** also ticks the ones not shown yet, and says how many those are.
4. Press **Dream now** to tidy what is left.

Nothing is forgotten until you tick it.

## Set up the memory bank (optional)

You don't need a bank. Without one, every identity keeps its notes on this PC, and day pages, dreaming and
clean-up still work.

With a bank, all your enrolled identities share one memory, and an outside AI tool can share it too.

**The Waifu AI memory service.** Waifu AI runs a memory bank for everyone, and every hub is already set
to use it. All you do is sign in and enrol your identities.

**Step by step:** on the identity's Overview, the **Memory bank** card has **Guided setup**: it signs you in,
enrols the identity and checks it worked. Or by hand:

1. Open **Settings → You & account → Sign-in**, press **Sign in with Internet Identity**, and sign in.
2. Under **Memory bank**, press **Enroll** next to each identity. (Or press **Enroll** on the identity's
   Overview or in Memory.)
3. If it offers to move the notes kept on this PC into the bank, say yes.

To [enrol](glossary.md#enrol) is one click: you invite the identity with your sign-in, and it accepts with its own key.

**"Hasn't let this hub in yet."** The memory service lets new owners in itself. Until it has let yours in,
**Enroll** can't finish, and your memories stay on this PC: nothing is lost, and you can enrol later.

**Another bank.** If someone runs a bank of their own for you and has let your [Internet Identity](glossary.md#internet-identity) in, paste
its id in the guided setup under **Use a different bank**, or in [Advanced](glossary.md#advanced-mode) under
**Settings → Developer → Messages, registry and memory bank**. Clearing the box keeps notes
on this PC only.

## What stays private

- Your notes on this PC, and the bank, are yours: only you and your enrolled identities read them. The one
  exception is one you set up yourself: memories you approve one by one for ChatGPT
  (see [ChatGPT, roaming and drafts](14-chatgpt-roaming-and-drafts.md)).
- Talk between you and your identities is kept owner-only; guests and friends never get your memories.
- Codes, keys, tokens and addresses are taken out of every memory before it is written.
- Guests on Discord are quoted as guests, never taken as your own words.
- Sneed messages themselves are not private: they are not encrypted.

## Details

**Context.** **Identity → Memory → Context** shows the recent turns every brain sees. **Clear** empties it;
the conversations and memories stay.

**Try your first memory.** On the identity's Overview, **Try your first memory** saves one fact and checks, step by
step, that it was heard, saved and recalled by another identity.

**Limits.** Notes on this PC keep 50 per identity; when full, the oldest copies go first. A bank has its own
limit and says when it is full.

**Leave the bank.** **Identity → Manage** → **Danger zone** → **Leave the memory bank**. What it wrote
stays in the bank.

**Without a Claude or ChatGPT key** your identity still remembers what you tell it; it just doesn't write day
pages or dream.
