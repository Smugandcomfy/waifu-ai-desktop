# The orchestrator

[All topics](README.md) · [Glossary](glossary.md)

_Let one identity manage the others for you, in jobs you start, with limits you set._

The [orchestrator](glossary.md#orchestrator) is one identity you pick to manage the hub for you. You give it a job ("ask the others whether
the reminder went out, then tell me"), and it checks on your other identities, asks them things and passes the
answers back. It works under you: it is not a second owner.

## The Teamwork page

**Teamwork** is on the left column once you have two identities (a link opens it before then too). It has
four sections:

- **Teamwork → The team**: every identity, with what it is (a Hologram Companion or an AI identity), its brain,
  whether it has a Discord bot and how it is now. Click a name to open its page.
- **Teamwork → The orchestrator**: who holds the role, its limits and its jobs (below).
- **Teamwork → Unsafe mode**: see [Unsafe mode](07-unsafe-mode.md).
- **Teamwork → Places**: every Discord server and channel your bots are in, and where each
  identity answers there (see [Channels (Put your identity on Discord)](08-put-your-identity-on-discord.md#channels)).

## You'll need

- An identity with a Claude or ChatGPT brain. The free brains and the personas cannot use tools well enough, so
  the role is refused for them.
- Your passphrase, if the hub has one. Without one, a Yes/No window opens on this PC.

## Make an identity the orchestrator

1. Open **Teamwork → The orchestrator** and pick the identity. (The identity's
   **What it may do** tab points there.)
2. Press **Make … the orchestrator…** and type your passphrase (or answer the window on this PC).
3. Set its limits on the same card if you want them tighter.

A hub has one orchestrator. Making another identity the orchestrator moves the role, and the old one's open jobs
end.

## Start a job

Ask the orchestrator in the Chat tab, from your phone, or on Telegram. Each request is one job. On Discord a job
can start only while [Unsafe mode](glossary.md#unsafe-mode) is on.

## What it can do, may only ask for, and never does

- **Does at once:** reads the hub's status, asks your other identities and your coding sessions, notes things in
  memory, and changes a few simple settings.
- **Asks you first:** messages to other people, Discord posts, most settings, and anything after it read someone
  else's words (a web page, an email, a quoted message) or your private notes, including a question for a coding
  session. These are approvals like any other.
  Each one says which job asked for it: when you started the job (with the day, if it was not today) and where.
- **Never:** keys, spend caps, the allow list, passphrases, pairing, restores, or its own role. Money moves are not
  offered to it unless Unsafe mode is on.

## Limits

Each job has a longest time, a number of back-and-forth steps, a cost per job and a cost per day. A job stops at
the first limit it reaches and you get one line saying so. The identity's own monthly budget still applies.
Raising a limit asks for your passphrase again; lowering one does not.

However a job ends (a limit, "stop all writes", **End this job**, removing the role), whatever it asked you to
approve and you have not approved yet is withdrawn, and Activity says why. An approval of a job that has ended can
no longer be approved, from the app, your phone or Discord ("that job has ended"); you can still decline it. A job
that is waiting for your answer to one of its approvals stays open until you answer or it runs out of time.

## Jobs

The card lists the jobs: when and where each started, its steps, its cost, and how it ended. **End this job** stops
a running job; whatever it proposed and you have not approved is withdrawn.

## Suspended

If you switch the orchestrator's brain to one that cannot use tools well, the role is suspended and its jobs stop.
The card says why. Switch the brain back to Claude or ChatGPT and the role works again.

## Remove the role

Press **Remove the role** on the card. Every open job ends at once and what it proposed is withdrawn. Deleting the
identity also removes the role, and a restored backup brings it back switched off.

## Details

Every step of a job is in Activity, named by the job and never by the words of a message. Your other identities
and your coding sessions see that a request came from the orchestrator for a job you started, never "your owner
asked".
