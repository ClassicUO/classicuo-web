## Classes

<div class="heading-level-3">
<a id="entity" name="entity"></a>

### Entity

#### Extends

- [`GameObject`](../GameObject/index.md#gameobject)

#### Extended by

- [`Item`](../Item/index.md#item)
- [`Mobile`](../Mobile/index.md#mobile)

#### Properties

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

</div>

---

<div class="heading-level-5">
<a id="ishidden" name="ishidden"></a>

##### isHidden

```ts
isHidden: boolean;
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

</div>
</div>
