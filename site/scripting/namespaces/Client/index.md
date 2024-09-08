## Classes

<div class="heading-level-3">
<a id="client" name="client"></a>

### Client

#### Methods

<div class="heading-level-5">
<a id="togglecircleoftransparency" name="togglecircleoftransparency"></a>

##### toggleCircleOfTransparency()

```ts
toggleCircleOfTransparency(): void
```

Toggles the Circle of Transparency between states

###### Example

```ts
client.toggleCircleOfTransparency();
```

</div>

---

<div class="heading-level-5">
<a id="getping" name="getping"></a>

##### getPing()

```ts
(): number
```

Gets the current ping to the server (as seen in the Connection gump)

###### Returns

`number`

number

</div>

---

<div class="heading-level-5">
<a id="sysmsg" name="sysmsg"></a>

##### sysMsg()

```ts
(message: string, hue?: number): void
```

Display a message in the text chat.

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `message` | `string` |
| `hue`?    | `number` |

###### Example

```ts
client.headMsg('A chat in Red', 33);
client.headMsg('A chat in Green', 66);
```

</div>

---

<div class="heading-level-5">
<a id="headmsg" name="headmsg"></a>

##### headMsg()

```ts
(
   message: string,
   serial: number | SerialObject | GameObject,
   hue?: number): void
```

Display a message overhead of the target entity.

###### Parameters

