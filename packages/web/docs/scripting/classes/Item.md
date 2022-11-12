---
title: "Item"
description: "Class: Item"
group: "classes"
url: "/scripting/Item/"
---

# Class: Item

[Item](/scripting/globals).Item

## Hierarchy

- [`Entity`](../modules/#Entity)

  ↳ **`Item`**

## Accessors

### serial

• `get` **serial**(): `number`

#### Returns

`number`

#### Inherited from

Entity.serial

___

### graphic

• `get` **graphic**(): `number`

Gets the graphic id of the entity.
Returns 0 if entity is no longer on screen.

**`Example`**

```ts
console.log(player.graphic); // e.g. 400
```

#### Returns

`number`

#### Inherited from

Entity.graphic

___

### x

• `get` **x**(): `number`

Gets the current X coordinate of the entity.
Returns 0 if entity is no longer on screen.

**`Example`**

```ts
const entity = client.findObject(player.serial); // Replace with any other entity serial
console.log(entity.x)
```

#### Returns

`number`

#### Inherited from

Entity.x

___

### y

• `get` **y**(): `number`

Gets the current Y coordinate of the entity.
Returns 0 if entity is no longer on screen.

**`Example`**

```ts
const entity = client.findObject(player.serial);
console.log(entity.y)
```

#### Returns

`number`

#### Inherited from

Entity.y

___

### z

• `get` **z**(): `number`

Gets the current Z coordinate of the entity.
Returns 0 if entity is no longer on screen.

**`Example`**

```ts
const entity = client.findObject(player.serial);
console.log(entity.z)
```

#### Returns

`number`

#### Inherited from

Entity.z

___

### name

• `get` **name**(): `string`

Gets the name of the entity.
Returns an empty string if not known to the client yet.

**`Example`**

```ts
const entity = client.findObject(player.equippedItems.robe);
if(entity) {
 console.log(entity.name);
}
```

#### Returns

`string`

#### Inherited from

Entity.name

___

### hue

• `get` **hue**(): `number`

Gets the hue/color of the entity.
Returns 0 if entity is no longer on screen.

**`Example`**

```ts
const entity = client.findObject(player.equippedItems.robe);
if(entity) {
 console.log(entity.name);
}
```

#### Returns

`number`

#### Inherited from

Entity.hue

___

### hits

• `get` **hits**(): `number`

Gets the hits of the entity.
Returns 0 if the client does not know (e.g. item.hits) or the entity is no longer on screen.

**`Example`**

```ts
const entity = client.findObject(0x991);
if(entity) {
 console.log(entity.hits);
}
```

#### Returns

`number`

#### Inherited from

Entity.hits

___

### maxHits

• `get` **maxHits**(): `number`

Gets the maxHits of the entity.
Returns 0 if the client does not know (e.g. item.maxHits) or the entity is no longer on screen.

**`Example`**

```ts
const entity = client.findObject(0x991);
if(entity) {
 console.log(entity.maxHits);
}
```

#### Returns

`number`

#### Inherited from

Entity.maxHits

___

### direction

• `get` **direction**(): `number`

Gets the direction of the entity as a number, if it has one.
Returns 0 if the client does not know (e.g. item.maxHits) or the entity is no longer on screen.

Compare using the [Directions enum](../Directions).

**`Example`**

```ts
const entity = client.findObject(0x991);
if(entity) {
  if(entity.direction === Directions.North) {
    console.log(`${entity.name} is facing North`);
  }
  else {
    console.log(Directions[entity.direction]); // Prints the directions name, e.g. East
  }
}
```

#### Returns

`number`

#### Inherited from

Entity.direction

___

### isHidden

• `get` **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Entity.isHidden

___

### container

• `get` **container**(): `number`

Get the item's parent container

**`Example`**

```ts
const item = client.findType(axeType);
if (item.container > 0) {
   client.sysMsg("the item is into a container");
}
```

#### Returns

`number`

___

### amount

• `get` **amount**(): `number`

Get the item's amount

**`Example`**

```ts
const item = client.findObject(0x40001234);
if (item.amount > 5) {
   client.sysMsg("amount of ${item.amount}");
}
```

#### Returns

`number`

___

### layer

• `get` **layer**(): [`Layers`](../Layers)

Get the item's layer if any

**`Example`**

```ts
const robe = client.findItemOnLayer(player.serial, Layers.Robe);
console.log(robe.layer);
```

#### Returns

[`Layers`](../Layers)
