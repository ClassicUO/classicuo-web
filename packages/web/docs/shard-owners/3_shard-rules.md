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

![shard-rules-json.jpg](/images/shard-rules/shard-rules-json.jpg)

## Disabling Scripting

You can turn off scripting by setting the `scripting` rule to `disabled`:

```json
  // nested under: shard -> rules
  "web": {
    "scripting": "disabled"
  }
```

## Disabling web features

You can turn off other web features by setting their flags under the `features` key. 
To see all available features check the [JSON Schema of the patching config](https://json-schema.app/view/%23/%23%2Fdefinitions%2FshardSchema/%23%2Fdefinitions%2FshardSchema%2Fproperties%2Frules?url=https%3A%2F%2Funpkg.com%2F%40classicuo%2Fcli%40latest%2Fdist%2Fschemas%2FconfigJsonSchema.json).

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
You can view the available rules you can set by browsing the [JSON Schema of the patching config](https://json-schema.app/view/%23/%23%2Fdefinitions%2FshardSchema/%23%2Fdefinitions%2FshardSchema%2Fproperties%2Frules/%23%2Fdefinitions%2FshardSchema%2Fproperties%2Frules%2Fproperties%2Foptions/%23%2Fdefinitions%2FshardSchema%2Fproperties%2Frules%2Fproperties%2Foptions%2Fproperties%2FprofileOverrides?url=https%3A%2F%2Funpkg.com%2F%40classicuo%2Fcli%40latest%2Fdist%2Fschemas%2FconfigJsonSchema.json).

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

![defaults-autoOpenDoors.png](/images/shard-rules/defaults-autoOpenDoors.png)

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
![disabled-autoOpenDoors.png](/images/shard-rules/disabled-autoOpenDoors.png)

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
            "defaultValue": true,
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