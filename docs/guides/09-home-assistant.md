# 09 · Your home (Home Assistant)

<sub>📖 <a href="README.md">All guides</a> · Guide 9 of 9 · <a href="../../README.md">Home</a></sub>

If you run **[Home Assistant](https://www.home-assistant.io)**, your identities can turn on the lights, warm up the
living room and tell you whether the front door is locked, by voice, by text or in chat. 🏠

> "Turn on the living room lights." · "Is the front door locked?" · "Set the bedroom to 20 degrees." ·
> "Turn off all the lights."

You choose exactly which devices they may see, and you decide who may control what from where. Everything else in
your home stays out of reach.

## What you'll need

- Home Assistant on your home network (or reachable with `https://`).
- A separate Home Assistant user for Waifu AI that is **not** an administrator, with a **long-lived access token**
  (that user's profile → **Security**). Your identities can then do only what that user may do.

## 1. Connect

1. Open **Settings → Home**.
2. Type Home Assistant's address, paste the token and press **Connect…**. Your hub asks for your passphrase (or, with
   none set, shows a Yes/No window on this PC).
3. The hub tests the token before it saves anything. **Test** checks the connection again any time.

> 💡 Use an `https://` address if your Home Assistant has one, so the token is encrypted on your network too.

## 2. Choose the devices

Tick each device your identities may use and give it your own friendly label ("Hall light"). Your identities only
ever see that label.

- Give devices an **area** to group them by room. **Fill in the areas from Home Assistant** copies the rooms you
  already have.
- A heater keeps between the temperatures you set.
- **App only** keeps a device to the app; **Never by voice** keeps it away from voice.
- Press **Save the list** when you're done.

## 3. Groups (optional)

Give several lights or comfort devices one name, like "All the lights" or "Kitchen". "Turn off all the lights" then
changes each of them, and you get one tidy Activity line that names every device.

Locks, doors, garages, gates and alarms are never part of a group: they're always named one at a time.

## 4. Who may control what

A simple table decides, for each place a request comes from, what runs straight away:

| | Read state | Comfort (lights, heating) | Lock, arm, close | Unlock, disarm, open |
|---|---|---|---|---|
| **The app** (typed or spoken) | Runs | Runs | Runs | Asks you |
| **Your Hologram Companion** | Runs | Runs | Runs | Never by voice |
| **Your phone (Sneed SMS) or Telegram** | Runs | Runs | Runs | Your authenticator code |
| **Your Discord DM** | Runs | Runs | Asks you | Never from Discord |
| **Your orchestrator's jobs** | Runs | Asks you | Asks you | Never |
| **A public channel, a connected app** | Never | Never | Never | Never |

*These are the defaults. You can change the open cells (loosening one asks for your passphrase); the safety cells
are fixed, and the table tells you why.*

- **Only you** control your home. Friends, guests and visitors at a bridge never do.
- The **Night rule** (on by default) keeps unlocking to the app between 01:00 and 06:00.
- **"Stop all writes"** from your phone, and **vacation mode**, pause every home action at once.

## Routines

Tick a Home Assistant scene, script or automation and run it by name: "run movie night", "start bedtime". Routines
always ask for your OK first, in the app or with your authenticator code by text.

## Alerts

Under **Settings → Home → Alerts**, ask to be told when something happens: a door opened or left open, a lock
unlocked, a sensor above or below a number, a device gone offline. Alerts arrive in your owner feed or your Discord
DM, and in Activity. In quiet hours only the urgent ones come through (doors, locks and leaks start as urgent).

> 💡 Test an alert once (open the door you set it for) so you know it's working the way you like.

## Good to know

- Each device change counts toward a gentle limit (30 changes in ten minutes), so a busy evening never runs away.
- Turning on a device by voice works best with clear names: "Hall light" beats "Light 3".
- **Disconnect** on the Home card forgets the token, the device list and anything still waiting for your OK.

More ideas: [Case study 14: The smart flat](../USE_CASES.md#case-study-14-the-smart-flat).

---

<p align="center"><a href="08-waifu-ai-bridge.md">← Waifu AI Bridge</a> · <a href="README.md">All guides</a> · <a href="../../README.md">Home →</a></p>
