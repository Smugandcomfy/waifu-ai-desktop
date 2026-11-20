# Updates

[All topics](README.md) · [Glossary](glossary.md)

_Find out when a new version is out, download it, and switch to it without losing anything._

Waifu AI can tell you when a new version is out. Updating never touches your identities, keys or settings: they
are kept separately from the app.

## Steps

Waifu AI checks once a day (it sends nothing about you; untick **Check for updates once a day** to stop it).

**The installed app:**

1. Open **Settings → Updates** (or press **Check now**).
2. When a new version is offered as **Verified**, press **Install and restart**. Waifu AI closes, installs it and
   starts again by itself. If your keys have a passphrase, it starts locked: unlock it as usual.
3. If the button is not there, the screen says why; get the new version from its release page instead.

**The portable folder (the zip):**

1. When a new version is offered as **Verified**, press **Download**. After a safety check it is saved in Waifu
   AI's own updates folder (the screen shows where), not next to the app. If there is no **Download** button, press
   **Open the official release page** and download the zip there.
2. Unzip it into a new folder.
3. Quit Waifu AI (☰ → **Quit**).
4. Start Waifu AI from the new folder. Your data stays where it is.

Keep the old folder until the new one has run once.

## Details

- **Also offer test releases** (**Settings → Developer → Release channel**, [Advanced](glossary.md#advanced-mode))
  adds early versions. Leave it off unless you want to try them.
- **Verified** means the release is signed with the Waifu AI update key; Waifu AI also checks the installer's
  Windows signature before it runs it. A release that fails these checks is never downloaded. Once a build
  trusts an update key, a release with no signed manifest fails too, and the next newest signed release is
  offered instead.
- Until this version of Waifu AI has an update key, it does not download or install updates itself: a checksum
  in the release notes only proves that a file is the one the release names, not who made the release. The screen
  says so and links the official release page instead.
- A file counts as downloaded only when it is in the updates folder and its size and checksum match the release.
  A different file with the same name is moved aside (renamed `.bad-<time>`) and the real one is downloaded.
- If checks keep failing for more than two weeks, the screen says "No successful update check for N days".
- The **[update channel](glossary.md#update-channel)** is where the check looks: the official releases page on GitHub. Only developer
  builds can point it anywhere else, and the screen warns you when they do.
- Starting a newer copy while an older one runs asks the older one to quit first.
- Only one Waifu AI uses your data at a time, and a running one is never replaced. If a start is refused, a box
  says why: see [Waifu AI says it is already running (Troubleshooting)](20-troubleshooting.md#waifu-ai-says-it-is-already-running).
- Don't run an older copy of Waifu AI on the same data while a newer one runs: an old copy does not look for the
  newer one. Quit the newer one first.
- **Stop:** ☰ → **Quit**. Closing the window alone leaves Waifu AI running.
- **Start with Windows:** tick **Start Waifu AI when I sign in to Windows** when you install it.
- **Uninstall:** the installed app is removed from Windows's list of installed apps. Only the files the installer
  put there are deleted: anything else in the app's folder is kept. It asks whether to delete
  your data too (**Also delete my data**). Even then the `backups` folder in the data folder is kept, unless you
  also tick **Also delete my backups**. Backups in a folder you chose yourself are never deleted. For the portable
  folder, quit and delete the folder. Your identities stay in the data folder until you delete that too; back up
  first ([Keys and safety](03-keys-and-safety.md)).

## Terms, the usage report and the Developer tab

- **Terms** on **Settings → Updates** shows what you accepted and when, and the text again.
  When an update brings new Terms of Use, the app shows them once more before anything else: accept them to
  carry on. You can always take access away before accepting: revoke a key or a bridge, unpair a phone, turn
  autonomy or Unsafe mode off, or disconnect ChatGPT. Turning anything on waits for the Terms.
- **Usage report** shows the last anonymous usage report exactly as it was sent. Untick **Send anonymous usage
  reports** there to stop them: nothing is counted or sent from then on, and the counts gathered so far are
  dropped. It is on unless you turn it off, and it stays off after a restart, an update or a restore. Checking for
  updates is not a usage report: it keeps working either way.
- **Settings → Developer** (Advanced) holds what only a developer needs: the Sneed SMS
  network, the registry and memory bank ids, the host names this page answers, coding sessions, the release
  channel, and **Owner canisters**: on the hub of whoever runs the Waifu AI canisters, type `waifu-ai` and this
  hub checks their cycles and warns you when one runs low. It also warns that person when the shared memory
  service is filling up, so another [memory bank](glossary.md#memory-bank) can be added before new people are told "full, try
  later". Leave it empty on any other hub. Each Hologram Companion's Lab and
  webhook stay on its Connections & devices tab; Developer lists them.
- A **memory bank id** that is not one of Waifu AI's own banks is used only once you confirm it: the app asks for
  your passphrase (or, with none, a window on this PC asks). The hub never takes another bank from the memory
  service or from a backup by itself; if one is named, Today says so and nothing is written to it.
