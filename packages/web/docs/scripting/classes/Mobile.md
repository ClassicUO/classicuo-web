---
title: "Mobile"
description: "Class: Mobile"
group: "classes"
url: "/scripting/Mobile/"
---

# Class: Mobile

[Mobile](/scripting/globals).Mobile

## Hierarchy

- [`Entity`](../modules/#Entity)

  ↳ **`Mobile`**

## Accessors

### serial

• `get` **serial**(): `number`

#### Returns

`number`

#### Inherited from

Entity.serial

___

### graphic

• `get` **graphic**(): `number`

Gets the graphic id of the entity.
Returns 0 if entity is no longer on screen.

**`Example`**

```ts
console.log(player.graphic); // e.g. 400
```

#### Returns

`number`

#### Inherited from

Entity.graphic

___

### x

• `get` **x**(): `number`

Gets the current X coordinate of the entity.
Returns 0 if entity is no longer on screen.

**`Example`**

```ts
const entity = client.findObject(player); // Replace with any other entity serial
console.log(entity.x)
```

#### Returns

`number`

#### Inherited from

Entity.x

___

### y

• `get` **y**(): `number`

Gets the current Y coordinate of the entity.
Returns 0 if entity is no longer on screen.

**`Example`**

```ts
const entity = client.findObject(player);
console.log(entity.y)
```

#### Returns

`number`

#### Inherited from

Entity.y

___

### z

• `get` **z**(): `number`

Gets the current Z coordinate of the entity.
Returns 0 if entity is no longer on screen.

**`Example`**

```ts
const entity = client.findObject(player);
console.log(entity.z)
```

#### Returns

`number`

#### Inherited from

Entity.z

___

### name

• `get` **name**(): `string`

Gets the name of the entity.
Returns an empty string if not known to the client yet.

**`Example`**

```ts
const entity = client.findObject(player.equippedItems.robe);
if(entity) {
 console.log(entity.name);
}
```

#### Returns

`string`

#### Inherited from

Entity.name

___

### hue

• `get` **hue**(): `number`

Gets the hue/color of the entity.
Returns 0 if entity is no longer on screen.

**`Example`**

```ts
const entity = client.findObject(player.equippedItems.robe);
if(entity) {
 console.log(entity.name);
}
```

#### Returns

`number`

#### Inherited from

Entity.hue

___

### hits

• `get` **hits**(): `number`

Gets the hits of the entity.
Returns 0 if the client does not know (e.g. item.hits) or the entity is no longer on screen.

**`Example`**

```ts
const entity = client.findObject(0x991);
if(entity) {
 console.log(entity.hits);
}
```

#### Returns

`number`

#### Inherited from

Entity.hits

___

### maxHits

• `get` **maxHits**(): `number`

Gets the maxHits of the entity.
Returns 0 if the client does not know (e.g. item.maxHits) or the entity is no longer on screen.

**`Example`**

```ts
const entity = client.findObject(0x991);
if(entity) {
 console.log(entity.maxHits);
}
```

#### Returns

`number`

#### Inherited from

Entity.maxHits

___

### direction

• `get` **direction**(): `number`

Gets the direction of the entity as a number, if it has one.
Returns 0 if the client does not know (e.g. item.maxHits) or the entity is no longer on screen.

Compare using the [Directions enum](../Directions).

**`Example`**

```ts
const entity = client.findObject(0x991);
if(entity) {
  if(entity.direction === Directions.North) {
    console.log(`${entity.name} is facing North`);
  }
  else {
    console.log(Directions[entity.direction]); // Prints the directions name, e.g. East
  }
}
```

#### Returns

`number`

#### Inherited from

Entity.direction

___

### isHidden

• `get` **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Entity.isHidden

___

### stamina

• `get` **stamina**(): `number`

#### Returns

`number`

___

### maxStamina

• `get` **maxStamina**(): `number`

#### Returns

`number`

___

### mana

• `get` **mana**(): `number`

#### Returns

`number`

___

### maxMana

• `get` **maxMana**(): `number`

#### Returns

`number`

___

### isPoisoned

• `get` **isPoisoned**(): `boolean`

#### Returns

`boolean`

___

### isYellowHits

• `get` **isYellowHits**(): `boolean`

#### Returns

`boolean`

___

### isFemale

• `get` **isFemale**(): `boolean`

#### Returns

`boolean`

___

### notoriety

• `get` **notoriety**(): [`Notorieties`](../Notorieties)

#### Returns

[`Notorieties`](../Notorieties)

___

### inWarMode

• `get` **inWarMode**(): `boolean`

#### Returns

`boolean`

___

### isParalyzed

• `get` **isParalyzed**(): `boolean`

#### Returns

`boolean`

___

### isDead

• `get` **isDead**(): `boolean`

#### Returns

`boolean`

___

### equippedItems

• `get` **equippedItems**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `shirt?` | [`Item`](../Item) |
| `pants?` | [`Item`](../Item) |
| `shoes?` | [`Item`](../Item) |
| `legs?` | [`Item`](../Item) |
| `torso?` | [`Item`](../Item) |
| `ring?` | [`Item`](../Item) |
| `talisman?` | [`Item`](../Item) |
| `bracelet?` | [`Item`](../Item) |
| `face?` | [`Item`](../Item) |
| `arms?` | [`Item`](../Item) |
| `gloves?` | [`Item`](../Item) |
| `skirt?` | [`Item`](../Item) |
| `tunic?` | [`Item`](../Item) |
| `robe?` | [`Item`](../Item) |
| `necklace?` | [`Item`](../Item) |
| `hair?` | [`Item`](../Item) |
| `waist?` | [`Item`](../Item) |
| `beard?` | [`Item`](../Item) |
| `earrings?` | [`Item`](../Item) |
| `oneHanded?` | [`Item`](../Item) |
| `helmet?` | [`Item`](../Item) |
| `twoHanded?` | [`Item`](../Item) |
| `cloak?` | [`Item`](../Item) |
| `mount?` | [`Item`](../Item) |

## Methods

### serialFrom

▸ `Static` **serialFrom**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`number`

#### Inherited from

Entity.serialFrom
