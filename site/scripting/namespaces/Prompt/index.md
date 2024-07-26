## Classes

<div class="heading-level-3">
<a id="prompt" name="prompt"></a>

### Prompt

This class is for interacting with text prompts via the chat box. `Prompt` is accessible in the global scope via the
variable `prompt`.

#### Example

```ts
player.use(0x4021c7b1); // Runebook
const gump = Gump.findOrWait(0x59);
if (!gump) {
  exit("Coudln't open runebook");
}
gump.reply(1);
prompt.waitUntilOpen(1000); // wait up to 1 second for a prompt to show up
prompt.reply('My Awesome runebook');
```

#### Properties

<div class="heading-level-5">
<a id="exists" name="exists"></a>

##### exists

```ts
exists: boolean;
```

Checks if a prompt exists and is waiting for input

###### Example

```ts
if (prompt.exists) {
  prompt.reply('House Rune');
}
```

</div>

#### Methods

<div class="heading-level-5">
<a id="reply" name="reply"></a>

##### reply()

```ts
reply(value: string): void
```

Reply to a currently waiting prompt, if one is open

###### Parameters

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `value`   | `string` |             |

###### Example

```ts
prompt.reply('House Rune');
```

</div>

---

<div class="heading-level-5">
<a id="waituntilopen" name="waituntilopen"></a>

##### waitUntilOpen()

```ts
waitUntilOpen(timeoutMs?: number): boolean
```

Waits for a prompt to be open

###### Parameters

| Parameter    | Type     | Description                  |
| :----------- | :------- | :--------------------------- |
| `timeoutMs`? | `number` | time in milliseconds to wait |

###### Returns

`boolean`

###### Example

```ts
prompt.waitUntilOpen(1000); // wait 1 second
prompt.reply('Yes');
```

</div>
</div>
