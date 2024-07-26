---
outline: deep
---

# Grid Containers

Web Grid Containers are entirely rendered by the browser, and works by **automatic sorting rather than being slot-based**.

::: info
Enable `Modern Grid Containers`, `Modern Loot Gump`, and `Modern Tooltips` under `Experimental` in the game options to use.
:::

## Highlights

- Items are automatically aligned, making the grid resizable, and scrollable
- Sorting based on Name, Serial, Weight, Layer and Magic Item Level
- "Hot Container" feature -- alt clicking a target container lets you quick transfer via alt-clicking items
- Support for standard UO Context menus, tooltips (modern only), stacking and splitting (now ctrl click)
- Pin items to the top by middle-clicking, pinned items have a yellow star in the top right
- Loot containers also use the grid


<video src="/features/grid-containers/context-split.mp4" autoplay loop muted controls></video>

<video src="/features/grid-containers/search.mp4" autoplay loop muted controls></video>

## How do I add colours for Magic Item Level (Shard Owner)

The web client looks for the cliloc `1042971` as the item name, if it has a `<basecolor>` it will extract the colour and
use it in both the text and background.
