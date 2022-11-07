---
title: "Player"
description: "Class: Player"
group: "classes"
url: "/scripting/Player/"
---

# Class: Player

This class references the current player whilst in-game and is accessible on the global scope as the `player` variable.

**`Example`**

A simple script which yells out when the player health is below a threshold
```ts
while(true) {
 if(player.hits < 50) {
   client.say('I need healing!');
 }
 sleep(500);
}
```

## Hierarchy

- [`Mobile`](../Mobile)

  ↳ **`Player`**

## Accessors

### graphic

• `get` **graphic**(): `number`

#### Returns

`number`

#### Inherited from

Mobile.graphic

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

Mobile.x

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

Mobile.y

___

### z

• `get` **z**(): `number`

#### Returns

`number`

#### Inherited from

Mobile.z

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

Mobile.name

___

### flags

• `get` **flags**(): `number`

#### Returns

`number`

#### Inherited from

Mobile.flags

___

### hue

• `get` **hue**(): `number`

#### Returns

`number`

#### Inherited from

Mobile.hue

___

### hits

• `get` **hits**(): `number`

#### Returns

`number`

#### Inherited from

Mobile.hits

___

### maxHits

• `get` **maxHits**(): `number`

#### Returns

`number`

#### Inherited from

Mobile.maxHits

___

### direction

• `get` **direction**(): `number`

#### Returns

`number`

#### Inherited from

Mobile.direction

___

### stamina

• `get` **stamina**(): `number`

#### Returns

`number`

#### Inherited from

Mobile.stamina

___

### maxStamina

• `get` **maxStamina**(): `number`

#### Returns

`number`

#### Inherited from

Mobile.maxStamina

___

### mana

• `get` **mana**(): `number`

#### Returns

`number`

#### Inherited from

Mobile.mana

___

### maxMana

• `get` **maxMana**(): `number`

#### Returns

`number`

#### Inherited from

Mobile.maxMana

___

### isPoisoned

• `get` **isPoisoned**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Mobile.isPoisoned

___

### isFemale

• `get` **isFemale**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Mobile.isFemale

___

### notoriety

• `get` **notoriety**(): `number`

#### Returns

`number`

#### Inherited from

Mobile.notoriety

___

### inWarMode

• `get` **inWarMode**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Mobile.inWarMode

___

### equippedItems

• `get` **equippedItems**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `shirt?` | [`Item`](../Item) |
| `pants?` | [`Item`](../Item) |
| `shoes?` | [`Item`](../Item) |
| `legs?` | [`Item`](../Item) |
| `torso?` | [`Item`](../Item) |
| `ring?` | [`Item`](../Item) |
| `talisman?` | [`Item`](../Item) |
| `bracelet?` | [`Item`](../Item) |
| `face?` | [`Item`](../Item) |
| `arms?` | [`Item`](../Item) |
| `gloves?` | [`Item`](../Item) |
| `skirt?` | [`Item`](../Item) |
| `tunic?` | [`Item`](../Item) |
| `robe?` | [`Item`](../Item) |
| `necklace?` | [`Item`](../Item) |
| `hair?` | [`Item`](../Item) |
| `waist?` | [`Item`](../Item) |
| `beard?` | [`Item`](../Item) |
| `earrings?` | [`Item`](../Item) |
| `oneHanded?` | [`Item`](../Item) |
| `helmet?` | [`Item`](../Item) |
| `twoHanded?` | [`Item`](../Item) |
| `cloak?` | [`Item`](../Item) |
| `mount?` | [`Item`](../Item) |

#### Inherited from

Mobile.equippedItems

___

### serial

• `get` **serial**(): `number`

#### Returns

`number`

#### Overrides

Mobile.serial

___

### coldResistance

• `get` **coldResistance**(): `number`

#### Returns

`number`

___

### damageIncrease

• `get` **damageIncrease**(): `number`

#### Returns

`number`

___

### damageMax

• `get` **damageMax**(): `number`

#### Returns

`number`

___

### damageMin

• `get` **damageMin**(): `number`

#### Returns

`number`

___

