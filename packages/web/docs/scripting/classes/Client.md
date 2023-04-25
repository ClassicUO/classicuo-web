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

• **sysMsg**: (`message`: `string`, `hue?`: `number`) => `void`

#### Type declaration

▸ (`message`, `hue?`): `void`

Display a message in the text chat.

**`Example`**

Say a message in red/green over the players head.
```ts
client.headMsg('A chat in Red', 33);
client.headMsg('A chat in Green', 66);
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `hue?` | `number` |

##### Returns

`void`

___

### headMsg

• **headMsg**: (`message`: `string`, `serial`: `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject), `hue?`: `number`) => `void`

#### Type declaration

▸ (`message`, `serial`, `hue?`): `void`

Display a message overhead of the target entity.

**`Example`**

Say a message in red/green over the players head.
```ts
client.headMsg('A message in Red', player, 33);
client.headMsg('A message in Green', player, 66);
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `serial` | `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject) |
| `hue?` | `number` |

##### Returns

`void`

___

### openPaperdoll

• **openPaperdoll**: (`serial?`: `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject)) => `void`

#### Type declaration

▸ (`serial?`): `void`

Open the paperdoll for a Mobile.

**`Example`**

```ts
const nearestHuman = client.selectEntity(
 SearchEntityOptions.Any,
 SearchEntityRangeOptions.Nearest,
 SearchEntityTypeOptions.Human,
 false
);

client.openPaperdoll(nearestHuman);
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial?` | `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject) |

##### Returns

`void`

___

### findObject

• **findObject**: (`serial`: `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject), `hue?`: ``null`` \| `number`, `sourceSerial?`: ``null`` \| `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject), `amount?`: ``null`` \| `number`, `range?`: ``null`` \| `number`) => `undefined` \| [`Item`](../Item) \| [`Mobile`](../Mobile)

#### Type declaration

▸ (`serial`, `hue?`, `sourceSerial?`, `amount?`, `range?`): `undefined` \| [`Item`](../Item) \| [`Mobile`](../Mobile)

Attempts to check whether a certain object can be found in the game.

**`Example`**

```ts
const runebookSerial = 0x401C37FB;
const runebook = client.findObject(runebookSerial);

if(runebook) {
  player.use(runebook);
} else {
  client.headMsg("Runbook missing!", player.serial);
}
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject) |
| `hue?` | ``null`` \| `number` |
| `sourceSerial?` | ``null`` \| `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject) |
| `amount?` | ``null`` \| `number` |
| `range?` | ``null`` \| `number` |

##### Returns

`undefined` \| [`Item`](../Item) \| [`Mobile`](../Mobile)

___

### findType

• **findType**: (`graphic`: `number`, `hue?`: ``null`` \| `number`, `sourceSerial?`: ``null`` \| `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject), `amount?`: ``null`` \| `number`, `range?`: ``null`` \| `number`) => `undefined` \| [`Item`](../Item) \| [`Mobile`](../Mobile)

#### Type declaration

▸ (`graphic`, `hue?`, `sourceSerial?`, `amount?`, `range?`): `undefined` \| [`Item`](../Item) \| [`Mobile`](../Mobile)

Attempts to find an object in the world with the specified search parameters, returning it if found.

**`Example`**

```ts
const bandageType = 0xE21;
const bandages = client.findType(bandageType);

if(bandages) {
  player.use(bandages);
  target.waitTargetSelf();
} else {
  client.headMsg("Out of bandages", player.serial);
}
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | `number` |
| `hue?` | ``null`` \| `number` |
| `sourceSerial?` | ``null`` \| `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject) |
| `amount?` | ``null`` \| `number` |
| `range?` | ``null`` \| `number` |

##### Returns

`undefined` \| [`Item`](../Item) \| [`Mobile`](../Mobile)

___

### findItemOnLayer

• **findItemOnLayer**: (`serial`: `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject), `layer`: [`Layers`](../Layers)) => `undefined` \| [`Item`](../Item)

#### Type declaration

▸ (`serial`, `layer`): `undefined` \| [`Item`](../Item)

Attempts to find the object at the specified layer, if it exists.

**`Example`**

Try to remove the currently equipped helmet.
```ts
const helm = client.findItemOnLayer(player.serial, Layers.Helmet);

if (helm) {
  client.headMsg(`Removing helm`, player);
  player.moveItem(helm, player.backpack);
} else {
  client.headMsg("Not wearing a helm", player.serial);
}
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject) |
| `layer` | [`Layers`](../Layers) |

##### Returns

`undefined` \| [`Item`](../Item)

___

### selectEntity

• **selectEntity**: (`searchOpt`: `number`, `searchRangeOpt`: [`SearchEntityRangeOptions`](../SearchEntityRangeOptions), `searchTypeOpt`: [`SearchEntityTypeOptions`](../SearchEntityTypeOptions), `asFriend`: `boolean`) => `undefined` \| [`Mobile`](../Mobile)

#### Type declaration

▸ (`searchOpt`, `searchRangeOpt`, `searchTypeOpt`, `asFriend`): `undefined` \| [`Mobile`](../Mobile)

Returns the entity based on the search criteria

**`Example`**

Select nearest `Gray` or `Enemy` entity, with `Any` body type, and not as a friend
```ts
 client.selectEntity(
   SearchEntityOptions.Enemy | SearchEntityOptions.Gray,
   SearchEntityRangeOptions.Nearest,
   SearchEntityTypeOptions.Any,
   false
 )
