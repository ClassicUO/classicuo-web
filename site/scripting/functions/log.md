<div class="heading-level-1">
<a id="undefined" name="undefined"></a>

```ts
function log(...args: any[]): void;
```

Logs the arguments to the console area below the scripting window.

## Parameters

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| ...`args` | `any`\[] | List of objects to log to the console. |

## Examples

```ts
log('Hi there!');
```

```ts
log(`My name is ${player.name}`);
```

```ts
log(`My helmet is`, player.equippedItems.helmet);
```

</div>
