---
outline: deep
---

# Using a Dedicated Browser for the Game

Using a separate browser for the game keeps performance flags and ExitLag from affecting your everyday browsing. This
page walks through the full setup.

## Step 1: Install your dedicated browser

Pick one of the following. Both use the same Chromium engine as Chrome, so the game runs more or less the same.

**Microsoft Edge (recommended):** Already installed on most Windows machines. Use `edge://flags` for all the same
performance tweaks as Chrome. If you use ExitLag, add `msedge.exe` to it instead of `chrome.exe`.

**Chrome Beta:** A completely separate installation from your main Chrome, with its own settings, flags, and data.
Download from [google.com/chrome/beta](https://www.google.com/chrome/beta/). It's a beta channel but is generally
stable. Any bugs you encounter are browser-level, not game-level.

Open the game in your new browser before continuing to the next steps.

## Step 2: Test your browser

Before spending time on configuration, confirm your new browser has everything the game needs. Follow the
[browser test guide](/players/troubleshooting-browser-test). If WebGL shows software rendering, move to Step 3 first
then rerun the test.

## Step 3: Apply performance settings

Follow the [performance guide](/players/troubleshooting-performance) in your dedicated browser. The flags use
`edge://flags` on Edge and `chrome://flags` on Chrome Beta, but the flag names are identical.

## Step 4: Install as an app

Follow the [install as app guide](/players/install-as-app). This gives you a dedicated window with no browser UI and
protects your downloaded game files from being automatically deleted under disk pressure.

## Step 5: Add to ExitLag (optional)

If you use ExitLag, add your new browser's executable instead of Chrome so only game traffic is routed through it.
Follow the [ExitLag guide](/players/troubleshooting-gaming-vpn) and substitute:

- **Edge:** `msedge.exe`
- **Chrome Beta:** `chrome.exe` from `C:\Program Files\Google\Chrome Beta\Application\`

## Your in-game settings carry over

Your FPS cap, Game Loop Scheduler, macros, and profiles are all saved to the cloud. When you log in on the new browser
for the first time they will load automatically. You only need to set the browser-level flags once.
