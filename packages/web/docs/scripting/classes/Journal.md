---
title: "Journal"
description: "Class: Journal"
group: "classes"
url: "/scripting/Journal/"
---

# Class: Journal

[Journal](/scripting/globals).Journal

## Constructors

### constructor

• **new Journal**()

## Methods

### containsText

▸ **containsText**(`text`, `author?`): `boolean`

Returns `true`/`false` if the text exists in the journal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `author?` | `string` |

#### Returns

`boolean`

___

### waitForText

▸ **waitForText**(`text`, `author?`, `timeout?`): `boolean`

Waits for the text to appear in the journal.
`text` can be an array of strings to look for, the function will return on the first match.

**`Example`**

Bandage self, waiting for the System message
```ts
const healthBefore = player.hits;

journal.clear();
player.useType(0xE21);
target.waitTargetSelf();

if(journal.waitForText("You healed", "System", 8000)) {
  client.headMsg(`Bandaged +${player.hits - healthBefore}`, player, 66)
}

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` \| `string`[] |
| `author?` | `string` |
| `timeout?` | `number` |

#### Returns

`boolean`

___

### clear

▸ **clear**(): `void`

Clears/forgets the journal history.
This is useful if you don't want to process older journal entries.

**`Example`**

Bandage self, waiting for the System message
```ts
const healthBefore = player.hits;

player.say("Hello there");
journal.waitForText("Hello there"); // This will succeed quickly as the text was just added
journal.clear();
journal.waitForText("Hello there"); // this will time out, as the string is now empty.

#### Returns

`void`
