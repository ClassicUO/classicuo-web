<div class="heading-level-1">
<a id="undefined" name="undefined"></a>

```ts
function exit(reason?: string): void;
```

Exits early from the script execution, useful to bail out based on certain conditions.

## Parameters

| Parameter | Type     | Description                                                              |
| :-------- | :------- | :----------------------------------------------------------------------- |
| `reason`? | `string` | Optional reason for why the script failed, shows up in the console area. |

## Example

```ts
if (player.isDead) {
  exit("Failed, I'm dead!");
}
```

</div>
