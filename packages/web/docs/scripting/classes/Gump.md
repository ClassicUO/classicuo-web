---
title: "Gump"
description: "Class: Gump"
group: "classes"
url: "/scripting/Gump/"
---

# Class: Gump

[Gump](/scripting/globals).Gump

This class is for interacting with Gumps that are sent to the client by the server.
Server gumps have a unique serial per shard, and can only have one open at a time.

An instance of Gump therefore interacts with any gump of that serial, and it may become "invalid" if the gump closes externally (e.g. by the shard or the user)
You should always to validate the gump is still open by using `gump.exists` periodically.

**`Example`**

A simple script that waits for a Runebook gump before pressing one of the buttons
```ts
player.use(0x4021C7B1); // Runebook object serial
const gump = Gump.findOrWait(0x59, 1000); // Wait 1 second for the gump to appear
if(!gump) {
  exit("There's no gump open, is the runebook missing?");
}

player.say("I'm outta here!");
gump.reply(10) // Press the first rune
```

## Hierarchy

- [`GameObject`](../modules/#GameObject)

  ↳ **`Gump`**

## Accessors

### serial

• `get` **serial**(): `number`

#### Returns

`number`

#### Inherited from

GameObject.serial

___

### exists

• `get` **exists**(): `boolean`

Check if the gump is still open, i.e. the server hasn't closed it or the player.

**`Example`**

```ts
const gump = Gump.findOrWait(0xBB1B5472, 100);
if(!gump) {
  exit("There's no gump open!");
}

// ... somewhere further down the script

if(gump.exists) {
  console.log("The gump closed, did you do it?");
}
```

#### Returns

`boolean`

___

### lastSerial

• `Static` `get` **lastSerial**(): `number`

The server serial of the last gump sent by the server.
May no longer be open, check with `exists` first.

#### Returns

`number`

___

### last

• `Static` `get` **last**(): ``null`` \| [`Gump`](../Gump)

Get a reference to the last Gump sent by the server.
Returns `undefined` if the gump is no longer open.

**`Example`**

Closes the last sent gump, if it's open.
```ts
Gump.last?.close();
```

#### Returns

``null`` \| [`Gump`](../Gump)

## Methods

### serialFrom

▸ `Static` **serialFrom**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`number`

#### Inherited from

GameObject.serialFrom

___

### reply

▸ **reply**(`buttonID`): `void`

Replies to a gump by "pressing" one of the buttons

**`Example`**

```ts
const gump = Gump.findOrWait(0xBB1B5472, 100);
if(gump?.containsText("Alchemy")) { // If there's a gump open with that serial, check if it has `Alchemy` in it.
  gump.close(); // We don't like alchemy, close the gump
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `buttonID` | `number` |

#### Returns

`void`

___

### close

▸ **close**(): `void`

Closes the gump

**`Example`**

Closes the last open gump if it has the word Chat in it.
```ts
if(Gump.last?.containsText("Chat")) {
  gump.last?.close();
}
```

#### Returns

`void`

___

### containsText

▸ **containsText**(`value`): `boolean`

Checks if the gump contains a certain string, case-insensitive.

**`Example`**

```ts
const gump = Gump.findOrWait(0xBB1B5472, 100);
if(gump.containsText("Tailoring")) {
  player.say("I hate tailors");
  gump.close();
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`boolean`

___

### exists

▸ `Static` **exists**(`serial`): `boolean`

Checks if a gump with the provided server serial is open without making a new instance of `Gump`

**`Example`**

```ts
if(Gump.exists(0xBB1B5472)) {
  player.say("My lovely lady gumps, check it out")
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |

#### Returns

`boolean`

___

### findOrWait

▸ `Static` **findOrWait**(`serial`, `timeoutMs?`): `undefined` \| [`Gump`](../Gump)

Find a gump by its serial, or wait for it to appear

**`Example`**

Closes the last sent gump, if it's open.
```ts
const gump = Gump.findOrWait(0xBB1B5472, 100); // Wait 100 milliseconds (5,000 if unspecified) for the gump to appear
if(gump) {
  gump.reply(1); // Gump is open, simulate pressing a button
}

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |
| `timeoutMs?` | `number` |

#### Returns

`undefined` \| [`Gump`](../Gump)
