# Your Hologram Companion

[All topics](README.md) · [Glossary](glossary.md)

_Mock or real Hologram Companion, pairing a real one, speech, its character, quiet hours, and the bridge._

A [Hologram Companion](glossary.md#hologram-companion) identity can speak through a real hologram device, or through a [mock Hologram Companion](glossary.md#mock-hologram-companion) that shows
what it would say as text. Everything else works the same either way.

## You'll need (for a real Hologram Companion)

- A Hologram Companion on the same Wi-Fi as this PC (or a [bridge](glossary.md#bridge), below).
- The Hologram Companion awake, unlocked and signed in.

## Connect a real Hologram Companion

**Step by step:** on **Identity → Where it lives**, press **Guided setup: connect a real Codie**. It finds
the address, saves it, pairs, and checks that you hear her speak. Or by hand:

1. Open **Identity → Where it lives**.
2. Under **Device mode**, pick **Real Codie**, then **Connect real Codie**.
3. Enter its address, like `http://<the Codie's IP>:8081`, and its timezone. (**Find my Codie…** in the new
   identity window can look for it on your Wi-Fi.)
4. Press **Pair…**. The Hologram Companion shows a code: type it in.
5. Pick a session of about 12 hours or a long-term one.
6. Press **Test the connection**.

The Hologram Companion's IP address is in its own network settings, or in your router's list of devices.

## Talk to it

On **Identity → Where it lives** the Hologram Companion comes first: its status (**Right now**)
and the **Device** card (pairing, **Who answers messages**, **Test the connection**). The rest is in a row of
sub-tabs under it: **What it said** (the speech log), **Alarms & notes**, **Quiet & speaking up** (device quiet hours
and when it may speak up on its own), **Its memory of you** and **Lab**.

- **Speech**: the log of what it said. Type in **Say something to the Codie (testing)** and press **Say** to try
  it; nothing is sent anywhere.
- **Who answers messages**: **The Codie** (its character answers in its own voice) or **The hub** (the
  identity's brain answers, with tools).
- By voice: "hey Codie, remind me at 7 to call mum". Anything that sends or spends becomes an approval on your
  screen; a spoken "yes" never approves it.
- When nobody has spoken to her for 10 minutes, the hub checks what was said every 15 seconds instead of every few
  seconds, so the first thing you say after a quiet stretch can take up to 15 seconds to be acted on.
- A sentence that starts with "don't …" or "no, …" is talk, never a command: "don't vote yes on that" changes
  nothing.
- With a coding session connected, "check on the session" asks it even without her name; "the coding is going
  well" is just chat.
- "Codie, tell me when it's done" (her name first) watches the coding session and tells you when it finishes;
  name the session when several are connected. See [Text your coding session](12-text-your-coding-session.md).
- "Codie, post good morning in general" becomes an approval on your screen, like every send. See
  [Put your identity on Discord](08-put-your-identity-on-discord.md).
- Every other change said at the Hologram Companion ("remember…", "forget…", "mute notifications", "hide the shop") also
  waits for your [approval](glossary.md#approval) on your screen. Only the room's lights change at once.
- **"Stop talking."** Say her name and "stop talking" (or "be quiet"): what the hub was saying through her stops,
  and what it had waiting to say is dropped, except a reminder that is ringing or an answer you asked for. Anyone
  in the room who uses her name can say it, but when the hub cannot tell it is you (you have not used the app in
  the last few minutes) it only stops the speech: nothing waiting for you is dropped, and it works once every 10
  seconds. It reaches the hub a few seconds after you say it, and it does not stop her own character's talk.
- **Who counts as you.** A line counts as yours only when it uses her name and you touched the app (opened it or
  changed something in it) in the last 15 minutes. Talking to her with her name keeps it going, 15 minutes at a
  time. A text from your phone, Telegram or Discord never starts it, and it ends it. Otherwise it is someone in
  the room: no memory and nothing private (messages, contacts, notes, balances, money history, orders,
  approvals); she says "I can only share that with my owner". While you count as present, anyone in the room
  using her name gets your private reads.
- **Touch the app before private asks.** Relays ("Codie, tell claude hi"), coding-session questions, "what did
  claude say?" and "send that one" run only for you; anyone else hears that she can do that for you when you're
  here. A reminder someone else sets aloud rings on the Hologram Companion only.

## My place or Public companion

A Hologram Companion connected to this PC has a role, the same two a bridge token has. It is on
**Identity → What it may do** → **Who it answers**, under **The Hologram Companion's role** (the Device card
shows it as one line). The role stays the same when the Hologram Companion is re-paired or its address changes: it is the same
device.

- **My place** (the default, and what every Hologram Companion was before): your own Hologram Companion. Everything above applies: a line said
  with her name while you are present is yours. My place assumes that whoever speaks to the Hologram Companion is you, its owner. There is no PIN.
- **Public companion**: a Hologram Companion set up for other people, like one in a shop window or at a reception desk. Everyone
  who talks to it is a guest, you too: no line there is ever taken for yours. It answers questions in a few
  sentences with the guest brain (Claude Haiku when you have a Claude key, within the **Daily guest budget** on the
  Discord card, $1.00 unless you changed it; then the free on-chain brain for the rest of the day). An identity on a
  free brain stays on it, and its own paid brain is never used there. It never reads your messages, notes, contacts
  or wallet, nobody there can change anything on this hub, and nothing is put on your approval list or texted to your
  phone from there: a change gets one line, "I'm a public companion, so I can't do that here". A reminder someone sets
  there rings on that Hologram Companion only.
- **What a Public companion says, and what it never says.** It says its answers to the people talking to it, a
  reminder one of them set there, and a line you deliberately have it say (an identity's "asks me to say"). It never
  says anything meant for you: new-message announcements, "<name> answered a stranger", answers to your texts, your
  own reminders, coding-session news or the hub's notices. Those reach you another way: through a My place bridge of
  the same identity if it has one, else in the app (each is a line in Activity, "not said at the Public companion
  Codie", and what it announces is where it always is: Messages, approvals, Reminders). Your reminders ring on your
  phone or Discord instead (else in the app), and are not set on that Hologram Companion. One already set on the Hologram Companion at My place
  is taken off it when you make it a Public companion and rings the same way (Activity says so; if the Hologram Companion is off,
  it is taken off when it is back). Switching back to My place sets the ones not yet due on the Hologram Companion again as its own
  reminders (if the Hologram Companion is off, when it is back; Activity says so). **Who answers messages: The Hologram Companion**
  is off while it is a Public companion: your texts are answered by the identity's brain (as with **The hub**),
  never put into the Hologram Companion's chat. Your choice is kept and works again on My place.
- **Make it a Public companion** asks for the hub passphrase (a hub with none asks in a window on its PC), because
  whatever the Hologram Companion itself already knows of you (its character, its memory cards, what you said to it before) could
  be heard by the people who talk to it. It also switches off **Let her own voice know my facts** (on the Memory
  page) and **Copy my facts and preferences to the Codie** (the memory-card sync; the cards the hub wrote are removed
  from the Hologram Companion, a card changed on the device stays), and both stay off while it is a Public companion.
  **Switch back to My place** asks the same way (the passphrase, or the window on the hub's PC), because back at My
  place anyone there who says its name while you are present counts as you. Each change is in Activity.
- A Hologram Companion through a bridge takes the role of each bridge token instead (see Details below).

## Strangers talk to its own character

A Public companion Hologram Companion can let strangers on its Discord bot talk to the Hologram Companion's own character, the way you talk
to it yourself. Choose it on **Identity → What it may do** → **Who it answers**: **Strangers on
Discord**.

- **the guest brain** (the default): as before, strangers get the guest brain.
- **its own character**: a stranger's DM, or a message in a channel where the bot answers, goes to the Hologram Companion's own
  chat, and the Hologram Companion's words are the reply. The hub only carries the words: no brain of the hub writes or changes
  the answer, no tool runs, and the hub sends nothing of yours (memories, notes, messages) with their words. The
  Hologram Companion is told the person is not you and that it cannot send, look up or change anything. Links in its answer are
  made harmless and nobody is pinged, as for any guest reply.
- **The Hologram Companion's own memory is the one thing the hub cannot hold back.** Its chat history and its own memory may
  still hold your words: what you said to it, and what the hub passed it while it was My place. Choosing its own
  character therefore asks for the hub passphrase (on a hub with none, a Yes window on its PC), and for a Hologram Companion
  connected to this PC it offers to clear the Hologram Companion's chat first. The hub cannot clear the chat of a Hologram Companion behind a
  bridge: clear it on the Hologram Companion itself.
- **its own character, else "away"**: the same, and when the Hologram Companion cannot answer the stranger is told, in one line, that it is away
  right now, instead of getting the guest brain.
- The Hologram Companion answers in text only unless you choose **spoken on the Codie too**. A Hologram Companion through a bridge speaks by
  default.
- One stranger at a time: a second waits, a third is told the Hologram Companion is busy and to try in a minute. Your own turns
  come first: while the hub has something for the Hologram Companion, a stranger gets the guest brain (or "away") at once. A
  Hologram Companion that is busy, asleep, locked, unpaired or offline is not waited for. Activity says why, once an hour.
- The guest limits on the Discord card still apply to each stranger. The character's answers cost no API money; **Settings → Brains & keys → Monthly budgets** shows how many strangers it answered today.
- A My place Hologram Companion never takes a stranger's turn: it is your own tube. Switch it back to My place and strangers get
  the guest brain again (your choice is kept for when it is a Public companion again).
- Through a bridge it works only with the Public companion bridge tokens you had when you chose it, with **The
  bridge may answer** on and the bridge connected. A token made later gets no stranger's words until you choose
  **Let them answer strangers too** (it asks again). A My place bridge never gets a stranger's words. A bridge older
  than this version cannot answer in text only: with text only chosen, it gets the guest brain (or "away") instead.
- When a stranger is answered, the spoken notice says only that, never their words or the answer (read it in the
  app).

## Its own conversation uses the hub

A paired Hologram Companion on the newer Hologram Companion software can let its own conversation (its usual cloud model, or a model you set
up on the Hologram Companion) ask the hub things while you talk to it: "what's in my messages", "remember that". Turn it on per
Hologram Companion on **Identity → What it may do** → **Who it answers**: **Let the Hologram Companion's own conversation use
the hub's tools**. It is off until you turn it on, and turning it on asks for the hub passphrase (a hub with none
asks in a window on its PC).

- The hub cannot tell who is talking to the Hologram Companion, so each request is decided as a line said at that Hologram Companion. On **My
  place** it can read your messages, contacts, notes and Activity only while you are present (you used the hub's
  app in the last 15 minutes, as for a line said there); otherwise it is someone in the room and gets the public
  answers only. It can also look things up (Help, the shop, a Hologram Companion name) and ask to remember a note: a note always
  waits for your OK in the app, and the Hologram Companion says so.
- While the Hologram Companion's own model is answering someone else's message (a friend, another hub's identity, a Discord chat,
  your own line in a Discord server channel), and for two minutes after, a request is theirs, not yours: it gets what
  that person may have anyway (a public answer), never your messages, contacts, notes or Activity, and no note is
  taken or held. That you used the app a moment ago does not change this.
- On a **Public companion** it gets the public answers only and nothing ever waits for you.
- It never moves money, uses keys or sends anything in your name. The words asked are not written to the log.
- A Hologram Companion on the older software (1.5.3) does not take the hub's tools: the hub says it needs the newer Hologram Companion software
  and the switch stays off.
- Turning it off removes the hub's tools from the Hologram Companion (when the Hologram Companion is reachable; otherwise the next time it is).
- The switch belongs to the Hologram Companion you confirmed it for. Unpairing switches it off, and so does pairing the identity
  to a Hologram Companion at another address or on another account; turn it on again for that Hologram Companion if you want it. Pairing the
  same Hologram Companion again keeps it.
- A backup made while the switch was on shows it in the restore preview ("lets its Codie's own conversation use the
  hub's tools"), like the other things a restore would open up.

## Selling from a store at a Public companion

A Public companion (a Hologram Companion connected to this PC, or a Public companion bridge token) can sell from the IWEP stores
you choose. Choose them under **Identity → What it may do** → **Who it answers** → **Selling**, one
list for the Hologram Companion and one for each Public companion bridge token. None is chosen at first, and then it takes no
orders.

- A visitor asks for something ("buy the mug" with the Hologram Companion's name first, or in their own words). The Hologram Companion reads the quote back: the
  items, the subtotal, that shipping and tax are added on the store's checkout, the estimated total and how long the
  price holds. Nothing is bought.
- When the visitor says yes, the Hologram Companion gives a short code and the page to enter it on ("go to iwep.app/p and enter
  K 3 M 7 Q X"). "Say the code again" repeats it. The visitor pays on the store's own checkout, on their own phone,
  with their own card. "Did my order go through?" reads where it is.
- Your wallet, keys and approvals are never used, nothing is bought in your name, and nothing waits for your OK.
  Each visitor gets their own buyer for a few minutes, so one visitor never sees another's order, and the hub keeps
  no visitor details. The code is said in the hub's own words, never the brain's.
- At most 20 quotes and 10 codes an hour at each Public companion. Each code is a line in Activity (the store, the
  total and when the code ends) and the Selling section counts today's quotes and codes.
- Strangers on Discord who talk to its own character cannot buy: that mode has no tools. Buying needs the guest
  brain. A My place Hologram Companion or bridge does not sell this way: buying for yourself is the **Shop** card on its More tab.

## Its own features (a paired real Hologram Companion)

- **Character**: which character it plays and its slots. **Switch** changes slot; **Edit** then **Review
  changes…** saves changes on the Hologram Companion.
- **The Hologram Companion's voice** (on **Identity → Personality**, the Personality card): what the hub uses
  when it speaks for the Hologram Companion (answers it writes to be spoken aloud, and when it answers because the Hologram Companion is not
  answering). It is the shared personality, or the Hologram Companion's own text, or, with neither, the Hologram Companion's own description.
  The Hologram Companion itself keeps its own character: its name, voice, looks and the answers its own model gives stay the
  device's own, set on the Hologram Companion or in **Character**.
- **On the Codie** (on the Memory page): the memory cards it made itself. **Delete** removes one from the Hologram Companion
  after asking; it cannot be undone. A card marked "from hub" has no Delete: forget that memory instead. Cards are
  edited on the Hologram Companion.
- **Alarms & reminders**: set, switch off and delete alarms and reminders that the Hologram Companion rings itself, even with the
  hub closed. A reminder's time is read on this PC's clock: "at 7" and "every day at 7" mean 7 here, also when
  the Hologram Companion's clock is set to another time zone. Then the answer also says what time that is on the Hologram Companion's clock,
  and the reminder rings at the same moment. Alarms ring on the Hologram Companion's own clock.
- **Clear the Codie's chat history…**: deletes what the Hologram Companion keeps of its own chats.
- **Right now**: her status in one line, with **Refresh**. While she is unreachable it says since when.
- **Alarms** take days (Mon–Sun chips, Weekdays, Every day, Once) and a ringtone.
- **Notes**: the Hologram Companion's own notes; **Delete** always asks first. Add notes in the Hologram Companion's Lab for now.
- **Proactive**: one switch for each moment she may speak up on her own, with its cooldown. Quiet hours still apply.

## Ask her from anywhere

From the Chat tab, the voice box, your phone, Telegram or your Discord DM:

- **Status**: "what's the Codie doing?"
- **Alarms with days and a ringtone**: "weekdays at 7", change one, switch it off or on, delete one.
- **Notes**: list them, delete one.
- **Switch character** by name.
- **Read a diary day**: today, yesterday or a date; shown, not spoken.
- **Stop talking**: stops what the hub is having her say, the answers waiting their turn and the queued
  announcements. A reminder ringing still rings.
- **Your reminders**: one list, the hub's marked "(hub)" and the Hologram Companion's own notes and reminders "(on the Codie)".
- **Memory cards**: list them, delete one (it asks first and names the card). Cards the hub keeps in sync can't be
  deleted this way.

In the app a change runs and a delete asks first. From the phone, Telegram or Discord a change becomes an
approval that expires in an hour. Only the tools her Lab permissions allow are offered.

If the Hologram Companion at the address starts answering as another device or account (a firmware update can do this), the hub
stops listening and texts you once. **Pair** again to resume.

## The lights

Ask her from your phone or your DM, in your own words:

- **On and off**: "turn the lights on", "lights off". A word she can't read as on or off changes nothing, and
  she says so.
- **Colour**: a colour word ("blue", "pink", "warm white") or a colour code. "Black" or "off" switches them off.
- **Brightness**: a number from 1 to 100 is a percent, so 1 means 1%, the dimmest.

## Switched off on the Hologram Companion

The Hologram Companion has its own switches for what an app like this hub may use: alarms, notes and reminders, memory cards,
lights and music. They are on the Hologram Companion itself, in its own settings under **Lab** (Laboratory), not in this app.

When one is off, the Hologram Companion refuses that part and everything else keeps working. The hub then stops asking for it in
the background, writes one row in Activity, and shows one line on Today: "Mira's Codie has alarms and notes
switched off in its own settings (Lab): turn them on there, or ignore this".

- **To use them:** open the Hologram Companion's own settings, go to Lab, and switch the named ones on. The hub notices within a
  few minutes; the line goes away by itself.
- **To leave them off:** press **Ignore** on the line. It comes back only if something else is switched off.
- Asking for an alarm or a note yourself still gets a plain answer saying which switch is off.

If the Hologram Companion refuses a background job for another reason (for example older Hologram Companion software that does not have it),
Today says which one, with **Try again**. The hub tries by itself once a day, and at once after you pair the Hologram Companion
again.

If the Hologram Companion is a Public companion and still holds memory cards the hub wrote for you, because it refuses to let the
hub remove them, Today says so on a line of its own: "Mira's Codie still holds 2 of your memory cards and visitors use
it". **Ignore** does not hide that line. Switch memory cards on in the Hologram Companion's Lab settings and press **Try again**,
or delete the cards on the Hologram Companion itself.

## When the Hologram Companion is offline

- You are told once, by text, after about ten minutes. Nothing is said aloud about it later.
- The hub remembers that she is offline, also across a restart. It checks every minute for the first half hour,
  then every five minutes. **Retry** on the Device card and **Test the connection** check at once.
- Messages are still answered, just not spoken. When she is back, what waited starts at once.
- Spoken announcements don't pile up: one older than 15 minutes is not read out late. Together they become one
  line, "N messages came in while I was away. Open Waifu AI to read them." An answer to something you asked
  waits up to six hours.
- If the device at the Hologram Companion's address now answers as a different device, the hub stops listening and tells you
  once: "… now answers as a different device. Listening stopped. Pair it again in the app." If it refuses the hub
  three times in a row: "… no longer accepts the hub. Pair it again in the app."

## Quiet hours

**Device quiet hours** (the **Quiet & speaking up** sub-tab on **Identity → Where it lives**) sets when the Hologram Companion says nothing except answers to what
you asked. What came in meanwhile becomes one line when quiet hours end. To make every Hologram Companion keep the hub's own quiet
hours instead, turn on **Also silence the Codies** in **Settings → Quiet & away → Quiet hours**.

**What the Codie says aloud** on **Identity → Personality** sets how it tells you about new things:
Off, Chime, or Speak (it says them aloud). The same level shapes the desktop pop-ups.

## Details

**A Hologram Companion in another place.** On the Device card choose **Through a bridge** → **New bridge token**. Run
the bridge program on a PC that stays on next to the Hologram Companion: on Windows that is `Waifu AI Bridge.exe` (its own
download; it asks for the Hologram Companion's address, this hub's address and the token, and the card lists them in order).
On Linux, macOS or a Raspberry Pi, run `bridge.mjs` with Node instead: it is in the bridge zip with
`HOW-TO-RUN-WITH-NODE.txt`, which says how. The token is shown once. The card shows when it last heard from the bridge.

**Talking to a Hologram Companion through a bridge.** Tick **Act on what is said at the Codie** on the same card. Say the Hologram Companion's
name first ("<her name>, …"): the bridge sends what the Hologram Companion heard, and the hub's answer is spoken there, also in quiet
hours. The hub cannot tell who is speaking at a Hologram Companion in another place, so everyone there is treated as a guest:
questions and the hub's public answers work, a reminder rings at that Hologram Companion, and "<her name>, stop talking" stops the speech
(nothing waiting for you is dropped). Asking another identity or a coding session, your messages, money, your private notes and any
other change stay in the app: the Hologram Companion says so in one line and nothing is done. An alarm cannot be set through the
bridge. The hub answers six such lines a minute through one bridge. An identity keeps at most 20 waiting reminders set
through its bridges (every token and both roles together; yours from the app or your phone do not count): the 21st gets
one line saying so, until one rings or you cancel one under Reminders.

**Who pays for a guest's line through a bridge.** A guest's question there is answered as a stranger's on Discord
is: by Claude Haiku with a short answer (when you have a Claude key), under the same daily guest budget (the Discord
card's **Daily guest budget**, $1.00 unless you changed it). Once that is spent, guests get the free on-chain brain for the rest of
the day. The identity's own brain (Claude, ChatGPT) answers only your own lines at My place. An identity on a free brain
stays on it. A guest's cost still shows in Settings → Brains & keys → Monthly budgets and counts toward that identity's monthly budget.

**Each bridge token has a role.** You choose it when you make the token (Device → **Through a bridge** → **Role of the
new token**) and can change it on the same card at any time.
- **Public companion** (the default, and what every older token is): everyone at that Hologram Companion is a guest, as above. The
  Hologram Companion talks to people in the character's voice and answers public questions, and nobody there can change this hub.
  It never says anything meant for you (see "What a Public companion says" above): with no My place token, your
  announcements go to the app and answering your texts in its own voice is off. Good for a shop window or a reception
  desk.
- **My place**: the person at that Hologram Companion is treated as you, the same as at a Hologram Companion connected to this PC while you are
  there, and by the same rule: a line said with the Hologram Companion's name is yours only while you used the hub's app in the last
  15 minutes (from anywhere, also over Tailscale), or your own last line there counted within 15 minutes and you have not
  texted from away since. Your messages, notes and wallet can be read aloud, and your own spoken requests work (asking another identity
  or a coding session, reminders for you). Changes asked there are decided as at home: they wait on your screen for
  your OK, money and unlocking, disarming or opening need exactly the OK they need at home, and "stop all writes" and
  quiet hours apply. Making a token My place asks for the hub passphrase (a hub with none asks in a window on its PC).
  In this release a change asked aloud at My place still gets the Public companion's one line until the bridge's voice
  is checked with a real Hologram Companion; your reads work now.
- **The risk:** My place assumes that whoever speaks to the Hologram Companion is you, its owner. There is no PIN. The hub cannot recognise voices, so anyone standing at that Hologram Companion can act as you. Choose My place only
  for a place you control. **Switch back to Public companion** or **Revoke** on the Device card ends it from the next
  line; each change is in Activity.
- **Expiry (either role):** a token never expires unless you choose an expiry: **The new token expires** when you make
  it, or **Expires** and **Set expiry** on its row later (1 day, 7 days, 30 days, a date, or Never). An earlier expiry
  (or one where there was none) needs nothing more and works even before you accept the Terms. Letting a My place token
  live longer (a later date, or Never where it had one) asks for the hub passphrase, as making it My place does. When the
  time passes, the bridge is refused at once, anything still waiting to be said there is dropped, a conversation open
  there ends, Activity has a row and you are told once. The card then shows the token as expired: make a new token to go
  on.

**A bridge code when you are away.** Without the app at hand, ask the identity that runs your hub (its
[orchestrator](glossary.md#orchestrator)) from your own Discord DM or by text from your phone: "bridge code for <her name>" (or "…, my
place"). Answer the approval it asks for ("yes 1234"; a My place code also needs the 6-digit code from your
authenticator app, and without an authenticator set up it is made only in the app). Or press **Approve** on the request
in the app: the code is sent to the phone, Telegram or DM that asked, never shown in the app (a My place code asks for
the hub passphrase there). You get a one-time code like
K7P2-9WXZ: type it into the bridge program where it asks for the token, within 10 minutes. It works once, the token
itself never travels in a message, and you are told on the same channel when the code is used. If that identity is on
the Mock device, using the code switches its Device to Through a bridge by itself, and the message says so (a real Hologram Companion
paired on this network is left as it is). "revoke the bridge for
<her name>" (or "revoke all bridges") from the same place stops it at once. Every code made, used, expired unused or
revoked is in Activity. Anyone who can read your texts or your Discord DM can read a code you asked for too: if you
are told a code was used and it was not you, revoke the bridge at once.

To use this hub's app from that place too, open it over Tailscale: add the hub's Tailscale name under
Settings → Developer → Reaching this hub, then open that address in a browser there.

**The Lab** (the last sub-tab of the Hologram Companion, on **Where it lives**) opens the Hologram Companion's own management page inside the app. With a paired Hologram Companion, **Read the Lab check**
there shows what the Hologram Companion reports for its language, its music, its notes and reminders and its speech volume, as
plain text. It only reads; nothing on the Hologram Companion changes.

**Announce to a device** (in the **More** fold of **Where it lives**) sends incoming messages to another voice device on your network.

**Her own words, or the hub's.** When you text her and the hub has the answer (a balance, a status), she says it
in her own voice. If what she said is not the hub's answer (a stock line of the device, for example), the hub's own
words are sent to you as text instead.

**What she knows about the hub.** Asked from your phone or your DM, she knows how many AIs are on the hub,
whether a coding session is live and how much is waiting for you. See [What it knows about the hub (Put your identity on Discord)](08-put-your-identity-on-discord.md#what-it-knows-about-the-hub).

**Busy Hologram Companion.** While it speaks, sleeps or is in Ambient mode, messages wait; none is lost. The hub's brain
answers for it when it can't.
