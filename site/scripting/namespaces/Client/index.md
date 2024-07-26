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
<a id="sysmsg" name="sysmsg"></a>

##### sysMsg()

```ts
(message: string, hue?: number): void
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `message` | `string` |
| `hue`?    | `number` |

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

###### Parameters

| Parameter | Type                                                                                                                   |
| :-------- | :--------------------------------------------------------------------------------------------------------------------- |
| `message` | `string`                                                                                                               |
| `serial`  | `number` \| [`SerialObject`](../GameObject/index.md#serialobject) \| [`GameObject`](../GameObject/index.md#gameobject) |
| `hue`?    | `number`                                                                                                               |

</div>

---

<div class="heading-level-5">
<a id="openpaperdoll" name="openpaperdoll"></a>

##### openPaperdoll()

```ts
(serial?: number | SerialObject | GameObject): void
```

###### Parameters

| Parameter | Type                                                                                                                   |
| :-------- | :--------------------------------------------------------------------------------------------------------------------- |
| `serial`? | `number` \| [`SerialObject`](../GameObject/index.md#serialobject) \| [`GameObject`](../GameObject/index.md#gameobject) |

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

###### Parameters

| Parameter       | Type                                                                                                                             |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `serial`        | `number` \| [`SerialObject`](../GameObject/index.md#serialobject) \| [`GameObject`](../GameObject/index.md#gameobject)           |
| `hue`?          | `null` \| `number`                                                                                                               |
| `sourceSerial`? | `null` \| `number` \| [`SerialObject`](../GameObject/index.md#serialobject) \| [`GameObject`](../GameObject/index.md#gameobject) |
| `amount`?       | `null` \| `number`                                                                                                               |
| `range`?        | `null` \| `number`                                                                                                               |

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

###### Parameters

| Parameter       | Type                                                                                                                             |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `graphic`       | `number`                                                                                                                         |
| `hue`?          | `null` \| `number`                                                                                                               |
| `sourceSerial`? | `null` \| `number` \| [`SerialObject`](../GameObject/index.md#serialobject) \| [`GameObject`](../GameObject/index.md#gameobject) |
| `amount`?       | `null` \| `number`                                                                                                               |
| `range`?        | `null` \| `number`                                                                                                               |

</div>

---

<div class="heading-level-5">
<a id="finditemonlayer" name="finditemonlayer"></a>

##### findItemOnLayer()

```ts
(serial: number | SerialObject | GameObject, layer: Layers): any
```

###### Parameters

| Parameter | Type                                                                                                                   |
| :-------- | :--------------------------------------------------------------------------------------------------------------------- |
| `serial`  | `number` \| [`SerialObject`](../GameObject/index.md#serialobject) \| [`GameObject`](../GameObject/index.md#gameobject) |
| `layer`   | `Layers`                                                                                                               |

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

###### Parameters

| Parameter        | Type      |
| :--------------- | :-------- |
| `searchOpt`      | `number`  |
| `searchRangeOpt` | `number`  |
| `searchTypeOpt`  | `number`  |
| `asFriend`       | `boolean` |

</div>

---

<div class="heading-level-5">
<a id="allnames" name="allnames"></a>

##### allNames()

```ts
(): any
```

</div>

---

<div class="heading-level-5">
<a id="quitgame" name="quitgame"></a>

##### quitGame()

```ts
(): any
```

</div>

---

<div class="heading-level-5">
<a id="togglealwaysrun" name="togglealwaysrun"></a>

##### toggleAlwaysRun()

```ts
(): any
```

</div>

---

<div class="heading-level-5">
<a id="closeallgumps" name="closeallgumps"></a>

##### closeAllGumps()

```ts
(): any
```

</div>

---

<div class="heading-level-5">
<a id="closecorpses" name="closecorpses"></a>

##### closeCorpses()

```ts
(): any
```

</div>

---

<div class="heading-level-5">
<a id="closeallhealthbars" name="closeallhealthbars"></a>

##### closeAllHealthBars()

```ts
(): any
```

</div>

---

<div class="heading-level-5">
<a id="closeinactivehealthbars" name="closeinactivehealthbars"></a>

##### closeInactiveHealthBars()

```ts
(): any
```

</div>

---

<div class="heading-level-5">
<a id="zoomreset" name="zoomreset"></a>

##### zoomReset()

```ts
(): any
```

</div>

---

<div class="heading-level-5">
<a id="zoomin" name="zoomin"></a>

##### zoomIn()

```ts
(): any
```

</div>

---

<div class="heading-level-5">
<a id="zoomout" name="zoomout"></a>

##### zoomOut()

```ts
(): any
```

</div>

---

<div class="heading-level-5">
<a id="togglechatvisibility" name="togglechatvisibility"></a>

##### toggleChatVisibility()

```ts
(): any
```

</div>

---

<div class="heading-level-5">
<a id="setgrabbag" name="setgrabbag"></a>

##### setGrabBag()

```ts
(): any
```

</div>

---

<div class="heading-level-5">
<a id="togglenameoverheads" name="togglenameoverheads"></a>

##### toggleNameOverheads()

```ts
(): any
```

</div>

---

<div class="heading-level-5">
<a id="toggleauras" name="toggleauras"></a>

##### toggleAuras()

```ts
(): any
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
