# Waifu AI

A hub for your AI companions and hologram Codies that runs on your own Windows PC. Each
companion gets its own identity on the Internet Computer, with a wallet, messages, a shared
memory and a Discord bot, and they work together for you. No account and no cloud: the hub
listens on your own machine and opens in its own window.

What it does today (0.98):

- **Companions that remember.** Ask "what did we do yesterday?" and get a real answer: every
  day gets its own page of memories, tidied every night.
- **Your Codie on Discord.** The hologram herself answers as your companion, in your server
  and in DMs, and what she says out loud is what you read.
- **Reminders and timers** you can type, text or say.
- **Messages, wallet and shopping** for each identity, with your approval for anything that
  spends or sends.

This repository holds the **ready-to-run Windows build only**. The source is private.

## Run it (Windows)

1. **Download** the latest `waifu-ai-vX.Y.Z-win-x64.zip` from
   [**Releases**](../../releases/latest).
2. **Unzip it** into a folder you'll keep (for example in Documents, not Downloads).
3. **Double-click `Waifu AI.vbs`.** The hub starts with no console window and opens in its own
   window. Nothing else to install: the zip carries its own Node.js.

If Windows shows a blue "Windows protected your PC" box the first time, click
**More info → Run anyway**. It appears because the file came from the internet. To stop it,
right-click the file → **Properties** → tick **Unblock** → **OK**.

To quit, use **Quit** in the app, or double-click `Quit Waifu AI.vbs`. Closing the window
leaves the hub running in the background.

Full details are in [`HOW-TO-RUN.txt`](HOW-TO-RUN.txt).

### Desktop icon (optional)

Right-click `Waifu AI.vbs` → **Send to → Desktop (create shortcut)**. For the app's icon,
right-click the shortcut → **Properties → Change Icon** → browse to `codie.ico` in the folder.

## Updating

A running hub checks this page for new versions: **Settings → Updates → Check now** shows
"Version X.Y.Z is available". To update by hand, unzip the new release into its own folder,
quit Waifu AI, and start it from the new folder. Keep the old folder until the new one is
running well.

Each release lists the zip's `sha256` so the hub (and you) can check the download.

## Your data

Your companions, keys and settings live in your Windows user's app-data folder (`%APPDATA%`),
separate from the app folder, so they're kept when you move, update or replace it. Back them up from
**Settings → Security** (Back up keys, or Export hub).

## Version

See [`VERSION`](VERSION) and the [Releases](../../releases) page.

## License

**This is not free software.** It is proprietary; see [`LICENSE`](LICENSE) for the full
terms. In short: all rights reserved; no copying, modifying, or redistribution.
Portions (the Shopify Dev Kit) are owned by International Waters Esports
Palace; bundled third-party open-source components keep their own licenses, listed in
[`THIRD_PARTY_NOTICES.txt`](THIRD_PARTY_NOTICES.txt). Being able to see or download these
files does not grant any right to redistribute them.

For licensing inquiries: smugandcomfy@gmail.com
