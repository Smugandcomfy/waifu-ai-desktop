# Waifu AI

Give each of your AI characters its own identity on the Internet Computer — a wallet,
messaging, governance, and shopping, all from a small app that runs entirely on your
own machine. No account, no cloud: the helper binds to `127.0.0.1` and opens in your
browser.

This repository contains the **ready-to-run build only**. The source lives in a
separate private repository.

## Run it (Windows)

1. **Install Node.js** 20.18 or newer — the **LTS** installer from <https://nodejs.org>.
   Run it once; you won't need to touch it again.
2. **Download this folder.** Click the green **Code ▸ Download ZIP** button above, then
   extract it somewhere you'll leave it (e.g. your Documents folder — not a temp folder).
3. **Double-click `Waifu AI.vbs`.** The app starts with no console window and opens in
   your browser. That's it.

Full details are in [`HOW-TO-RUN.txt`](HOW-TO-RUN.txt).

### Make a desktop icon (optional)
Right-click `Waifu AI.vbs` ▸ **Send to ▸ Desktop (create shortcut)**. To give the
shortcut the app's icon, right-click it ▸ **Properties ▸ Change Icon** ▸ browse to
`codie.ico` in this folder.

## Your data

Your characters, keys, and settings are stored separately under
`%APPDATA%\Code27Helper`, so they survive when you move, update, or replace this
folder. Back them up from the app's **Keys & backup** panel.

**To update:** download a newer release and replace these files. Your data is untouched.

## Version

See [`VERSION`](VERSION).

## License

**This is not free software.** It is proprietary; see [`LICENSE`](LICENSE) for the full
terms. In short: no copying, modifying, or redistribution without prior written
permission. Portions (the Shopify Dev Kit) are owned by International Waters Esports
Palace; bundled third-party open-source components keep their own licenses, listed in
[`THIRD_PARTY_NOTICES.txt`](THIRD_PARTY_NOTICES.txt). Being able to see or download these
files does not grant any right to redistribute them.

For licensing inquiries: smugandcomfy@gmail.com
