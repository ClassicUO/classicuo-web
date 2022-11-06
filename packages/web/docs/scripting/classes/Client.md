---
title: "Client"
description: "Class: Client"
group: "classes"
url: "/scripting/classes/Client/"
---

# Class: Client

[classes/Client](/scripting/modules).Client

## Constructors

### constructor

• **new Client**()

## Properties

### attack

• `Readonly` **attack**: (`serial`: `number`) => ``null``

#### Type declaration

▸ (`serial`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |

##### Returns

``null``

___

### cancelTarget

• `Readonly` **cancelTarget**: () => ``null``

#### Type declaration

▸ (): ``null``

##### Returns

``null``

___

### castSpell

• `Readonly` **castSpell**: (`id`: [`Spells`](../Spells)) => ``null``

#### Type declaration

▸ (`id`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Spells`](../Spells) |

##### Returns

``null``

___

### castSpellTo

• `Readonly` **castSpellTo**: (`id`: [`Spells`](../Spells), `serial`: `number`, `timeout?`: `number`) => `void`

#### Type declaration

▸ (`id`, `serial`, `timeout?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Spells`](../Spells) |
| `serial` | `number` |
| `timeout?` | `number` |

##### Returns

`void`

___

### clearTargetQueue

• `Readonly` **clearTargetQueue**: () => ``null``

#### Type declaration

▸ (): ``null``

##### Returns

``null``

___

### clickObject

• `Readonly` **clickObject**: (`serial`: `number`) => ``null``

#### Type declaration

▸ (`serial`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |

##### Returns

``null``

___

### equipItem

• `Readonly` **equipItem**: (`serial`: `number`) => ``null``

#### Type declaration

▸ (`serial`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |

##### Returns

``null``

___

### findItemOnLayer

• `Readonly` **findItemOnLayer**: (`serial`: `number`, `layer`: [`Layers`](../Layers)) => `undefined` \| [`Item`](../Item)

#### Type declaration

▸ (`serial`, `layer`): `undefined` \| [`Item`](../Item)

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |
| `layer` | [`Layers`](../Layers) |

##### Returns

`undefined` \| [`Item`](../Item)

___

### findObject

• `Readonly` **findObject**: (`serial`: `number`, `hue?`: `number`, `sourceSerial?`: `number`, `amount?`: `number`, `range?`: `number`) => `undefined` \| [`Mobile`](../Mobile) \| [`Item`](../Item)

#### Type declaration

▸ (`serial`, `hue?`, `sourceSerial?`, `amount?`, `range?`): `undefined` \| [`Mobile`](../Mobile) \| [`Item`](../Item)

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |
| `hue?` | `number` |
| `sourceSerial?` | `number` |
| `amount?` | `number` |
| `range?` | `number` |

##### Returns

`undefined` \| [`Mobile`](../Mobile) \| [`Item`](../Item)

___

### findType

• `Readonly` **findType**: (`graphic`: `number`, `hue?`: `number`, `sourceSerial?`: `number`, `amount?`: `number`, `range?`: `number`) => `undefined` \| [`Mobile`](../Mobile) \| [`Item`](../Item)

#### Type declaration

▸ (`graphic`, `hue?`, `sourceSerial?`, `amount?`, `range?`): `undefined` \| [`Mobile`](../Mobile) \| [`Item`](../Item)

##### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | `number` |
| `hue?` | `number` |
| `sourceSerial?` | `number` |
| `amount?` | `number` |
| `range?` | `number` |

##### Returns

`undefined` \| [`Mobile`](../Mobile) \| [`Item`](../Item)

___

### fly

• `Readonly` **fly**: () => ``null``

#### Type declaration

▸ (): ``null``

##### Returns

``null``

___

### getLastTargetSerial

• `Readonly` **getLastTargetSerial**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

___

### gumpContainsText

• `Readonly` **gumpContainsText**: (`serial`: `number`, `text`: `string`) => `boolean`

#### Type declaration

▸ (`serial`, `text`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |
| `text` | `string` |

##### Returns

`boolean`

___

### gumpExists

• `Readonly` **gumpExists**: (`serial`: `number`) => `boolean`

#### Type declaration

▸ (`serial`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |

##### Returns

`boolean`

___

### headMsg

• `Readonly` **headMsg**: (`message`: `string`, `serial`: `number`, `hue?`: `number`) => ``null``

#### Type declaration

▸ (`message`, `serial`, `hue?`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `serial` | `number` |
| `hue?` | `number` |

##### Returns

``null``

___

### isTargeting

• `Readonly` **isTargeting**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

___

### isWaitingForTarget

• `Readonly` **isWaitingForTarget**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

___

### journalClear

• `Readonly` **journalClear**: () => ``null``

#### Type declaration

▸ (): ``null``

##### Returns

``null``

___

### journalContainsText

• `Readonly` **journalContainsText**: (`text`: `string`, `author?`: ``null`` \| `string`) => `boolean`

#### Type declaration

▸ (`text`, `author?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `author?` | ``null`` \| `string` |

##### Returns

`boolean`

___

### journalWaitForText

• `Readonly` **journalWaitForText**: (`text`: `string`, `author?`: ``null`` \| `string`, `timeout?`: `number`) => `boolean`

#### Type declaration

▸ (`text`, `author?`, `timeout?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `author?` | ``null`` \| `string` |
| `timeout?` | `number` |

##### Returns

`boolean`

___

### land

• `Readonly` **land**: () => ``null``

#### Type declaration

▸ (): ``null``

##### Returns

``null``

___

### moveItem

• `Readonly` **moveItem**: (`serial`: `number`, `container`: `number`, `x?`: `number`, `y?`: `number`, `z?`: `number`, `amount?`: `number`) => `boolean`

#### Type declaration

▸ (`serial`, `container`, `x?`, `y?`, `z?`, `amount?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |
| `container` | `number` |
| `x?` | `number` |
| `y?` | `number` |
| `z?` | `number` |
| `amount?` | `number` |

##### Returns

`boolean`

___

### moveItemOnGroundOffset

• `Readonly` **moveItemOnGroundOffset**: (`serial`: `number`, `x?`: `number`, `y?`: `number`, `z?`: `number`, `amount?`: `number`) => `boolean`

#### Type declaration

▸ (`serial`, `x?`, `y?`, `z?`, `amount?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |
| `x?` | `number` |
| `y?` | `number` |
| `z?` | `number` |
| `amount?` | `number` |

##### Returns

`boolean`

___

### moveType

• `Readonly` **moveType**: (`graphic`: `number`, `src`: `number`, `dest`: `number`, `x?`: `number`, `y?`: `number`, `z?`: `number`, `hue?`: `number`, `amount?`: `number`, `range?`: `number`) => `boolean`

#### Type declaration

▸ (`graphic`, `src`, `dest`, `x?`, `y?`, `z?`, `hue?`, `amount?`, `range?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | `number` |
| `src` | `number` |
| `dest` | `number` |
| `x?` | `number` |
| `y?` | `number` |
| `z?` | `number` |
| `hue?` | `number` |
| `amount?` | `number` |
| `range?` | `number` |

##### Returns

`boolean`

___

### moveTypeOnGroundOffset

• `Readonly` **moveTypeOnGroundOffset**: (`graphic`: `number`, `src`: `number`, `x?`: `number`, `y?`: `number`, `z?`: `number`, `hue?`: `number`, `amount?`: `number`, `range?`: `number`) => ``null``

#### Type declaration

▸ (`graphic`, `src`, `x?`, `y?`, `z?`, `hue?`, `amount?`, `range?`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | `number` |
| `src` | `number` |
| `x?` | `number` |
| `y?` | `number` |
| `z?` | `number` |
| `hue?` | `number` |
| `amount?` | `number` |
| `range?` | `number` |

##### Returns

``null``

___

### openPaperdoll

• `Readonly` **openPaperdoll**: (`serial`: `number`) => ``null``

#### Type declaration

▸ (`serial`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |

##### Returns

``null``

___

### queryClientTarget

• `Readonly` **queryClientTarget**: (`isGround?`: `boolean`) => { `graphic`: `number` ; `serial`: `number` ; `x`: `number` ; `y`: `number` ; `z`: `number`  }

#### Type declaration

▸ (`isGround?`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `isGround?` | `boolean` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `graphic` | `number` |
| `serial` | `number` |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

___

### run

• `Readonly` **run**: (`direction`: [`Directions`](../Directions)) => `boolean`

#### Type declaration

▸ (`direction`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | [`Directions`](../Directions) |

##### Returns

`boolean`

___

### say

• `Readonly` **say**: (`message`: `string`, `hue?`: `number`) => ``null``

#### Type declaration

▸ (`message`, `hue?`): ``null``

Sends a chat message as your player, with an optional hue for the message.

Can be used to send server chat commands, e.g. **[help**

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `hue?` | `number` |

##### Returns

``null``

___

### setAbility

• `Readonly` **setAbility**: (`primary`: `boolean`, `active`: `boolean`) => ``null``

#### Type declaration

▸ (`primary`, `active`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `primary` | `boolean` |
| `active` | `boolean` |

##### Returns

``null``

___

### setSkillLock

• `Readonly` **setSkillLock**: (`skill`: [`Skills`](../Skills), `lock`: [`SkillLock`](../SkillLock)) => ``null``

#### Type declaration

▸ (`skill`, `lock`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `skill` | [`Skills`](../Skills) |
| `lock` | [`SkillLock`](../SkillLock) |

##### Returns

``null``

___

### sysMsg

• `Readonly` **sysMsg**: (`message`: `string`, `hue?`: `number`) => ``null``

#### Type declaration

▸ (`message`, `hue?`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `hue?` | `number` |

##### Returns

``null``

___

### target

• `Readonly` **target**: (`serial`: `number`) => ``null``

#### Type declaration

▸ (`serial`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |

##### Returns

``null``

___

### targetGround

• `Readonly` **targetGround**: (`graphic`: `number`, `hue?`: `number`, `range?`: `number`) => ``null``

#### Type declaration

▸ (`graphic`, `hue?`, `range?`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | `number` |
| `hue?` | `number` |
| `range?` | `number` |

##### Returns

``null``

___

### targetTile

• `Readonly` **targetTile**: (`x`: `number`, `y`: `number`, `z`: `number`, `graphic?`: `number`) => ``null``

#### Type declaration

▸ (`x`, `y`, `z`, `graphic?`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `graphic?` | `number` |

##### Returns

``null``

___

### targetTileOffset

• `Readonly` **targetTileOffset**: (`x`: `number`, `y`: `number`, `z`: `number`, `graphic?`: `number`) => ``null``

#### Type declaration

▸ (`x`, `y`, `z`, `graphic?`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `graphic?` | `number` |

##### Returns

``null``

___

### targetTileRelative

• `Readonly` **targetTileRelative**: (`serial`: `number`, `range`: `number`, `forward`: `boolean`, `graphic?`: `number`) => ``null``

#### Type declaration

▸ (`serial`, `range`, `forward`, `graphic?`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |
| `range` | `number` |
| `forward` | `boolean` |
| `graphic?` | `number` |

##### Returns

``null``

___

### targetType

• `Readonly` **targetType**: (`graphic`: `number`, `hue?`: `number`, `range?`: `number`) => ``null``

#### Type declaration

▸ (`graphic`, `hue?`, `range?`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | `number` |
| `hue?` | `number` |
| `range?` | `number` |

##### Returns

``null``

___

### testObjFunction

• `Readonly` **testObjFunction**: (`obj`: { `name?`: `string` ; `nested`: { `foo`: `boolean`  }  }) => { `foo`: `boolean` ; `name`: `string`  }

#### Type declaration

▸ (`obj`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |
| `obj.name?` | `string` |
| `obj.nested` | `Object` |
| `obj.nested.foo` | `boolean` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `foo` | `boolean` |
| `name` | `string` |

___

### useObject

• `Readonly` **useObject**: (`serial`: `number`) => ``null``

#### Type declaration

▸ (`serial`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |

##### Returns

``null``

___

### useSkill

• `Readonly` **useSkill**: (`id`: [`Skills`](../Skills)) => ``null``

#### Type declaration

▸ (`id`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Skills`](../Skills) |

##### Returns

``null``

___

### useType

• `Readonly` **useType**: (`graphic`: `number`, `hue?`: `number`, `sourceSerial?`: `number`, `range?`: `number`) => ``null``

#### Type declaration

▸ (`graphic`, `hue?`, `sourceSerial?`, `range?`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | `number` |
| `hue?` | `number` |
| `sourceSerial?` | `number` |
| `range?` | `number` |

##### Returns

``null``

___

### waitForTarget

• `Readonly` **waitForTarget**: (`timeout?`: `number`) => `boolean`

#### Type declaration

▸ (`timeout?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `timeout?` | `number` |

##### Returns

`boolean`

___

### walk

• `Readonly` **walk**: (`direction`: [`Directions`](../Directions)) => `boolean`

#### Type declaration

▸ (`direction`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | [`Directions`](../Directions) |

##### Returns

`boolean`
