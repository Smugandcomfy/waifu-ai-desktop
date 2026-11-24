# Keys and safety

[All topics](README.md) · [Glossary](glossary.md)

_How your keys are encrypted on this PC, what a passphrase adds, backups, restoring, and locking the hub._

Each identity is a secret [key](glossary.md#key) that lives only on this PC. On Windows your keys are encrypted on this PC
even without a passphrase. A passphrase adds a lock, and you need one to make a backup that moves to a new PC: if
the key is lost, that identity is gone for good.

## Encrypted on this PC

On Windows, Waifu AI encrypts your keys, API keys, conversations and notes with a key that Windows keeps for
your Windows account. Nothing to set up: it happens the first time Waifu AI starts. Today tells you once
("Your keys are now encrypted on this PC").

- Someone who copies the data folder to another PC, or opens it from another Windows account, can't read it.
- Programs running as you on this PC can still ask Windows for that key. A passphrase stops that.
- This key never leaves this PC, so a backup made with it opens only here. Scheduled backups still run without a
  passphrase, for this PC only (see Details); a backup that moves to a new PC needs a passphrase.

If Windows can't keep the key (some work PCs block it), the keys stay unencrypted and Today says why. Set a
passphrase to encrypt them instead.

On a Mac or on Linux there is no such key yet: set a passphrase to encrypt your keys.

## You'll need

- A long [passphrase](glossary.md#passphrase) you won't forget (four or more words works well).
- A safe place for a backup file: a USB stick, or a synced folder that isn't only on this PC.

## Set a passphrase

1. Open **Settings → Security & backups → Keys**.
2. Press **Set passphrase**.
3. Type it twice and press OK.

From now on your keys, API keys, conversations and notes open only with the passphrase. The hub asks for it
each time it starts, and after it [locks](glossary.md#lock) itself. (Windows's key no longer opens them while a passphrase
is set.)

To change or remove the passphrase, press **Change passphrase** or **Remove** in the same place. Both
ask for the passphrase the hub has now first, to check it is you.

Changing the passphrase encrypts everything again under a new key, so an old copy of the key file (in an old
backup, a synced folder or a File History copy) no longer opens anything written after the change. Backups made
before the change still open with the passphrase they were made with. Setting your first passphrase does the same,
and also deletes the old copies of the key file the hub kept in its data folder (from a restore, or set aside).

Setting, changing or removing the passphrase is safe to interrupt. If the PC turns off or Waifu AI is stopped part
way, it opens next time with the old passphrase or the new one, never neither, and finishes the job. With many
conversations this can take a minute.

If you remove the passphrase later, the hub stops asking for it and your keys stay encrypted on this PC with
Windows's key. [Task approvals](glossary.md#task-approval) are paused until you set a passphrase again (see Details).

**There is no way to recover a forgotten passphrase.** That is why you also keep a backup.

## Back up your keys

1. Open **Settings → Security & backups → Keys**.
2. Press **Back up keys**.
3. If the hub has a passphrase, type it first: this checks it is you.
4. Type a passphrase for the backup file (at least 12 characters, or four words).
5. Save the file somewhere safe, away from this PC.

Do it again each time you make a new identity.

The hub opens the backup again and checks it before it counts it as a backup. It counts only once the file is
saved: when you pick where to save it, as soon as it is written; otherwise the app asks "Did the file save?" after
the download, and only **Yes, it saved** counts. If you cancel, nothing counts and the old copies of your keys stay
until you make a backup that saves. To check a backup file yourself at
any time, press **Verify a backup file…** on
**Settings → Security & backups → Whole hub** and pick it. It asks for the backup's
passphrase when it has one, says which identities it holds and when it was made, and restores nothing.

## Back up keys or export the hub?

- **Back up keys** (a [backup](glossary.md#backup)): only the identities' keys. Small; brings your identities back.
- **Export hub** (a [hub export](glossary.md#hub-export)): everything: identities, settings, contacts, brains, the API keys you
  added, approvals and queues, reminders and timers, notes, friend links and the list of coding tasks. Use it to
  move the hub to a new PC. Like **Back up keys**, it asks for the hub's passphrase first when there is one.

Anyone with either file **and** its passphrase can use your identities. Keep both private.

Three things never travel in a backup, so set them up again on the new PC:

- The [authenticator](glossary.md#authenticator) key for task approvals.
- The keys of connected AI apps, devices and [coding sessions](glossary.md#coding-session): make new ones.
- Sign-ins of browser windows and phone apps.

## Restore

**Keys only:** on **Settings → Security & backups → Keys**, press **Restore…**, pick the file and
type its passphrase. It adds the identities this hub doesn't have yet.

**A whole hub (moving PCs):**

1. On the old PC: **Settings → Security & backups → Whole hub** → **Export hub**.
2. On the new PC: start Waifu AI, open the same place and press **Restore hub…**.
3. Pick the file and type its passphrase.
4. Read what the backup will change, and choose whether to bring its queued actions (below).
5. Quit Waifu AI and start it again when it tells you to.
6. Stop Waifu AI on the old PC.

Run Waifu AI on one PC only. Two hubs with the same identity would both answer the same messages.

A backup file can be at most 171 MB. A larger file is refused before it is read ("That file is larger than any hub
backup can be"): pick the `.hubbackup` file this hub made.

**Before it restores, the hub tells you** what the backup would change that matters: contacts it makes peers, a
Telegram or Discord bot token that is new or different (never the token itself), new device addresses, tokens on
another ledger, and how many queued sends and reminders it holds.

**Queued actions** are sends waiting to go out, reminders and timers, deliveries, held messages, reply watches and
device hooks. The box **Also bring the queued actions** starts ticked only when every identity in the backup is
already on this hub. Otherwise it starts unticked, so another hub's sends, reminders and hooks don't run here as
well. (The restore shows which hub a backup came from, but that alone never ticks the box.) What is not brought stays in the data folder as a copy named `<file>.parked-<time>`; the restore
says which. The app does not offer these copies back.

**A backup made for this PC only** (see Details) restores without a backup passphrase. On a hub with a passphrase
it asks for the hub's passphrase; on a hub without one, a Yes/No window on this PC asks. Anywhere else (another PC,
another Windows account) it is refused: "This backup opens only on the PC and Windows account that made it."

## Lock

1. Open **Settings → Security & backups → Lock**.
2. Press **Lock now** to lock at once, or pick a time under **Auto-lock after**.

Locking needs a passphrase. While locked, nothing answers until you unlock, and no setting can be changed, and an
update is not installed.

A lock also signs out every page open on another device (a phone or a PC that reaches the hub over Tailscale), so a
lost phone that was still signed in can do nothing more. Pages on this PC stay signed in. To use the app on that
device again, unlock at this PC, then make it a new sign-in link:
**Settings → Security & backups → Lock**, **Sign in another device**. The hub asks for your
passphrase (with no passphrase: Yes in a window on this PC) and shows a link and a QR code. Open the link on the other
device, or scan the code with it, straight away: it works once, for one minute. Only the app on the hub's own PC can
make this link, and only for an address you listed for the hub. Whoever opens it first is signed in as you, so never
send it to anyone.

The hub checks one unlock at a time. A second try while one is being checked gets "An unlock is already running;
try again in a moment", and each wrong passphrase makes the next try wait a little longer.

### After a restart

A hub with a passphrase starts locked: after a reboot or a restart it waits for the passphrase, and until then
nothing answers. Your bridges keep asking and say "The hub is locked right now" once; messages wait. When the hub
restarts locked and no Waifu AI window opens on this PC, Windows shows a notice: "Waifu AI is locked".

To unlock it when you are not at the PC, open the hub's page on your phone over Tailscale (see "Reaching the hub
from elsewhere" in [Your phone](10-your-phone.md)): its lock screen takes the passphrase, like the one on this PC. This works after
a restart; after **Lock now** or auto-lock the phone is signed out (see above).

### Unlock automatically when this PC starts

Off unless you turn it on, in **Settings → Security & backups → Lock** (Windows only).
Windows then keeps a second copy of the hub's key for your Windows account, and the hub unlocks itself each time it
starts on this PC, so bridges and messages carry on after a reboot.

- Turning it on asks for the passphrase. Turning it off asks nothing.
- The cost: while the hub runs, a program running as you can open the hub's keys, as on a hub with no
  passphrase. The passphrase then protects only against other Windows accounts.
- Windows opens the second copy for anyone who can sign in as your Windows account. That can reach beyond this PC:
  a roaming profile, a work or school domain (its administrators keep backup keys for it), or a stolen disk together
  with your Windows password. With no Windows password and no BitLocker, a stolen disk is enough. When Windows says
  BitLocker is off on the drive with the data folder, Settings says so beside the switch. Whether your Windows
  account has a password can't be checked from the app, so make sure it has one. (A key held by this PC's security
  chip, which would not leave the PC, is planned after 1.0.)
- Backups stay protected by the passphrase. The second copy never goes into a backup.
- **Lock now** and auto-lock still lock, also across a restart: after a lock the hub does not unlock itself again,
  after a reboot, a crash or an update, until someone types the passphrase. Then it unlocks itself again from the
  next start on.
- Each time the hub unlocks itself, Windows shows a notice ("Waifu AI unlocked itself") and Activity has a line.
- Changing the passphrase keeps it on (Windows wraps the new key). If Windows refuses then, it is turned off and
  you are told.
- Removing the passphrase turns it off.
- If it does not work at a start, the hub stays locked and the lock screen says why: another Windows account, a
  data folder copied or restored from another PC, or a security policy that blocks PowerShell. Unlock with the
  passphrase.
- After the hub unlocked itself, scheduled backups wait until you type the passphrase once (press **Lock now**, then
  unlock), because their key is made from it.
- Going back to an older version: it does not know this setting and starts locked as before.

## Health

**Settings → Security & backups → Health** shows how your keys and files are kept, in one list:
encrypted with your passphrase, with Windows's key, or in plain text; plain copies of the key file still on disk;
files that were damaged, that stay closed or that can't be saved; your backups, and whether the last one was
verified; and how the last start went (see [Waifu AI says it is already running (Troubleshooting)](21-troubleshooting.md#waifu-ai-says-it-is-already-running)). Today
shows the ones that need you. A damaged file that holds keys, contacts or approvals stays closed until you restore a backup or press
**Reset** (it then starts empty; a copy of the damaged file is kept). **Hide** removes a line about something
that is over.

When a file is damaged:

- **Files that protect you stay closed**: your brains and API keys, contacts, approvals and queues, plans, the
  wallet's records and the like. Nothing is written to them, you get one notice, and a copy of the damaged file is
  kept as `<file>.corrupt-<time>`. Restore a backup, or press **Reset** on its Health line. Reset says what you
  lose and asks for the hub's passphrase, or a Yes/No window on this PC when there is none. A reset is written to
  Activity.
- **A plain file where a sealed one belongs** (one put in the data folder while the hub was off, even an empty `{}`)
  is never read. A file that protects you then stays closed the same way: the plain file is kept
  sealed as `<file>.corrupt-<time>`, an empty file holds its place, and Health names it until you restore or reset.
- While the brains file or the contacts file is closed, automatic answers and actions are paused, so nothing runs
  without the rules you set.
- **Plain history and counters reset themselves**: conversation history, threads, dreams and day pages, the cycles
  report, the memory cache and usage counts start empty, and the damaged copy is kept. The spend meter starts
  again too, and until you set each identity's monthly budget again, every identity counts as over budget.
- If the hub's own pairing secret is damaged it makes a new one once, and tells you: pair your phones and other
  hubs again, and make friend links again.

## Recovery-only mode

If the hub stopped in the middle of restoring a backup and could not put every file back as it was, it starts in
**recovery-only mode**. The page opens and you can look at everything, but nothing changes: no setting, no message,
no action, and nothing from outside (keys, bridges, connected apps, coding sessions, guests) is let in. A red line
at the top says what happened and which files are affected.

To leave it, open **Settings → Security & backups → Health** (or the lock card, when
the hub is locked) and choose one:

- **Repair** tries again to put every file back as it was before the restore. Fix what stopped it first, for
  example free disk space or close the program that holds the file. It is not offered when the note about the
  restore cannot be read.
- **Keep the current state** leaves the files as they are now (part restored, part not) and lets the hub work
  again. Nothing is put back afterwards; the copies from before the restore stay in the data folder.

Keep the current state asks for the hub's passphrase, or a Yes/No window on this PC when the hub has none (Repair
asks the same when the note about the restore cannot be checked). Where no window can be shown, the answer names
a file in the data folder to delete by hand instead.

## Safety summary

The hub warns about settings that can cost money or let things happen without asking: an Identity that runs every
action without asking, one that answers strangers with a paid brain, a paid brain with no monthly budget, the
ghostwriter, a connected app or key that may change things, sends with no cap, tool doors open on your Wi-Fi. Each
warning has a one-click fix on **Today** (in **Needs you**, under **To fix**), above the identity's tabs and in
**Settings → Security & backups → Safety summary**.

Some of these you chose on purpose. Press **Keep it this way** and the warning becomes one quiet line in the Safety
summary ("2 choices you made"); Today shows a short "Safety summary" line with **Review**. Nothing about the setting
changes. The warning comes back by itself only if it changes: another brain, another budget, another name, another
app. A settled "answers strangers with a paid brain" warning also comes back when the Identity's spend this month
reaches 80% of its monthly budget; keep it again and it stays quiet for the rest of that month (next month it comes
back only if the spend reaches 80% again). **Warn me again** in the Safety summary brings it back at once. The hub keeps these choices, so they are the
same in every browser you use.

A warning you did not settle stays on Today, in **Needs you** under **To fix**, and counts in that card's number.
Needs you can't be closed, so a warning never goes out of sight until you fix it or keep it.

## Approve from my Discord DM

Off unless you turn it on, in **Settings → Security & backups → Approve from my Discord DM**.
Turning it on asks for your passphrase (without one, a Yes/No window opens on this PC). While it is on:

- Each new approval is posted to your paired Discord DM with a 4-digit code and who or what it reaches.
- Settings, and messages between your own identities: reply "yes 1234" (or "no 1234").
- Money, messages to anyone else and the shop: "yes 1234" and the 6-digit code from your authenticator app (set up
  under **Task approvals**). Without an authenticator these still need the app or your phone.
- Never from Discord: keys, pairing, permission levels, the orchestrator, Unsafe mode, plans, votes and follows. A
  server channel, a reply, a forward, a quote or an edited message never counts.
- At most 20 Discord approvals an hour. Locking the hub or **Stop all writes** pauses it.

## Approve with a plain yes in my own chat

On unless you turn it off, in **Settings → Security & backups → Approve with a plain yes in my own chat**.
Turning it off asks nothing. Turning it back on asks for your passphrase (without one, a Yes/No window opens on this
PC).

While it is on, when an identity asks for your OK in your own Discord DM with it, you can reply **yes** right there.
No code is needed. It works like this:

- **What it covers:** a message, a reply, a Discord post or DM to someone else, a setting, a reminder or note on the
  Hologram Companion: the things you asked that identity for in that DM.
- **What it never covers:** money and the shop. For those a plain yes is not enough: approve them in the app, from
  your phone, or (with **Approve from my Discord DM** on) with the code and your authenticator code. Keys, pairing,
  permission levels, plans, votes, follows, contacts and your home also stay as they were.
- **The words:** "yes", "yes please", "do it", "go ahead", "approve", "ok" or "send it", and nothing else in the
  message. Anything longer is read as talk.
- **Only your own new message counts:** typed by you in your own DM. A server channel, a reply to a message, a
  forward, a quote or an edited message approves nothing.
- **Only what was just asked:** the request must have been made in that same DM in the last 10 minutes. If two
  things are waiting, the identity asks "Which one?" and you answer "yes 1" or "yes 2".
- **Not after other people's words came in:** if you forwarded or quoted someone, sent a picture, or the identity
  read other people's words after it asked, a plain yes is not taken. Ask again, then say yes. What the identity
  read *before* it asked does not block your yes: you see the exact text in its request.
- **Not if it changed:** if what the request would do is no longer what you were shown, nothing is done.
- **Only what you were shown in full:** if the request was too long to show whole in the DM, or it carries hidden
  characters that were left out, it does not say "Reply yes" and a yes approves nothing: open the app to read and
  approve it. The same goes for a further action an identity asks for right after you approved one: it waits for
  its own OK in the app.
- **The hub asks in its own line:** when an identity wants to change a setting, something on the Hologram Companion or something
  in your home, the request you answer is the hub's own line after the identity's words ("I need your OK to …"). It
  is the same from your phone and Telegram. If the identity had read other people's words, the line says so.
- **In the app only:** a permission level (who an identity answers, and how freely it acts) is never approved by a
  text, Telegram or Discord. Nor is a change of its persona, brain or budget, or of who it answers, that it asked for
  after reading other people's words, nor a value that would show as a link or a picture.
- At most 20 Discord approvals an hour (shared with **Approve from my Discord DM**). **Stop all writes** pauses it,
  a locked hub approves nothing, and after the hub restarts you ask again.

Every approval given this way is in Activity as: approved by your "yes" in your Discord DM. With the switch off,
Discord works as it did before: a plain yes approves only a simple setting you asked for yourself.

Your phone's **yes** approves what you asked from the phone, as before, with the same rule: only a request the
text showed you in full. For one it could not show whole, text "pending" and answer with its number, or use the app.

## What this protects against

A passphrase, or Windows's key, protects your files **when they are copied off this PC**: a stolen disk, a backup
in the wrong hands, another Windows account on the same PC. It does not protect them from a program that runs as
you on this PC:

- Once the hub is unlocked, a program running as you can open Waifu AI and use it like you can.
- With **Unlock automatically when this PC starts** on, a program running as you can also open the hub's keys
  through Windows, as on a hub with no passphrase (see Lock).
- With Windows's key and no passphrase, a program running as you can ask Windows for that key. On a work PC the
  company's IT can usually do the same. A backup made for this PC only is protected the same way, and no better.
- The Waifu AI folder and its updates folder can be changed by any program running as you.
- Removing the passphrase writes the files in plain text. A deleted file is deleted, not wiped: a disk tool may
  still find old copies.
- The list of signed-in browsers, apps and coding sessions (`sessions.json`) is not encrypted. A program running
  as you can't sign in with it (it holds no passwords), but it can change it.
- A restore counts as you whenever the app is open on this PC: restoring a passphrase backup asks for that
  backup's own passphrase, not this hub's. Only taking keys out (**Back up keys**, **Export hub**) asks for this
  hub's passphrase. A backup made for this PC only asks for this hub's passphrase when it has one.
- On a hub with no passphrase and no Windows key, the proofs that paired coding sessions check are in plain text
  too, so a program running as you could pass as this hub to them.

Keep this PC's Windows account to yourself, and lock the hub when you step away.

## What never leaves your PC

- Your identities' keys and your passphrase.
- Your API keys and bot tokens (shown only by their last four characters).
- Your notes on this PC and your conversation history.

What does leave: a message you send goes through its service (Sneed, Telegram, Discord), and a turn answered by
Claude or ChatGPT goes to that provider. If you turn on the test under
Settings → Brains & keys → Understanding messages, the text of your own messages also goes to Anthropic on your
Claude key ([Brains and cost](04-brains-and-cost.md) says which messages); it is off unless you turn it on.

## Details

**Scheduled backups.** **Settings → Security & backups → Scheduled backups** writes a
whole-hub backup every day or every Sunday, keeping the newest few. **Back up now** writes one at once. They are
**on by default**: every Sunday at 03:00, once your keys are sealed (a passphrase, or on Windows the key Windows
keeps for this PC). The first one is written soon after you start, not on the first Sunday. If you choose **Off**,
they stay off, also after an update. With no passphrase and no Windows key, a backup would hold your keys in plain
text, so none is made: Health and Today ask you to set a passphrase, and backups start once you have.

Point the folder at a drive that isn't this PC's disk; a USB stick, a network share or a synced folder all work.
The default folder is the `backups` folder inside the data folder, which is on the same disk: a backup there does
not survive a dead disk. While the folder is inside the data folder or on the same drive, the Scheduled backups
section says so, and so do Health and Today (hide the line on Health once you have read it). Each name
carries the time to the second, a short hub id and an ending that is different for every file
(`waifu-hub-<time>-<hub id>-<ending>.json`). A backup never replaces a file that is already there, and each hub
keeps and clears only the files with its own id, so two hubs can share one folder.

- **With a passphrase** each backup is encrypted with it (made harder to guess than the files on this PC) and opens
  on any PC with that passphrase.
- **On Windows with no passphrase** each backup is made for this PC only (`waifu-hub-local-<time>-<hub id>-<ending>.json`):
  Windows keeps its key, and it opens only for your Windows account on this PC. It cannot move the hub to a new
  PC, so Health and Today show it in amber and never count it as backed up. At most seven are kept, none older
  than 30 days.
- When you set a passphrase, the first passphrase backup that passes its check deletes this hub's own this-PC-only
  backups from the folder. Copies you made elsewhere still exist, and the app can't count them. On a hub with a
  passphrase they restore only with the hub's passphrase. If one can't be deleted, Health keeps a line about it
  and the next backup tries again.
- On a Mac or on Linux with no passphrase there are no scheduled backups yet.

**Backed up means checked.** After a scheduled backup is written, the hub reads the file back and opens it with
its key. Only then does it count, and only then are older backups cleared. Health says "Last backup, verified".
If the check fails, the file is kept, Health and Today say the last scheduled backup failed, and the hub tries
again an hour later; **Back up now** tries at once. A backup made by an older version that never checked shows as
"not verified" and does not count until the next one.

**Backups whose owner is unknown.** An old backup whose name has no hub id does not say which hub made it, so
nothing clears it by itself. The hub tries to open each one with its own keys. One made for this PC only that
opens with this PC's key counts as this hub's. For the rest, Health says how many there are and offers
**Review**: it lists each file and whether it opens here. **Adopt** takes one that opens with this hub's keys as
this hub's own, so it counts toward the ones you keep. **Delete** removes one. Both ask for your passphrase, or Yes
in a window on this PC, and are written to [Activity](glossary.md#activity).

Health also says what the schedule never removes, so nothing piles up unseen: old backups without a hub
id that do open with this hub's keys (**Review** can adopt them, and then they count), backups another hub made in
the same folder (that hub removes them, this one never does), and backups without a hub id beyond the newest 50,
which are not checked at all.

**Sessions and diagnostics.** **Sign out other sessions** signs out every other browser window that is signed in
to this hub. **Copy shareable diagnostics** copies a short summary for a support question: the version, the
system, whether the hub is locked and how its files are kept, how many identities there are, and a few settings as
on or off. It holds no identity names or IDs, no addresses, no paths and no log lines. When the clipboard won't
take it, the report is shown selected for you to copy.

There is a second, fuller report: **Copy diagnostics** on the notice you see after Waifu AI stopped unexpectedly.
That one includes your identities' names and IDs and the last lines of the log, with keys and tokens removed. It
says so at its end. Read it before you post it where others can see it.

**Task approvals** let you approve a job texted to a coding session with a code from an
authenticator app. Most people never need them; see [Text your coding session](12-text-your-coding-session.md). Once they are set up:

- **Set up a new key** and **Revoke** ask for the code your authenticator shows now. No phone? Choose
  **I don't have my phone: use the hub passphrase**.
- After five wrong codes, **Unlock** asks for the hub passphrase.
- Removing the hub's passphrase pauses task approvals: no code is asked and none is accepted. Set a passphrase
  again and they come back with the same key on your phone.
- You are told on your phone or in your Discord DM each time the key is set up, replaced, revoked, unlocked or
  paused.

**A setting that could not be read.** If one saved setting is damaged, only that one goes back to its default;
the rest stay as you set them. Today says which one, and the old file is kept in the data folder.

**Two hubs.** A copy of an identity restored on a second PC starts as a [standby hub](glossary.md#standby-hub): it shows messages
and answers none. To make it the one that acts, switch **Active on this hub** on, on
**Identity → More**, in the **This hub** card. **Messages → People → Other hubs**
(pick the identity) pairs two hubs so their identities treat each other as peers.

**The key and Internet Identity.** Signing in with [Internet Identity](glossary.md#internet-identity) records who owns an identity. It
cannot recover a lost key.