```

**`Example`**

Select nearest `Innocent`  entity, with `Any` body type, and not as a friend
```ts
 client.selectEntity(
   SearchEntityOptions.Innocent,
   SearchEntityRangeOptions.Nearest,
   SearchEntityTypeOptions.Human,
   false
 )
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `searchOpt` | `number` |
| `searchRangeOpt` | [`SearchEntityRangeOptions`](../SearchEntityRangeOptions) |
| `searchTypeOpt` | [`SearchEntityTypeOptions`](../SearchEntityTypeOptions) |
| `asFriend` | `boolean` |

##### Returns

`undefined` \| [`Mobile`](../Mobile)

___

### allNames

• **allNames**: () => `any`

#### Type declaration

▸ (): `any`

Triggers the `All Names` macro which shows name overheads for all entities on-screen.

**`Example`**

```ts
client.allNames();
```

##### Returns

`any`

___

### quitGame

• **quitGame**: () => `any`

#### Type declaration

▸ (): `any`

Triggers the `Quit Game` dialogue

**`Example`**

```ts
client.quitGame();
```

##### Returns

`any`

___

### toggleAlwaysRun

• **toggleAlwaysRun**: () => `any`

#### Type declaration

▸ (): `any`

Toggles whether the player always runs despite the mouse distance from the player mobile.

**`Example`**

```ts
client.toggleAlwaysRun();
```

##### Returns

`any`

___

### closeAllGumps

• **closeAllGumps**: () => `any`

#### Type declaration

▸ (): `any`

Closes all gumps that aren't the Top Bar, Buff bar, or the World view (radar)

**`Example`**

```ts
client.closeAllGumps();
```

##### Returns

`any`

___

### closeCorpses

• **closeCorpses**: () => `any`

#### Type declaration

▸ (): `any`

Closes all corpses on-screen

**`Example`**

```ts
client.closeCorpses();
```

##### Returns

`any`

___

### closeAllHealthBars

• **closeAllHealthBars**: () => `any`

#### Type declaration

▸ (): `any`

Closes all healthbars on-screen

**`Example`**

```ts
client.closeAllHealthBars();
```

##### Returns

`any`

___

### closeInactiveHealthBars

• **closeInactiveHealthBars**: () => `any`

#### Type declaration

▸ (): `any`

Closes all inactive healthbars (i.e. dead or off-screen entities).

**`Example`**

```ts
client.closeInactiveHealthBars();
```

##### Returns

`any`

___

### zoomReset

• **zoomReset**: () => `any`

#### Type declaration

▸ (): `any`

Reset the viewport zoom back to default (1.1)

**`Example`**

```ts
client.zoomReset();
```

##### Returns

`any`

___

### zoomIn

• **zoomIn**: () => `any`

#### Type declaration

▸ (): `any`

Zooms in the viewport

**`Example`**

```ts
client.zoomIn();
```

##### Returns

`any`

___

### zoomOut

• **zoomOut**: () => `any`

#### Type declaration

▸ (): `any`

Zooms out the viewport

**`Example`**

```ts
client.zoomIn();
```

##### Returns

`any`

___

### toggleChatVisibility

• **toggleChatVisibility**: () => `any`

#### Type declaration

▸ (): `any`

Toggles the chat visibility, e.g. the bar at the bottom of the game viewport

**`Example`**

```ts
client.zoomIn();
```

##### Returns

`any`

___

### setGrabBag

• **setGrabBag**: () => `any`

#### Type declaration

▸ (): `any`

Sets the grab bag used by Grid Loot

**`Example`**

```ts
client.zoomIn();
```

##### Returns

`any`

___

### toggleNameOverheads

• **toggleNameOverheads**: () => `any`

#### Type declaration

▸ (): `any`

Toggles whether entities have name plates

**`Example`**

```ts
client.toggleNameOverheads();
```

##### Returns

`any`

___

### toggleAuras

• **toggleAuras**: () => `any`

#### Type declaration

▸ (): `any`

Toggles whether mobiles have auras underneath them

**`Example`**

```ts
client.toggleAuras();
```

##### Returns

`any`

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

___

### getEntityOrControlAtCursor

• **getEntityOrControlAtCursor**: () => `any`

#### Type declaration

▸ (): `any`

##### Returns

`any`

___

### sendBuyRequest

• **sendBuyRequest**: (`vendorSerial`: `number`, `items`: { `serial`: `number` ; `amount`: `number`  }[]) => `boolean`

#### Type declaration

▸ (`vendorSerial`, `items`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `vendorSerial` | `number` |
| `items` | { `serial`: `number` ; `amount`: `number`  }[] |

##### Returns

`boolean`

___

### sendSellRequest

• **sendSellRequest**: (`vendorSerial`: `number`, `items`: { `serial`: `number` ; `amount`: `number`  }[]) => `boolean`

#### Type declaration

▸ (`vendorSerial`, `items`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `vendorSerial` | `number` |
| `items` | { `serial`: `number` ; `amount`: `number`  }[] |

##### Returns

`boolean`

___

### queryItemOPL

• **queryItemOPL**: (`serial`: `number`, `timeout?`: `number`) => { `serial`: `number` ; `data`: `string` ; `name`: `string` ; `graphic`: `number` ; `hue`: `number` ; `amount`: `number`  }

#### Type declaration

▸ (`serial`, `timeout?`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |
| `timeout?` | `number` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `serial` | `number` |
| `data` | `string` |
| `name` | `string` |
| `graphic` | `number` |
| `hue` | `number` |
| `amount` | `number` |
