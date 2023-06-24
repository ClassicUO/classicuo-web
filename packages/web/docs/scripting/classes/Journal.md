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
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `author?` | `string` |
| `timeout?` | `number` |

#### Returns

`boolean`

___

### waitForTextEvery

▸ **waitForTextEvery**(`text`, `author?`, `timeout?`): `string`[]

Waits for **EVERY** string in an array of strings to be found in the Journal, or for the timeout to be hit.
Returns all the strings that were found, may be less than the input if the timeout was hit.

This method is useful if you're waiting for several strings to all appear.
If you want to wait for any string in the input array use `waitForTextAny`

**`Example`**

Bandage self, waiting for the System message
```ts
const waitMessage = "You must wait";
const failMessage = "You cannot focus";
const successMessage = "You enter a meditative trance.";

journal.clear();
const response = journal.waitForTextEvery([waitMessage, failMessage, successMessage]);

if(response.includes(successMessage)) {
  client.headMsg(`Meditating...`, player, 66)
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string`[] |
| `author?` | `string` |
| `timeout?` | `number` |

#### Returns

`string`[]

___

### waitForTextAny

▸ **waitForTextAny**(`text`, `author?`, `timeout?`): ``null`` \| `string`

Waits for **ANY** string in an array of strings to be found in the Journal, or for the timeout to be hit.
Returns the first string to be found or `null` if the timeout was reached.

This method is useful if you're waiting for any one of a list of strings to appear.
If you want all the strings to appear you should use `waitForTextEvery`

**`Example`**

Bandage self, waiting for the System message
```typescript
const waitMessage = "You must wait";
const failMessage = "You cannot focus";
const successMessage = "You enter a meditative trance.";

journal.clear();
const response = journal.waitForTextAny([waitMessage, failMessage, successMessage]);

switch(response) {
  case waitMessage: {
    // sleep
    break;
  }
  case failMessage: {
    // retry
    break;
  }
  case successMessage: {
    // loop
    break;
  }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string`[] |
| `author?` | `string` |
| `timeout?` | `number` |

#### Returns

``null`` \| `string`

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
```

#### Returns

`void`
