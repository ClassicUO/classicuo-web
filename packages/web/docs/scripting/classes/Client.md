---
title: "Client"
description: "Class: Client"
group: "classes"
url: "/scripting/Client/"
---

# Class: Client

[Client](/scripting/globals).Client

## Properties

### castSpell

• **castSpell**: (`id`: [`Spells`](../Spells)) => ``null``

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

• **castSpellTo**: (`id`: [`Spells`](../Spells), `serial`: `number`, `timeout?`: `number`) => `void`

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

### say

• **say**: (`message`: `string`, `hue?`: `number`) => ``null``

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

### sysMsg

• **sysMsg**: (`message`: `string`, `hue?`: `number`) => ``null``

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

### headMsg

• **headMsg**: (`message`: `string`, `serial`: `number`, `hue?`: `number`) => ``null``

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

### useSkill

• **useSkill**: (`id`: [`Skills`](../Skills)) => ``null``

#### Type declaration

▸ (`id`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Skills`](../Skills) |

##### Returns

``null``

___

### equipItem

• **equipItem**: (`serial`: `number`) => ``null``

#### Type declaration

▸ (`serial`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |

##### Returns

``null``

___

### attack

• **attack**: (`serial`: `number`) => ``null``

#### Type declaration

▸ (`serial`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |

##### Returns

``null``

___

### fly

• **fly**: () => ``null``

#### Type declaration

▸ (): ``null``

##### Returns

``null``

___

### land

• **land**: () => ``null``

#### Type declaration

▸ (): ``null``

##### Returns

``null``

___

### useObject

• **useObject**: (`serial`: `number`) => ``null``

#### Type declaration

▸ (`serial`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |

##### Returns

``null``

___

### clickObject

• **clickObject**: (`serial`: `number`) => ``null``

#### Type declaration

▸ (`serial`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |

##### Returns

``null``

___

### useType

• **useType**: (`graphic`: `number`, `hue?`: `number`, `sourceSerial?`: `number`, `range?`: `number`) => ``null``

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

### openPaperdoll

• **openPaperdoll**: (`serial`: `number`) => ``null``

#### Type declaration

▸ (`serial`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |

##### Returns

``null``

___

### findObject

• **findObject**: (`serial`: `number`, `hue?`: `number`, `sourceSerial?`: `number`, `amount?`: `number`, `range?`: `number`) => `undefined` \| [`Item`](../Item) \| [`Mobile`](../Mobile)

#### Type declaration

▸ (`serial`, `hue?`, `sourceSerial?`, `amount?`, `range?`): `undefined` \| [`Item`](../Item) \| [`Mobile`](../Mobile)

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |
| `hue?` | `number` |
| `sourceSerial?` | `number` |
| `amount?` | `number` |
| `range?` | `number` |

##### Returns

`undefined` \| [`Item`](../Item) \| [`Mobile`](../Mobile)

___

### findType

• **findType**: (`graphic`: `number`, `hue?`: `number`, `sourceSerial?`: `number`, `amount?`: `number`, `range?`: `number`) => `undefined` \| [`Item`](../Item) \| [`Mobile`](../Mobile)

#### Type declaration

▸ (`graphic`, `hue?`, `sourceSerial?`, `amount?`, `range?`): `undefined` \| [`Item`](../Item) \| [`Mobile`](../Mobile)

##### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | `number` |
| `hue?` | `number` |
| `sourceSerial?` | `number` |
| `amount?` | `number` |
| `range?` | `number` |

##### Returns

`undefined` \| [`Item`](../Item) \| [`Mobile`](../Mobile)

___

### findItemOnLayer

• **findItemOnLayer**: (`serial`: `number`, `layer`: [`Layers`](../Layers)) => `undefined` \| [`Item`](../Item)

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

### moveItem

• **moveItem**: (`serial`: `number`, `container`: `number`, `x?`: `number`, `y?`: `number`, `z?`: `number`, `amount?`: `number`) => `boolean`

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

• **moveItemOnGroundOffset**: (`serial`: `number`, `x?`: `number`, `y?`: `number`, `z?`: `number`, `amount?`: `number`) => `boolean`

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

• **moveType**: (`graphic`: `number`, `src`: `number`, `dest`: `number`, `x?`: `number`, `y?`: `number`, `z?`: `number`, `hue?`: `number`, `amount?`: `number`, `range?`: `number`) => `boolean`

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

• **moveTypeOnGroundOffset**: (`graphic`: `number`, `src`: `number`, `x?`: `number`, `y?`: `number`, `z?`: `number`, `hue?`: `number`, `amount?`: `number`, `range?`: `number`) => ``null``

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

### setAbility

• **setAbility**: (`primary`: `boolean`, `active`: `boolean`) => ``null``

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

### walk

• **walk**: (`direction`: [`Directions`](../Directions)) => `boolean`

#### Type declaration

▸ (`direction`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | [`Directions`](../Directions) |

##### Returns

`boolean`

___

### run

• **run**: (`direction`: [`Directions`](../Directions)) => `boolean`

#### Type declaration

▸ (`direction`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | [`Directions`](../Directions) |

##### Returns

`boolean`

___

### setSkillLock

• **setSkillLock**: (`skill`: [`Skills`](../Skills), `lock`: [`SkillLock`](../SkillLock)) => ``null``

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

### queryClientTarget

• **queryClientTarget**: (`isGround?`: `boolean`) => { `serial`: `number` ; `graphic`: `number` ; `x`: `number` ; `y`: `number` ; `z`: `number`  }

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
| `serial` | `number` |
| `graphic` | `number` |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

___

### getStatic

• **getStatic**: (`graphic`: `number`) => `undefined` \| { `graphic`: `number` ; `flags`: `number`  }

#### Type declaration

▸ (`graphic`): `undefined` \| { `graphic`: `number` ; `flags`: `number`  }

##### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | `number` |

##### Returns

`undefined` \| { `graphic`: `number` ; `flags`: `number`  }

___

### getTile

• **getTile**: (`graphic`: `number`) => `undefined` \| { `graphic`: `number` ; `flags`: `number`  }

#### Type declaration

▸ (`graphic`): `undefined` \| { `graphic`: `number` ; `flags`: `number`  }

##### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | `number` |

##### Returns

`undefined` \| { `graphic`: `number` ; `flags`: `number`  }

___

### getTerrainList

• **getTerrainList**: (`x`: `number`, `y`: `number`) => `undefined` \| { `graphic`: `number` ; `x`: `number` ; `y`: `number` ; `z`: `number` ; `flags`: `number` ; `isLand`: `boolean`  }[]

#### Type declaration

▸ (`x`, `y`): `undefined` \| { `graphic`: `number` ; `x`: `number` ; `y`: `number` ; `z`: `number` ; `flags`: `number` ; `isLand`: `boolean`  }[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

##### Returns

`undefined` \| { `graphic`: `number` ; `x`: `number` ; `y`: `number` ; `z`: `number` ; `flags`: `number` ; `isLand`: `boolean`  }[]
