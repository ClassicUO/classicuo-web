---
title: "PopupMenu"
description: "Class: PopupMenu"
group: "classes"
url: "/scripting/PopupMenu/"
---

# Class: PopupMenu

[PopupMenu](/scripting/globals).PopupMenu

This class is for interacting with context menus (i.e. when you single click on an item or your self).
`PopupMenu` is available via the `popupMenu` variable on the global scope.

**`Example`**

```ts
popupMenu.request(player.serial);
popupMenu.waitUntilOpen(1000); // Wait 1 second for the menu to open
popupMenu.reply(0); // 0 is first item, second item is 1, etc.
```

## Constructors

### constructor

• **new PopupMenu**()

## Methods

### reply

▸ **reply**(`index`): `void`

Replies to a popup menu. Index 0 is the first item.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

___

### request

▸ **request**(`serial`, `waitMs?`): `undefined` \| `boolean`

Requests a popup menu for the given object

#### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | `number` |
| `waitMs?` | `number` |

#### Returns

`undefined` \| `boolean`

___

### waitUntilOpen

▸ **waitUntilOpen**(`timeoutMs?`): `boolean`

Wait until a popup context menu is open

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeoutMs?` | `number` |

#### Returns

`boolean`

___

### close

▸ **close**(): `void`

Closes a popup menu if it exists

#### Returns

`void`

## Accessors

### exists

• `get` **exists**(): `boolean`

Checks if a popup currently exists

#### Returns

`boolean`
