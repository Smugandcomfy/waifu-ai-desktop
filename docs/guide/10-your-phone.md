# Your phone

[All topics](README.md) · [Glossary](glossary.md)

_Text your identities from your phone, approve from it, and choose what it is told and when._

Your phone can be your remote control: text an identity, get its answers, and approve what it wants to do.
Everything about your phone is in one place: **Settings → Phone & apps**.

## Three ways to connect a phone

- **Telegram** (easiest): see [Talk to your identity on Telegram](09-talk-to-your-identity-on-telegram.md).
- **Sneed SMS**: message an identity from Sneed Hub on your phone, then trust that sender as your phone.
- **A phone app on your Wi-Fi**: pair it with a code (needs [LAN tools](glossary.md#lan-tools) switched on).

**Step by step:** **Settings → Phone & apps** has **Guided setup**. Pick
Sneed SMS or a phone app; it shows the address to text, finds your message, marks it as your phone, and checks
for her reply.

## Trust your phone over Sneed SMS

1. From your phone, send one of your identities a [Sneed message](glossary.md#sneed-sms).
2. Open **Identity → Chat → Messages**.
3. On that message, press **Trust as my phone**.

Your phone is now an [owner device](glossary.md#owner-device): every identity answers it with full access, and it can approve.

Sneed SMS lets each sender post one message every 10 minutes, and messages are not encrypted. Don't send
anything private. [Sneed Premium](glossary.md#sneed-premium) raises the limit to one a minute: see **Sneed Premium & limits** on
**Identity → More**.

## Add a phone app

1. Turn on **LAN tools** in **Settings → Phone & apps → LAN tools**.
2. Open **Settings → Phone & apps**.
3. Under **Phone apps**, press **Add a phone app**.
4. Scan the QR code with the phone (or open the address shown) and type the code. It works once, for ten minutes.

## Texts your phone understands

- `pending`: what is waiting for your OK; then `yes 2` or `no 2`. A money line is short but always says who gets
  it (the start of their name and the first and last five characters of their address), the amount and the token,
  then the first letters of the ledger: "send 5 ICP to Mika (abcde…vwxyz), ledger ryjl3…". The app shows it in full.
- `yes` / `no`: answers the one thing asked in the last 10 minutes.
- `remind me at 7 to call mum`: a reminder.
- `vacation on` / `vacation off`: nobody acts on anything while you are away.
- `pause Mika` / `resume Mika`: stop or restart one identity acting on its own. The word after it must be one of
  your identities' names (a [former name](glossary.md#former-name) works); anything else is ordinary conversation.
- `stop all writes` / `resume writes`: the emergency brake for every identity. Connected AI apps and devices are
  refused any change while it is on.
- `run a dream` / `did the dream work?`: start the memory [dreaming](glossary.md#dreaming) now, or hear how the last one went.
- `forget former names`: your identities stop answering to the names they had before you renamed them.
- `connect P1234` / `no P1234`: let a [coding session](glossary.md#coding-session) connect, or refuse it. See [Text your coding session](12-text-your-coding-session.md).
- `bridge code for <name>` (or `bridge code for <name>, my place`): a one-time code for the bridge program beside a
  Hologram Companion in another place, sent to the identity that runs your hub (its [orchestrator](glossary.md#orchestrator)). Answer `yes 1234`; a
  My place code also needs your authenticator code (`yes 1234 123456`), or press **Approve** on the request in the app
  (the code is still sent here). The code comes back here, works once and
  lasts 10 minutes; you are told here when it is used. See [Your Hologram Companion](17-your-hologram-companion.md).
- `revoke the bridge for <name>` / `revoke all bridges`: stops a bridge at once, no code needed.
- `help`: the list.

Your identities also know the [hub status](glossary.md#hub-status) when you text them: ask "is anything waiting for me?" or "is
the Codie online?". A message that only contains a command word is not taken as a command: "don't pause Mika"
is talk.

**Where answers and notices go.** To the phone or chat you last wrote from. With two phones, the one that wrote
last. Approval codes go to your Sneed SMS phone only.

## What your phone is told, and when it stays quiet

**Settings → Quiet & away** (your name is under **Settings → You & account**):

- **Away**: **Vacation mode**, and how old a message may be and still be answered.
- **Quiet hours**: reports to your phone wait; urgent things still go.
- **Owner feed**: the [owner feed](glossary.md#owner-feed): turn on **Report to my phone** for a short digest every few minutes of
  what your identities did. **Send a test** checks it. **Sent to you lately** (a fold) shows the newest lines the
  feed sent you.
- **Morning callback**: your first private message of the day can get one line about what's new.

## Details

**Friend links.** **Contacts → Friend links** (pick the identity) makes a link that lets one
person become a [friend](glossary.md#friend) (public answers only), or a chat-only link. **Rotate link secret** voids every
link you have shared.

**Forget a phone.** **Forget** next to a trusted phone makes it an ordinary friend again.

**Everything connected.** **Settings → Phone & apps → Everything connected** lists what is
connected, read-only.

**Reaching the hub from elsewhere.** The app window answers only this PC. To open it from another device, use a
private network such as Tailscale and add its name under
**Settings → Developer → Reaching this hub**. The page still needs your sign-in:
make a link for that device under **Settings → Security & backups → Lock**, **Sign in another
device** (it works once, for one minute).

**Developer** (a closed fold at the foot of Settings → You & account) also holds the Sneed SMS network, the
registry and the memory bank.
