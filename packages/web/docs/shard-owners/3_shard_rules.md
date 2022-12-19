---
title: Settings Overrides
group: shard-owners
description: Get started with creating patches for your shard
---
# Overview
If your shard ruleset requires disabling certain UO features for gameplay reasons you can use the Shard Rules feature to
restrict what ClassicUO settings they can change, and/or set the default values.

**Important**: To set your shard rules you need to first have completed the steps in the [patching guide](https://classicuo.org/docs/shard-owners/patching/)
in order to add your rules as they are stored in the same configuration file.

## Creating shard rules

Your shard rules live inside your shards JSON configuration file, e.g. `myShard.json` which you set up during the [patching guide](https://classicuo.org/docs/shard-owners/patching/).
Simply insert a new section into the file called `rules` underneath the `shard` key:

![shard-rules-json.jpg](..%2F..%2Fstatic%2Fimages%2Fshard-rules%2Fshard-rules-json.jpg)

## Disabling Scripting

You can turn off scripting by setting the `scripting` rule to `disabled`:

```json
  // nested under: shard -> rules
  "web": {
    "scripting": "disabled"
  }
```

## Disabling web features

You can turn off other web features by setting their flags under the `features` key

```json
  // nested under: shard -> rules
  "web": {
    "scripting": "disabled",
    "features": {
      "dressAgent": true,
      "friends": false
    }
  },
```

## Setting profile defaults
You can view the available rules you can set by browsing the [JSON Schema of the patching config](https://json-schema.app/view/%23/%23%2Fdefinitions%2FshardSchema/%23%2Fdefinitions%2FshardSchema%2Fproperties%2Frules/%23%2Fdefinitions%2FshardSchema%2Fproperties%2Frules%2Fproperties%2Foptions/%23%2Fdefinitions%2FshardSchema%2Fproperties%2Frules%2Fproperties%2Foptions%2Fproperties%2FprofileOverrides?url=https%3A%2F%2Fgist.githubusercontent.com%2Fjabinb%2F18e29c09af3356a1dc1d5c799078985a%2Fraw%2F376746f3fbc299b415b073105be3a3b927db2625%2FconfigJsonSchema.json).

To define a default for when a new player joins your shard you can set only `defaultValue` and not set `disabledWithReason`:

For example, for new players you can enable `autoOpenDoors` (but still allow them to turn it off):


```json
  // nested under: shard -> rules -> options
  "profileOverrides": {
    "autoOpenDoors": {
      "defaultValue": true
    },
  }
```

Any new player will automatically have this:

![defaults-autoOpenDoors.png](..%2F..%2Fstatic%2Fimages%2Fshard-rules%2Fdefaults-autoOpenDoors.png)

## Disabling + locking profile options
To lock a setting to a certain value you can combine `defaultValue` and `disabledWithReason`. This will allow you to set
the default and then prevent the player from changing it later.
```json
  // nested under: shard -> rules -> options
  "profileOverrides": {
    "autoOpenDoors": {
      "defaultValue": true,
      "disabledWithReason": "Only auto-open is allowed"
    },
  }
```
![disabled-autoOpenDoors.png](..%2F..%2Fstatic%2Fimages%2Fshard-rules%2Fdisabled-autoOpenDoors.png)

### Example: Disabling profile options `useCustomLightLevel` `useAlternativeLights`

```json
// myShard.json
{
  "shard": {
    // ...
    "rules": {
      "web": {
        "scripting": "enabled",
        "features": {}
      },
      "options": {
        "profileOverrides": {
          "useCustomLightLevel": {
            "defaultValue": false,
            "disabledWithReason": "Turned off for atmospheric/role-play reasons"
          },
          "useAlternativeLights": {
            "defaultValue": false,
            "disabledWithReason": "Turned off for atmospheric/role-play reasons"
          }
        }
      }
    }
  }
}
```

### Example: Disabling profile options `treesToStumps` `drawRoofs` `hideVegetation`

```json
// myShard.json
{
  "shard": {
    // ...
    "rules": {
      "web": {
        "scripting": "enabled",
        "features": {}
      },
      "options": {
        "profileOverrides": {
          "treeToStumps": {
            "defaultValue": false,
            "disabledWithReason": "Regarded as unfair for gameplay"
          },
          "drawRoofs": {
            "defaultValue": false,
            "disabledWithReason": "Regarded as unfair for gameplay"
          },
          "hideVegetation": {
            "defaultValue": false,
            "disabledWithReason": "Regarded as unfair for gameplay"
          }
        }
      }
    }
  }
}
```