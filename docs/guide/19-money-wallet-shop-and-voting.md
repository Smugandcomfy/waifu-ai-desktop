# Money: wallet, shop and voting

[All topics](README.md) · [Glossary](glossary.md)

_An identity's address can hold tokens, show its history, give and stop allowances, shop, and vote with a neuron you share with it._

_This topic is about Advanced mode (☰ menu → Simple | Advanced)._

An identity's [principal](glossary.md#principal) is also a wallet address on the [Internet Computer](glossary.md#internet-computer). Everything here is
optional, and it is on the identity's **More** tab. It moves real money: take care.

## The wallet

1. Open **Identity → More** and find the **Wallet** card.
2. **To receive**: copy the **Address** and send tokens to it from any wallet. Press **Refresh** after.
3. **To send**: pick a token, the recipient and the amount, press **Review send**, check it, then **Send**.

The wallet shows [ICP](glossary.md#icp) and other common tokens; **Add token** adds more, by the token's ledger id. The fee shown is the token's own
current fee, read from its ledger. A send can't be undone. If the outcome is unknown, nothing is sent again by
itself: use **Retry** on that transfer.

## Which token: a name is not enough

A token's name ("ICP") is only a label. Anyone can make a token and call it ICP, so the app never trusts a name
by itself.

- **You add a token by its ledger id**, never by its name. Ask to add "CHAT" and your identity says it needs the
  ledger id. The app never asks a ledger what a name means. The one exception is a short list of known tokens that
  ships with the app, each checked by hand on the Internet Computer before it is added (the list is empty for now):
  a name on it is added from its ledger id, still only after your yes, and only if that ledger still uses the name.
- **A name the ledger gives itself is kept only if it is short and plain**: up to 16 letters, digits, dots,
  dashes or underscores. Any other name (with spaces, other alphabets or symbols) is not shown: that token is
  listed, and named in approvals, by its ledger id ("send 1 token (ledger …) to …"), and you name it by its
  ledger id too.
- **In chat you can say the name** of a token that is in your list ("send 1 ICP to Mika"), or its ledger id.
- **If two tokens in your list share a name**, the name alone is refused: your identity lists both with their
  ledger ids and asks which you mean. Nothing is sent and nothing waits. Answer with the ledger id. This also
  holds for a send that would otherwise run without asking.
- **Every approval names the ledger** beside the token: "send 1 ICP (ledger …) to …", with the ledger id in
  full. The review on the Wallet shows it too, with **not a default token** for one you added. Check it before
  you say yes.
- **"What does Mika hold?"** Your identity can tell you what another of your own identities holds. It reads only
  your own identities, never a contact's wallet.

## Spend caps

On **Identity → What it may do** → **Actions & autonomy** → **What it may do**, each token can have a cap per
send and per 24 hours. (On [Essentials](glossary.md#all-details), open **Change what it may do without asking, and its spending limits** there.) A token with no cap is never sent without your OK.

## Sends between your own identities

Moving tokens from one of your identities to another can run without asking you each time, under a limit you
set. It is off until you set it.

1. Open **Identity → More**, the **Wallet** card, and find **Between my identities**.
2. For each token, type how much may move **a day** and, if you like, the most **per send**. Set how many sends a
   day are allowed in all (10 unless you change it).
3. Press **Save limit**. Turning the limit on or raising it asks for your hub [passphrase](glossary.md#passphrase), or a **Yes** in a
   window on this PC when the hub has none. Lowering it or **Turn off** asks for nothing.

It is one limit for the whole hub. Every change is written to [Activity](glossary.md#activity) and you are told.

**What runs at once.** A send runs without asking only when all of this is true:

- You asked in the app's Chat tab or from your Sneed SMS phone.
- Your message is a plain instruction with one number in digits, the token and one recipient: "send 1 ICP to
  Mika". A question, "don't", "if", "later", a second name or a second number makes it wait.
- The limit is on, has a number for that token, and this send fits under it.
- The identity that receives the tokens can't itself spend without asking.

The answer is the receipt: "Sent 1 ICP from Yuki to Mika (her full address), fee …, block …".

**What always waits for your OK.** A send asked on Telegram, on Discord or out loud; a send inside a longer
request; a send to anyone who is not one of your identities; anything a connected app or another AI asks for.
When a send between your identities waits, the approval says why it was not sent at once.

Every send between your identities counts toward the day, also one you approved or made by hand.

## Approvals you gave (allowances)

An [allowance](glossary.md#allowance) lets someone else take tokens from an identity's wallet later, up to an amount, until a
time. Some apps ask for one before a swap or a subscription. It is a promise to pay: give one only to a spender
you trust.

- **Give one**: ask your identity ("let <the spender's address> take up to 5 ICP for one hour"). It always waits
  for your OK, and the approval shows the spender's full address, the amount, when it ends, the fee, and what
  that spender may already take.
- **It must end.** With no time said it lasts one hour; the longest is 30 days. "Unlimited" and "never ends" are
  refused.
- **See them**: **Approvals you gave** on the Wallet lists each spender, what it may still take and until when,
  read from the ledger. If the list can't be read just now, it says so with **Try again**.
- **Stop one**: press **Stop** on its row and confirm. Stop works even while `stop all writes` is on, because it
  only ever takes a permission away.
- **Take what someone allowed you**: ask your identity to take the tokens ("take 2 ICP that <address> allowed
  me"). This also waits for your OK.

Giving an allowance and taking from one are never on an automatic list, and a connected app or device can't ask
for either. An approval for one of these expires after a day.

**A limit on how many a day.** Under **Approvals you gave** you can type how many approvals and takes this hub
may send in any 24 hours, for all your identities together (1 to 50). A new hub starts at 10; a hub set up before
this limit existed keeps what it had (empty means no limit) and says so once in Activity. A higher number, or no
limit, asks for your passphrase (or a Yes in a window on this PC if the hub has none); a lower one asks nothing.
Each one still waits for your OK; the number only stops more than that many in a day, for example when you
are asked again and again. At the limit your identity says so and nothing is sent; **Stop** always works and is
never counted. Changing the number is written to Activity. Any other entry (0, a fraction) is refused. If
the settings file holds a number that can't be used (it was edited by hand), no approval or take is sent until you
type a number here: each one is refused with the reason, and Activity says so once. Stop still works.

## Looking at your own canisters

If you run canisters of your own and listed them under
**Settings → Developer → Owner canisters**, you can ask your identity about one: "what can my registry canister do?". It answers with
the canister's code hash, who controls it, and its methods, split into those that only read and those that can
change it. Ask about one method to see what it takes and returns.

- **It only looks.** It reads what the Internet Computer shows anyone about a canister. Nothing is called on the
  canister and nothing is changed.
- **Only canisters on your list.** Any other canister id is refused and not read. On a hub with an empty list
  (the usual case) there is nothing to look at.
- **Only you.** A connected app, another AI and a bridge can't use it. An orchestrator job you started may look
  too (it only reads); what a canister says counts as someone else's words, so the job's changes after it wait for
  your OK.
- A new reader: until it has been checked against a live canister, each answer ends by saying so. It works in
  the meantime; if an answer looks wrong, trust the canister's own dashboard.
- Calling a canister's methods from chat is not built.

## On the ledger

**On the ledger** on the Wallet shows what the token's ledger lists for this identity: tokens in, tokens out,
approvals, with the block and the time. Pick the token at the top; **Older** loads the page before.

- Each row shows the other side's full address, with your own name for it beside it when it is one of your
  identities or contacts. "You sent it from this app" marks your own sends.
- **Show memo** shows the note attached to a transfer. It was written by the sender, not by this app: read it
  as a stranger's words.
- **"not a default token"** marks a token you added yourself. Anyone can make a token with any name, so check
  its ledger id before you trust a deposit of it.
- **sGLDT only goes back a while.** Its ledger has no index, so the hub reads its last 2,000 blocks (about two
  weeks). The page says how far back it goes. Older activity is still on the ledger.
- **"History is not available for this token."** A token you added whose ledger has no index and does not list
  its blocks. Its balance and sends still work.
- **"This ledger now reports … decimals."** A token you added changed how it counts. Sending it is off until you
  remove the token and add it again.

## Voting

1. In the community's app, add the identity's principal as a hotkey on one of your [neurons](glossary.md#neuron). A hotkey can
   vote but never move the stake.
2. On **Govern**, press **Scan for neurons**.
3. Press **Open proposals**, pick the neuron to **Vote with**, and vote **Yes** or **No**.

## The shop

**Shop** lists stores your identity can buy from. Turn on a store, browse its shelf, and press **Buy**: you pay on
the store's own checkout with a short pay-code. The identity never sees a card. **Your orders** (a fold on the same
card) lists each order with its merchant, number of items and status.

## Details

- Money asked for on Discord always waits for your OK in the app or on your phone. Asked in a server channel, it
  moves to your DM first.
- Every send, vote and purchase is in Activity.
- **An approval for a send shows the full address** it pays, your name for it, and whose it is (your own
  identity, your contact, or not one of your contacts). The send is fixed to that address, token and amount at the
  moment it was asked: renaming a contact afterwards changes nothing. A name the hub can't find is refused at
  once and nothing waits. A registered name is checked with a lookup the whole network vouches for; when that
  check can't be made just now, nothing is sent and you're told why, so you can try again or use the address.
- **A spoken or typed "yes" for a send** shows the address too, and lapses after five minutes.
- **Deposit notices.** You are told when tokens arrive, with the sender's name when the hub is sure who it was.
  A tiny deposit (under 100 times the token's fee) is quiet, and one sender gets one notice an hour. Quiet ones
  are still in History and Activity. A notice never repeats a memo.
- **After an update or a restore.** Sends that were waiting for your OK when this rule arrived were dropped once,
  with a notice: ask again. A restored backup does not bring back sends that were waiting or transfers that were
  half done, and the **Between my identities** limit comes back off.
