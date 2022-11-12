---
title: "Client"
description: "Class: Client"
group: "classes"
url: "/scripting/Client/"
---

# Class: Client

[Client](/scripting/globals).Client

## Properties

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
