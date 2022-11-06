---
title: "Item"
description: "Class: Item"
group: "classes"
url: "/scripting/classes/Item/"
---

# Class: Item

[classes/views](/scripting/modules).Item

## Hierarchy

- [`Entity`](../Entity)

  ↳ **`Item`**

## Constructors

### constructor

• **new Item**()

#### Inherited from

[Entity](../Entity).[constructor](../Entity#constructor)

## Properties

### serial

• `Readonly` **serial**: `number`

#### Inherited from

[Entity](../Entity).[serial](../Entity#serial)

## Accessors

### amount

• `get` **amount**(): `number`

#### Returns

`number`

___

### container

• `get` **container**(): `number`

#### Returns

`number`

___

### direction

• `get` **direction**(): `number`

#### Returns

`number`

#### Inherited from

Entity.direction

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

### layer

• `get` **layer**(): `number`

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

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

Entity.name

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
