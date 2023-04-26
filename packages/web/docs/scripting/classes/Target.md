---
title: "Target"
description: "Class: Target"
group: "classes"
url: "/scripting/Target/"
---

# Class: Target

[Target](/scripting/globals).Target

## Constructors

### constructor

• **new Target**()

## Methods

### entity

▸ **entity**(`serial`): `void`

Target a Mobile or an Item with the currently open target

**`Example`**

```ts
client.castSpell(Spells.Heal);
target.wait();
target.entity(player);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | [`SerialOrEntity`](../modules/#SerialOrEntity) |

#### Returns

`void`

___

### self

▸ **self**(): `void`

Target self with the currently open target

**`Example`**

```ts
client.castSpell(Spells.Heal);
target.wait();
target.self();
```

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

▸ **terrainRelativeToEntity**(`entity`, `range`, `forward`, `graphic?`): `void`

Target a Tile or Static from a specific Item or Mobile

**`Example`**

This will target the file in front or behind the Mobile
```ts
client.castSpell(Spells.Teleport);
target.wait();
target.terrainRelativeToEntity(mob, 5, true);
```

**`Example`**

This will target the static on a specific tile in front or behind the Mobile
```ts
client.castSpell(Spells.Teleport);
target.wait();
target.terrainRelativeToEntity(mob, 5, true, 0x5a2);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`SerialOrEntity`](../modules/#SerialOrEntity) |
| `range` | `number` |
| `forward` | `boolean` |
| `graphic?` | `number` |

#### Returns

`void`

___

### query

▸ **query**(`isGround?`): `TargetInfo`

Creates a target and returns information about the result

#### Parameters

| Name | Type |
| :------ | :------ |
| `isGround?` | `boolean` |

#### Returns

`TargetInfo`

___

### wait

▸ **wait**(`timeoutMs?`): `boolean`

Wait for the target to open within a specific amount of time.

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeoutMs?` | `number` |

#### Returns

`boolean`

___

### waitTargetEntity

▸ **waitTargetEntity**(`entity`, `timeoutMs?`): `boolean`

Waits for the target to open, and then targets the desired entity

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`SerialOrEntity`](../modules/#SerialOrEntity) |
| `timeoutMs?` | `number` |

#### Returns

`boolean`

___

### waitTargetSelf

▸ **waitTargetSelf**(`timeoutMs?`): `boolean`

Wait for target with a specific amount of time, when open target self.

**`Example`**

Use bandages, target self.
```ts
player.useType(0xE21);
target.waitTargetSelf();

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeoutMs?` | `number` |

#### Returns

`boolean`

___

### waitTargetType

▸ **waitTargetType**(`graphic`, `hue?`, `timeoutMs?`): `boolean`

Wait for target, when open target the first object with a certain graphic/hue

**`Example`**

Use a sewing kit, then target hides.
```ts
player.useType(0xF9D);
target.waitTargetType(0x1078);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | `number` |
| `hue?` | `number` |
| `timeoutMs?` | `number` |

#### Returns

`boolean`

___

### clearQueue

▸ **clearQueue**(): `void`

Clear target queue

#### Returns

`void`

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

### lastObjectSerial

• `get` **lastObjectSerial**(): `number`

Serial of the last target

#### Returns

`number`
