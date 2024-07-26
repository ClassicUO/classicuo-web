---
outline: deep
---

# About

The ClassicUO Web Client is the [closed-source](/shard-owners/faq#will-classicuo-web-be-open-source) web-based version
of
the [ClassicUO Ultima Online client](https://github.com/ClassicUO/ClassicUO) running entirely in your browser.
It's powered via WebAssembly with additional features built in React.

It's **free to use**, we receive no monetary gain from the project and pay for the hosting costs out of our own pockets.
If you would [like to donate](https://www.patreon.com/classicuo) we welcome it, but it is not necessary.

::: warning
This client should not be used to connect to the official Ultima Online
servers, [doing so may result in your account being banned](https://uo.com/2024/07/22/the-war-on-unapproved-3rd-party-programs/)!
:::

## Highlights

- Browse and join multiple servers or discover new ones through the Server List.
- No need to manage game files; they are automatically fetched and updated.
- Improved quality-of-life features built using web technologies.
- Requires only a compatible web browser (Chrome-like) and a few gigabytes of free disk space to play.
- Achieves speeds close to a native desktop ClassicUO installation.

## Philosophy

ClassicUO Web aims to provide a more accessible and easy way to play Ultima Online, similar to Oldschool Runescape.

Our goals include:

- Improve the accessibility and visibility of UO free shards by making a "one-click" play experience, new players can
  join a shard in less than a few minutes.
- Overhaul the outdated UO user experience with quality-of-life features and sleek user interfaces leveraging modern web
  technologies.
- Help new players manage the complex learning curve with mechanics and systems that can be overwhelming.
- Remove the burden from players on keeping their client, files, and assistants up to date.
- Provide a consistent client setup that follows on any device via cloud-syncing.
- Better integration for shard owners to create unique experiences via web-based modding.
- Making the game more robust against cheaters with an always up-to-date unified client.

## How does it work?

### The client

The web client at it's core is the C# [desktop ClassicUO client](https://github.com/ClassicUO/ClassicUO) compiled
into WebAssembly using a custom build process and many (many) necessary workarounds in C#/JS to make it run in a
browser. However, on its own it would be unusable without the additional projects we've built around it, like the runtime
interop, backend APIs, CDNs, user authentication, assets, and shard management.

### Web Assistant

The web assistant helps ease some of the cumbersome parts of playing a 25+ year old game.

The UI is a layer on-top of the client, built with [React](https://react.dev/) components, replacing some functionality
of the client such as managing game options and hotkeys. As well as providing quality-of-life features for item
management, looting, equipment, chat and more.

It also has extensive support for automation using the built-in sandbox for executing using visual
programming scripts ([Blockly](https://developers.google.com/blockly)) or more advanced code
scripts ([Typescript](https://www.typescriptlang.org/)), however these can be disabled per the shards rules.

### Content

As outlined in our [patching guide](/shard-owners/patching) for shard-owners, the system uses content-addressable
delta-binary diffs.
The content is delivered to users in chunks via a global CDN, each content chunk is persisted in the users browser
storage using the [Origin Private File System](https://web.dev/articles/origin-private-file-system) APIs.

First time players typically take less than a few minutes to fetch all content and get to the login screen, depending on
their internet connection speed.

### Network

Standard UO clients connect to shards via a direct TCP connection, however due to web security standards this is not
possible in a browser.
To work around the limitation we use a WebSocket proxy (GameProxy), which essentially acts as a hop to forward the
connection onto the
shard itself.

The GameProxy is geographically spread out across the world in 30+ locations on an anycast address, ensuring the
lowest-latency possible. This can cause some (solvable) issues
with [shards who have IP-based limits](/shard-owners/faq.html#why-do-web-client-users-have-the-same-ip).

### Shard Management

Shard staff have access to a separate application called the Shard Management. It allows them to manage their
patches/content for their shard, alter their shards details, and customise their appearance on the Server List to
hopefully stand out to players.
