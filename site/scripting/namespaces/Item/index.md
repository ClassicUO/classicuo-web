## Classes

<div class="heading-level-3">
<a id="item" name="item"></a>

### Item

#### Extends

- [`Entity`](../Entity/index.md#entity)

#### Properties

<div class="heading-level-5">
<a id="amount" name="amount"></a>

##### amount

```ts
amount: number;
```

Get the item's amount

###### Example

```ts
const item = client.findObject(0x40001234);
if (item.amount > 5) {
  client.sysMsg('amount of ${item.amount}');
}
```

</div>

---

<div class="heading-level-5">
<a id="container" name="container"></a>

##### container

```ts
container: number;
```

Get the item's parent container

###### Example

```ts
const item = client.findType(axeType);
if (item.container > 0) {
  client.sysMsg('the item is into a container');
}
```

</div>

---

<div class="heading-level-5">
<a id="contents" name="contents"></a>

##### contents

```ts
contents: undefined | Item[];
```

Get the item's contents

###### Example

```ts
const itemList = player.backpack.contents;
for (const item of itemlist) {
  if (item.contents.length > 0) console.log("this item is a backpack's sub-container!");
}
```

</div>

---

<div class="heading-level-5">
<a id="direction" name="direction"></a>

##### direction

```ts
direction: number;
```

Gets the direction of the entity as a number, if it has one. Returns 0 if the client does not know (e.g. item.maxHits)
or the entity is no longer on screen.

Compare using the [Directions enum](../enums/#directions).

###### Example

```ts
const entity = client.findObject(0x991);
if (entity) {
  if (entity.direction === Directions.North) {
    console.log(`${entity.name} is facing North`);
  } else {
    console.log(Directions[entity.direction]); // Prints the directions name, e.g. East
  }
}
```

###### Inherited from

[`Entity`](../Entity/index.md#entity).[`direction`](../Entity/index.md#direction)

</div>

---

<div class="heading-level-5">
<a id="graphic" name="graphic"></a>

##### graphic

```ts
graphic: number;
```

Gets the graphic id of the entity. Returns 0 if entity is no longer on screen.

###### Example

```ts
console.log(player.graphic); // e.g. 400
```

###### Inherited from

[`Entity`](../Entity/index.md#entity).[`graphic`](../Entity/index.md#graphic)

</div>

---

<div class="heading-level-5">
<a id="hits" name="hits"></a>

##### hits

```ts
hits: number;
```

Gets the hits of the entity. Returns 0 if the client does not know (e.g. item.hits) or the entity is no longer on
screen.

###### Example

```ts
const entity = client.findObject(0x991);
if (entity) {
  console.log(entity.hits);
}
```

###### Inherited from

[`Entity`](../Entity/index.md#entity).[`hits`](../Entity/index.md#hits)

</div>

---

<div class="heading-level-5">
<a id="hue" name="hue"></a>

##### hue

```ts
hue: number;
```

Gets the hue/color of the entity. Returns 0 if entity is no longer on screen.

###### Example

```ts
const entity = client.findObject(player.equippedItems.robe);
if (entity) {
  console.log(entity.name);
}
```

###### Inherited from

[`Entity`](../Entity/index.md#entity).[`hue`](../Entity/index.md#hue)

</div>

---

<div class="heading-level-5">
<a id="ishidden" name="ishidden"></a>

##### isHidden

```ts
isHidden: boolean;
```

###### Inherited from

[`Entity`](../Entity/index.md#entity).[`isHidden`](../Entity/index.md#ishidden)

</div>

---

<div class="heading-level-5">
<a id="layer" name="layer"></a>

##### layer

```ts
layer: Layers;
```

Get the item's layer if any

###### Example

```ts
const robe = client.findItemOnLayer(player, Layers.Robe);
console.log(robe.layer);
```

</div>

---

<div class="heading-level-5">
<a id="maxhits" name="maxhits"></a>

##### maxHits

```ts
maxHits: number;
```

Gets the maxHits of the entity. Returns 0 if the client does not know (e.g. item.maxHits) or the entity is no longer on
screen.

###### Example

```ts
const entity = client.findObject(0x991);
if (entity) {
  console.log(entity.maxHits);
}
```

###### Inherited from

[`Entity`](../Entity/index.md#entity).[`maxHits`](../Entity/index.md#maxhits)

</div>

---

<div class="heading-level-5">
<a id="name" name="name"></a>

##### name

```ts
name: string;
```

Gets the name of the entity. Returns an empty string if not known to the client yet.

###### Example

```ts
const entity = client.findObject(player.equippedItems.robe);
if (entity) {
  console.log(entity.name);
}
```

###### Inherited from

[`Entity`](../Entity/index.md#entity).[`name`](../Entity/index.md#name)

</div>

---

<div class="heading-level-5">
<a id="serial" name="serial"></a>

##### serial

```ts
serial: number;
```

###### Inherited from

[`Entity`](../Entity/index.md#entity).[`serial`](../Entity/index.md#serial)

</div>

---

<div class="heading-level-5">
<a id="x" name="x"></a>

##### x

```ts
x: number;
```

Gets the current X coordinate of the entity. Returns 0 if entity is no longer on screen.

###### Example

```ts
const entity = client.findObject(player); // Replace with any other entity serial
console.log(entity.x);
```

###### Inherited from

[`Entity`](../Entity/index.md#entity).[`x`](../Entity/index.md#x)

</div>

---

<div class="heading-level-5">
<a id="y" name="y"></a>

##### y

```ts
y: number;
```

Gets the current Y coordinate of the entity. Returns 0 if entity is no longer on screen.

###### Example

```ts
const entity = client.findObject(player);
console.log(entity.y);
```

###### Inherited from

[`Entity`](../Entity/index.md#entity).[`y`](../Entity/index.md#y)

</div>

---

<div class="heading-level-5">
<a id="z" name="z"></a>

##### z

```ts
z: number;
```

Gets the current Z coordinate of the entity. Returns 0 if entity is no longer on screen.

###### Example

```ts
const entity = client.findObject(player);
console.log(entity.z);
```

###### Inherited from

[`Entity`](../Entity/index.md#entity).[`z`](../Entity/index.md#z)

</div>
</div>
