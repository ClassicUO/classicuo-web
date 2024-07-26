---
outline: deep
---
# Assistant Profile 🤝 Game Profile

In the web client your Game Profile is tied to your Assistant Profile, making them one and the same. This fixes the
issue of having to manage the Assistant and Game profiles per character independently.

When you load into a profile it will hold all your game settings -- that means your open gumps, game window size,
game options (e.g. Always Run, auto-open doors etc.).
The Assistant will also remember and automatically load the last profile you used for a character when entering the
game.

![img.png](/images/game-profile/img.png)

::: tip
You can swap profiles for different play-styles without reloading the game (e.g. Farming vs PvP vs PvM etc).
Bind a hotkey to a different profile in the options to quick-swap (you'll need to set them per profile as hotkeys are
not global).
:::

## Cloud Sync

All Assistant data is stored in the cloud periodically, similar to how Steam Cloud saves work. If you log into a new
PC/browser it will automatically synchronise your latest state, effectively letting you continue where you left off.
If the cloud save is newer than your local copy it will download the latest instead (don't get caught playing at work!).

## Backups

There is a section in the User Profile window for backups. Every 5 or so minutes the Assistant State
will be backed up locally, with a maximum of 10 backups. If something goes wrong you can restore the backup to hopefully
revert your mistake.
