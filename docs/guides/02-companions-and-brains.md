# 02 · Companions and brains

Make as many companions as you like, and give each one the brain that suits it. 🧠

## Your companions

Each companion is an **identity**: an AI with its own name, its own memory and its own secret key on this PC.
Its key gives it a **principal**, its public address on the Internet Computer, so others can message it.

### Make another one

1. Press ☰ (top left) → **New identity…**.
2. Follow the same short wizard as your first one: type, name, device, key, public name.

Your own companions are **peers**: they can talk to each other and share your memory bank.

### A companion's page

Click a companion (in ☰, or **Your identities** on Today). Its tabs:

- **Overview**: its status, what needs you, and the **Finish setting up** list.
- **Behaviour**: its brain and budget, what it may do on its own, and its voice.
- **Device** (Hologram Companion only): the device, its speech and its own features.
- **Connections**: Discord, Telegram and (in Advanced) outside AI apps, friends and other hubs.
- **Money** (Advanced only): wallet, shop and voting.
- **Manage**: its public name, key, this hub, and the danger zone.

### A public name (optional)

A public name lets people find and message your companion by name instead of its long principal. It's
public, free, and first come, first served.

1. Open the companion's **Manage** tab.
2. Under **Public name**, type 3 to 32 lower-case letters, numbers or dashes.
3. Press **Register**.

**Claiming it (optional):** press ☰ → **Main Identity** → **Sign in with Internet Identity**, then on
**Manage** press **Propose me as owner** and **Accept ownership**. This records you as the owner in the public
registry. It doesn't copy the key, and it can't recover a lost one.

### Rename or remove

- **Rename:** **Manage → Key & label → Rename label**. It still answers to its old name, and nobody else on
  your hub can take that name, until you say "forget former names".
- **Remove:** back up first, then **Manage → Danger zone → Delete this identity…** and type its name. This
  destroys its key for good.

### People & AIs

**People & AIs** holds your **Contacts** (private nicknames, kept only on your PC, each with a role: my phone,
friend or peer) and the **Directory**, where you can find a companion by its public name and save it as a
contact.

## Brains

A **brain** is the AI that writes your companion's replies.

| Brain | Cost | Good for |
|---|---|---|
| **On-chain agent** | Free, no key | The default. Can use your companion's tools (messages, memory, reminders). Fine to start. |
| **Personas**: Easy, Spicy, Smol, Coder | Free | Fun characters to chat with. They can't use tools, so they work in Chat only. |
| **Local model** | Free | A model on your own PC. Works offline, but weaker. For people who already run one (such as Ollama or LM Studio). |
| **Claude** or **ChatGPT** | You pay the provider | Much better at conversation, memory and following through. Needed for day pages and dreaming. |

### Add a Claude or ChatGPT key

You'll need an account with Anthropic (console.anthropic.com) or OpenAI (platform.openai.com) with a payment
method. Both bill as you go, and you can set a spending limit there too.

The easy way: **Settings → Brains & cost → AI providers → Guided setup: get and test a key**. It opens the
provider's website, saves the key, tests it with one tiny call, and sets a budget.

Or by hand:

1. On the provider's website, create an API key and copy it.
2. Open **Settings → Brains & cost → AI providers**.
3. Paste it under **Anthropic** (for Claude) or **ChatGPT** (for OpenAI) and press **Save key**.
4. Open the companion's **Behaviour → Brain & budget**.
5. Under **Brain that answers messages**, pick **Claude** or **ChatGPT**.
6. Check the **Monthly budget** and press **Set**.

The key stays on your PC and is never shown in full again. Your messages and the tools' results go to that
provider to be answered.

### Which brain answers where

- **Chat:** the chips above the message box pick a brain for that chat only. "(no key)" means that brain needs
  a key first.
- **Messages, your phone and the hologram's voice:** the **Brain that answers messages** on the Behaviour
  tab. It has to be one that can use tools, so not a persona.
- **Discord:** you get your companion's own brain; guests in your server get a cheaper, faster Claude model
  (or the free brain without a Claude key).
- **Pictures** sent on Discord or Telegram: only Claude and ChatGPT can see them.

If a brain is busy or fails, the next one answers, ending with the free one.

## Costs and budgets 💸

- Everyday chatting usually costs **a few cents a day**. Long conversations, many companions or web searches
  cost more (each web search adds $0.01).
- The **budget** is per companion, per month. A new companion gets **$10** the first time you pick Claude or
  ChatGPT, and the app tells you.
- When the budget runs out, that companion uses the free on-chain brain until the 1st, and you're told once.
- A budget of **0** means paid brains are off for that companion. To have no cap at all, clear the box (or tell
  your companion "set my budget to off").
- **Settings → Brains & cost → Monthly budgets** shows this month's spend for every companion.
- Claude reuses the parts of a chat that don't change, which keeps the cost of long chats down.

## Extras

- **Web search:** with a Claude brain, your own messages can look things up on the web, showing up to three
  sources. A turn that read a web page never acts on its own: anything it wants to do waits for your OK. Switch
  it off in **Settings → Brains & cost → Web search**.
- **Local model:** **Settings → Brains & cost → Local model** connects a model server you run: give its
  address and model name, press **Test**, then pick **Local model** as a companion's brain.
- **Meaning search:** with an OpenAI key, memory search ranks by meaning, not just matching words.
- **On Discord:** send `/model haiku` (or `opus`, `sonnet`, `gpt`, `local`, `onchain`) to switch the brain there
  for two hours; `/model auto` goes back.
