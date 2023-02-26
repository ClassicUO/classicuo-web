---
title: "Prompt"
description: "Class: Prompt"
group: "classes"
url: "/scripting/Prompt/"
---

# Class: Prompt

[Prompt](/scripting/globals).Prompt

This class is for interacting with text prompts via the chat box.
`Prompt` is accessible in the global scope via the variable `prompt`.

**`Example`**

```ts
player.use(0x4021C7B1); // Runebook
const gump = Gump.findOrWait(0x59);
if (!gump) {
  exit("Coudln't open runebook")
}
gump.reply(1);
prompt.waitUntilOpen(1000); // wait up to 1 second for a prompt to show up
prompt.reply("My Awesome runebook");
```

## Constructors

### constructor

• **new Prompt**()

## Methods

### reply

▸ **reply**(`value`): `void`

Reply to a currently waiting prompt, if one is open

**`Example`**

```ts
prompt.reply("House Rune");
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

___

### waitUntilOpen

▸ **waitUntilOpen**(`timeoutMs?`): `boolean`

Waits for a prompt to be open

**`Example`**

```ts
prompt.waitUntilOpen(1000); // wait 1 second
prompt.reply("Yes");
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeoutMs?` | `number` | time in milliseconds to wait |

#### Returns

`boolean`

## Accessors

### exists

• `get` **exists**(): `boolean`

Checks if a prompt exists and is waiting for input

**`Example`**

```ts
if(prompt.exists) {
  prompt.reply("House Rune");
}
```

#### Returns

`boolean`
