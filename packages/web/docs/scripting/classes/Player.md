---
title: "Player"
description: "Class: Player"
group: "classes"
url: "/scripting/Player/"
---

# Class: Player

[Player](/scripting/globals).Player

This class references the current player whilst in-game and is accessible on the global scope as the `player` variable.

**`Example`**

A simple script which yells out when the player health is below a threshold
```ts
while(true) {
 if(player.hits < 50) {
   player.say('I need healing!');
 }
 sleep(500);
}
```

## Hierarchy

- [`Mobile`](../modules/#Mobile)

  ↳ **`Player`**

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

Mobile.serialFrom

___

### say

▸ **say**(`message`, `hue?`): `void`

Sends a chat message as your player, with an optional hue for the message.

**`Example`**

```ts
player.say('Hello there!');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `hue?` | `number` |

#### Returns

`void`

___

### cast

▸ **cast**(`spell`): `void`

Casts a spell

**`Example`**

```ts
player.cast(Spells.Agility);
target.wait();
target.entity(player);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `spell` | `string` \| [`Spells`](../Spells) |

#### Returns

`void`

___

### castTo

▸ **castTo**(`spell`, `serial`, `timeout?`): `void`

Casts a spell and automatically targets the given serial on the next target

**`Example`**

```ts
player.castTo(Spells.Heal, player);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `spell` | [`Spells`](../Spells) \| ``"Clumsy"`` \| ``"CreateFood"`` \| ``"Feeblemind"`` \| ``"Heal"`` \| ``"MagicArrow"`` \| ``"NightSight"`` \| ``"ReactiveArmor"`` \| ``"Weaken"`` \| ``"Agility"`` \| ``"Cunning"`` \| ``"Cure"`` \| ``"Harm"`` \| ``"MagicTrap"`` \| ``"RemoveTrap"`` \| ``"Protection"`` \| ``"Strength"`` \| ``"Bless"`` \| ``"Fireball"`` \| ``"MagicLock"`` \| ``"Poison"`` \| ``"Telekinesis"`` \| ``"Teleport"`` \| ``"Unlock"`` \| ``"WallOfStone"`` \| ``"ArchCure"`` \| ``"ArchProtection"`` \| ``"Curse"`` \| ``"FireField"`` \| ``"GreaterHeal"`` \| ``"Lightning"`` \| ``"ManaDrain"`` \| ``"Recall"`` \| ``"BladeSpirits"`` \| ``"DispelField"`` \| ``"Incognito"`` \| ``"MagicReflect"`` \| ``"MindBlast"`` \| ``"Paralyze"`` \| ``"PoisonField"`` \| ``"SummonCreature"`` \| ``"Dispel"`` \| ``"EnergyBolt"`` \| ``"Explosion"`` \| ``"Invisibility"`` \| ``"Mark"`` \| ``"MassCurse"`` \| ``"ParalyzeField"`` \| ``"Reveal"`` \| ``"ChainLightning"`` \| ``"EnergyField"`` \| ``"FlameStrike"`` \| ``"GateTravel"`` \| ``"ManaVampire"`` \| ``"MassDispel"`` \| ``"MeteorSwarm"`` \| ``"Polymorph"`` \| ``"Earthquake"`` \| ``"EnergyVortex"`` \| ``"Resurrection"`` \| ``"AirElemental"`` \| ``"SummonDaemon"`` \| ``"EarthElemental"`` \| ``"FireElemental"`` \| ``"WaterElemental"`` \| ``"AnimateDead"`` \| ``"BloodOath"`` \| ``"CorpseSkin"`` \| ``"CurseWeapon"`` \| ``"EvilOmen"`` \| ``"HorrificBeast"`` \| ``"LichForm"`` \| ``"MindRot"`` \| ``"PainSpike"`` \| ``"PoisonStrike"`` \| ``"Strangle"`` \| ``"SummonFamiliar"`` \| ``"VampiricEmbrace"`` \| ``"VengefulSpirit"`` \| ``"Wither"`` \| ``"WraithForm"`` \| ``"Exorcism"`` \| ``"CleanseByFire"`` \| ``"CloseWounds"`` \| ``"ConsecrateWeapon"`` \| ``"DispelEvil"`` \| ``"DivineFury"`` \| ``"EnemyOfOne"`` \| ``"HolyLight"`` \| ``"NobleSacrifice"`` \| ``"RemoveCurse"`` \| ``"SacredJourney"`` \| ``"HonorableExecution"`` \| ``"Confidence"`` \| ``"Evasion"`` \| ``"CounterAttack"`` \| ``"LightningStrike"`` \| ``"MomentumStrike"`` \| ``"FocusAttack"`` \| ``"DeathStrike"`` \| ``"AnimalForm"`` \| ``"KiAttack"`` \| ``"SurpriseAttack"`` \| ``"Backstab"`` \| ``"Shadowjump"`` \| ``"MirrorImage"`` \| ``"ArcaneCircle"`` \| ``"GiftOfRenewal"`` \| ``"ImmolatingWeapon"`` \| ``"Attunement"`` \| ``"Thunderstorm"`` \| ``"NaturesFury"`` \| ``"SummonFey"`` \| ``"SummonFiend"`` \| ``"ReaperForm"`` \| ``"Wildfire"`` \| ``"EssenceOfWind"`` \| ``"DryadAllure"`` \| ``"EtherealVoyage"`` \| ``"WordOfDeath"`` \| ``"GiftOfLife"`` \| ``"ArcaneEmpowerment"`` \| ``"NetherBolt"`` \| ``"HealingStone"`` \| ``"PurgeMagic"`` \| ``"Enchant"`` \| ``"Sleep"`` \| ``"EagleStrike"`` \| ``"AnimatedWeapon"`` \| ``"StoneForm"`` \| ``"SpellTrigger"`` \| ``"MassSleep"`` \| ``"CleansingWinds"`` \| ``"Bombard"`` \| ``"SpellPlague"`` \| ``"HailStorm"`` \| ``"NetherCyclone"`` \| ``"RisingColossus"`` \| ``"Inspire"`` \| ``"Invigorate"`` \| ``"Resilience"`` \| ``"Perseverance"`` \| ``"Tribulation"`` \| ``"Despair"`` \| ``"DeathRay"`` \| ``"EtherealBurst"`` \| ``"NetherBlast"`` \| ``"MysticWeapon"`` \| ``"CommandUndead"`` \| ``"Conduit"`` \| ``"ManaShield"`` \| ``"SummonReaper"`` \| ``"EnchantedSummoning"`` \| ``"AnticipateHit"`` \| ``"Warcry"`` \| ``"Rejuvenate"`` \| ``"HolyFist"`` \| ``"Shadow"`` \| ``"WhiteTigerForm"`` \| ``"FlamingShot"`` \| ``"PlayingTheOdds"`` \| ``"Thrust"`` \| ``"Pierce"`` \| ``"Stagger"`` \| ``"Toughness"`` \| ``"Onslaught"`` \| ``"FocusedEye"`` \| ``"ElementalFury"`` \| ``"CalledShot"`` \| ``"WarriorsGifts"`` \| ``"ShieldBash"`` \| ``"Bodyguard"`` \| ``"HeightenSenses"`` \| ``"Tolerance"`` \| ``"InjectedStrike"`` \| ``"Potency"`` \| ``"Rampage"`` \| ``"FistsOfFury"`` \| ``"Knockout"`` \| ``"Whispering"`` \| ``"CombatTraining"`` \| ``"Boarding"`` |
| `serial` | [`SerialOrEntity`](../modules/#SerialOrEntity) |
| `timeout?` | `number` |

#### Returns

`void`

___

### useSkill

▸ **useSkill**(`skill`, `target?`, `timeout?`): `void`

Uses a skill

**`Example`**

Use skill without a target
```ts
player.useSkill(Skills.Meditation);

@example Use skill and target yourself
```ts
player.useSkill(Skills.Anatomy);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `skill` | ``"RemoveTrap"`` \| [`Skills`](../Skills) \| ``"Alchemy"`` \| ``"Anatomy"`` \| ``"AnimalLore"`` \| ``"ItemID"`` \| ``"ArmsLore"`` \| ``"Parry"`` \| ``"Begging"`` \| ``"Blacksmith"`` \| ``"Fletching"`` \| ``"Peacemaking"`` \| ``"Camping"`` \| ``"Carpentry"`` \| ``"Cartography"`` \| ``"Cooking"`` \| ``"DetectHidden"`` \| ``"Discordance"`` \| ``"EvalInt"`` \| ``"Healing"`` \| ``"Fishing"`` \| ``"Forensics"`` \| ``"Herding"`` \| ``"Hiding"`` \| ``"Provocation"`` \| ``"Inscribe"`` \| ``"Lockpicking"`` \| ``"Magery"`` \| ``"MagicResist"`` \| ``"Tactics"`` \| ``"Snooping"`` \| ``"Musicianship"`` \| ``"Poisoning"`` \| ``"Archery"`` \| ``"SpiritSpeak"`` \| ``"Stealing"`` \| ``"Tailoring"`` \| ``"AnimalTaming"`` \| ``"TasteID"`` \| ``"Tinkering"`` \| ``"Tracking"`` \| ``"Veterinary"`` \| ``"Swords"`` \| ``"Macing"`` \| ``"Fencing"`` \| ``"Wrestling"`` \| ``"Lumberjacking"`` \| ``"Mining"`` \| ``"Meditation"`` \| ``"Stealth"`` \| ``"Necromancy"`` \| ``"Focus"`` \| ``"Chivalry"`` \| ``"Bushido"`` \| ``"Ninjitsu"`` \| ``"Spellweaving"`` \| ``"Mysticism"`` \| ``"Imbuing"`` \| ``"Throwing"`` |
| `target?` | [`SerialOrEntity`](../modules/#SerialOrEntity) |
| `timeout?` | `number` |

#### Returns

`void`

___

### useVirtue

▸ **useVirtue**(`virtue`, `target?`, `timeout?`): `void`

Uses a virtue

**`Example`**

Use virtue without a target
```ts
player.useVirtue(Virtues.Honor);

@example Use virtue and target yourself
```ts
player.useVirtue(Virtues.Honor);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `virtue` | [`Virtues`](../Virtues) \| ``"Honor"`` \| ``"Sacrifice"`` \| ``"Valor"`` |
| `target?` | [`SerialOrEntity`](../modules/#SerialOrEntity) |
| `timeout?` | `number` |

#### Returns

`void`

___

### equip

▸ **equip**(`serial`): ``null``

Attempts to equip an item if possible

**`Example`**

```ts
const axe = client.findType(0x0F49); // Axe graphic ID
player.equip(axe);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | [`SerialOrEntity`](../modules/#SerialOrEntity) |

#### Returns

``null``

___

### attack

▸ **attack**(`serial`): ``null``

Attacks a mobile

**`Example`**

```ts
player.attack(target.lastSerial);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | [`SerialOrEntity`](../modules/#SerialOrEntity) |

#### Returns

``null``

___

### fly

▸ **fly**(): ``null``

Attempt to fly... if you can.

**`Example`**

```ts
player.fly();
```

#### Returns

``null``

___

### land

▸ **land**(): ``null``

Turn off flying and land

**`Example`**

```ts
player.land();
```

#### Returns

``null``

___

### use

▸ **use**(`serial`): ``null``

Attempts to use an object if possible

**`Example`**

```ts
const dagger = client.findType(0x0F52); // Dagger graphic ID
player.use(dagger);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | [`SerialOrEntity`](../modules/#SerialOrEntity) |

#### Returns

``null``

___

### click

▸ **click**(`serial`): ``null``

Simulates clicking an object

**`Example`**

```ts
player.click(player);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | [`SerialOrEntity`](../modules/#SerialOrEntity) |

#### Returns

``null``

___

### useType

▸ **useType**(`graphic`, `hue?`, `sourceSerial?`, `range?`): ``null``

Attempts to use an object of a certain type

**`Example`**

```ts
player.useType(0x0F52);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | `number` |
| `hue?` | `number` |
| `sourceSerial?` | [`SerialOrEntity`](../modules/#SerialOrEntity) |
| `range?` | `number` |

#### Returns

``null``

___

### moveItem

▸ **moveItem**(`serial`, `container`, `x?`, `y?`, `z?`, `amount?`): `boolean`

Attempts to move an object between containers

**`Example`**

```ts
if(player.equippedItems.robe) {
  player.moveItem(player.equippedItems.robe, player.backpack);
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | [`SerialOrEntity`](../modules/#SerialOrEntity) |
| `container` | [`SerialOrEntity`](../modules/#SerialOrEntity) |
| `x?` | `number` |
| `y?` | `number` |
| `z?` | `number` |
| `amount?` | `number` |

#### Returns

`boolean`

___

### moveItemOnGroundOffset

▸ **moveItemOnGroundOffset**(`serial`, `x?`, `y?`, `z?`, `amount?`): `boolean`

Attempts to move an object around on the ground using an offset

**`Example`**

```ts
const targetInfo = target.queryTarget();
if(targetInfo) {
  player.moveItemOnGroundOffset(targetInfo, 1, 0, 0); // Move item to the east
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `serial` | [`SerialOrEntity`](../modules/#SerialOrEntity) |
| `x?` | `number` |
| `y?` | `number` |
| `z?` | `number` |
| `amount?` | `number` |

#### Returns

`boolean`

___

### moveType

▸ **moveType**(`graphic`, `src`, `dest`, `x?`, `y?`, `z?`, `hue?`, `amount?`, `range?`): `boolean`

Attempts to move an object of a certain type between containers

**`Example`**

```ts
player.moveType(0x0F52, player.backpack, bag);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | `number` |
| `src` | [`SerialOrEntity`](../modules/#SerialOrEntity) |
| `dest` | [`SerialOrEntity`](../modules/#SerialOrEntity) |
| `x?` | `number` |
| `y?` | `number` |
| `z?` | `number` |
| `hue?` | `number` |
| `amount?` | `number` |
| `range?` | `number` |

#### Returns

`boolean`

___

### moveTypeOnGroundOffset

▸ **moveTypeOnGroundOffset**(`graphic`, `src`, `x?`, `y?`, `z?`, `hue?`, `amount?`, `range?`): ``null``

Attempts to move an object of a certain type onto the ground

**`Example`**

```ts
player.moveType(0x0F52, player.backpack); // Move item to the east
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphic` | `number` |
| `src` | [`SerialOrEntity`](../modules/#SerialOrEntity) |
| `x?` | `number` |
| `y?` | `number` |
| `z?` | `number` |
| `hue?` | `number` |
| `amount?` | `number` |
| `range?` | `number` |

#### Returns

``null``

___

### setAbility

▸ **setAbility**(`primary`, `active`): ``null``

Toggle ability on/off

**`Example`**

```ts
player.setAbility(true, false); // Turn primary ability off
player.setAbility(false, true); // Turn secondary ability on
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `primary` | `boolean` |
| `active` | `boolean` |

#### Returns

``null``

___

### walk

▸ **walk**(`direction`): `boolean`

Walk/turn a single step in a direction

**`Example`**

```ts
player.walk(Directors.North);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | [`Directions`](../Directions) |

#### Returns

`boolean`

`True` if character can walk

___

### run

▸ **run**(`direction`): `boolean`

Run/turn a single step in a direction

**`Example`**

```ts
player.run(Directions.South);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | [`Directions`](../Directions) |

#### Returns

`boolean`

`True` if character can run

___

### setSkillLock

▸ **setSkillLock**(`skill`, `lock`): ``null``

Set the status of a skill lock

**`Example`**

```ts
player.setSkillLock(Skills.Anatomy, SkillLock.Down);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `skill` | [`Skills`](../Skills) |
| `lock` | [`SkillLock`](../SkillLock) |

#### Returns

``null``

___

### hasBuffDebuff

▸ **hasBuffDebuff**(`buffID`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffID` | [`BuffDebuffs`](../BuffDebuffs) |

#### Returns

`boolean`

## Accessors

### graphic

• `get` **graphic**(): `number`

Gets the graphic id of the entity.
Returns 0 if entity is no longer on screen.

**`Example`**

```ts
console.log(player.graphic); // e.g. 400
```

#### Returns

`number`

#### Inherited from

Mobile.graphic

___

### x

• `get` **x**(): `number`

Gets the current X coordinate of the entity.
Returns 0 if entity is no longer on screen.

**`Example`**

```ts
const entity = client.findObject(player); // Replace with any other entity serial
console.log(entity.x)
```

#### Returns

`number`

#### Inherited from

Mobile.x

___

### y

• `get` **y**(): `number`

Gets the current Y coordinate of the entity.
Returns 0 if entity is no longer on screen.

**`Example`**

```ts
const entity = client.findObject(player);
console.log(entity.y)
```

#### Returns

`number`

#### Inherited from

Mobile.y

___

### z

• `get` **z**(): `number`

Gets the current Z coordinate of the entity.
Returns 0 if entity is no longer on screen.

**`Example`**

```ts
const entity = client.findObject(player);
console.log(entity.z)
```

#### Returns

`number`

#### Inherited from

Mobile.z

___

### name

• `get` **name**(): `string`

Gets the name of the entity.
Returns an empty string if not known to the client yet.

**`Example`**

```ts
const entity = client.findObject(player.equippedItems.robe);
if(entity) {
 console.log(entity.name);
}
```

#### Returns

`string`

#### Inherited from

Mobile.name

___

### hue

• `get` **hue**(): `number`

Gets the hue/color of the entity.
Returns 0 if entity is no longer on screen.

**`Example`**

```ts
const entity = client.findObject(player.equippedItems.robe);
if(entity) {
 console.log(entity.name);
}
```

#### Returns

`number`

#### Inherited from

Mobile.hue

___

### hits

• `get` **hits**(): `number`

Gets the hits of the entity.
Returns 0 if the client does not know (e.g. item.hits) or the entity is no longer on screen.

**`Example`**

```ts
const entity = client.findObject(0x991);
if(entity) {
 console.log(entity.hits);
}
```

#### Returns

`number`

#### Inherited from

Mobile.hits

___

### maxHits

• `get` **maxHits**(): `number`

Gets the maxHits of the entity.
Returns 0 if the client does not know (e.g. item.maxHits) or the entity is no longer on screen.

**`Example`**

```ts
const entity = client.findObject(0x991);
if(entity) {
 console.log(entity.maxHits);
}
```

#### Returns

`number`

#### Inherited from

Mobile.maxHits

___

### direction

• `get` **direction**(): `number`

Gets the direction of the entity as a number, if it has one.
Returns 0 if the client does not know (e.g. item.maxHits) or the entity is no longer on screen.

Compare using the [Directions enum](../Directions).

**`Example`**

```ts
const entity = client.findObject(0x991);
if(entity) {
  if(entity.direction === Directions.North) {
    console.log(`${entity.name} is facing North`);
  }
  else {
    console.log(Directions[entity.direction]); // Prints the directions name, e.g. East
  }
}
```

#### Returns

`number`

#### Inherited from

Mobile.direction

___

### isHidden

• `get` **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Mobile.isHidden

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

### isYellowHits

• `get` **isYellowHits**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Mobile.isYellowHits

___

### isFemale

• `get` **isFemale**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Mobile.isFemale

___

### notoriety

• `get` **notoriety**(): [`Notorieties`](../Notorieties)

#### Returns

[`Notorieties`](../Notorieties)

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

### isParalyzed

• `get` **isParalyzed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Mobile.isParalyzed

___

### isDead

• `get` **isDead**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Mobile.isDead

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

### primaryAbility

• `get` **primaryAbility**(): [`Abilities`](../Abilities)

#### Returns

[`Abilities`](../Abilities)

___

### secondaryAbility

• `get` **secondaryAbility**(): [`Abilities`](../Abilities)

#### Returns

[`Abilities`](../Abilities)

___

### backpack

• `get` **backpack**(): `undefined` \| [`Item`](../Item)

#### Returns

`undefined` \| [`Item`](../Item)
