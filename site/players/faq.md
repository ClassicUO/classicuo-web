---
outline: deep
---

# Players FAQ

### Can I play use the web client on the official Ultima Online servers?
Yes, as of recently the web client has been sanctioned for use on the retail servers.
See the [FAQ (Sanctioned) page](https://classicuo.org/players/faq-sanctioned) for more information.

### How do I file a bug report?

If you run into a bug please file an issue on our github: https://github.com/ClassicUO/classicuo-web/issues

### Do I need to download files every time I open the game?

No, the client files are stored locally inside your Chrome storage. You can see the on-disk usage by clicking on the
profile icon at the top right of the side menu.
Optionally you can clear the storage, but this will of course result in needing to re-download the files next time you
click Play.

### Why do I need to log in using Discord?

**Logging in with Discord helps keep the Web Client secure and running smoothly.**

By requiring authentication, we can **filter out bots and bad actors**, preventing spam, abuse, and DDoS attacks that could flood the service and cause **lag** or downtime. It also helps with **rate-limiting**, so a handful of people can’t overload the system and ruin performance for everyone else.

Additionally, shard owners can **ban players by Discord account**, making bans much harder to dodge than just blocking an IP address.

Lastly, logging in also **syncs your settings across devices**, so your **macros, scripts, and hotkeys** are available no matter where you play.

### What information about me do you collect?

::: tip  
**We do not collect, access, or store any personally identifiable information (PII) such as real names, email addresses, or payment details.**

You can verify we do not have access to this data by checking Discord's consent screen when logging in.
:::

We respect your privacy and will never sell or share your data with advertisers or unrelated third-party services. 
The information we collect is strictly necessary for core functionality and is never used for advertising or profiling.

However, **when connecting to a shard your Discord identifier and username is shared for authentication purposes**. 
See the [WebIdentity packet](https://github.com/ClassicUO/packets/?tab=readme-ov-file#packets) for details on what is sent.

#### Discord Account

To sync your game profile across devices and facilitate login, we collect:
- **Account identifier** (e.g., `91796932425435572`) – A numeric ID that uniquely identifies your Account.
- **Username** (e.g., `blank1234`) – Used for displaying account-related information in the client.
- **Avatar** (i.e., your profile picture) – Used for the user icon displayed in the client (not shared with shards).

---

#### Analytics

To improve performance and reliability, we collect:
- **Last visit timestamp** – Helps us estimate active user counts for capacity planning.
- **Error reports** – If the Web Client encounters an issue, we collect anonymized error logs to diagnose and fix bugs.
- **Backend connection logs** – Retained for **30 days** to help us investigate and diagnose network connection issues when they arise.

---

#### Assistant State

We store your assistant state for syncing, which includes (but not limited to):
- Game Profile(s)
- Macros
- Scripts
- Agent settings

---

### Will the web client support Razor?

Short answer, no. There will likely only ever be one assistant for the web client (the built-in one).

### How can I increase my FPS past 60/120/144?

Currently, Chrome uses VSYNC which locks your FPS to your monitors refresh rate, e.g. 60HZ -> 60fps.
You can unlock your FPS using Chrome flags, though we don't officially support that, and it's probably not necessary.

### Can I use multiple accounts?

ClassicUO Web supports multiple running clients via multiple tabs, however you will see reduced performance as a result.
Always check your shards rules first on their policy around multi-boxing.

### What do I do if the game freezes?

Close the tab entirely and open a new one. Simply trying to relog from a frozen tab usually won't work.
If freezes happen often, see our [Freezes & Crashes troubleshooting guide](/players/troubleshooting-crashes) for steps that can reduce or prevent them.

### What do I do if the game runs poorly?

See our [Performance & Lag troubleshooting guide](/players/troubleshooting-performance) for a full walkthrough. The most common fix is making sure your browser is using your dedicated GPU instead of your CPU for rendering.
