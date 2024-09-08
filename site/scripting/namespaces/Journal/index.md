## Classes

<div class="heading-level-3">
<a id="journal" name="journal"></a>

### Journal

The `Journal` can be used to inspect the game journal contents to trigger parts of your script.

Use it for:

- Checking if the Journal contains text
- Waiting for text to appear in the Journal
- Waiting for a collection of possible strings to exist

#### Methods

<div class="heading-level-5">
<a id="clear" name="clear"></a>

##### clear()

```ts
clear(): void
```

Clears/forgets the journal history. This is useful if you don't want to process older journal entries.

###### Example

```ts
player.say('Hello there');
journal.waitForText('Hello there'); // This will succeed quickly as the text was just added
journal.clear();
journal.waitForText('Hello there'); // this will time out, as the string is now empty.
```

</div>

---

<div class="heading-level-5">
<a id="containstext" name="containstext"></a>

##### containsText()

```ts
containsText(text: string, author?: string): boolean
```

Checks for the existence of text in the journal

###### Parameters

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `text`    | `string` |             |
| `author`? | `string` |             |

###### Returns

`boolean`

`true`/`false` if the text exists in the journal.

</div>

---

<div class="heading-level-5">
<a id="waitfortext" name="waitfortext"></a>

##### waitForText()

```ts
waitForText(
   text: string,
   author?: string,
   timeout?: number): boolean
```

Waits for the text to appear in the journal.

- Use [clear()](#clear) to clear the journal text.

###### Parameters

| Parameter  | Type     | Description |
| :--------- | :------- | :---------- |
| `text`     | `string` |             |
| `author`?  | `string` |             |
| `timeout`? | `number` |             |

###### Returns

`boolean`

`true`/`false` if the text was found.

###### Example

```ts
const healthBefore = player.hits;

journal.clear();
player.useType(0xe21);
target.waitTargetSelf();

if (journal.waitForText('You healed', 'System', 8000)) {
  client.headMsg(`Bandaged +${player.hits - healthBefore}`, player, 66);
}
```

</div>

---

<div class="heading-level-5">
<a id="waitfortextany" name="waitfortextany"></a>

##### waitForTextAny()

```ts
waitForTextAny(
   text: string[],
   author?: string,
   timeout?: number): null | string
```

Waits for **ANY** string in an array of strings to be found in the Journal, or for the timeout to be hit. Returns the
first string to be found or `null` if the timeout was reached.

This method is useful if you're waiting for any one of a list of strings to appear. If you want all the strings to
appear you should use `waitForTextEvery`

###### Parameters

| Parameter  | Type        | Description |
| :--------- | :---------- | :---------- |
| `text`     | `string`\[] |             |
| `author`?  | `string`    |             |
| `timeout`? | `number`    |             |

###### Returns

`null` | `string`

The string if it was found, or null if not.

###### Example

```typescript
const waitMessage = 'You must wait';
const failMessage = 'You cannot focus';
const successMessage = 'You enter a meditative trance.';

journal.clear();
const response = journal.waitForTextAny([waitMessage, failMessage, successMessage]);

switch (response) {
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

</div>

---

<div class="heading-level-5">
<a id="waitfortextevery" name="waitfortextevery"></a>

##### waitForTextEvery()

```ts
waitForTextEvery(
   text: string[],
   author?: string,
   timeout?: number): string[]
```

Waits for **EVERY** string in an array of strings to be found in the Journal, or for the timeout to be hit. Returns all
the strings that were found, may be less than the input if the timeout was hit.

This method is useful if you're waiting for several strings to all appear. If you want to wait for any string in the
input array use `waitForTextAny`

###### Parameters

| Parameter  | Type        | Description |
| :--------- | :---------- | :---------- |
| `text`     | `string`\[] |             |
| `author`?  | `string`    |             |
| `timeout`? | `number`    |             |

###### Returns

`string`\[]

All the strings that were found within the timeout, or an empty array if none were found.

###### Example

```ts
const waitMessage = 'You must wait';
const failMessage = 'You cannot focus';
const successMessage = 'You enter a meditative trance.';

journal.clear();
const response = journal.waitForTextEvery([waitMessage, failMessage, successMessage]);

if (response.includes(successMessage)) {
  client.headMsg(`Meditating...`, player, 66);
}
```

</div>
</div>
