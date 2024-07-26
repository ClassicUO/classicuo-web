## Classes

<div class="heading-level-3">
<a id="popupmenu" name="popupmenu"></a>

### PopupMenu

This class is for interacting with context menus (i.e. when you single click on an item or your self). `PopupMenu` is
available via the `popupMenu` variable on the global scope.

#### Example

```ts
popupMenu.request(player.serial);
popupMenu.waitUntilOpen(1000); // Wait 1 second for the menu to open
popupMenu.reply(0); // 0 is first item, second item is 1, etc.
```

#### Properties

<div class="heading-level-5">
<a id="content" name="content"></a>

##### content

```ts
content: any;
```

Get the menu content if it is open

</div>

---

<div class="heading-level-5">
<a id="exists" name="exists"></a>

##### exists

```ts
exists: boolean;
```

Checks if a popup currently exists

</div>

#### Methods

<div class="heading-level-5">
<a id="close" name="close"></a>

##### close()

```ts
close(): void
```

Closes a popup menu if it exists

</div>

---

<div class="heading-level-5">
<a id="reply" name="reply"></a>

##### reply()

```ts
reply(index: number): void
```

Replies to a popup menu. Index 0 is the first item.

###### Parameters

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `index`   | `number` |             |

</div>

---

<div class="heading-level-5">
<a id="request" name="request"></a>

##### request()

```ts
request(serial: number, waitMs?: number): undefined | boolean
```

Requests a popup menu for the given object

###### Parameters

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `serial`  | `number` |             |
| `waitMs`? | `number` |             |

###### Returns

`undefined` | `boolean`

</div>

---

<div class="heading-level-5">
<a id="waitforcontent" name="waitforcontent"></a>

##### waitForContent()

```ts
waitForContent(timeoutMs?: number): null | object
```

Wait until a popup context menu is open, and return its content or null

###### Parameters

| Parameter    | Type     | Description |
| :----------- | :------- | :---------- |
| `timeoutMs`? | `number` |             |

###### Returns

`null` | `object`

</div>

---

<div class="heading-level-5">
<a id="waituntilopen" name="waituntilopen"></a>

##### waitUntilOpen()

```ts
waitUntilOpen(timeoutMs?: number): boolean
```

Wait until a popup context menu is open

###### Parameters

| Parameter    | Type     | Description |
| :----------- | :------- | :---------- |
| `timeoutMs`? | `number` |             |

###### Returns

`boolean`

</div>
</div>
