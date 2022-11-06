---
title: "Entity"
description: "Class: Entity"
group: "classes"
url: "/scripting/classes/Entity/"
---

# Class: Entity

[classes/views](/scripting/modules).Entity

## Hierarchy

- [`GameObject`](../GameObject)

  ↳ **`Entity`**

  ↳↳ [`Mobile`](../Mobile)

  ↳↳ [`Item`](../Item)

## Constructors

### constructor

• **new Entity**()

#### Inherited from

[GameObject](../GameObject).[constructor](../GameObject#constructor)

## Properties

### serial

• `Readonly` **serial**: `number`

#### Inherited from

[GameObject](../GameObject).[serial](../GameObject#serial)

## Accessors

### direction

• `get` **direction**(): `number`

#### Returns

`number`

___

### flags

• `get` **flags**(): `number`

#### Returns

`number`

___

### graphic

• `get` **graphic**(): `number`

#### Returns

`number`

___

### hits

• `get` **hits**(): `number`

#### Returns

`number`

___

### hue

• `get` **hue**(): `number`

#### Returns

`number`

___

### maxHits

• `get` **maxHits**(): `number`

#### Returns

`number`

___

### name

• `get` **name**(): `string`

#### Returns

`string`

___

### x

• `get` **x**(): `number`

#### Returns

`number`

___

### y

• `get` **y**(): `number`

#### Returns

`number`

___

### z

• `get` **z**(): `number`

#### Returns

`number`

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

[GameObject](../GameObject).[serialize](../GameObject#serialize)

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

[GameObject](../GameObject).[toJSON](../GameObject#toJSON)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[GameObject](../GameObject).[toString](../GameObject#toString)