### defenseChanceIncrease

• `get` **defenseChanceIncrease**(): `number`

#### Returns

`number`

___

### dexterity

• `get` **dexterity**(): `number`

#### Returns

`number`

___

### energyResistance

• `get` **energyResistance**(): `number`

#### Returns

`number`

___

### fasterCasting

• `get` **fasterCasting**(): `number`

#### Returns

`number`

___

### fasterCastRecovery

• `get` **fasterCastRecovery**(): `number`

#### Returns

`number`

___

### fireResistance

• `get` **fireResistance**(): `number`

#### Returns

`number`

___

### followers

• `get` **followers**(): `number`

#### Returns

`number`

___

### maxFollowers

• `get` **maxFollowers**(): `number`

#### Returns

`number`

___

### gold

• `get` **gold**(): `number`

#### Returns

`number`

___

### hitChanceIncrease

• `get` **hitChanceIncrease**(): `number`

#### Returns

`number`

___

### intelligence

• `get` **intelligence**(): `number`

#### Returns

`number`

___

### lowerManaCost

• `get` **lowerManaCost**(): `number`

#### Returns

`number`

___

### lowerReagentCost

• `get` **lowerReagentCost**(): `number`

#### Returns

`number`

___

### luck

• `get` **luck**(): `number`

#### Returns

`number`

___

### maxColdResistence

• `get` **maxColdResistence**(): `number`

#### Returns

`number`

___

### maxDefenseChanceIncrease

• `get` **maxDefenseChanceIncrease**(): `number`

#### Returns

`number`

___

### maxEnergyResistence

• `get` **maxEnergyResistence**(): `number`

#### Returns

`number`

___

### maxFireResistence

• `get` **maxFireResistence**(): `number`

#### Returns

`number`

___

### maxPhysicResistence

• `get` **maxPhysicResistence**(): `number`

#### Returns

`number`

___

### maxPoisonResistence

• `get` **maxPoisonResistence**(): `number`

#### Returns

`number`

___

### physicalResistance

• `get` **physicalResistance**(): `number`

#### Returns

`number`

___

### poisonResistance

• `get` **poisonResistance**(): `number`

#### Returns

`number`

___

### spellDamageIncrease

• `get` **spellDamageIncrease**(): `number`

#### Returns

`number`

___

### statsCap

• `get` **statsCap**(): `number`

#### Returns

`number`

___

### strength

• `get` **strength**(): `number`

#### Returns

`number`

___

### swingSpeedIncrease

• `get` **swingSpeedIncrease**(): `number`

#### Returns

`number`

___

### tithingPoints

• `get` **tithingPoints**(): `number`

#### Returns

`number`

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

___

### weightMax

• `get` **weightMax**(): `number`

#### Returns

`number`

___

### hunger

• `get` **hunger**(): `number`

#### Returns

`number`

___

### shortTermMurders

• `get` **shortTermMurders**(): `number`

#### Returns

`number`

___

### longTermMurders

• `get` **longTermMurders**(): `number`

#### Returns

`number`

___

### healBonus

• `get` **healBonus**(): `number`

#### Returns

`number`

___

### magicImmunity

• `get` **magicImmunity**(): `number`

#### Returns

`number`

___

### magicReflect

• `get` **magicReflect**(): `number`

#### Returns

`number`

___

### physicalProtection

• `get` **physicalProtection**(): `number`

#### Returns

`number`

___

### poisonProtection

• `get` **poisonProtection**(): `number`

#### Returns

`number`

___

### fireProtection

• `get` **fireProtection**(): `number`

#### Returns

`number`

___

### waterProtection

• `get` **waterProtection**(): `number`

#### Returns

`number`

___

### airProtection

• `get` **airProtection**(): `number`

#### Returns

`number`

___

### earthProtection

• `get` **earthProtection**(): `number`

#### Returns

`number`

___

### necroProtection

• `get` **necroProtection**(): `number`

#### Returns

`number`

___

### backpack

• `get` **backpack**(): `undefined` \| [`Item`](../Item)

#### Returns

`undefined` \| [`Item`](../Item)
