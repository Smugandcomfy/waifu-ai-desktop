# Brains and cost

[All topics](README.md) · [Glossary](glossary.md)

_The free brains, adding a Claude or ChatGPT key, budgets, and which brain answers where._

A [brain](glossary.md#brain) is the AI that writes your identity's replies. The free one works out of the box; Claude or
ChatGPT are smarter and cost a little, paid with your own key.

## The brains

- **[On-chain agent](glossary.md#on-chain-agent)** (free, no key): the default. It can use your identity's tools (messages, memory,
  reminders). Fine for a start.
- **[Personas](glossary.md#persona)** (free): Easy, Spicy and Smol are characters run on the waifu.ic0.ai on-chain models. They
  can't use tools or memory, so Chat no longer offers them; one can still be the **Ghostwriter** (Personality → the More fold).
- **[Local model](glossary.md#local-model)** (free): a model running on your own PC. Works offline, but weaker. Setting it up is for
  people who already run one.
- **Claude** or **ChatGPT** (paid): much better at conversation, memory and following through. You pay the
  provider for what you use, with your own [API key](glossary.md#api-key).

The free brain is fine. Add a key when you want better answers, or when you want day pages and
[dreaming](glossary.md#dreaming), which need Claude or ChatGPT.

## You'll need (for Claude or ChatGPT)

- An account with Anthropic (console.anthropic.com) or OpenAI (platform.openai.com).
- A payment method on that account. Both bill as you go; you can set a spending limit there too.

## Add a Claude or ChatGPT key

**Want it step by step?** In **Settings → Brains & keys → AI providers**, press
**Guided setup: get and test a key**. It opens the provider's website, saves the key, tests it with one tiny call
and sets a budget, checking each step.

1. On the provider's website, create an API key and copy it.
2. Open **Settings → Brains & keys → AI providers**.
3. Paste it under **Anthropic** (for Claude) or **ChatGPT** (for OpenAI) and press **Save key**.
4. Open **Identity → Personality** → **Brain & budget**.
5. Under **Brain that answers messages**, pick **Claude** or **ChatGPT**.
6. Check the **Monthly budget**. A new identity gets a $10 budget the first time you pick Claude or ChatGPT, and
   the app tells you. Change it there, or in **Monthly budgets**, and press **Set**.

The key stays on this PC. Your messages and the tools' results go to that provider to be answered.

## Budgets and typical cost

- Everyday chatting usually costs a few cents a day. Long conversations, many identities or web searches cost
  more (each web search adds $0.01).
- The [budget](glossary.md#budget) is per identity, per month. When it runs out, that identity uses the free on-chain brain
  until the 1st, and you are told once.
- A budget of 0 is a real cap of zero: paid brains are off for that identity and the free brain answers. To have
  no cap at all, clear the box, or tell your identity "set my budget to off".
- **Settings → Brains & keys → Monthly budgets** shows this month's spend for every
  identity.

## Which brain answers where

- **Chat**: the chips above the box pick a brain for that chat only: the on-chain agent, Claude, ChatGPT or a
  local model, all of which can use the identity's tools. "(no key)" means that brain needs a key in AI providers
  first.
- **Messages, your phone, the Hologram Companion's voice**: the **Brain that answers messages** on
  **Identity → Personality**. It must be one that can use tools, so not a persona.
- **Discord**: you get the identity's own brain; your server's [guests](glossary.md#guest) get a cheaper, faster Claude
  model. If a brain is busy or fails, the next one answers, ending with the free one.
- **Pictures** sent on Discord or Telegram: only **Claude** and **ChatGPT** can see them. The on-chain agent,
  the personas and a local model say they can't. A picture counts toward the provider's bill like a few
  paragraphs of text.

## Details

**Web search.** With a Claude brain, your own messages can look things up on the web; it shows up to three
sources. A turn that read a web page never acts on its own: anything it wants to do waits for your OK. Turn it
off in **Settings → Brains & keys → Web search**.

**Local model.** **Settings → Brains & keys → Local model** connects a model server you
run (such as Ollama or LM Studio): give its address and model name, then press **Test**. Then pick **Local
model** as an identity's brain. The built-in engine can also download a small model from Hugging Face for you;
the app knows the exact file for each model it offers, and a download that is not that file (its checksum or
size differs) is deleted.

**Plans.** One message that needs several steps by several identities becomes a plan you approve with one yes.
A plan that is running or has stopped shows on **Today**; every recent plan is in **Activity** (the ☰ menu) →
**Plans**. A stopped plan has **Retry** (the steps that did not run wait for your yes again; nothing runs before it) and
**Dismiss** (it leaves Today). A step that may or may not have happened is not retried there: settle it under Needs a
look on that Identity. **Settings → Brains & keys → Plans** keeps **Plans may move tokens**,
which is off until you turn it on.

**Meaning search.** With an OpenAI key, memory search ranks by meaning, not just matching words.

**On Discord, `/model`.** In a DM or channel, you can send `/model haiku` (or `opus`, `sonnet`, `gpt`, `local`,
`onchain`) to switch the brain there for two hours; `/model auto` goes back.

**Understanding messages (a test, off unless you turn it on).**
**Settings → Brains & keys → Understanding messages** tries a second way of
understanding what you ask. While it is on, after Waifu AI has
answered one of your own messages (from your phone, a Telegram or Discord DM, your voice in the app, or a line you
said to a Hologram Companion by its name), Claude Haiku reads the same message on your own Claude key and says what it would have
done. Waifu AI still does only what it does today: the second reading is written down, never acted on.
- **What is sent** to Anthropic: the text of that message, the names of your identities and of the tools your chat
  can use. No history, memories or contacts. Never sent: commands and answers to the hub (yes, no, codes,
  approvals), anything said while an approval is waiting, and any message with a number of 4 or more digits, a key,
  an address, an e-mail, a phone number or a link, or more than 500 characters. Messages from anyone else are never
  read.
- **What it costs**: a fraction of a cent a message, counted under its own line in the monthly cost, and it stops
  for the month at your limit ($1 unless you change it).
- **The log** stays on this PC (never in a backup), for 14 days at most, and keeps a message's words only where the
  two readings disagreed. The section shows the counts and those messages, and you can say which reading was right.
  Turn the test off to delete the log at once.
- It needs your Claude key. Without one the section says so; there is no free way to run it.
