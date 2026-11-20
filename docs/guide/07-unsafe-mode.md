# Unsafe mode

[All topics](README.md) · [Glossary](glossary.md)

_Drive the hub from your own Discord account with no confirmation, and what it never lifts._

_This topic is about Advanced mode (☰ menu → Simple | Advanced)._

[Unsafe mode](glossary.md#unsafe-mode) is your choice to drive the hub from Discord with no confirmation. While it is on, what you
ask from your own Discord account, and what the [orchestrator](glossary.md#orchestrator) does in a job you started, runs at once,
money included within the spend caps. It is off until you turn it on.

## What it lifts

- What you ask in your DM with an identity's bot runs at once: messages, settings and money (within the caps) included.
- The orchestrator's jobs run at once too, as if you had approved each step.
- An OK you give on Discord counts for anything you asked yourself.
- Each identity's autonomy level and allow list are not asked for these.

## What it never lifts

- **Keys always ask.** Connected apps (the Tool API, AI apps, the bridge) still wait for you.
- **The outside-words hold.** A turn that read someone else's words (a web page, an email, a quoted or forwarded
  message, a Discord post by someone else) still waits for your OK.
- **The spend caps.** A money move runs only within the identity's per-send and per-day caps; without a cap, or
  above it, it waits for you. Money moves only from your DM, never from a channel.
- **Five wrong approval codes** in an hour pause code answers from that sender until you answer an approval in the app.
- **Stop all writes** beats it, and stopping writes also turns Unsafe mode off.
- **Lines said at a Hologram Companion from Discord.** Asked from your Discord DM (or in a job you started there), a Hologram Companion says
  at most 10 lines in 24 hours, and one job at most 3 in all; past that it is refused and Activity says so.
- **Doors and the alarm.** Unlocking a lock, disarming an alarm, opening a garage or a secure cover, or a camera
  never run from Discord.
- **Anyone else.** Friends, peers, strangers, other people in a channel, your other identities, the Hologram Companion's room
  and email are treated as before.
- **The app's own switches.** Keys, pairing, the orchestrator role and Unsafe mode itself are changed only in the
  app.

## Channels

You can list Discord channels when you turn it on. In a listed channel Unsafe mode covers what you ask there too,
but private reads (your messages, notes, balances, Activity) still answer only in your DM, never in a channel. A
channel that is not on the list changes nothing.

## Turn it on

1. Open **Teamwork → Unsafe mode** and read both lists. (Settings → Security & backups → Unsafe mode
   shows whether it is on, with **Turn Unsafe mode off** and a link here. Teamwork is on the left column once you
   have two identities; with one, open it from that link.)
2. Choose whether it turns itself off (after an hour up to a week, or not until you turn it off).
3. Add channels if you want any.
4. Press **Turn Unsafe mode on…** and type your passphrase. Without a passphrase, answer the Yes/No window on this
   PC. If this PC cannot show that window, set a passphrase first.

## While it is on

- A red banner shows on every page, with **Turn it off**.
- Today's list says it is on.
- Your phone and your Discord DM are told when it goes on and when it ends.
- Everything it let run is in Activity marked **unsafe mode** (who asked, where, the tool). Pick **Unsafe mode**
  in Activity's Kind list to see only those.

## Turn it off

From anywhere, with no passphrase:

- **Turn it off** on the banner, or in its Settings section.
- Text **unsafe off** from your phone, or send it in your Discord DM.
- **Stop all writes**.
- The auto-off time, if you set one.

Turning it on is never possible from Discord, your phone, a key or a brain.

## Details

A restored backup and a damaged settings file both read as off. If you turn it off in the middle of a job, the
job's next step is decided without it.
