---
title: Patching
group: shard-owners
description: Get started with creating patches for your shard
---
# Overview

It's common for free UO shards to have heavily modified assets, which is why we've created a custom patching system for shard owners.
The system essentially creates efficient [binary-delta patches](https://en.wikipedia.org/wiki/Binary_delta_compression) using [VCDIFF](https://en.wikipedia.org/wiki/VCDIFF)
against an unmodified set of files and outputs them as a series of `.patch` files.
We also convert any UOP based assets into their MUL equivalent which results in far smaller delta patches.

The patches are indexed by a file called the `client-manifest`, which tells CUO Web how to get your patches and what's needed to apply them.
Your patches and the `client-manifest` are then stored somewhere that is HTTPS accessible, preferably on some kind of global CDN (e.g. Cloudflare, S3 etc).

When a player clicks **Play** CUO Web will first grab the `client-manifest` and then begin fetching the patches after which they are verified and initialized. 
During gameplay the patches are used in a random-access mode we call **livepatching**, the full patched UO asset is never written to disk to save players disk-space.

## What you will need
* Your shard files (duh)
* [NodeJS v16 or higher](https://nodejs.org/en/download/) installed
* A Webserver/CDN with HTTPS+CORS to serve your patches
* Your CUO Web Shard ID, to obtain one you need to apply with a [Shard Request issue](https://github.com/ClassicUO/classicuo-web/issues/new/choose)
* A code editor, e.g. [VSCode](https://code.visualstudio.com/download)

# Creating patches

The process boils down to these steps:

1. Preparing your files
2. Creating your patch config
3. Generating the patches
4. Uploading your patches to your webserver/cdn
5. Requesting CUO Web staff to change your manifest URL (if necessary)

_Note: If you get stuck ask for help on the [#for-shard-owners](https://discord.com/channels/458277173208547350/1002460906862690334) discord channel._

## 1. Preparing your files

There are a few key folders you need to know about:

### Source directory
This is the directory where the CUO Web "source" files synchronized are to. On every start of the patching process the CLI
will sync the remote files with this directory, always making sure you are patching against the right set of files.

### Target directory
This is your shards files. You can use your UO directory itself if you want. Only the files you list will be patched, the rest will be ignored.

### Output directory
This is where the `.patch` files and your `client-manifest.json` will be written. It is the directory you need to upload
to your file hosting/CDN and will be publicly accessible.

### Create the structure

Create a folder structure similar to this and place your shard files in the middle `target` folder. 
We'll refer to the top level folder (e.g. `cuo-web-patching`) as the **root** folder.  
_Replace `myshard` with your shards name._
```
cuo-web-patching
   ├── classicuo-source  // source
   ├── myshard-files         // target
   └── myshard-patches       // output
```

## 2. Creating your patch config

You now need to create the configuration file the patching tool will use to generate the shard patches.
Create a new JSON file in the **root** folder with your shards name, e.g. `myshard.json` and open it in your favourite editor (e.g. VSCode).

Insert the following JSON:
```json
{
  "shard": {
    "name": "My Shard",
    "id": <provided by CUO staff>,
    "clientVersion": "7.0.95.0",
    "region": "US",
    "focus": "PvP / PvM",
    "manifest": "https://myshard.com/myshard-patches/client-manifest.json",
    "logo": "https://myshard.com/assets/images/logo.png",
    "website": "https://myshard.com/",
    "discord": "https://discord.gg/Z141qfea",
    "encryption": 0,
    "useVerdata": false,
    "mapLayouts": "",
    "useTokenAuth": false,
    "testing": true
  },
  "patch": {
    "cdnBase": "https://myshard.com/myshard-patches",
    "files": [
    ]
  }
}
```

Update the following fields:
### `shard`
| field             | type                                    | example                                                           | description                                                                                                                                                |
|-------------------|-----------------------------------------|-------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **name**          | string                                  | "My Shard"                                                        | Your shards name                                                                                                                                           |
| **id**            | number                                  | 12                                                                | Your shards unique CUO Web Id, you will need to apply to get listed first                                                                                  |
| **clientVersion** | string                                  | "5.0.9.1"                                                         | The version your files started at before you modified them                                                                                                 |
| **region**        | "US" or "EU" or "OCE" or "ASIA" or "BR" | "US"                                                              | Your shards closest region, If we're missing some please raise an issue.                                                                                   |
| **focus**         | "PvP" or "PvM" or "PvP / PvM"           | "PvP / PvM"                                                       | The focus of your shard                                                                                                                                    |
| **manifest**      | URL                                     | [https://cdn.myshard.com/myshard-patches/client-manifest.json](#) | The full URL where your `client-manifest.json` will be hosted at                                                                                           |
| **logo**          | URL                                     | [https://myshard.com/assets/images/logo.png](#)                   | Your shards' logo, to be displayed during loading                                                                                                          |
| **website**       | URL                                     | [https://myshard.com/](#)                                         | The URL to your shards landing page or website                                                                                                             |
| **discord**       | URL                                     | [https://discord.gg/Z141qfea](#)                                  | Permanent discord invite link to your shards discord                                                                                                       |
| **encryption**    | number                                  | 0                                                                 | Whether your shard uses UO Client encryption, most likely it is `0`                                                                                        |
| **useVerdata**    | boolean                                 | false                                                             | If your shard uses a `verdata.mul` you should set this to `true`                                                                                           |
| **mapLayouts**    | string                                  | ""                                                                | Using custom map layouts, same as `settings.json` from ClassicUO. If you don't know leave it empty                                                         |
| **useTokenAuth**  | boolean                                 | false                                                             | Experimental ClassicUO Web token-only auth, set this to `false` unless told otherwise                                                                      |
| **testing**       | boolean                                 | true                                                              | Set to `true` if your shard should be hidden from the main list. This might require a review from CUO staff, set to `true` if your shard is new to CUO web |


### `patch`
| field       | type            | example                                                                          | description                                                                                     |
|-------------|-----------------|----------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| **cdnBase** | URL             | [https://cdn.myshard.com/myshard-patches](#)                                     | The full publicly accessible HTTPS URL to your `output` patch folder without the leading slash. |
| **files**   | Array\<string\> | [<br/>"art.mul", <br/>"artidx.mul", <br/>"gumpart.mul", <br/>"gumpidx.mul"<br/>] | A list of the files your shard needs to function.                                               |

#### ⚠️ Important ⚠️
The `files` list is the only files CUO Web will see! Any files missing will not exist to the client.  
You should list **every** file UO needs to load. The patcher will take care of patching only those with changes.

You can look at the [ZHModern test center JSON file](https://content.zhmodern.com/file/zuluhotel-content/client/8.json) for an example of how a complete file should look.


## 3. Generating the patches

If you haven't already, install [NodeJS v16 or higher](https://nodejs.org/en/download/).

Your directory structure should look something like this:

```
cuo-web-patching
  ├── myshard.json
  ├── classicuo-source
  ├── myshard-files
  │   ├── artidx.mul
  │   ├── art.mul
  │   └── ... etc
  └── myshard-patches

```

Open a terminal at the **root** folder (e.g. `cuo-web-patching`), if you're on Windows you should use `Powershell`.
Execute the patcher, replace the folder paths with the full-path to your **root** folder, and replace `myshard.json` with your shard configuration file.
```bash
npx @classicuo/cli@latest patching:create-v1 myshard.json --sourcePath C:/cuo-web-patching/classicuo-source --targetPath C:/cuo-web-patching/myshard-files --outputPath C:/cuo-web-patching/myshard-patches
```
_Note: If patching fails please ask for help on the [#for-shard-owners](https://discord.com/channels/458277173208547350/1002460906862690334) discord channel._  

The CLI will take some, when patching is complete your **output** folder should contain `.patch` files and your `client-manifest.json`.

## 4. Uploading your patches to your webserver/cdn

You can now take the **output** folder and upload it to your hosting/CDN where it should be accessible at the URL you set for `cdnBase`.
How you upload your files is up to you and your chosen hosting, however you need to ensure a few things are set up:

1. Your `cdnBase` URL should be the **output** folder, with your patch files accessible via HTTPS publicly.
2. Enable CORS headers. If you're not sure what that is just google your webserver/host + CORS, e.g. `IIS enable CORS` to find how to do it.
3. Check you have enough bandwidth allowance for your shards' player-base to download your patches. 

We recommend you use [Cloudflare + R2](https://developers.cloudflare.com/r2/examples/demo-worker/) 
(it's what we use for the source files) to store your patches if you don't already have a host.
Their free plan is more than enough for most shards (10GB free storage, 10 million requests p/month) 
and their global CDN will cache the files close to your users giving them extremely quick downloads.

## 5. Requesting CUO Web staff to change your manifest URL (if necessary)

Drop a message in the [#for-shard-owners](https://discord.com/channels/458277173208547350/1002460906862690334) channel 
asking one of the staff to change your manifest URL.

## FAQ/Troubleshooting

### The web client gets stuck during loading e.g. at `Animations`
This is likely because you're missing files, and/or gave the wrong files to the patcher. 
Try manually copying **only** the files you put into the `files` array into from your *target* folder into a new folder and launch Desktop CUO pointed to that folder.

If Desktop CUO loads fine with just those files ask for help in [#for-shard-owners](https://discord.com/channels/458277173208547350/1002460906862690334) channel.

### I see MUL patches but I put in UOP?
The patcher will automatically convert your UOP asset files (exception being the `Animation*.uop` files) to MUL.
We do this because of the compression in UOP files causes extremely large patch deltas, with MUL they are much smaller (e.g. 90MB to 2MB).

### File is being used by another process
Double-check your file list, it's likely your file list contains both the UOP and MUL version of the same asset(s), e.g. `art.mul` and `artLegacyMUL.uop`. **Use only one.**
