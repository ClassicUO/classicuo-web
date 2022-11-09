---
title: "Target"
description: "Class: Target"
group: "classes"
url: "/scripting/Target/"
---

# Class: Target

[Target](/scripting/globals).Target

## Properties

### client

• `Private` **client**: `any`

## Methods

### entity

▸ **entity**(`serial`): `void`

Target a Mobile or an Item

**`Example`**

```ts
client.castSpell(Spells.Heal);
target.wait();
target.entity(player.serial);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |

#### Returns

`void`

___

### terrain

▸ **terrain**(`x`, `y`, `z`, `graphic?`): `void`

Target a Tile or Static

**`Example`**

This will target the tile
```ts
client.castSpell(Spells.Teleport);
target.wait();
target.terrain(1203, 222, 0);
```

**`Example`**

This will target the static graphic on a specific tile
```ts
client.castSpell(Spells.Teleport);
target.wait();
target.terrain(1203, 222, 0, 0x5a2);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `graphic?` | `number` |

#### Returns

`void`

___

### terrainWithOffset

▸ **terrainWithOffset**(`x`, `y`, `z`, `graphic?`): `void`

Target a Tile or Static where `{ x, y, z }` is the distance from the player.

**`Example`**

This will target the tile at position `{ player.x - 1, player.y - 2, player.z - 0 }`
```ts
client.castSpell(Spells.Teleport);
target.wait();
target.terrainWithOffset(1, 2, 0);
```

**`Example`**

This will target the static graphic on a specific tile at position `{ player.x - 1, player.y - 2, player.z - 0 }`
```ts
client.castSpell(Spells.Teleport);
target.wait();
target.terrainWithOffset(1, 2, 0, 0x5a2);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `graphic?` | `number` |

#### Returns

`void`

___

### terrainRelativeToEntity

▸ **terrainRelativeToEntity**(`serial`, `range`, `forward`, `graphic?`): `void`

Target a Tile or Static from a specific Item or Mobile

**`Example`**

This will target the file in front or behind the Mobile
```ts
client.castSpell(Spells.Teleport);
target.wait();
target.terrainRelativeToEntity(mob.serial, 5, true);
```

**`Example`**

This will target the static on a specific tile in front or behind the Mobile
```ts
client.castSpell(Spells.Teleport);
target.wait();
target.terrainRelativeToEntity(mob.serial, 5, true, 0x5a2);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |
| `range` | `number` |
| `forward` | `boolean` |
| `graphic?` | `number` |

#### Returns

`void`

___

### wait

▸ **wait**(`timeout?`): `boolean`

Wait for target with a specific amount of time. Default = 5sec

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout?` | `number` |

#### Returns

`boolean`

___

### clearQueue

▸ **clearQueue**(): ``null``

Clear target queue

#### Returns

``null``

___

### cancel

▸ **cancel**(): `void`

Close the target

#### Returns

`void`

## Accessors

### open

• `get` **open**(): `boolean`

Check if target is open

#### Returns

`boolean`

___

### lastSerial

• `get` **lastSerial**(): `number`

Serial of the last target

#### Returns

`number`

___

### queryTarget

• `get` **queryTarget**(): `TargetInfo`

Creates a target and returns information about the result

#### Returns

`TargetInfo`
