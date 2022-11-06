---
title: "Mobile"
description: "Class: Mobile"
group: "classes"
url: "/scripting/classes/Mobile/"
---

# Class: Mobile

[classes/views](/scripting/modules).Mobile

## Hierarchy

- [`Entity`](../Entity)

  ↳ **`Mobile`**

  ↳↳ [`Player`](../Player)

## Constructors

### constructor

• **new Mobile**()

#### Inherited from

[Entity](../Entity).[constructor](../Entity#constructor)

## Properties

### serial

• `Readonly` **serial**: `number`

#### Inherited from

[Entity](../Entity).[serial](../Entity#serial)

## Accessors

### direction

• `get` **direction**(): `number`

#### Returns

`number`

#### Inherited from

Entity.direction

___

### equippedItems

• `get` **equippedItems**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `arms?` | [`Item`](../Item) |
| `beard?` | [`Item`](../Item) |
| `bracelet?` | [`Item`](../Item) |
| `cloak?` | [`Item`](../Item) |
| `earrings?` | [`Item`](../Item) |
| `face?` | [`Item`](../Item) |
| `gloves?` | [`Item`](../Item) |
| `hair?` | [`Item`](../Item) |
| `helmet?` | [`Item`](../Item) |
| `legs?` | [`Item`](../Item) |
| `mount?` | [`Item`](../Item) |
| `necklace?` | [`Item`](../Item) |
| `oneHanded?` | [`Item`](../Item) |
| `pants?` | [`Item`](../Item) |
| `ring?` | [`Item`](../Item) |
| `robe?` | [`Item`](../Item) |
| `shirt?` | [`Item`](../Item) |
| `shoes?` | [`Item`](../Item) |
| `skirt?` | [`Item`](../Item) |
| `talisman?` | [`Item`](../Item) |
| `torso?` | [`Item`](../Item) |
| `tunic?` | [`Item`](../Item) |
| `twoHanded?` | [`Item`](../Item) |
| `waist?` | [`Item`](../Item) |

___

### flags

• `get` **flags**(): `number`

#### Returns

`number`

#### Inherited from

Entity.flags

___

### graphic

• `get` **graphic**(): `number`

#### Returns

`number`

#### Inherited from

Entity.graphic

___

### hits

• `get` **hits**(): `number`

#### Returns

`number`

#### Inherited from

Entity.hits

___

### hue

• `get` **hue**(): `number`

#### Returns

`number`

#### Inherited from

Entity.hue

___

### inWarMode

• `get` **inWarMode**(): `boolean`

#### Returns

`boolean`

___

### isFemale

• `get` **isFemale**(): `boolean`

#### Returns

`boolean`

___

### isPoisoned

• `get` **isPoisoned**(): `boolean`

#### Returns

`boolean`

___

### mana

• `get` **mana**(): `number`

#### Returns

`number`

___

### maxHits

• `get` **maxHits**(): `number`

#### Returns

`number`

#### Inherited from

Entity.maxHits

___

### maxMana

• `get` **maxMana**(): `number`

#### Returns

`number`

___

### maxStamina

• `get` **maxStamina**(): `number`

#### Returns

`number`

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

Entity.name

___

### notoriety

• `get` **notoriety**(): `number`

#### Returns

`number`

___

### stamina

• `get` **stamina**(): `number`

#### Returns

`number`

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

Entity.x

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

Entity.y

___

### z

• `get` **z**(): `number`

#### Returns

`number`

#### Inherited from

Entity.z

## Methods

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_tag` | `string` |
| `serial` | `number` |

#### Inherited from

[Entity](../Entity).[serialize](../Entity#serialize)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_tag` | `string` |
| `serial` | `number` |

#### Inherited from

[Entity](../Entity).[toJSON](../Entity#toJSON)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Entity](../Entity).[toString](../Entity#toString)
