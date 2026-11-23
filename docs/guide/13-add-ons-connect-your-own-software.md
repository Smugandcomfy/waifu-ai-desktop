# "Add-ons: connect your own software"

[All topics](README.md) · [Glossary](glossary.md)

_Let your identities use software you already have (a to-do app, a NAS, a home server) through its API, safely._

_This topic is about Advanced mode (☰ menu → Simple | Advanced)._

An add-on is one action of software you already use that has a web API: "add an item to my to-do list", "what is
free on my NAS", "look up an order". You describe it once, and the identities you switch it on for can use it when
you ask them. It is not a plug-in: no code from anyone runs on this hub. The hub makes one web request, the way you
set it up, and reads the answer.

## Steps

1. Open **Settings → Phone & apps → Add-ons** and press **Add an add-on**.
2. Give it a short name and say in one sentence what it does: the identity reads this to know when to use it.
3. Say whether it **looks things up** or **changes something**. If you are not sure, leave it as a change: a change
   always asks you first.
4. Type the address it calls (for example `https://api.example.com/v1`) and, if it needs one, a path such as
   `/items/{id}`. Add the values the identity fills in: where each goes (the path, the query or the body) and its type
   (text, number, whole number or yes/no).
5. If the service needs a key, choose where it goes (a header or the query) and paste it. It is shown once, as you
   type it; after that only its last four characters.
6. Press **Save**, then switch it on for one or more identities (here, or on the identity's **What it may do** tab).
7. Press **Test** with sample values: you see the answer code and the start of the service's answer.

Have an OpenAPI 3 document for the software? Paste it (as JSON) under **Fill a slot from an OpenAPI 3 document**,
press **Read it**, then **Use** an operation to fill in the form. Nothing is fetched from the internet, and nothing is
saved until you press Save. Operations that need a header or cookie value, a file, or nested values cannot be add-ons;
the list says why.

## The safety rules

- **Only you.** An add-on is used only in your own chats: the app, your phone, Telegram and your Discord DM. Guests,
  friends, strangers, connected apps and MCP, Discord channels, a Hologram Companion's room and orchestrator jobs never get one.
- **Its answer is the service's words, not yours.** The identity treats it as information, never as instructions.
  After an add-on answered, anything that changes something waits for your OK, and the next add-on asks you first,
  until you start a new conversation.
- **A change always asks.** An add-on marked "changes something" asks your yes in the app, or waits as an approval you
  answer in the app or from your phone. The approval shows the add-on, where it goes and every value in full. From
  your phone, text "pending" and answer with its number (a bare "yes" does not approve an add-on, and a value too
  long for the list is approved in the app). Discord never approves one. It runs once.
- **The address is fixed.** The identity only fills in the values you listed; it can never change the address, the
  port or add a header. Values are checked by type and encoded.
- **Your own network and this PC are blocked** unless you tick them: **A service on my network** for that exact host,
  or the port of a service on this PC. Either asks your passphrase (or a Yes window on this PC). Cloud metadata
  addresses and this hub itself are never called, whatever you tick. A service on the internet is called over https.
- **Limits.** Each add-on has calls per hour and per day; the wait is at most 15 seconds and the answer is cut at
  64 KB. Only text or JSON answers are read; redirects to another address are not followed.
- **Your key stays here.** It is kept sealed on this hub with your other keys and is never shown, logged, put in the
  Activity or sent anywhere but to the service it is for. The Activity shows one line per call: which add-on, whether
  it ran, the answer code and how long it took, never the values or the answer. If you change an add-on's address
  to another host or port, type the key again (or choose "No key"): a saved key is never sent to a different address.
- **Turn off all add-ons** stops every add-on at once (and Skills too). A locked hub runs none.
- **After a restore** the add-ons come back switched off for every identity: switch on the ones you want again.

Up to 20 add-ons per hub.
