---
outline: deep
---

# Slow, Laggy, or High CPU Usage

If the game feels sluggish, your computer fan is running loud, or you checked Task Manager and saw Chrome eating 90%+ of
your CPU, the most likely cause is that **your browser is not using your graphics card**.

The fixes below are listed with graphics-related steps first. Start at the top and work your way down.

::: tip Before you start

The browser-level changes on this page (GPU flags, graphics backend, etc.) apply to your **entire browser**, not just
the game. If you'd rather keep your main browser untouched, consider setting these up in a
[dedicated browser](/players/troubleshooting-dedicated-browser) instead.

:::

## Step 1: Make sure your browser is using your graphics card

**This is the single biggest fix.** Without it, the game renders entirely on your CPU, which is why it runs hot and
slow.

#### How to check

1. Copy and paste the following into your address bar (in a new tab) and press Enter:

```
chrome://gpu
```

2. Look for the **Graphics Feature Status** section near the top.
3. You want to see **"Hardware accelerated"** next to items like **WebGL**, **Canvas**, and **Rasterization**.
4. If you see **"Software only"** or **"Unavailable"** your GPU on most of these then it is not being used.

::: tip This is what a "good" feature status looks like -- however there could still be other issues at play
![The chrome://gpu page showing Graphics Feature Status with key items marked as "Hardware accelerated".](/players/troubleshooting/chrome-gpu-report.png)
:::

#### How to enable hardware acceleration

1. Copy and paste the following into your address bar (in a new tab) and press Enter:

```
chrome://settings/?search=Use+graphics+acceleration+when+available
```

![Chrome Settings > System showing the "Use graphics acceleration when available" toggle.](/players/troubleshooting/chrome-hardware-acceleration.png)

If hardware acceleration is still not working after enabling it, Chrome may have blocklisted your GPU. You can override
this:

1. Copy and paste the following into your address bar (in a new tab) and press Enter:

```
chrome://flags/#ignore-gpu-blocklist
```

2. Set it to **Enabled** and click **Relaunch**.

![The "Override software rendering list" flag in chrome://flags:set to Enabled to force GPU acceleration on blocklisted hardware.](/players/troubleshooting/chrome-ignore-gpu-blocklist.png)

#### Laptops with two GPUs: How to force Chrome to use your dedicated GPU

Many laptops have two graphics chips: a weaker integrated one for saving battery, and a more powerful dedicated one for
games. Chrome usually picks the weaker one. You need to tell it to use the powerful one.

1. Copy and paste the following into your address bar (in a new tab) and press Enter:

```
chrome://flags/#force-high-performance-gpu
```

2. Set it to **Enabled**.
3. Click the **Relaunch** button at the bottom of the page.

![The "Force High Performance GPU" flag in chrome://flags:set the dropdown to Enabled.](/players/troubleshooting/chrome-laptop-force-high-perf-gpu.png)

## Step 2: Set Chrome's graphics backend to DirectX 11 (Windows only)

This changes the internal rendering engine Chrome uses, and many players have reported smoother performance after
switching. This option is only available on Windows.

1. Copy and paste the following into your address bar (in a new tab) and press Enter:

```
chrome://flags/#use-angle
```

2. Change the dropdown from **Default** to **D3D11** (DirectX 11).
3. Click the **Relaunch** button at the bottom.

![The "Choose ANGLE graphics backend" flag in chrome://flags:change the dropdown from Default to D3D11.](/players/troubleshooting/chrome-use-angle.png)

## Step 3: Update your graphics drivers

Outdated GPU drivers are a common cause of rendering glitches and poor performance. The drivers that come with Windows
Update are often months behind.

- **Nvidia:** Download the latest drivers from [nvidia.com/drivers](https://www.nvidia.com/Download/index.aspx)
- **AMD:** Download the latest drivers from [amd.com/support](https://www.amd.com/en/support)
- **Intel:** Download the latest drivers from
  [intel.com/download-center](https://www.intel.com/content/www/us/en/download-center/home.html)

After installing, restart your computer.

## Step 4: Cap your FPS to match your monitor

Leaving the FPS uncapped can cause your browser to work much harder than it needs to and leads to instability. Setting
it to match your monitor's refresh rate gives you the smoothest experience.

1. Inside the game, open **Options** (the gear icon or press `Alt+O`).
2. Go to the **Video** tab.
3. Find the **Maximum FPS** slider.
4. Set it to match your monitor's refresh rate. If you're not sure what yours is, **60** is a safe choice. If you have a
   gaming monitor it might be 100, 120, 144, or higher.

![In-game Options Video tab with the Maximum FPS slider highlighted.](/players/troubleshooting/game-fps-slider.png)

::: tip How to check your monitor's refresh rate on Windows:

**Settings** then **System** then **Display** then **Advanced display settings**. It will show your refresh rate in Hz
(e.g., 60 Hz = 60 FPS).

:::

## Step 5: Set Game Loop Scheduler to Immediate

This is a small tweak in the game's video settings that can make things feel more responsive.

1. Inside the game, open **Options**.
2. Go to the **Video** tab.
3. Find **Game Loop Scheduler** and set it to **Immediate**.

![In-game Options Video tab with Game Loop Scheduler set to Immediate.](/players/troubleshooting/game-loop-scheduler.png)

## Step 6: Close other tabs and programs

The Web Client is a full game running inside your browser. It needs resources. Other tabs with videos, social media, or
other games will compete for your CPU and GPU.

- **Close tabs you're not using**, especially anything with video or animation.
- If you're running multiple game clients in separate tabs, each one needs its own share of resources. Consider using
  separate browser windows or profiles for each client.

## Step 7: Disable browser extensions

Ad blockers, VPN extensions, and privacy tools can interfere with how Chrome renders graphics or handles network
traffic. If you've tried everything above and the game is still slow, try running with extensions disabled.

To test if an extension is the problem, disable all extensions temporarily:

1. Go to `chrome://extensions/` and toggle off all your extensions.
2. Restart Chrome, navigate to the game, and log in.
3. If performance is noticeably better, one of your extensions is the culprit. Re-enable them one at a time to find
   which one.

## If you're running multiple accounts

When you have the game open in multiple tabs, Chrome will throttle (slow down) any tab that isn't in the foreground.
After about 10 seconds in the background, a tab gets heavily restricted.

There are a few things you can do:

- **Use separate browser windows** instead of tabs, and keep them side by side so neither is fully hidden.
- **Add the game site to Chrome's "Always keep active" list:** Go to Chrome **Settings** then **Performance**, and add
  your game's URL (e.g., `retail.classicuo.org`) to the list of sites that should always stay active.
- **Disable Energy Saver in Chrome:** Go to Chrome **Settings** then **Performance** and turn off **Energy Saver**. When
  active, this feature throttles CPU-heavy tabs even in the foreground.

![Chrome Settings > Performance showing Memory Saver, Energy Saver, and the "Always keep active" site list.](/players/troubleshooting/chrome-performance-settings.png)

## Quick checklist

If you've gone through everything, here's a summary of what should be set:

| Setting               | Where                            | Value                         |
| --------------------- | -------------------------------- | ----------------------------- |
| Hardware acceleration | Chrome Settings > System         | On                            |
| High-performance GPU  | `chrome://flags`                 | Enabled                       |
| Graphics backend      | `chrome://flags` > ANGLE backend | D3D11                         |
| Maximum FPS           | In-game Options > Video          | Match your monitor (e.g., 60) |
| Game Loop Scheduler   | In-game Options > Video          | Immediate                     |
| Energy Saver          | Chrome Settings > Performance    | Off                           |
| GPU drivers           | Nvidia/AMD/Intel website         | Latest version                |
