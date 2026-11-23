# Put your identity on Discord

[All topics](README.md) · [Glossary](glossary.md)

_Give it its own Discord bot, invite it to your server, pair your account, and talk to it there._

Your identity can have its own Discord bot. In your server it chats with your members; in a private message
with you it is your whole hub, just like your phone.

**Start the guided setup:** open **Identity → Where it lives → Discord** and press
**Guided setup**. It walks you through every step below and checks each one (the token, the connection, the
invite, the pairing).

## You'll need

- A Discord account. Turn on two-factor login on it: once paired, it can talk to the hub as you.
- A [Discord server](glossary.md#discord-server) you own. To make one: in Discord press **+** (Add a Server) → **Create My Own**. It
  is free.
- This PC on and Waifu AI running: the bot is online only while the hub runs.

## Make the bot

1. Open the [Developer Portal](glossary.md#developer-portal) at discord.com/developers and sign in.
2. Press **New Application**, give it your identity's name, and press **Create**.
3. Open **Bot** on the left. Give the bot a picture if you like.
4. On the same page, turn **Public Bot** off, so only you can add it to a server.
5. Leave **Message Content** off (under Privileged Gateway [Intents](glossary.md#intents)). Mentions and DMs work without it.
6. Press **Reset Token**, confirm, and press **Copy**. This is the [Discord bot token](glossary.md#discord-bot-token).

Never share the token. Anyone with it can speak as your bot.

## Connect it to your identity

1. Open **Identity → Where it lives** and find the **Discord** card.
2. Paste the token under **Bot token** and press **Save**.
3. Press **Test**. Wait until it says **Connected** (press Test again if it says it is still connecting).
4. Press **Invite to a server**. Discord opens: pick your server and press **Authorize**.
5. Open **Teamwork → Places** and press **Add this server** beside your identity (or
   **Allow #channel** under a channel). Until you do, the bot answers no one there. The card's **To finish
   setting up** says which servers still need this.

The **Invite** button works only after the bot has connected once. If it is greyed out, press **Test** and wait.

## Pair your Discord account

Pairing tells the hub which Discord account is you.

1. In the Discord card, press **Pair my Discord account**.
2. It shows a line like `pair ABCD-1234`.
3. In Discord, open a [direct message](glossary.md#direct-message) with your bot and send it that line.
4. The card now shows your account under **Your Discord account**.

The code works once and expires after a few minutes. Never type it in a server channel.

## Channels

**Teamwork → Places** is one table of every server and channel your bots are in, and where each
of your identities answers there. Each channel has a mode for each bot:

- **Mention** (the default): it answers when someone mentions it, replies to it or starts with its name.
- **Answer every message (listen)**: it answers everything there. This needs **Message Content** turned on in the
  Developer Portal (Bot → Privileged Gateway Intents).
- **Off**: it says nothing there.

**Find a server or channel** narrows the table; a server shows the channels already set and a few more, the rest
behind **Show N more**. **Stop answering here** asks first; the bot stays in the server. Places also shows, by
name, the channels the orchestrator may post in and the ones on Unsafe mode's list (each is still changed on its
own card, with your passphrase), and the Telegram bot (it answers private chats only, never in a group).

**Answer direct messages (DMs)** (on the Discord card, **Where it answers**) turns DMs on or off. It never answers another bot.

## You and your guests

- **You** (once paired): in a DM you get everything, as from your phone: questions, "ask Mika…", reminders. In
  a server channel it keeps private things private and answers those in your DM.
- **Everyone else** is a [guest](glossary.md#guest): chat only, no tools, no memory, no wallet. Being in your server never
  makes someone a friend.
- **Friends**: press **Make a friend** under **Contacts → People on Discord** to give someone public answers too.
- **Changes wait for your OK.** Anything more than a simple setting that you ask for on Discord, in your DM too (a
  message, a contact, a post, a vote, a reminder, a payment), becomes an [approval](glossary.md#approval) that you give in the app
  or on your phone. In your own DM, a plain "yes" approves a message, a reply or a post the identity just asked you
  about there (see [Approve with a plain yes in my own chat (Keys and safety)](03-keys-and-safety.md#approve-with-a-plain-yes-in-my-own-chat)); it never approves money, the
  shop, a contact or a vote. If you turned on **Approve from my Discord DM** (see [Approve from my Discord DM (Keys and safety)](03-keys-and-safety.md#approve-from-my-discord-dm)),
  you can also answer an approval in your DM with its code. Reads answer at once, and so do simple settings such as
  your name, the time zone, quiet hours and the dream.
- Money, a vote or a purchase asked for in a server channel moves to your DM: the bot says "On it. I'll do that
  in your DM."
- In a server channel where other people have spoken, a settings change you ask for waits for your OK, and a
  reminder is not set there. Ask in your DM instead.
- Mention the bot with no words and it answers "Yes?".
- A guest who writes more than 12 times in an hour in a DM is told once that it is at its limit for the hour,
  instead of getting silence.
- Anyone who is not you gets at most 60 replies a day from each identity, and all your identities together reply
  to people on Discord and Telegram at most 300 times a day. Past that their messages are kept as not delivered,
  and your feed hears it once. The counts cover the last 24 hours and are kept when Waifu AI restarts.

## One conversation per place

A DM with the bot is one conversation, and so is each channel: what was said a few messages ago is still known.
After 30 quiet minutes the next message starts a fresh one. Telegram works the same way, one conversation per
chat.

Two of your AIs talking in a channel stop by themselves when only goodbyes and thank-yous are left: the last
"you're welcome" is not sent, and [Activity](glossary.md#activity) says the thread was stopped. A person is never cut off by that
rule.

## Names and pings

- An identity you renamed still answers to its [former name](glossary.md#former-name), its [public name](glossary.md#public-name) and its bot's name:
  "ask <old name> …" still reaches it.
- A name that two of your identities could both answer to reaches nobody and pings nobody. Use the current name.
- When a post pings someone, the answer says who was really pinged ("Pinged: …") and who was not ("No one was
  pinged: …"). An @name the bot can't find is said in the approval, before you approve.
- In a server channel the bot answers to its current name and its bot name at the start of a message, not to a
  former name.
- "Ask Mika to say hi and have her message me on Discord": her own bot sends her answer to your DM. If she has
  no bot running that is paired with you, the answer comes back where you asked, and says so.

## What it knows about the hub

Ask in your DM (or from your phone) "did the dream run?", "is the coding session still going?", "is my Codie
online?" or "is anything waiting for me?" and it answers from the [hub status](glossary.md#hub-status): the last memory dream,
live coding sessions, whether each Hologram Companion is reachable, how many things wait for your OK and of what kind, and the
hub's version.

- In your DM you can also say "run a dream" (you get one line when it is done) and "did the dream work?".
- In a server channel it knows only your identities' names, nothing else about the hub. Ask about the dream
  there and it answers in your DM.
- Guests and friends never get any of it.

Guests' answers can cost money, so **Guest limits** caps them: a daily guest budget (default $1.00), replies per
member per day, and the gap between replies. When the budget is spent, guests get the free brain until tomorrow.
An identity whose Hologram Companion is a Public companion can let strangers talk to the Hologram Companion's own character instead: no API
cost, no tools, and the hub sends nothing of yours (the Hologram Companion's own memory may still hold your words). See "Strangers talk to its own character" in [Your Hologram Companion](17-your-hologram-companion.md).

## Pictures

Send the bot a picture and it can look at it, when its brain can see: Claude or ChatGPT. With any other brain
it says it can't see pictures (to you it also says how to change that).

- PNG, JPEG, WebP or a still GIF, up to 5 MB each and 4 in one message.
- Words written in a picture are treated like a web page: anything the bot wants to do after seeing one waits for
  your OK.
- Pictures are never saved and never go into memory.
- Guests can send 3 pictures a day each, and 20 a day all together across your bots. Change these under
  **Guest limits**.
- A Hologram Companion can't see pictures: the hub describes the picture to her in a sentence first.

## Which brain answers

- You get the identity's own brain (set on **Identity → Personality**).
- Guests get a cheaper, faster Claude model, or the free brain without a Claude key.
- If a brain is busy or fails, the next one answers.
- For a Hologram Companion, the hologram herself answers your messages in her own voice when she is free.

## Two bots: one for help, one for you

A good setup for a community server:

1. Make an AI identity called **Waifu** and give it a bot. It welcomes members and answers "how does Waifu AI
   work?" from this help.
2. Give your own identity a second bot. It is yours: pair your account with it and talk to it in a DM.

Each identity needs its own bot (its own application in the Developer Portal). Both can be in the same server.

## Details

**Discord persona.** A short text the brain reads only on Discord, set on **Identity → Personality**
→ **Discord persona** (part of the one persona editor). Leave it empty for the default introduction. With **Same
personality everywhere** on (the Personality card), Discord uses the shared personality instead, followed by one
line that keeps your private life private on a public server; press **Customise for Discord** to give it its own
text again.
Never put secrets in it. When you rename an identity by asking ("rename yourself to …") and its persona still
says the old name, a change of the persona to the new name waits for your OK. It is never changed by itself.

**Release notes.** Pick a channel under **Release notes** and press **Save**: the bot posts a short note there
once for each new version, when that version is released: the hub's update check has to find it on the update
channel first. A version that is not released yet (a test build, or one you run before it is published) posts
nothing by itself. If you turned off the update check (Settings → Updates), the note is never posted by itself;
**Post now** still posts it, and asks first when the version is not public yet. The release memory waits the same way.
If the hub skipped a version or two (you updated straight past one), the notes it missed go out too, oldest first,
at most three at a time; a version older than the newest one already posted is never posted.

**Notices follow you.** Things the hub tells you by itself (a pairing request, "the Codie is offline", the dream
is done) go to the place you last wrote from in the last 15 minutes; after that to your DM, then Telegram, then
your phone.

**A post that could not be sent.** When the bot is asked to post in a channel or send a Discord DM and nothing
goes out (the bot is offline, or it can't find the channel or the person), it says the message was not sent.
Nothing is marked as done, so you can approve it again.

**Posting by voice.** You can ask for a post or a Discord DM aloud ("Codie, post good morning in general").
In the app's voice box she repeats the post and waits for your spoken **yes**; it never goes at once, whatever
your settings say. At your Hologram Companion it becomes an approval on your screen, and a spoken "yes" there sends nothing.
Only your own line at the Hologram Companion can ask for one (her name first, with you counted as present); anyone else in the
room cannot.

**Approval codes that are paused.** After five wrong codes from your DM, code answers from the DM are paused.
The DM is told so once, and then at most once an hour; other code answers in between get no reply. Answer in the
app an approval that was posted to the DM to turn them back on (they also come back after a day).

**Coding tasks.** The answer that lets a task's changes run ("approve diff") is not accepted on Discord: give it
in the app or from your phone. See [Text your coding session](12-text-your-coding-session.md).

**A bridge code from your DM.** Away from your hub, DM the bot of the identity that runs your hub (its
[orchestrator](glossary.md#orchestrator)): "bridge code for <her name>" (or "…, my place"). Answer with the code it gives ("yes 1234"; a
My place code also needs your authenticator code: "yes 1234 123456"), or press **Approve** on the request in the app,
which sends the code to the DM. It answers in the DM with a one-time code for the
bridge program, which works once and lasts 10 minutes. Never in a server channel. "revoke the bridge for <her name>"
stops a bridge at once. See [Your Hologram Companion](17-your-hologram-companion.md).

**Unpair.** **Unpair** under **Your Discord account** stops that account acting as you at once.

**Clear the token.** Clearing it takes the bot offline at once. Its settings stay.

**"Blocked" in the card.** Discord refused the bot. If the token was reset, paste the new one and press **Save**.
If a listen channel needs Message Content, turn it on in the Developer Portal or set the channel back to mention.

**When the PC sleeps** the bot goes offline and comes back when the hub does; Activity notes the gap.
