# Your home (Home Assistant)

[All topics](README.md) · [Glossary](glossary.md)

_Connect Home Assistant, choose the devices your identities may use, and who may control what from where._

If you run Home Assistant, your identities can read and control the devices you tick in it. Nothing else in your
home is ever read or touched.

## You'll need

- Home Assistant on your home network (or reachable with `https://`).
- A separate Home Assistant user for the hub that is **not** an administrator, and a long-lived access token made
  for that user (its profile → Security).

## Connect

1. Open **Settings → Home**.
2. Type Home Assistant's address and paste the token, then press **Connect**. With a passphrase set, the hub asks
   for it; without one, a Yes/No window opens on this PC.
3. The hub tests the token before it saves anything. Afterwards it shows only the token's last four characters.
   **Test** checks the saved connection and asks nothing. **Disconnect** forgets the token, the device list and
   every home change still waiting for your OK.

An address that starts with `http://` sends the token across your home network unencrypted: use `https://` if your
Home Assistant has it. On a hub without a passphrase the token is kept like your other API keys; a passphrase is
recommended (**Settings → Security & backups → Keys**).

## Choose the devices

Tick a device to put it on the list and give it your own label ("Hall light"): your identities see only that label.
Give it an area to group it. A heater keeps between the temperatures you set (inside 16–26 °C). A switch is treated
as security until you mark it as controlling a light, plug or appliance. **App only** keeps a device out of every
other place; **Never by voice** keeps it away from the Hologram Companion and the voice box. Untick a device to take it off.
**Save the list** replaces the whole list.

**Fill in the areas from Home Assistant** copies the rooms Home Assistant has into the areas you left empty. Nothing
is saved until you press **Save the list**, and an area you typed yourself is never changed. If it fails, type the
areas yourself: nothing else depends on them.

## Groups

In **Settings → Home → Groups** you can give several comfort devices you already ticked one
name ("All the lights", "Kitchen"). "Turn off all the lights" then changes each of them, and you get one Activity
row that names every device and what happened to it. A group holds at most 20 devices, and you can make 20 groups.

A group is never a way around a rule:
- A lock, a door, a garage, a gate or an alarm is never in a group, even if it is in the same room. Those are always
  named one at a time and always wait for you.
- A group waits for your OK wherever one light would, and the card names every device in it and how many there are.
- If one device in the group is **App only** or **Never by voice**, the whole group is.
- Each device counts toward the limit of home changes (30 in ten minutes), so a group cannot change more than single
  commands could.

## Routines

A scene, a script or an automation you tick is treated like a lock: running it always waits for your OK. Text or
type "run movie night" (or "start bedtime"), and approve it in the app or with your authenticator code by text. It is
never run from the Hologram Companion.

**Comfort-safe scenes.** Tick **Comfort-safe** on a scene to let it run without asking, like a light. Before every
run the hub asks Home Assistant which devices the scene sets: only when every one is a device you ticked as comfort
does it run at once; otherwise (a lock in it, a device not on your list, or Home Assistant does not say) it waits for
your OK as before. Marking a scene asks for your passphrase (or a Yes on this PC). Scripts and automations always ask,
and a scene is still never run by voice. This has not been checked on a real Home Assistant yet.

## Who may control what

The table says, for each place a request comes from, whether reading, comfort, locking and unlocking run at once,
wait for your OK, need your authenticator code, or never happen. The locked cells are fixed for safety (a public
channel, connected apps, unlocking from the Hologram Companion, Discord or with nobody present) and say why.

The **Night rule** switch below the table is on by default: between 01:00 and 06:00 an unlock, a disarm or an open
is approved in the app only, never by a text with your code. Turning it off asks for your passphrase (or the Yes
window on this PC), like any change that loosens the table.

## Alerts

In **Settings → Home → Alerts** you can ask to be told when a ticked device does something:
a door is opened or left open for some minutes, a lock is unlocked, a sensor goes above or below a number, or a
device becomes unavailable. You get a notice in your owner feed or your Discord DM, and a row in Activity. One
notice per alert per 30 minutes. In quiet hours only alerts marked **urgent** are sent (door, lock and leak alerts
start urgent); the others are written to Activity only.

An **urgent** alert also texts your phone, and is said aloud at each Hologram Companion that is My place (never at a
Public companion, and not in the Hologram Companions' quiet hours). An alert only tells you. No identity acts on it and it never starts a
conversation.
While an alert is set, the hub keeps one connection open to Home Assistant and listens to those devices only. If
Home Assistant refuses the token, or keeps closing the connection right after accepting it, alerts pause and the
health line says so: fix it in Home Assistant, then press **Test**.

If you untick a device, its alerts are not lost: they show as **Paused** in the Alerts section, nothing is watched
for them, and they come back as they were when you tick the device again. **Forget** removes a paused one.

Reading rooms and alerts have not yet been checked on a real Home Assistant; the page says so. Test an alert (open a
door you set one for) before you rely on it.

## Details

Only you control your home: a friend, a peer or a stranger never does. A request that read other people's words
always waits for your OK and never unlocks. Each Hologram Companion's area is shown below the table.
