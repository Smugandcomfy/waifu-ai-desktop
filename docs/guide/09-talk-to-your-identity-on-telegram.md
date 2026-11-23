# Talk to your identity on Telegram

[All topics](README.md) · [Glossary](glossary.md)

_Make a free Telegram bot and let one identity answer you through it from your phone._

With a [Telegram](glossary.md#telegram) bot you can text one of your identities from your phone, with no send limits and no
pairing app.

## You'll need

- Telegram on your phone.
- A few minutes at this PC.

## Steps

**Step by step:** the **Telegram** card on **Identity → Where it lives** has **Guided setup**. It
opens BotFather, saves the token, checks the bot connects, trusts your chat, and waits for her first reply. Or by
hand:

1. In Telegram, open **BotFather**, send `/newbot`, and follow its questions.
2. Copy the token BotFather gives you.
3. Open **Settings → Phone & apps → Telegram**.
4. Paste the token and press **Save token**.
5. Pick the **Identity that answers** and press **Test**: it shows the bot's name.
6. From your phone, send the bot any message. It answers that it doesn't know you yet.
7. Back on the same screen, under **Waiting**, press **Trust this chat**.

From then on that chat is your phone: your identity answers in its own voice, and anything it wants to do asks
you with a yes or no.

## Details

- One Telegram bot per hub. The **Telegram** card on **Identity → Where it lives** shows whether
  this identity is the one that answers it.
- **Forget** under trusted chats turns a chat back into a stranger.
- The token stays on this PC and is never shown again.
- A bot added to a Telegram group never speaks there.
- A reply Telegram refuses is tried again a few times. A reply that got no answer from Telegram (it may have gone)
  is never sent again; the Telegram card counts it as "may have been sent".
- Your own chat has no daily limit. Another chat you trust gets at most 60 replies a day from each identity, under
  the hub's 300 a day for people on Discord and Telegram together.
- Send the bot a photo and your identity looks at it when its brain is Claude or ChatGPT; other brains say they
  can't see it. Photos are never saved, and anything it wants to do after seeing one waits for your OK.
