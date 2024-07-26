## Classes

<div class="heading-level-3">
<a id="gump" name="gump"></a>

### Gump

This class is for interacting with Gumps that are sent to the client by the server. Server gumps have a unique serial
per shard, and can only have one open at a time.

An instance of Gump therefore interacts with any gump of that serial, and it may become "invalid" if the gump closes
externally (e.g. by the shard or the user) You should always to validate the gump is still open by using `gump.exists`
periodically.

#### Example

```ts
player.use(0x4021c7b1); // Runebook object serial
const gump = Gump.findOrWait(0x59, 1000); // Wait 1 second for the gump to appear
if (!gump) {
  exit("There's no gump open, is the runebook missing?");
}

player.say("I'm outta here!");
gump.reply(10); // Press the first rune
```

#### Extends

- [`GameObject`](../GameObject/index.md#gameobject)

#### Properties

<div class="heading-level-5">
<a id="exists-1" name="exists-1"></a>

##### exists

```ts
exists: boolean;
```

Check if the gump is still open, i.e. the server hasn't closed it or the player.

###### Example

```ts
const gump = Gump.findOrWait(0xbb1b5472, 100);
if (!gump) {
  exit("There's no gump open!");
}

// ... somewhere further down the script

if (gump.exists) {
  console.log('The gump closed, did you do it?');
}
```

</div>

---

<div class="heading-level-5">
<a id="last" name="last"></a>

##### last

```ts
static last: null | Gump;
```

Get a reference to the last Gump sent by the server. Returns `undefined` if the gump is no longer open.

###### Example

```ts
Gump.last?.close();
```

</div>

---

<div class="heading-level-5">
<a id="lastserial" name="lastserial"></a>

##### lastSerial

```ts
static lastSerial: number;
```

The server serial of the last gump sent by the server. May no longer be open, check with `exists` first.

</div>

---

<div class="heading-level-5">
<a id="lastvendorbuydata" name="lastvendorbuydata"></a>

##### lastVendorBuyData

```ts
static lastVendorBuyData: undefined | object;
```

Returns the data for the last vendor buy gump seen

###### Example

```ts
const data = Gump.lastVendorBuyData;
if (data && data.type === 'buy') {
  // Lets buy all his ingots
  const ingots = data.items.filter((i) => i.name.toLowerCase().includes('ingot'));
  client.sendBuyRequest(data.vendor, ingots);
  console.log('Bought items', ingots);
}
```

</div>

---

<div class="heading-level-5">
<a id="lastvendorselldata" name="lastvendorselldata"></a>

##### lastVendorSellData

```ts
static lastVendorSellData: undefined | object;
```

Returns the data for the last vendor buy gump seen

###### Example

```ts
player.say('vendor sell');

const data = Gump.lastVendorSellData;

if (data && data.type === 'sell') {
  // Make sure we don't try to sell on a buy gump
  // Lets sell all our Tongs
  const tongs = data.items.filter((i) => i.name.toLowerCase() === 'tongs');
  client.sendSellRequest(data.vendor, tongs);
  console.log(
    'Sold items',
    tongs.map((i) => i.name)
  );
}
```

</div>

---

<div class="heading-level-5">
<a id="serial" name="serial"></a>

##### serial

```ts
serial: number;
```

###### Inherited from

[`GameObject`](../GameObject/index.md#gameobject).[`serial`](../GameObject/index.md#serial)

</div>

#### Methods

<div class="heading-level-5">
<a id="close" name="close"></a>

##### close()

```ts
close(): void
```

Closes the gump

###### Example

```ts
if (Gump.last?.containsText('Chat')) {
  gump.last?.close();
}
```

</div>

---

<div class="heading-level-5">
<a id="closeall" name="closeall"></a>

##### closeAll()

```ts
static closeAll(): void
```

Closes all gumps that aren't the Top Bar, Buff bar, or the World view (radar) Same as the `Close Gumps` hotkey

###### Example

```ts
Gump.closeAll();
```

</div>

---

<div class="heading-level-5">
<a id="containstext" name="containstext"></a>

##### containsText()

```ts
containsText(value: string): boolean
```

Checks if the gump contains a certain string, case-insensitive.

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `value`   | `string` |

###### Returns

`boolean`

###### Example

```ts
const gump = Gump.findOrWait(0xbb1b5472, 100);
if (gump.containsText('Tailoring')) {
  player.say('I hate tailors');
  gump.close();
}
```

</div>

---

<div class="heading-level-5">
<a id="exists" name="exists"></a>

##### exists()

```ts
static exists(serial: number): boolean
```

Checks if a gump with the provided server serial is open without making a new instance of `Gump`

###### Parameters

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `serial`  | `number` |             |

###### Returns

`boolean`

###### Example

```ts
if (Gump.exists(0xbb1b5472)) {
  player.say('My lovely lady gumps, check it out');
}
```

</div>

---

<div class="heading-level-5">
<a id="findorwait" name="findorwait"></a>

##### findOrWait()

```ts
static findOrWait(serialOrText: string | number, timeoutMs?: number): undefined | Gump
```

Find a gump by its serial or containing certain text, or wait for it to appear

###### Parameters

| Parameter      | Type                 | Description |
| :------------- | :------------------- | :---------- |
| `serialOrText` | `string` \| `number` |             |
| `timeoutMs`?   | `number`             |             |

###### Returns

`undefined` | [`Gump`](index.md#gump)

###### Examples

```ts
const gump = Gump.findOrWait(0xbb1b5472, 100); // Wait 100 milliseconds (5,000 if unspecified) for the gump to appear
if (gump) {
  gump.reply(1); // Gump is open, simulate pressing a button
}
```

```ts
const gump = Gump.findOrWait('Blacksmithy Selection Menu');
if (gump) {
  gump.reply(1); // Gump is open, simulate pressing a button
}
```

</div>

---

<div class="heading-level-5">
<a id="hasbutton" name="hasbutton"></a>

##### hasButton()

```ts
hasButton(id: number): boolean
```

Checks if the gump has the button id. Useful if you want to prevent clicking a button that doesn't exist.

###### Parameters

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `id`      | `number` |             |

###### Returns

`boolean`

###### Example

```ts
const gump = Gump.findOrWait(0x59);
if (gump && gump.hasButton(10)) {
  gump.reply(10); // gump is open and has a button with id 10
}
```

</div>

---

<div class="heading-level-5">
<a id="horizontalmenuselect" name="horizontalmenuselect"></a>

##### horizontalMenuSelect()

```ts
horizontalMenuSelect(graphic: number, hue?: number): void
```

Select an item in the old-school T2A horizontal menu gump.

###### Parameters

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `graphic` | `number` |             |
| `hue`?    | `number` |             |

###### Example

```ts
const gump = Gump.findOrWait(0x59);
if (gump) {
  console.log('Gump exists.');
  gump.horizontalMenuSelect(gump);
}
```

</div>

---

<div class="heading-level-5">
<a id="reply" name="reply"></a>

##### reply()

```ts
reply(buttonID: number): void
```

Replies to a gump by "pressing" one of the buttons

###### Parameters

| Parameter  | Type     |
| :--------- | :------- |
| `buttonID` | `number` |

###### Example

```ts
const gump = Gump.findOrWait(0xbb1b5472, 100);
if (gump?.containsText('Alchemy')) {
  // If there's a gump open with that serial, check if it has `Alchemy` in it.
  gump.reply(1); // Craft something
}
```

</div>

---

<div class="heading-level-5">
<a id="setcheckbox" name="setcheckbox"></a>

##### setCheckbox()

```ts
setCheckbox(serial: number, value: boolean): void
```

Check or uncheck a checkbox/radio button

###### Parameters

| Parameter | Type      | Description |
| :-------- | :-------- | :---------- |
| `serial`  | `number`  |             |
| `value`   | `boolean` |             |

###### Example

```ts
const gump = Gump.findOrWait(0x59);
gump?.gumpSetCheckbox(serial, true); // if the gump is open, check the checkbox/radio control
gump?.reply(1); // Press a button to reply
```

</div>

---

<div class="heading-level-5">
<a id="settextentry" name="settextentry"></a>

##### setTextEntry()

```ts
setTextEntry(localSerial: number, value: string): void
```

Set the contents of a text entry in a gump

###### Parameters

| Parameter     | Type     | Description |
| :------------ | :------- | :---------- |
| `localSerial` | `number` |             |
| `value`       | `string` |             |

###### Example

```ts
const gump = Gump.findOrWait(0x59);
gump?.setTextEntry(0x01, 'Hello there'); // if the gump is open, set the text entries content
gump?.reply(1); // Press a button to reply
```

</div>

---

<div class="heading-level-5">
<a id="switchpage" name="switchpage"></a>

##### switchPage()

```ts
switchPage(page: number): void
```

Attempts to switch the page if possible.

###### Parameters

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `page`    | `number` |             |

###### Example

```ts
const gump = Gump.findOrWait(0x59);
gump?.switchPage(2); // if gump is open, try changing to page 2
```

</div>

---

<div class="heading-level-5">
<a id="waitforvendorgumpdata" name="waitforvendorgumpdata"></a>

##### waitForVendorGumpData()

```ts
static waitForVendorGumpData(timeoutMs?: number): undefined | object
```

Waits for a vendor buy or sell gump to appear and returns the data. Or if no gump appears it will time out returning
`undefined`

###### Parameters

| Parameter    | Type     |
| :----------- | :------- |
| `timeoutMs`? | `number` |

###### Returns

`undefined` | `object`

###### Example

```ts
// Caution! This sells everything!
player.say('vendor sell');
const data = Gump.waitForVendorGumpData();

if (data && data.type === 'sell') {
  // Check the gump is a sell
  client.sendSellRequest(data.vendor, data.items); // Sell ALL the items the vendor will take
  console.log(
    'Sold items',
    data.items.map((i) => i.name)
  ); // Print what we sold
}
```

</div>
</div>
