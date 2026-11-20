# Troubleshooting

[All topics](README.md) · [Glossary](glossary.md)

_What to do when she doesn't answer, the bot is offline, Days is empty, or you forgot your passphrase._

Most problems have a short fix. Find yours below; if nothing helps, the log and the diagnostics at the end help
someone else help you.

## She doesn't answer

1. Look at the status light under the left column (in the header on a phone). **Offline** means no internet: replies come when it is back.
2. Open Today → **Needs you first** and **Fix these**: she may be waiting for your OK.
3. On **Identity → Personality**, check the **Brain that answers messages**. "(no key)" means it
   needs a key: add one in **Settings → Brains & keys → AI providers**, or pick
   **On-chain agent** (free).
4. If you texted from your phone, check it is trusted: **Settings → Phone & apps**.
5. Between two of your identities, a thread stops after 8 replies each. Start a new one.

A message that reached the hub more than half an hour late (the hub was off or locked) is shown but not acted
on. Send it again.

## The bot is offline

1. The bot is online only while Waifu AI runs on this PC. A sleeping PC takes it offline.
2. Open the **Discord** card on **Identity → Connections & devices** and press **Test**.
3. **Blocked** with "token": the token was reset in the [Developer Portal](glossary.md#developer-portal). Copy the new one, paste it and
   press **Save**.
4. **Blocked** with "Message Content": a listen channel needs that switch on in the Developer Portal, or set the
   channel back to mention.
5. Online but silent in a channel: add the server or allow the channel under **To finish setting up**, and mention
   the bot.

## Days says no pages

- "No day pages yet": the first is written tonight, after you're done for the day. Talk to your identity first.
- "No day pages can be written now": no identity has a Claude or ChatGPT key. Add one in
  **Settings → Brains & keys → AI providers**.

## I forgot my passphrase

The passphrase can't be recovered or reset. If you have a key backup or a hub export, you can still bring your
identities back:

1. Quit Waifu AI.
2. Move the data folder (below) somewhere else, so the hub starts fresh.
3. Start Waifu AI, open **Settings → Security & backups**, and press **Restore…** (a key backup) or
   **Restore hub…** (a hub export). Type the **backup's** passphrase.

Without a backup, those identities can't be opened again.

## Waifu AI says it is already running

Only one Waifu AI uses your data folder at a time, and a running one is never replaced. When you start it again,
it normally just opens the one that is running. If it can't, a box says why:

- **"Waifu AI is still starting…"**: wait a minute, then start it again.
- **"another Waifu AI … is using this data folder"**: another copy is running. Quit that one first (☰ → **Quit**).
- **"…already running on this data folder but is not responding"**: the running copy is stuck. Open Task Manager,
  go to **Details**, pick the process with the number (PID) the message names, and press **End task**. Then start
  Waifu AI again. If the message says the number comes from an old lock file, check the process's name first: it
  may be another program.
- **"Another program is holding this hub's lock name"**: restart the PC, then start Waifu AI again.

The box also says where the log is. When the running copy was not answering, or another program held the lock,
**Settings → Security & backups → Health** keeps a line about the refused start until
you hide it.

**"Waifu AI stopped responding", with Restart and Wait.** The app checks itself every half minute. After three
misses it asks. **Wait** gives it more time. **Restart** closes it and starts it again; Health then says it was
restarted.

Don't run an older copy of Waifu AI on the same data while a newer one runs. Quit the newer one first.

## Other common problems

- **"Rate limited" on a Sneed send**: each identity may send one Sneed message every 10 minutes. Wait the time
  shown; it never retries by itself.
- **The sign-in window doesn't open**: allow pop-ups for the app's address.
- **"This page is not signed in"** or **"That launch link was already used or has expired"**: close the tab and
  open Waifu AI from its icon again. The icon signs the page in; a bookmark or a copied address does not.
- **"The last scheduled backup failed"** on Today or in Health: the line says why. The file is kept and the hub
  tries again in an hour; press **Back up now**, or pick another folder. See [Keys and safety](03-keys-and-safety.md).
- **"No backup has been verified yet"**: back up once with this version (**Back up now**, or **Back up keys**).
- **"The Waifu AI memory service is full"** when you enrol: nothing is lost, your memories stay on this PC. Try
  again later.
- **ChatGPT memory sharing, roaming or a saved draft shows an error**: see [ChatGPT, roaming and drafts](14-chatgpt-roaming-and-drafts.md).
- **Enroll is refused**: the memory bank hasn't admitted you. See [Set up the memory bank (optional) (Memory)](13-memory.md#set-up-the-memory-bank-optional).
- **"Unlock the hub to change settings"**: nothing in Settings can be changed while the hub is locked. Type
  your passphrase on the lock screen first.
- **"A restore was interrupted and could not be undone"** (a red line on every page): the hub changes nothing until
  you choose. **Repair** tries again to put every file back as it was before the restore. **Keep the current state**
  leaves the files as they are and lets the hub work again. **Restore a backup…** puts a backup in their place; if
  that restore is stopped or fails, you are back at this choice. On a hub with a passphrase, choose Keep first:
  the hub does not unlock while it waits for a repair. **Download the snapshot** saves the copies from before the
  restore and the files as they are now in one file, encrypted with a passphrase you type for it (they hold your
  keys); it changes nothing in the hub.
- **"One setting was reset" on Today**: a saved setting could not be read, so that one went back to its default.
  Set it again; everything else is as you left it.
- **A connected app is told to slow down**: each connected app, device and coding session has its own limit
  per minute. It clears by itself within a minute.
- **A real Hologram Companion is unreachable**: it must be on the same Wi-Fi as this PC (or use a bridge). See
  [Your Hologram Companion](16-your-hologram-companion.md).

## Where the log is

The hub writes a log called `helper.log` in its data folder, `%APPDATA%\WaifuAI` on Windows (paste that into
File Explorer's address bar). It holds no keys.

The data folder used to have another name. The first start of this version renames it to `WaifuAI` and leaves a
shortcut under the old name in the same place, so an older version of Waifu AI still finds your data: leave that
shortcut alone. If another program (often OneDrive or antivirus) has a file in the folder open, nothing is renamed:
a note at the top of the app says so, your data stays where it was, and the next start tries again. A data folder you
chose yourself is never renamed.

**Copy shareable diagnostics** on
**Settings → Security & backups → Sessions and diagnostics** copies a short summary
(the version and a few settings as on or off), ready to paste when you ask for help. It holds no identity names,
no addresses, no paths and no log lines. **Copy the doctor's report** beside it copies what
`Waifu AI.exe --doctor --shareable` prints (see the doctor below), without folder paths, Hologram Companion addresses or
identity IDs.

After Waifu AI stopped unexpectedly, the notice at the top has **Copy diagnostics**. That report is fuller: it
includes your identities' names and IDs and the last lines of the log, with tokens and keys removed. Read it
before you post it where others can see it.

## Details

**The doctor.** Run `Waifu AI.exe --doctor` from the Waifu AI folder. It writes a
report and opens it. It checks the data folder, whether Waifu AI is running, the data folder's lock (free, held
by the running copy, or held by one that does not answer), whether it was restarted after it stopped responding,
that every file can be read, how your keys are kept, your clock and each Hologram Companion address. It only reads and
prints no keys. The report shows folder paths, each Hologram Companion's address and the start of each identity's id; run
`Waifu AI.exe --doctor --shareable` for a report without those, to post where others can read it.