| Parameter | Type                                                                                                                   |
| :-------- | :--------------------------------------------------------------------------------------------------------------------- |
| `message` | `string`                                                                                                               |
| `serial`  | `number` \| [`SerialObject`](../GameObject/index.md#serialobject) \| [`GameObject`](../GameObject/index.md#gameobject) |
| `hue`?    | `number`                                                                                                               |

###### Example

```ts
client.headMsg('A message in Red', player, 33);
client.headMsg('A message in Green', player, 66);
```

</div>

---

<div class="heading-level-5">
<a id="openpaperdoll" name="openpaperdoll"></a>

##### openPaperdoll()

```ts
(serial?: number | SerialObject | GameObject): void
```

Open the paperdoll for a Mobile.

###### Parameters

| Parameter | Type                                                                                                                   |
| :-------- | :--------------------------------------------------------------------------------------------------------------------- |
| `serial`? | `number` \| [`SerialObject`](../GameObject/index.md#serialobject) \| [`GameObject`](../GameObject/index.md#gameobject) |

###### Example

```ts
const nearestHuman = client.selectEntity(
  SearchEntityOptions.Any,
  SearchEntityRangeOptions.Nearest,
  SearchEntityTypeOptions.Human,
  false
);

client.openPaperdoll(nearestHuman);
```

</div>

---

<div class="heading-level-5">
<a id="findobject" name="findobject"></a>

##### findObject()

```ts
(
   serial: number | SerialObject | GameObject,
   hue?: null | number,
   sourceSerial?: null | number | SerialObject | GameObject,
   amount?: null | number,
   range?: null | number): any
```

Attempts to check whether a certain object can be found in the game.

###### Parameters

| Parameter       | Type                                                                                                                             |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `serial`        | `number` \| [`SerialObject`](../GameObject/index.md#serialobject) \| [`GameObject`](../GameObject/index.md#gameobject)           |
| `hue`?          | `null` \| `number`                                                                                                               |
| `sourceSerial`? | `null` \| `number` \| [`SerialObject`](../GameObject/index.md#serialobject) \| [`GameObject`](../GameObject/index.md#gameobject) |
| `amount`?       | `null` \| `number`                                                                                                               |
| `range`?        | `null` \| `number`                                                                                                               |

###### Example

```ts
const runebookSerial = 0x401c37fb;
const runebook = client.findObject(runebookSerial);

if (runebook) {
  player.use(runebook);
} else {
  client.headMsg('Runbook missing!', player.serial);
}
```

</div>

---

<div class="heading-level-5">
<a id="findtype" name="findtype"></a>

##### findType()

```ts
(
   graphic: number,
   hue?: null | number,
   sourceSerial?: null | number | SerialObject | GameObject,
   amount?: null | number,
   range?: null | number): any
```

Attempts to find an object in the world with the specified search parameters, returning it if found.

###### Parameters

| Parameter       | Type                                                                                                                             |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `graphic`       | `number`                                                                                                                         |
| `hue`?          | `null` \| `number`                                                                                                               |
| `sourceSerial`? | `null` \| `number` \| [`SerialObject`](../GameObject/index.md#serialobject) \| [`GameObject`](../GameObject/index.md#gameobject) |
| `amount`?       | `null` \| `number`                                                                                                               |
| `range`?        | `null` \| `number`                                                                                                               |

###### Example

```ts
const bandageType = 0xe21;
const bandages = client.findType(bandageType);

if (bandages) {
  player.use(bandages);
  target.waitTargetSelf();
} else {
  client.headMsg('Out of bandages', player.serial);
}
```

</div>

---

<div class="heading-level-5">
<a id="findalloftype" name="findalloftype"></a>

##### findAllOfType()

```ts
(
   graphic: number,
   hue?: null | number,
   sourceSerial?: null | number | SerialObject | GameObject,
   amount?: null | number,
   range?: null | number): any[]
```

Attempts to find all objects of a certain type (graphic), returning the matching Items/Mobiles.

###### Parameters

| Parameter       | Type                                                                                                                             |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `graphic`       | `number`                                                                                                                         |
| `hue`?          | `null` \| `number`                                                                                                               |
| `sourceSerial`? | `null` \| `number` \| [`SerialObject`](../GameObject/index.md#serialobject) \| [`GameObject`](../GameObject/index.md#gameobject) |
| `amount`?       | `null` \| `number`                                                                                                               |
| `range`?        | `null` \| `number`                                                                                                               |

###### Returns

`any`\[]

###### Example

```ts
const goldPile = 0xeed;
const piles = client.findAllOfType(goldPile, undefined, Constant.WorldSerial);

if (piles.length > 0) {
  client.headMsg(`Found ${piles.length} gold piles on the ground`, player);
} else {
  client.headMsg('No gold piles in range', player);
}
```

</div>

---

<div class="heading-level-5">
<a id="findallitemsoftype" name="findallitemsoftype"></a>

##### findAllItemsOfType()

```ts
(
   graphic: number,
   hue?: null | number,
   sourceSerial?: null | number | SerialObject | GameObject,
   amount?: null | number,
   range?: null | number): Item[]
```

Attempts to find all **Items** of a certain type (graphic).

###### Parameters

| Parameter       | Type                                                                                                                             |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `graphic`       | `number`                                                                                                                         |
| `hue`?          | `null` \| `number`                                                                                                               |
| `sourceSerial`? | `null` \| `number` \| [`SerialObject`](../GameObject/index.md#serialobject) \| [`GameObject`](../GameObject/index.md#gameobject) |
| `amount`?       | `null` \| `number`                                                                                                               |
| `range`?        | `null` \| `number`                                                                                                               |

###### Returns

`Item`\[]

###### Example

```ts
const goldPile = 0xeed;
const piles = client.findAllItemsOfType(goldPile, undefined, Constant.WorldSerial);

if (piles.length > 0) {
  const total = piles.reduce((sum, item) => sum + item.amount, 0);
  client.headMsg(`Found ${piles.length} piles, ${total} gold`, player);
} else {
  client.headMsg('No gold piles in range', player);
}
```

</div>

---

<div class="heading-level-5">
<a id="findallmobilesoftype" name="findallmobilesoftype"></a>

##### findAllMobilesOfType()

```ts
(
   graphic: number,
   hue?: null | number,
   sourceSerial?: null | number | SerialObject | GameObject,
   amount?: null | number,
   range?: null | number): Mobile[]
```

Attempts to find all **Mobiles** of a certain type (graphic).

###### Parameters

| Parameter       | Type                                                                                                                             |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `graphic`       | `number`                                                                                                                         |
| `hue`?          | `null` \| `number`                                                                                                               |
| `sourceSerial`? | `null` \| `number` \| [`SerialObject`](../GameObject/index.md#serialobject) \| [`GameObject`](../GameObject/index.md#gameobject) |
| `amount`?       | `null` \| `number`                                                                                                               |
| `range`?        | `null` \| `number`                                                                                                               |

###### Returns

`Mobile`\[]

###### Example

```ts
const sheepGraphic = 0xcf;
const sheep = client.findAllMobilesOfType(sheepGraphic);

if (sheep.length > 0) {
  client.headMsg(`I count ${sheep.length} sheep`, player);
} else {
  client.headMsg('No sheep here!', player);
}
```

</div>

---

<div class="heading-level-5">
<a id="finditemonlayer" name="finditemonlayer"></a>

##### findItemOnLayer()

```ts
(serial: number | SerialObject | GameObject, layer: Layers): any
```

Attempts to find the object at the specified layer, if it exists.

###### Parameters

| Parameter | Type                                                                                                                   |
| :-------- | :--------------------------------------------------------------------------------------------------------------------- |
| `serial`  | `number` \| [`SerialObject`](../GameObject/index.md#serialobject) \| [`GameObject`](../GameObject/index.md#gameobject) |
| `layer`   | `Layers`                                                                                                               |

###### Example

```ts
const helm = client.findItemOnLayer(player.serial, Layers.Helmet);

if (helm) {
  client.headMsg(`Removing helm`, player);
  player.moveItem(helm, player.backpack);
} else {
  client.headMsg('Not wearing a helm', player.serial);
}
```

</div>

---

<div class="heading-level-5">
<a id="selectentity" name="selectentity"></a>

##### selectEntity()

```ts
(
   searchOpt: number,
   searchRangeOpt: number,
   searchTypeOpt: number,
   asFriend: boolean): any
```

Returns the entity based on the search criteria

###### Parameters

| Parameter        | Type      |
| :--------------- | :-------- |
| `searchOpt`      | `number`  |
| `searchRangeOpt` | `number`  |
| `searchTypeOpt`  | `number`  |
| `asFriend`       | `boolean` |

###### Examples

```ts
client.selectEntity(
  SearchEntityOptions.Enemy | SearchEntityOptions.Gray,
  SearchEntityRangeOptions.Nearest,
  SearchEntityTypeOptions.Any,
  false
);
```

```ts
client.selectEntity(
  SearchEntityOptions.Innocent,
  SearchEntityRangeOptions.Nearest,
  SearchEntityTypeOptions.Human,
  false
);
```

</div>

---

<div class="heading-level-5">
<a id="allnames" name="allnames"></a>

##### allNames()

```ts
(): any
```

Triggers the `All Names` macro which shows name overheads for all entities on-screen.

###### Example

```ts
client.allNames();
```

</div>

---

<div class="heading-level-5">
<a id="quitgame" name="quitgame"></a>

##### quitGame()

```ts
(): any
```

Triggers the `Quit Game` dialogue

###### Example

```ts
client.quitGame();
```

</div>

---

<div class="heading-level-5">
<a id="togglealwaysrun" name="togglealwaysrun"></a>

##### toggleAlwaysRun()

```ts
(): any
```

Toggles whether the player always runs despite the mouse distance from the player mobile.

###### Example

```ts
client.toggleAlwaysRun();
```

</div>

---

<div class="heading-level-5">
<a id="closeallgumps" name="closeallgumps"></a>

##### closeAllGumps()

```ts
(): any
```

Closes all gumps that aren't the Top Bar, Buff bar, or the World view (radar)

###### Example

```ts
client.closeAllGumps();
```

</div>

---

<div class="heading-level-5">
<a id="closecorpses" name="closecorpses"></a>

##### closeCorpses()

```ts
(): any
```

Closes all corpses on-screen

###### Example

```ts
client.closeCorpses();
```

</div>

---

<div class="heading-level-5">
<a id="closeallhealthbars" name="closeallhealthbars"></a>

##### closeAllHealthBars()

```ts
(): any
```

Closes all healthbars on-screen

###### Example

```ts
client.closeAllHealthBars();
```

</div>

---

<div class="heading-level-5">
<a id="closeinactivehealthbars" name="closeinactivehealthbars"></a>

##### closeInactiveHealthBars()

```ts
(): any
```

Closes all inactive healthbars (i.e. dead or off-screen entities).

###### Example

```ts
client.closeInactiveHealthBars();
```

</div>

---

<div class="heading-level-5">
<a id="zoomreset" name="zoomreset"></a>

##### zoomReset()

```ts
(): any
```

Reset the viewport zoom back to default (1.1)

###### Example

```ts
client.zoomReset();
```

</div>

---

<div class="heading-level-5">
<a id="zoomin" name="zoomin"></a>

##### zoomIn()

```ts
(): any
```

Zooms in the viewport

###### Example

```ts
client.zoomIn();
```

</div>

---

<div class="heading-level-5">
<a id="zoomout" name="zoomout"></a>

##### zoomOut()

```ts
(): any
```

Zooms out the viewport

###### Example

```ts
client.zoomIn();
```

</div>

---

<div class="heading-level-5">
<a id="togglechatvisibility" name="togglechatvisibility"></a>

##### toggleChatVisibility()

```ts
(): any
```

Toggles the chat visibility, e.g. the bar at the bottom of the game viewport

###### Example

```ts
client.zoomIn();
```

</div>

---

<div class="heading-level-5">
<a id="setgrabbag" name="setgrabbag"></a>

##### setGrabBag()

```ts
(): any
```

Sets the grab bag used by Grid Loot

###### Example

```ts
client.zoomIn();
```

</div>

---

<div class="heading-level-5">
<a id="togglenameoverheads" name="togglenameoverheads"></a>

##### toggleNameOverheads()

```ts
(): any
```

Toggles whether entities have name plates

###### Example

```ts
client.toggleNameOverheads();
```

</div>

---

<div class="heading-level-5">
<a id="toggleauras" name="toggleauras"></a>

##### toggleAuras()

```ts
(): any
```

Toggles whether mobiles have auras underneath them

###### Example

```ts
client.toggleAuras();
```

</div>

---

<div class="heading-level-5">
<a id="getstatic" name="getstatic"></a>

##### getStatic()

```ts
(graphic: number): undefined | object
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `graphic` | `number` |

###### Returns

`undefined` | `object`

</div>

---

<div class="heading-level-5">
<a id="gettile" name="gettile"></a>

##### getTile()

```ts
(graphic: number): undefined | object
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `graphic` | `number` |

###### Returns

`undefined` | `object`

</div>

---

<div class="heading-level-5">
<a id="getterrainlist" name="getterrainlist"></a>

##### getTerrainList()

```ts
(x: number, y: number): undefined | object[]
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `x`       | `number` |
| `y`       | `number` |

###### Returns

`undefined` | `object`\[]

</div>

---

<div class="heading-level-5">
<a id="sendbuyrequest" name="sendbuyrequest"></a>

##### sendBuyRequest()

```ts
(vendorSerial: any, items: object[]): boolean
```

###### Parameters

| Parameter      | Type        |
| :------------- | :---------- |
| `vendorSerial` | `any`       |
| `items`        | `object`\[] |

###### Returns

`boolean`

</div>

---

<div class="heading-level-5">
<a id="sendsellrequest" name="sendsellrequest"></a>

##### sendSellRequest()

```ts
(vendorSerial: any, items: object[]): boolean
```

###### Parameters

| Parameter      | Type        |
| :------------- | :---------- |
| `vendorSerial` | `any`       |
| `items`        | `object`\[] |

###### Returns

`boolean`

</div>

---

<div class="heading-level-5">
<a id="queryitemopl" name="queryitemopl"></a>

##### queryItemOPL()

```ts
(serialOrObject: number | SerialObject | GameObject, timeout?: number): object
```

###### Parameters

| Parameter        | Type                                                                                                                   |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `serialOrObject` | `number` \| [`SerialObject`](../GameObject/index.md#serialobject) \| [`GameObject`](../GameObject/index.md#gameobject) |
| `timeout`?       | `number`                                                                                                               |

###### Returns

`object`

| Member       | Type                  |
| :----------- | :-------------------- |
| `amount`     | `number`              |
| `data`       | `null` \| `string`    |
| `graphic`    | `number`              |
| `hue`        | `number`              |
| `name`       | `string`              |
| `properties` | `null` \| `object`\[] |
| `serial`     | `number`              |

</div>

---

<div class="heading-level-5">
<a id="queryitemsingleclickname" name="queryitemsingleclickname"></a>

##### queryItemSingleClickName()

```ts
(serialOrObject: number | SerialObject | GameObject, timeout?: number): string
```

###### Parameters

| Parameter        | Type                                                                                                                   |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `serialOrObject` | `number` \| [`SerialObject`](../GameObject/index.md#serialobject) \| [`GameObject`](../GameObject/index.md#gameobject) |
| `timeout`?       | `number`                                                                                                               |

###### Returns

`string`

</div>
</div>
