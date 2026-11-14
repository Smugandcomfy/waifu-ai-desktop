# 07 · Updates and troubleshooting

Staying up to date, stopping the app, and fixing the usual hiccups. 🔧

## Updating

Waifu AI checks for a new version once a day. The check sends nothing about you; untick **Check for updates
once a day** in **Settings → Updates** to stop it. Updating never touches your companions, keys or settings:
they're kept apart from the app.

1. Open **Settings → Updates** (or press **Check now**).
2. When a new version is offered, press **Download**. After a safety check (size and checksum) it's saved in
   Waifu AI's own updates folder; the screen shows where.
3. Unzip it into a **new** folder.
4. Quit Waifu AI: **More → Quit** at the foot of the rail.
5. Start `Waifu AI.exe` from the new folder.

Keep the old folder until the new one has run once. Prefer doing it by hand? Download the zip from the
[latest release](../../../../releases/latest), check it against the `sha256` in the release notes, and follow
steps 3 to 5.

**Also offer test releases** adds early versions. Leave it off unless you want to try them.

## Stop, start, uninstall

- **Stop:** **More → Quit** at the foot of the rail. Your companions (and their bots) are offline until you
  start it again.
- **Start:** double-click `Waifu AI.exe`. Starting a newer copy while an older one runs asks the older one to
  quit first.
- **Uninstall:** quit, then delete the app folder. Your companions stay in Waifu AI's data folder (under
  `%APPDATA%`) until you delete that too. **Back up first**: deleting it destroys the keys for good.

## Common problems

### My companion doesn't answer

1. Look at the status light at the foot of the rail. **Offline** means no internet: replies come when it's
   back.
2. Check **Today → Waiting for you** and **Fix these**: it may be waiting for your OK.
3. On the companion's **Behaviour** tab, check the **Brain that answers messages**. "(no key)" means it needs a
   key in **Settings → Brains & cost → AI providers**, or pick the free **On-chain agent**.
4. Texting from your phone? Check it's trusted in **Settings → Connections → Your phone**.
5. Two of your companions talking stop after 8 replies each. Start a new thread.

A message that reached the hub more than half an hour late (the hub was off or locked) is shown but not acted
on. Send it again.

### The Discord bot is offline

1. The bot is online only while Waifu AI runs. A sleeping PC takes it offline.
2. On the companion's **Connections → Discord**, press **Test**.
3. **Blocked** with "token": the token was reset in the Discord Developer Portal. Paste the new one and press
   **Save**.
4. **Blocked** with "Message Content": a listen channel needs that switch on in the Developer Portal, or set the
   channel back to mention.
5. Online but silent in a channel? Add the server or allow the channel under **To finish setting up**, and
   mention the bot.

### Days says there are no pages

- "No day pages yet": the first is written tonight, after you're done for the day. Chat a bit first.
- "No day pages can be written now": no companion has a Claude or ChatGPT key. Add one in **Settings → Brains &
  cost → AI providers**.

### I forgot my passphrase

It can't be recovered or reset. If you have a key backup or a hub export:

1. Quit Waifu AI.
2. Move Waifu AI's data folder (under `%APPDATA%`) somewhere else, so the hub starts fresh.
3. Start Waifu AI, open **Settings → Security**, and press **Restore…** (key backup) or **Restore hub…** (hub
   export). Type the **backup's** passphrase.

Without a backup, those companions can't be opened again.

### Quick fixes

| You see | Try this |
|---|---|
| "Windows protected your PC" | **More info → Run anyway**. The app isn't code-signed yet. |
| "Rate limited" on a Sneed send | Each companion may send one Sneed message every 10 minutes. Wait the time shown. |
| "Invalid signature" or "ingress expired" on every send | Your PC's clock is off. Turn on automatic time in Windows settings. |
| "Locked" everywhere | The hub is locked. Type your passphrase on the lock screen. |
| "Unlock the hub to change settings" | Same: unlock first. |
| The sign-in window doesn't open | Allow pop-ups for the app's address. |
| "No session" | Close the tab and open Waifu AI again from `Waifu AI.exe` or its shortcut. |
| A companion replied that its key is missing | Its brain is Claude or ChatGPT with no key. Add the key, or switch to **On-chain agent**. |
| **Enroll** is refused | The memory service hasn't admitted you yet. Your notes stay on this PC; try again later. |
| A connected app is told to slow down | Each app has its own limit per minute. It clears within a minute. |
| "One setting was reset" on Today | One saved setting couldn't be read and went back to its default. Set it again. |
| A message was "not sent again" | The same text to the same place within 5 minutes counts as a repeat. Approve again if you really meant twice. |
| My Discord bot said "approve it in the app" | Changes asked on Discord wait for your OK in the app or on your phone. That's on purpose. |
| The Hologram Companion is unreachable | It must be on the same Wi-Fi as this PC, awake and signed in. Press **Test the connection**. |
| Someone on Discord or Telegram stopped getting answers | Anyone who isn't you gets at most 60 replies a day from each companion. It resets the next day (or on restart). |

### A file was "damaged" or "stays closed"

Open **Settings → Security → Health**. Plain history (conversations, day pages, caches) resets itself and keeps
a copy. A file that protects you (keys, contacts, approvals) stays closed until you restore a backup or press
**Reset** on its line; Reset tells you what you'd lose first.

## Asking for help

1. **Settings → Security → Sessions and diagnostics → Copy diagnostics** copies a short report (version,
   settings summary, recent log lines) with keys and tokens removed. It does include your companions' names.
2. Open an [issue](../../../../issues) and paste it in. Never post keys, passphrases, API keys, bot tokens or
   backup files.
