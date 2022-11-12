---
title: "Entity"
description: "Class: Entity"
group: "classes"
url: "/scripting/Entity/"
---

# Class: Entity

[Entity](/scripting/globals).Entity

## Hierarchy

- [`GameObject`](../modules/#GameObject)

  ↳ **`Entity`**

## Accessors

### serial

• `get` **serial**(): `number`

#### Returns

`number`

#### Inherited from

GameObject.serial

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

___

### isHidden

• `get` **isHidden**(): `boolean`

#### Returns

`boolean`
