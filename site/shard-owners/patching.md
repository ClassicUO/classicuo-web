---
outline: deep
---

# Overview

It's common for free UO shards to have heavily modified assets, which is why we've created a custom patching system for
shard owners.

## What you will need

* Have been granted access to the [Shard Management](https://play.classicuo.org/shard-management)
* Your UO installation directory
* An up-to-date version of Chrome

## Steps

1. Using Chrome, browse to the `Patching` section inside your [Shard Management](https://play.classicuo.org/shard-management)
2. Click `Open UO Directory` and choose your UO installation directory, accepting the permissions prompt
3. Verify the list of `Files to be patched`, move any files to the `Ignore List` to not patch them
   1. If you see UOP files automatically added to the `Ignore List`, this is likely due to a MUL <-> UOP conflict
   2. To change the preferred file type, click the settings cog icon, and change your preference
   3. Otherwise, remove the conflicting files from your UO directory and try again
4. Verify the `Client Version` is showing the correct version (it is automatically read from your `client.exe` or CUO
   `settings.json`)
5. Once ready, click the green `Patch` button
6. When patching is complete you can review the final manifest of files, if there are any missing check your
   `Ignore List` or UO directory
7. Click `Publish` selecting `Cloud`, this will begin uploading your content and making it available to players
8. Done

## Video Example

<video controls width="500" autoplay muted>
<source src="https://github.com/ClassicUO/classicuo-web/assets/1094679/cd72b302-eb03-4781-a9f8-f3513eb6934e" type="video/mp4" /> 
</video>

## Troubleshooting

### How do the patches work?

The system essentially creates efficient [binary-delta patches](https://en.wikipedia.org/wiki/Binary_delta_compression)
using [VCDIFF](https://en.wikipedia.org/wiki/VCDIFF)
against a known set of input source files.
We also convert any UOP based assets into their MUL equivalent which results in far smaller delta patches.

When a player clicks **Play** the web client will verify the users browser filesystem, and download any missing content.
During gameplay the patches are used in a random-access mode we call **livepatching**, the fully patched UO asset is
never written to disk to save players disk-space.
Similarly to save space all content is deduplicated across shards; for example if two shards have the patches for the
same file, the user only downloads it once.

### The web client gets stuck during loading e.g. at `Animations`

This is likely because you're missing files, and/or gave the wrong files to the patcher.
Try manually copying **only** the files you put into the `files` array into from your *target* folder into a new folder
and launch Desktop CUO pointed to that folder.

If Desktop CUO loads fine with just those files ask for help
in [#for-shard-owners](https://discord.com/channels/458277173208547350/1002460906862690334) channel.

### I see MUL patches but I put in UOP?

The patcher will automatically convert your UOP asset files (exception being the `Animation*.uop` files) to MUL.
We do this because of the compression in UOP files causes extremely large patch deltas, with MUL they are much smaller (
e.g. 90MB to 2MB).

### File is being used by another process

Double-check your file list, it's likely your file list contains both the UOP and MUL version of the same asset(s), e.g.
`art.mul` and `artLegacyMUL.uop`. **Use only one.**
