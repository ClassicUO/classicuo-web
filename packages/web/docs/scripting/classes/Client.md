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

• **headMsg**: (`message`: `string`, `serial`: `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject), `hue?`: `number`) => ``null``

#### Type declaration

▸ (`message`, `serial`, `hue?`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `serial` | `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject) |
| `hue?` | `number` |

##### Returns

``null``

___

### openPaperdoll

• **openPaperdoll**: (`serial?`: `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject)) => ``null``

#### Type declaration

▸ (`serial?`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial?` | `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject) |

##### Returns

``null``

___

### findObject

• **findObject**: (`serial`: `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject), `hue?`: ``null`` \| `number`, `sourceSerial?`: ``null`` \| `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject), `amount?`: ``null`` \| `number`, `range?`: ``null`` \| `number`) => `undefined` \| [`Item`](../Item) \| [`Mobile`](../Mobile)

#### Type declaration

▸ (`serial`, `hue?`, `sourceSerial?`, `amount?`, `range?`): `undefined` \| [`Item`](../Item) \| [`Mobile`](../Mobile)

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

##### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` \| [`SerialObject`](../SerialObject) \| [`GameObject`](../GameObject) |
| `layer` | [`Layers`](../Layers) |

##### Returns

`undefined` \| [`Item`](../Item)

___

### selectEntity

• **selectEntity**: (`searchOpt`: `number`, `searchRangeOpt`: [`SearchEntityRangeOptions`](../SearchEntityRangeOptions), `searchTypeOpt`: [`SearchEntityTypeOptions`](../SearchEntityTypeOptions), `asFriend`: `boolean`) => `number`

#### Type declaration

▸ (`searchOpt`, `searchRangeOpt`, `searchTypeOpt`, `asFriend`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `searchOpt` | `number` |
| `searchRangeOpt` | [`SearchEntityRangeOptions`](../SearchEntityRangeOptions) |
| `searchTypeOpt` | [`SearchEntityTypeOptions`](../SearchEntityTypeOptions) |
| `asFriend` | `boolean` |

##### Returns

`number`

___

### allNames

• **allNames**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Triggers the `All Names` macro which shows name overheads for all entities on-screen.

**`Example`**

```ts
client.allNames();
```

##### Returns

`unknown`

___

### bow

• **bow**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Triggers the `Bow` emote

**`Example`**

```ts
client.bow();
```

##### Returns

`unknown`

___

### salute

• **salute**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Triggers the `Salute` emote

**`Example`**

```ts
client.salute();
```

##### Returns

`unknown`

___

### quitGame

• **quitGame**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Triggers the `Quit Game` dialogue

**`Example`**

```ts
client.quitGame();
```

##### Returns

`unknown`

___

### toggleAlwaysRun

• **toggleAlwaysRun**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Toggles whether the player always runs despite the mouse distance from the player mobile.

**`Example`**

```ts
client.toggleAlwaysRun();
```

##### Returns

`unknown`

___

### closeGump

• **closeGump**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Closes all gumps that aren't the Top Bar, Buff bar, or the World view (radar)

**`Example`**

```ts
client.closeGump();
```

##### Returns

`unknown`

___

### toggleGargoyleFly

• **toggleGargoyleFly**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Toggles flying, provided you are a Gargoyle.

**`Example`**

```ts
client.toggleGargoyleFly();
```

##### Returns

`unknown`

___

### closeCorpses

• **closeCorpses**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Closes all corpses on-screen

**`Example`**

```ts
client.closeCorpses();
```

##### Returns

`unknown`

___

### closeAllHealthBars

• **closeAllHealthBars**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Closes all healthbars on-screen

**`Example`**

```ts
client.closeAllHealthBars();
```

##### Returns

`unknown`

___

### closeInactiveHealthBars

• **closeInactiveHealthBars**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Closes all inactive healthbars (i.e. dead or off-screen entities).

**`Example`**

```ts
client.closeInactiveHealthBars();
```

##### Returns

`unknown`

___

### useItemInHand

• **useItemInHand**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Uses the item currently in your left-hand first, otherwise it will try the right.

**`Example`**

```ts
client.useItemInHand();
```

##### Returns

`unknown`

___

### useLastObject

• **useLastObject**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Uses the last object you double-clicked

**`Example`**

```ts
client.useLastObject();
```

##### Returns

`unknown`

___

### zoomReset

• **zoomReset**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Reset the viewport zoom back to default (1.1)

**`Example`**

```ts
client.zoomReset();
```

##### Returns

`unknown`

___

### zoomIn

• **zoomIn**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Zooms in the viewport

**`Example`**

```ts
client.zoomIn();
```

##### Returns

`unknown`

___

### zoomOut

• **zoomOut**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Zooms out the viewport

**`Example`**

```ts
client.zoomIn();
```

##### Returns

`unknown`

___

### toggleChatVisibility

• **toggleChatVisibility**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Toggles the chat visibility, e.g. the bar at the bottom of the game viewport

**`Example`**

```ts
client.zoomIn();
```

##### Returns

`unknown`

___

### setGrabBag

• **setGrabBag**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Sets the grab bag used by Grid Loot

**`Example`**

```ts
client.zoomIn();
```

##### Returns

`unknown`

___

### toggleNameOverheads

• **toggleNameOverheads**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Toggles whether entities have name plates

**`Example`**

```ts
client.toggleNameOverheads();
```

##### Returns

`unknown`

___

### toggleAuras

• **toggleAuras**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Toggles whether mobiles have auras underneath them

**`Example`**

```ts
client.toggleAuras();
```

##### Returns

`unknown`

___

### openDoor

• **openDoor**: () => `unknown`

#### Type declaration

▸ (): `unknown`

Uses any door directly in-front of where the player is facing

**`Example`**

```ts
client.toggleAuras();
```

##### Returns

`unknown`

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
