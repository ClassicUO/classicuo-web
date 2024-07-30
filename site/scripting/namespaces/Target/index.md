## Classes

<div class="heading-level-3">
<a id="target" name="target"></a>

### Target

#### Properties

<div class="heading-level-5">
<a id="last" name="last"></a>

##### last

```ts
last: undefined | Item | Mobile;
```

Object of the last target, i.e. last Item/Mobile

</div>

---

<div class="heading-level-5">
<a id="lastobject" name="lastobject"></a>

##### lastObject

```ts
lastObject: undefined | Item;
```

Last object used, i.e. double-clicked by the player

</div>

---

<div class="heading-level-5">
<a id="lastobjectserial" name="lastobjectserial"></a>

##### lastObjectSerial

```ts
lastObjectSerial: number;
```

Serial of the last object used, i.e. double-clicked by the player

</div>

---

<div class="heading-level-5">
<a id="lastserial" name="lastserial"></a>

##### lastSerial

```ts
lastSerial: number;
```

Serial of the last target

</div>

---

<div class="heading-level-5">
<a id="open" name="open"></a>

##### open

```ts
open: boolean;
```

Check if target is open

</div>

#### Methods

<div class="heading-level-5">
<a id="cancel" name="cancel"></a>

##### cancel()

```ts
cancel(): void
```

Close the target

</div>

---

<div class="heading-level-5">
<a id="clearqueue" name="clearqueue"></a>

##### clearQueue()

```ts
clearQueue(): void
```

Clear target queue

</div>

---

<div class="heading-level-5">
<a id="entity" name="entity"></a>

##### entity()

```ts
entity(serial: SerialOrEntity): void
```

Target a Mobile or an Item with the currently open target

###### Parameters

| Parameter | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| `serial`  | [`SerialOrEntity`](../GameObject/index.md#serialorentity) |

###### Example

```ts
client.castSpell(Spells.Heal);
target.wait();
target.entity(player);
```

</div>

---

<div class="heading-level-5">
<a id="query" name="query"></a>

##### query()

```ts
query(isGround?: boolean): TargetInfo
```

Creates a target and returns information about the result

###### Parameters

| Parameter   | Type      |
| :---------- | :-------- |
| `isGround`? | `boolean` |

###### Returns

`TargetInfo`

</div>

---

<div class="heading-level-5">
<a id="repeatlast" name="repeatlast"></a>

##### repeatLast()

```ts
repeatLast(): void
```

Repeats the last targeting information based on the cursor type, e.g. Entity/Position etc

###### Examples

```ts
client.castSpell(Spells.Heal);
target.wait();
target.repeatLast();
```

```ts
client.castSpell(Spells.Teleport);
target.wait();
target.repeatLast();
```

</div>

---

<div class="heading-level-5">
<a id="self" name="self"></a>

##### self()

```ts
self(): void
```

Target self with the currently open target

###### Example

```ts
client.castSpell(Spells.Heal);
target.wait();
target.self();
```

</div>

---

<div class="heading-level-5">
<a id="terrain" name="terrain"></a>

##### terrain()

```ts
terrain(
   x: number,
   y: number,
   z: number,
   graphic?: number): void
```

Target a Tile or Static

**When `graphic` is omitted it will target `LAND` by default.**

###### Parameters

| Parameter  | Type     |
| :--------- | :------- |
| `x`        | `number` |
| `y`        | `number` |
| `z`        | `number` |
| `graphic`? | `number` |

###### Examples

```ts
client.castSpell(Spells.Teleport);
target.wait();
target.terrain(1203, 222, 0);
```

```ts
client.castSpell(Spells.Teleport);
target.wait();
target.terrain(1203, 222, 0, 0x5a2);
```

</div>

---

<div class="heading-level-5">
<a id="terrainrelativetoentity" name="terrainrelativetoentity"></a>

##### terrainRelativeToEntity()

```ts
terrainRelativeToEntity(
   entity: SerialOrEntity,
   range: number,
   forward: boolean,
   graphic?: number): void
```

Target a Tile or Static from a specific Item or Mobile

**When `graphic` is omitted it will target `LAND` by default.**

###### Parameters

| Parameter  | Type                                                      |
| :--------- | :-------------------------------------------------------- |
| `entity`   | [`SerialOrEntity`](../GameObject/index.md#serialorentity) |
| `range`    | `number`                                                  |
| `forward`  | `boolean`                                                 |
| `graphic`? | `number`                                                  |

###### Examples

```ts
client.castSpell(Spells.Teleport);
target.wait();
target.terrainRelativeToEntity(mob, 5, true);
```

```ts
client.castSpell(Spells.Teleport);
target.wait();
target.terrainRelativeToEntity(mob, 5, true, 0x5a2);
```

</div>

---

<div class="heading-level-5">
<a id="terrainwithoffset" name="terrainwithoffset"></a>

##### terrainWithOffset()

```ts
terrainWithOffset(
   x: number,
   y: number,
   z: number,
   graphic?: number): void
```

Target a Tile or Static where `{ x, y, z }` is the distance from the player.

**When `graphic` is omitted it will target `LAND` by default.**

###### Parameters

| Parameter  | Type     |
| :--------- | :------- |
| `x`        | `number` |
| `y`        | `number` |
| `z`        | `number` |
| `graphic`? | `number` |

###### Examples

```ts
client.castSpell(Spells.Teleport);
target.wait();
target.terrainWithOffset(-1, -2, 0);
```

```ts
client.castSpell(Spells.Teleport);
target.wait();
target.terrainWithOffset(-1, -2, 0, 0x5a2);
```

</div>

---

<div class="heading-level-5">
<a id="wait" name="wait"></a>

##### wait()

```ts
wait(timeoutMs?: number): boolean
```

Wait for the target to open within a specific amount of time.

###### Parameters

| Parameter    | Type     |
| :----------- | :------- |
| `timeoutMs`? | `number` |

###### Returns

`boolean`

</div>

---

<div class="heading-level-5">
<a id="waittargetentity" name="waittargetentity"></a>

##### waitTargetEntity()

```ts
waitTargetEntity(entity: SerialOrEntity, timeoutMs?: number): boolean
```

Waits for the target to open, and then targets the desired entity

###### Parameters

| Parameter    | Type                                                      |
| :----------- | :-------------------------------------------------------- |
| `entity`     | [`SerialOrEntity`](../GameObject/index.md#serialorentity) |
| `timeoutMs`? | `number`                                                  |

###### Returns

`boolean`

</div>

---

<div class="heading-level-5">
<a id="waittargetself" name="waittargetself"></a>

##### waitTargetSelf()

```ts
waitTargetSelf(timeoutMs?: number): boolean
```

Wait for target with a specific amount of time, when open target self.

###### Parameters

| Parameter    | Type     |
| :----------- | :------- |
| `timeoutMs`? | `number` |

###### Returns

`boolean`

###### Example

```ts
player.useType(0xe21);
target.waitTargetSelf();
```

</div>

---

<div class="heading-level-5">
<a id="waittargettype" name="waittargettype"></a>

##### waitTargetType()

```ts
waitTargetType(
   graphic: number,
   hue?: number,
   timeoutMs?: number): boolean
```

Wait for target, when open target the first object with a certain graphic/hue

###### Parameters

| Parameter    | Type     |
| :----------- | :------- |
| `graphic`    | `number` |
| `hue`?       | `number` |
| `timeoutMs`? | `number` |

###### Returns

`boolean`

###### Example

```ts
player.useType(0xf9d);
target.waitTargetType(0x1078);
```

</div>
</div>
