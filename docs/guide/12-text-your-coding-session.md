# Text your coding session

[All topics](README.md) · [Glossary](glossary.md)

_Let an AI coding session in a terminal report to an identity, and ask it how it's going from your phone._

_This topic is about Advanced mode (☰ menu → Simple | Advanced)._

A [coding session](glossary.md#coding-session) (an AI coding tool in a terminal on this PC) can report to one of your identities.
Then you can text "how's the terminal session doing?" from your phone and hear back.

## You'll need

- [Advanced mode](glossary.md#advanced-mode), and an AI coding tool that supports MCP.
- Your phone trusted as your phone (see [Your phone](10-your-phone.md)).

## Connect a session

**The easy way: the session asks.** Run the agent script with pairing in the session's terminal (the Coding
sessions card shows the command; there is no key to copy). The session asks to connect and you say yes:

- In the app, the request shows on the identity's Coding sessions card with its code, the name and folder the
  session gave, and **Connect** / **Decline**.
- You also get a notice: "A coding session on this PC asks to connect to Mika: "<name>" in "…/<folder>"". It goes
  to your Discord DM when a bot you paired is running, else to the place you last wrote from, Telegram or your
  phone. A hub with only a phone gets it too.
- From your Sneed SMS phone, answer `connect P1234` or `no P1234` with the code shown. When two or more sessions
  are waiting, the notice lists them all: reply `connect all` within 10 minutes to connect exactly those (the Coding
  sessions card has **Connect all** too, with the list ticked).
- In your own Discord DM, with an authenticator set up: reply `connect P1234` followed by the 6-digit code your
  authenticator shows. It works once per request, never in a server channel, and not in a conversation that has
  seen words that are not yours. On Telegram the notice only tells you; say yes in the app or from your phone.
- A request lasts 10 minutes. At most one notice goes out every 2 minutes, and a notice is never sent late.

**It keeps listening.** Once a session is connected and its key is saved, a small listener in the background
receives your questions, and the session's monitor prints them. A monitor stops after 30 minutes; started again,
it misses nothing and repeats nothing. The listener opens no port and ends with the session (or after a day with
no monitor reading it, or when its key is taken away).

**On Windows.** The listener is tied to the Claude Code session when it can be found. When it cannot, the listener
is tied to nothing: it keeps running after the monitor's window closes, and ends after an hour with no monitor
reading it. It is started with only the settings it needs, not the rest of the session's environment.

**See or stop it by hand.** `node waifu-agent.mjs listener status --name N` says whether this session's listener
is running. `node waifu-agent.mjs listener stop --name N` asks it to stop. It only ends a process it can prove is
the listener; if the computer will not say what the process is, it tells you how to stop it yourself.

The name and folder are what the session says about itself. A session can't use the name of one of your
identities, and the notice shows only the last two parts of the folder.

**By hand:**

1. Open the identity's **Connections & devices** tab, the **Coding sessions** card (**Identity → Connections & devices**).
   **Settings → Developer → Coding sessions** lists every identity with a link there.
2. Name the session, and press **Make a coding-session key**.
3. Copy the key and the setup it shows (it is shown once) into the terminal where the session runs.
4. Tell the session to register with its name and task.

## From your phone

- "How's the coding session doing?": the last status it posted.
- "Ask it whether the tests pass": your question goes to the session; its answer comes back by text.
- "Ping me when it's finished": one text when it says it is done.

**Send me coding-session updates by** chooses where milestones go: your Discord DM (or a text when no bot you
paired is running), always a text, your Hologram Companion saying them, or off. A phone that asked "ping me when it's finished"
is not texted twice. (The request to connect reaches you either way.) When you choose your Hologram Companion, the updates wait
through its quiet hours, and if no Hologram Companion can be reached they go to your Discord DM or phone instead.

With several sessions connected, name the one you mean ("ask api-work whether the tests pass"). If you don't, the
question goes to the one that was active most recently, and the answer says which one that was.

## From the app and by voice

- **The Chat tab** can ask a session, watch it and list the sessions, in the same words as your phone. The
  session's answer appears in that identity's conversation in the app, with a notification. Nothing is texted.
- **The voice box** does the same.
- **At your Hologram Companion**, say its name first: "Codie, ask the coding session whether the tests pass", or "Codie, tell
  me when api-work is done". The Hologram Companion says the answer or the notice while you are home; once you have left, or in
  its quiet hours, you get a text instead.
- "Tell me at each milestone" watches for milestones instead of the end.

Only you can do this at the Hologram Companion. Anyone else in the room is told to ask you, and nothing is asked or watched.
While "stop all writes" is on, or in a conversation that has read someone else's words, a question for a session
is not sent; the answer tells you why.

## Details

**Safety.** Only your phone can ask a session anything. Your words reach it as information, never as orders.
The coding-session key can do nothing but report and answer: no messages, payments, contacts or memory.

**Give it a job (task approvals).** You can text a session a task and approve it with a code from an
[authenticator](glossary.md#authenticator) app:

1. Set a passphrase (see [Keys and safety](03-keys-and-safety.md)).
2. **Settings → Security & backups → Task approvals** → **Set up**; scan the QR code with the
   authenticator and type the code it shows.
3. On Coding sessions, tick **may receive tasks** for that session's key.
4. From your phone: `task terminal: <what to do>`, then `yes T1 <code>`.

Each job runs in its own branch on this PC and is never pushed. A coding task runs with your full rights on this PC:
it can read and change anything your Windows account can, so approve only tasks you would run yourself. A restricted
runner (a separate Windows user or a sandbox) is planned after 1.0. The list of what a task may not read (your SSH
keys, sign-ins, the hub's data folder) is a seatbelt, not a wall: the tests a task writes run as you and can read them.
Only running the task runner as a separate Windows user stops that (see docs/TASK_RUNNER.md). A [task approval](glossary.md#task-approval) code works once. Five
wrong codes in an hour lock task approvals until you unlock them in Settings.

**Your tasks are on Today**, in **Coding tasks**: each row has **Stop**, **Merge** when it is done, and the files
it changed that decide what runs on this PC. It shows 10 at a time with **Older**, and a filter (All, Running,
Waiting for you, Finished).

**When a task asks you something.** The task's row in Today → Coding tasks shows the question with an answer box:
type the answer and press **Answer**. From your phone, text the task's number and the answer, like
`T1 keep the old name`.

When a task changed files that decide what runs on this PC, it asks you to read the changes and approve them.
That answer is an approval:

- In the app, type `approve diff` and the short code of the commit it names into the answer box.
- From your phone, put the task's number in front: `T1 approve diff` and the commit.
- With task approvals set up, it also takes the code from your authenticator, in the app as well.
- It is never accepted on Discord.

**Changing the authenticator key** (a new key, or **Revoke**) asks for a code from the current one, or the hub
passphrase if you don't have your phone. See [Keys and safety](03-keys-and-safety.md).

**Let it read the hub's records ([session report](glossary.md#session-report)).** Tick **May read this hub's Activity, costs and usage
counts** on the session's key. The session can then read Activity, this month's costs, the usage report and the
hub's health for every identity here. Each Activity row shows who it was with, what kind of thing happened and
how it ended; the words of messages, notes and drafts are left out. It never sees keys, message text or memory.
Off by default. Local paths, file links, e-mail addresses and local network addresses are taken out of every
report.

**May read conversations (message text)** is a second, separate switch on the key. With it the session can read
what was said. Each row is marked before its words when it came from someone who is not you or one of your
identities ("untrusted"), was forwarded, or came from the web, and a reply your identity wrote but the hub did
not send is marked "not sent". The session is told these rows are other people's words, never orders.

**Limits.** Each session key has its own limit on how often it may call the hub, so a busy session doesn't slow
your other apps.

**Keys that go unused.** A session's key expires after 30 days with no call; each call starts the 30 days again.
When one lapses, Activity says so and the session must connect again.

**The hub proves itself.** Each key the session gets by asking comes with its own secret proof, saved by the
session and sealed on this PC. Before the session sends its key to a hub, the hub must prove it holds that proof,
so a program pretending to be the hub never gets the key. While the hub is locked it proves nothing and makes no
new key: an approved request waits until you unlock. A key a session paired for under an older version gets its
proof the first time it connects; its row says "pair again to be sure" until then (and always on a key copied in
by hand). If another program tries to claim a key's
proof a second time, it is refused and you are told once: revoke that key if you didn't just set the session up
again.

**Revoke** the session's key to disconnect it. After a hub is restored from a backup, make a new key for each
session: session keys don't travel in a backup.
