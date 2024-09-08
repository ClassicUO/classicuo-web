## Classes

<div class="heading-level-3">
<a id="ignorelist" name="ignorelist"></a>

### IgnoreList

The `IgnoreList` class manages a list of ignored entities within the ClassicUO web client. Use this class to ignore
certain entities (Items/Mobiles) from various search functions like `searchEntity` or `findType`

#### Example

```ts
let entity: Item | Mobile;
while ((entity = client.findType(0xeed))) {
  console.log(`Found item: ${entity.serial}`);
  ignoreList.add(entity); // Add it to the ignoreList so it won't get picked next
}

ignoreList.clear(); // Clear the list when we're done, this is cross-script
```

#### Properties

<div class="heading-level-5">
<a id="values" name="values"></a>

##### values

```ts
values: number[];
```

</div>

#### Methods

<div class="heading-level-5">
<a id="add" name="add"></a>

##### add()

```ts
add(serial: SerialOrEntity): boolean
```

Adds an item to the ignore list, causing functions like `findType` to ignore them.

###### Parameters

| Parameter | Type                                                      | Description |
| :-------- | :-------------------------------------------------------- | :---------- |
| `serial`  | [`SerialOrEntity`](../GameObject/index.md#serialorentity) |             |

###### Returns

`boolean`

`true` if the value was added, `false` if it already exists

</div>

---

<div class="heading-level-5">
<a id="clear" name="clear"></a>

##### clear()

```ts
clear(): void
```

Clears the list

</div>

---

<div class="heading-level-5">
<a id="contains" name="contains"></a>

##### contains()

```ts
contains(serial: SerialOrEntity): boolean
```

Whether the entity exists in the ignore list.

###### Parameters

| Parameter | Type                                                      | Description |
| :-------- | :-------------------------------------------------------- | :---------- |
| `serial`  | [`SerialOrEntity`](../GameObject/index.md#serialorentity) |             |

###### Returns

`boolean`

`true` if in the list or `false`

</div>

---

<div class="heading-level-5">
<a id="remove" name="remove"></a>

##### remove()

```ts
remove(serial: SerialOrEntity): boolean
```

Removes an item from ignore list, allowing them to be found again.

###### Parameters

| Parameter | Type                                                      | Description |
| :-------- | :-------------------------------------------------------- | :---------- |
| `serial`  | [`SerialOrEntity`](../GameObject/index.md#serialorentity) |             |

###### Returns

`boolean`

`true` if the value was removed, `false` if it didn't exist

</div>

---

<div class="heading-level-5">
<a id="replace" name="replace"></a>

##### replace()

```ts
replace(values: number[]): void
```

Replaces the current list with a new one

###### Parameters

| Parameter | Type        | Description |
| :-------- | :---------- | :---------- |
| `values`  | `number`\[] |             |

</div>
</div>
