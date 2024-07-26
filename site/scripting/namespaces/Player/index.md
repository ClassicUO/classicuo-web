## Classes

<div class="heading-level-3">
<a id="player" name="player"></a>

### Player

This class references the current player whilst in-game and is accessible on the global scope as the `player` variable.

#### Example

```ts
while (true) {
  if (player.hits < 50) {
    player.say('I need healing!');
  }
  sleep(500);
}
```

#### Extends

- [`Mobile`](../Mobile/index.md#mobile)

#### Properties

<div class="heading-level-5">
<a id="backpack" name="backpack"></a>

##### backpack

```ts
backpack: undefined | Item;
```

</div>

---

<div class="heading-level-5">
<a id="coldresistance" name="coldresistance"></a>

##### coldResistance

```ts
coldResistance: number;
```

</div>

---

<div class="heading-level-5">
<a id="damageincrease" name="damageincrease"></a>

##### damageIncrease

```ts
damageIncrease: number;
```

</div>

---

<div class="heading-level-5">
<a id="damagemax" name="damagemax"></a>

##### damageMax

```ts
damageMax: number;
```

</div>

---

<div class="heading-level-5">
<a id="damagemin" name="damagemin"></a>

##### damageMin

```ts
damageMin: number;
```

</div>

---

<div class="heading-level-5">
<a id="defensechanceincrease" name="defensechanceincrease"></a>

##### defenseChanceIncrease

```ts
defenseChanceIncrease: number;
```

</div>

---

<div class="heading-level-5">
<a id="dexterity" name="dexterity"></a>

##### dexterity

```ts
dexterity: number;
```

</div>

---

<div class="heading-level-5">
<a id="direction" name="direction"></a>

##### direction

```ts
direction: number;
```

Gets the direction of the entity as a number, if it has one. Returns 0 if the client does not know (e.g. item.maxHits)
or the entity is no longer on screen.

Compare using the [Directions enum](../enums/#directions).

###### Example

```ts
const entity = client.findObject(0x991);
if (entity) {
  if (entity.direction === Directions.North) {
    console.log(`${entity.name} is facing North`);
  } else {
    console.log(Directions[entity.direction]); // Prints the directions name, e.g. East
  }
}
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`direction`](../Mobile/index.md#direction)

</div>

---

<div class="heading-level-5">
<a id="energyresistance" name="energyresistance"></a>

##### energyResistance

```ts
energyResistance: number;
```

</div>

---

<div class="heading-level-5">
<a id="equippeditems" name="equippeditems"></a>

##### equippedItems

```ts
equippedItems: object;
```

| Member      | Type                            |
| :---------- | :------------------------------ |
| `arms`      | [`Item`](../Item/index.md#item) |
| `beard`     | [`Item`](../Item/index.md#item) |
| `bracelet`  | [`Item`](../Item/index.md#item) |
| `cloak`     | [`Item`](../Item/index.md#item) |
| `earrings`  | [`Item`](../Item/index.md#item) |
| `face`      | [`Item`](../Item/index.md#item) |
| `gloves`    | [`Item`](../Item/index.md#item) |
| `hair`      | [`Item`](../Item/index.md#item) |
| `helmet`    | [`Item`](../Item/index.md#item) |
| `legs`      | [`Item`](../Item/index.md#item) |
| `mount`     | [`Item`](../Item/index.md#item) |
| `necklace`  | [`Item`](../Item/index.md#item) |
| `oneHanded` | [`Item`](../Item/index.md#item) |
| `pants`     | [`Item`](../Item/index.md#item) |
| `ring`      | [`Item`](../Item/index.md#item) |
| `robe`      | [`Item`](../Item/index.md#item) |
| `shirt`     | [`Item`](../Item/index.md#item) |
| `shoes`     | [`Item`](../Item/index.md#item) |
| `skirt`     | [`Item`](../Item/index.md#item) |
| `talisman`  | [`Item`](../Item/index.md#item) |
| `torso`     | [`Item`](../Item/index.md#item) |
| `tunic`     | [`Item`](../Item/index.md#item) |
| `twoHanded` | [`Item`](../Item/index.md#item) |
| `waist`     | [`Item`](../Item/index.md#item) |

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`equippedItems`](../Mobile/index.md#equippeditems)

</div>

---

<div class="heading-level-5">
<a id="fastercastrecovery" name="fastercastrecovery"></a>

##### fasterCastRecovery

```ts
fasterCastRecovery: number;
```

</div>

---

<div class="heading-level-5">
<a id="fastercasting" name="fastercasting"></a>

##### fasterCasting

```ts
fasterCasting: number;
```

</div>

---

<div class="heading-level-5">
<a id="fireresistance" name="fireresistance"></a>

##### fireResistance

```ts
fireResistance: number;
```

</div>

---

<div class="heading-level-5">
<a id="followers" name="followers"></a>

##### followers

```ts
followers: number;
```

</div>

---

<div class="heading-level-5">
<a id="gold" name="gold"></a>

##### gold

```ts
gold: number;
```

</div>

---

<div class="heading-level-5">
<a id="graphic" name="graphic"></a>

##### graphic

```ts
graphic: number;
```

Gets the graphic id of the entity. Returns 0 if entity is no longer on screen.

###### Example

```ts
console.log(player.graphic); // e.g. 400
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`graphic`](../Mobile/index.md#graphic)

</div>

---

<div class="heading-level-5">
<a id="hitchanceincrease" name="hitchanceincrease"></a>

##### hitChanceIncrease

```ts
hitChanceIncrease: number;
```

</div>

---

<div class="heading-level-5">
<a id="hits" name="hits"></a>

##### hits

```ts
hits: number;
```

Gets the hits of the entity. Returns 0 if the client does not know (e.g. item.hits) or the entity is no longer on
screen.

###### Example

```ts
const entity = client.findObject(0x991);
if (entity) {
  console.log(entity.hits);
}
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`hits`](../Mobile/index.md#hits)

</div>

---

<div class="heading-level-5">
<a id="hue" name="hue"></a>

##### hue

```ts
hue: number;
```

Gets the hue/color of the entity. Returns 0 if entity is no longer on screen.

###### Example

```ts
const entity = client.findObject(player.equippedItems.robe);
if (entity) {
  console.log(entity.name);
}
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`hue`](../Mobile/index.md#hue)

</div>

---

<div class="heading-level-5">
<a id="inwarmode" name="inwarmode"></a>

##### inWarMode

```ts
inWarMode: boolean;
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`inWarMode`](../Mobile/index.md#inwarmode)

</div>

---

<div class="heading-level-5">
<a id="intelligence" name="intelligence"></a>

##### intelligence

```ts
intelligence: number;
```

</div>

---

<div class="heading-level-5">
<a id="isdead" name="isdead"></a>

##### isDead

```ts
isDead: boolean;
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`isDead`](../Mobile/index.md#isdead)

</div>

---

<div class="heading-level-5">
<a id="isfemale" name="isfemale"></a>

##### isFemale

```ts
isFemale: boolean;
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`isFemale`](../Mobile/index.md#isfemale)

</div>

---

<div class="heading-level-5">
<a id="ishidden" name="ishidden"></a>

##### isHidden

```ts
isHidden: boolean;
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`isHidden`](../Mobile/index.md#ishidden)

</div>

---

<div class="heading-level-5">
<a id="isparalyzed" name="isparalyzed"></a>

##### isParalyzed

```ts
isParalyzed: boolean;
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`isParalyzed`](../Mobile/index.md#isparalyzed)

</div>

---

<div class="heading-level-5">
<a id="ispoisoned" name="ispoisoned"></a>

##### isPoisoned

```ts
isPoisoned: boolean;
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`isPoisoned`](../Mobile/index.md#ispoisoned)

</div>

---

<div class="heading-level-5">
<a id="isyellowhits" name="isyellowhits"></a>

##### isYellowHits

```ts
isYellowHits: boolean;
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`isYellowHits`](../Mobile/index.md#isyellowhits)

</div>

---

<div class="heading-level-5">
<a id="lowermanacost" name="lowermanacost"></a>

##### lowerManaCost

```ts
lowerManaCost: number;
```

</div>

---

<div class="heading-level-5">
<a id="lowerreagentcost" name="lowerreagentcost"></a>

##### lowerReagentCost

```ts
lowerReagentCost: number;
```

</div>

---

<div class="heading-level-5">
<a id="luck" name="luck"></a>

##### luck

```ts
luck: number;
```

</div>

---

<div class="heading-level-5">
<a id="mana" name="mana"></a>

##### mana

```ts
mana: number;
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`mana`](../Mobile/index.md#mana)

</div>

---

<div class="heading-level-5">
<a id="maxcoldresistence" name="maxcoldresistence"></a>

##### maxColdResistence

```ts
maxColdResistence: number;
```

</div>

---

<div class="heading-level-5">
<a id="maxdefensechanceincrease" name="maxdefensechanceincrease"></a>

##### maxDefenseChanceIncrease

```ts
maxDefenseChanceIncrease: number;
```

</div>

---

<div class="heading-level-5">
<a id="maxenergyresistence" name="maxenergyresistence"></a>

##### maxEnergyResistence

```ts
maxEnergyResistence: number;
```

</div>

---

<div class="heading-level-5">
<a id="maxfireresistence" name="maxfireresistence"></a>

##### maxFireResistence

```ts
maxFireResistence: number;
```

</div>

---

<div class="heading-level-5">
<a id="maxfollowers" name="maxfollowers"></a>

##### maxFollowers

```ts
maxFollowers: number;
```

</div>

---

<div class="heading-level-5">
<a id="maxhits" name="maxhits"></a>

##### maxHits

```ts
maxHits: number;
```

Gets the maxHits of the entity. Returns 0 if the client does not know (e.g. item.maxHits) or the entity is no longer on
screen.

###### Example

```ts
const entity = client.findObject(0x991);
if (entity) {
  console.log(entity.maxHits);
}
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`maxHits`](../Mobile/index.md#maxhits)

</div>

---

<div class="heading-level-5">
<a id="maxmana" name="maxmana"></a>

##### maxMana

```ts
maxMana: number;
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`maxMana`](../Mobile/index.md#maxmana)

</div>

---

<div class="heading-level-5">
<a id="maxphysicresistence" name="maxphysicresistence"></a>

##### maxPhysicResistence

```ts
maxPhysicResistence: number;
```

</div>

---

<div class="heading-level-5">
<a id="maxpoisonresistence" name="maxpoisonresistence"></a>

##### maxPoisonResistence

```ts
maxPoisonResistence: number;
```

</div>

---

<div class="heading-level-5">
<a id="maxstamina" name="maxstamina"></a>

##### maxStamina

```ts
maxStamina: number;
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`maxStamina`](../Mobile/index.md#maxstamina)

</div>

---

<div class="heading-level-5">
<a id="name" name="name"></a>

##### name

```ts
name: string;
```

Gets the name of the entity. Returns an empty string if not known to the client yet.

###### Example

```ts
const entity = client.findObject(player.equippedItems.robe);
if (entity) {
  console.log(entity.name);
}
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`name`](../Mobile/index.md#name)

</div>

---

<div class="heading-level-5">
<a id="notoriety" name="notoriety"></a>

##### notoriety

```ts
notoriety: Notorieties;
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`notoriety`](../Mobile/index.md#notoriety)

</div>

---

<div class="heading-level-5">
<a id="physicalresistance" name="physicalresistance"></a>

##### physicalResistance

```ts
physicalResistance: number;
```

</div>

---

<div class="heading-level-5">
<a id="poisonresistance" name="poisonresistance"></a>

##### poisonResistance

```ts
poisonResistance: number;
```

</div>

---

<div class="heading-level-5">
<a id="primaryability" name="primaryability"></a>

##### primaryAbility

```ts
primaryAbility: Abilities;
```

</div>

---

<div class="heading-level-5">
<a id="secondaryability" name="secondaryability"></a>

##### secondaryAbility

```ts
secondaryAbility: Abilities;
```

</div>

---

<div class="heading-level-5">
<a id="serial" name="serial"></a>

##### serial

```ts
serial: number;
```

###### Overrides

[`Mobile`](../Mobile/index.md#mobile).[`serial`](../Mobile/index.md#serial)

</div>

---

<div class="heading-level-5">
<a id="spelldamageincrease" name="spelldamageincrease"></a>

##### spellDamageIncrease

```ts
spellDamageIncrease: number;
```

</div>

---

<div class="heading-level-5">
<a id="stamina" name="stamina"></a>

##### stamina

```ts
stamina: number;
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`stamina`](../Mobile/index.md#stamina)

</div>

---

<div class="heading-level-5">
<a id="statscap" name="statscap"></a>

##### statsCap

```ts
statsCap: number;
```

</div>

---

<div class="heading-level-5">
<a id="strength" name="strength"></a>

##### strength

```ts
strength: number;
```

</div>

---

<div class="heading-level-5">
<a id="swingspeedincrease" name="swingspeedincrease"></a>

##### swingSpeedIncrease

```ts
swingSpeedIncrease: number;
```

</div>

---

<div class="heading-level-5">
<a id="tithingpoints" name="tithingpoints"></a>

##### tithingPoints

```ts
tithingPoints: number;
```

</div>

---

<div class="heading-level-5">
<a id="weight" name="weight"></a>

##### weight

```ts
weight: number;
```

</div>

---

<div class="heading-level-5">
<a id="weightmax" name="weightmax"></a>

##### weightMax

```ts
weightMax: number;
```

</div>

---

<div class="heading-level-5">
<a id="x" name="x"></a>

##### x

```ts
x: number;
```

Gets the current X coordinate of the entity. Returns 0 if entity is no longer on screen.

###### Example

```ts
const entity = client.findObject(player); // Replace with any other entity serial
console.log(entity.x);
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`x`](../Mobile/index.md#x)

</div>

---

<div class="heading-level-5">
<a id="y" name="y"></a>

##### y

```ts
y: number;
```

Gets the current Y coordinate of the entity. Returns 0 if entity is no longer on screen.

###### Example

```ts
const entity = client.findObject(player);
console.log(entity.y);
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`y`](../Mobile/index.md#y)

</div>

---

<div class="heading-level-5">
<a id="z" name="z"></a>

##### z

```ts
z: number;
```

Gets the current Z coordinate of the entity. Returns 0 if entity is no longer on screen.

###### Example

```ts
const entity = client.findObject(player);
console.log(entity.z);
```

###### Inherited from

[`Mobile`](../Mobile/index.md#mobile).[`z`](../Mobile/index.md#z)

</div>

#### Methods

<div class="heading-level-5">
<a id="attack" name="attack"></a>

##### attack()

```ts
attack(serial: SerialOrEntity): void
```

Attacks a mobile

###### Parameters

| Parameter | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| `serial`  | [`SerialOrEntity`](../GameObject/index.md#serialorentity) |

###### Example

```ts
player.attack(target.lastSerial);
```

</div>

---

<div class="heading-level-5">
<a id="bow" name="bow"></a>

##### bow()

```ts
bow(): void
```

Triggers the `Bow` emote

###### Example

```ts
player.bow();
```

</div>

---

<div class="heading-level-5">
<a id="cast" name="cast"></a>

##### cast()

```ts
cast(spell: string | Spells): void
```

Casts a spell

###### Parameters

| Parameter | Type                                             |
| :-------- | :----------------------------------------------- |
| `spell`   | `string` \| [`Spells`](../enums/index.md#spells) |

###### Example

```ts
player.cast(Spells.Agility);
target.wait();
target.entity(player);
```

</div>

---

<div class="heading-level-5">
<a id="castto" name="castto"></a>

##### castTo()

```ts
castTo(
   spell:
  | Spells
  | "Clumsy"
  | "CreateFood"
  | "Feeblemind"
  | "Heal"
  | "MagicArrow"
  | "NightSight"
  | "ReactiveArmor"
  | "Weaken"
  | "Agility"
  | "Cunning"
  | "Cure"
  | "Harm"
  | "MagicTrap"
  | "RemoveTrap"
  | "Protection"
  | "Strength"
  | "Bless"
  | "Fireball"
  | "MagicLock"
  | "Poison"
  | "Telekinesis"
  | "Teleport"
  | "Unlock"
  | "WallOfStone"
  | "ArchCure"
  | "ArchProtection"
  | "Curse"
  | "FireField"
  | "GreaterHeal"
  | "Lightning"
  | "ManaDrain"
  | "Recall"
  | "BladeSpirits"
  | "DispelField"
  | "Incognito"
  | "MagicReflect"
  | "MindBlast"
  | "Paralyze"
  | "PoisonField"
  | "SummonCreature"
  | "Dispel"
  | "EnergyBolt"
  | "Explosion"
  | "Invisibility"
  | "Mark"
  | "MassCurse"
  | "ParalyzeField"
  | "Reveal"
  | "ChainLightning"
  | "EnergyField"
  | "FlameStrike"
  | "GateTravel"
  | "ManaVampire"
  | "MassDispel"
  | "MeteorSwarm"
  | "Polymorph"
  | "Earthquake"
  | "EnergyVortex"
  | "Resurrection"
  | "AirElemental"
  | "SummonDaemon"
  | "EarthElemental"
  | "FireElemental"
  | "WaterElemental"
  | "AnimateDead"
  | "BloodOath"
  | "CorpseSkin"
  | "CurseWeapon"
  | "EvilOmen"
  | "HorrificBeast"
  | "LichForm"
  | "MindRot"
  | "PainSpike"
  | "PoisonStrike"
  | "Strangle"
  | "SummonFamiliar"
  | "VampiricEmbrace"
  | "VengefulSpirit"
  | "Wither"
  | "WraithForm"
  | "Exorcism"
  | "CleanseByFire"
  | "CloseWounds"
  | "ConsecrateWeapon"
  | "DispelEvil"
  | "DivineFury"
  | "EnemyOfOne"
  | "HolyLight"
  | "NobleSacrifice"
  | "RemoveCurse"
  | "SacredJourney"
  | "HonorableExecution"
  | "Confidence"
  | "Evasion"
  | "CounterAttack"
  | "LightningStrike"
  | "MomentumStrike"
  | "FocusAttack"
  | "DeathStrike"
  | "AnimalForm"
  | "KiAttack"
  | "SurpriseAttack"
  | "Backstab"
  | "Shadowjump"
  | "MirrorImage"
  | "ArcaneCircle"
  | "GiftOfRenewal"
  | "ImmolatingWeapon"
  | "Attunement"
  | "Thunderstorm"
  | "NaturesFury"
  | "SummonFey"
  | "SummonFiend"
  | "ReaperForm"
  | "Wildfire"
  | "EssenceOfWind"
  | "DryadAllure"
  | "EtherealVoyage"
  | "WordOfDeath"
  | "GiftOfLife"
  | "ArcaneEmpowerment"
  | "NetherBolt"
  | "HealingStone"
  | "PurgeMagic"
  | "Enchant"
  | "Sleep"
  | "EagleStrike"
  | "AnimatedWeapon"
  | "StoneForm"
  | "SpellTrigger"
  | "MassSleep"
  | "CleansingWinds"
  | "Bombard"
  | "SpellPlague"
  | "HailStorm"
  | "NetherCyclone"
  | "RisingColossus"
  | "Inspire"
  | "Invigorate"
  | "Resilience"
  | "Perseverance"
  | "Tribulation"
  | "Despair"
  | "DeathRay"
  | "EtherealBurst"
  | "NetherBlast"
  | "MysticWeapon"
  | "CommandUndead"
  | "Conduit"
  | "ManaShield"
  | "SummonReaper"
  | "EnchantedSummoning"
  | "AnticipateHit"
  | "Warcry"
  | "Intuition"
  | "Rejuvenate"
  | "HolyFist"
  | "Shadow"
  | "WhiteTigerForm"
  | "FlamingShot"
  | "PlayingTheOdds"
  | "Thrust"
  | "Pierce"
  | "Stagger"
  | "Toughness"
  | "Onslaught"
  | "FocusedEye"
  | "ElementalFury"
  | "CalledShot"
  | "WarriorsGifts"
  | "ShieldBash"
  | "Bodyguard"
  | "HeightenSenses"
  | "Tolerance"
  | "InjectedStrike"
  | "Potency"
  | "Rampage"
  | "FistsOfFury"
  | "Knockout"
  | "Whispering"
  | "CombatTraining"
  | "Boarding",
   serial: SerialOrEntity,
   timeout?: number): void
```

Casts a spell and automatically targets the given serial on the next target

###### Parameters

| Parameter  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `spell`    | \| [`Spells`](../enums/index.md#spells) \| `"Clumsy"` \| `"CreateFood"` \| `"Feeblemind"` \| `"Heal"` \| `"MagicArrow"` \| `"NightSight"` \| `"ReactiveArmor"` \| `"Weaken"` \| `"Agility"` \| `"Cunning"` \| `"Cure"` \| `"Harm"` \| `"MagicTrap"` \| `"RemoveTrap"` \| `"Protection"` \| `"Strength"` \| `"Bless"` \| `"Fireball"` \| `"MagicLock"` \| `"Poison"` \| `"Telekinesis"` \| `"Teleport"` \| `"Unlock"` \| `"WallOfStone"` \| `"ArchCure"` \| `"ArchProtection"` \| `"Curse"` \| `"FireField"` \| `"GreaterHeal"` \| `"Lightning"` \| `"ManaDrain"` \| `"Recall"` \| `"BladeSpirits"` \| `"DispelField"` \| `"Incognito"` \| `"MagicReflect"` \| `"MindBlast"` \| `"Paralyze"` \| `"PoisonField"` \| `"SummonCreature"` \| `"Dispel"` \| `"EnergyBolt"` \| `"Explosion"` \| `"Invisibility"` \| `"Mark"` \| `"MassCurse"` \| `"ParalyzeField"` \| `"Reveal"` \| `"ChainLightning"` \| `"EnergyField"` \| `"FlameStrike"` \| `"GateTravel"` \| `"ManaVampire"` \| `"MassDispel"` \| `"MeteorSwarm"` \| `"Polymorph"` \| `"Earthquake"` \| `"EnergyVortex"` \| `"Resurrection"` \| `"AirElemental"` \| `"SummonDaemon"` \| `"EarthElemental"` \| `"FireElemental"` \| `"WaterElemental"` \| `"AnimateDead"` \| `"BloodOath"` \| `"CorpseSkin"` \| `"CurseWeapon"` \| `"EvilOmen"` \| `"HorrificBeast"` \| `"LichForm"` \| `"MindRot"` \| `"PainSpike"` \| `"PoisonStrike"` \| `"Strangle"` \| `"SummonFamiliar"` \| `"VampiricEmbrace"` \| `"VengefulSpirit"` \| `"Wither"` \| `"WraithForm"` \| `"Exorcism"` \| `"CleanseByFire"` \| `"CloseWounds"` \| `"ConsecrateWeapon"` \| `"DispelEvil"` \| `"DivineFury"` \| `"EnemyOfOne"` \| `"HolyLight"` \| `"NobleSacrifice"` \| `"RemoveCurse"` \| `"SacredJourney"` \| `"HonorableExecution"` \| `"Confidence"` \| `"Evasion"` \| `"CounterAttack"` \| `"LightningStrike"` \| `"MomentumStrike"` \| `"FocusAttack"` \| `"DeathStrike"` \| `"AnimalForm"` \| `"KiAttack"` \| `"SurpriseAttack"` \| `"Backstab"` \| `"Shadowjump"` \| `"MirrorImage"` \| `"ArcaneCircle"` \| `"GiftOfRenewal"` \| `"ImmolatingWeapon"` \| `"Attunement"` \| `"Thunderstorm"` \| `"NaturesFury"` \| `"SummonFey"` \| `"SummonFiend"` \| `"ReaperForm"` \| `"Wildfire"` \| `"EssenceOfWind"` \| `"DryadAllure"` \| `"EtherealVoyage"` \| `"WordOfDeath"` \| `"GiftOfLife"` \| `"ArcaneEmpowerment"` \| `"NetherBolt"` \| `"HealingStone"` \| `"PurgeMagic"` \| `"Enchant"` \| `"Sleep"` \| `"EagleStrike"` \| `"AnimatedWeapon"` \| `"StoneForm"` \| `"SpellTrigger"` \| `"MassSleep"` \| `"CleansingWinds"` \| `"Bombard"` \| `"SpellPlague"` \| `"HailStorm"` \| `"NetherCyclone"` \| `"RisingColossus"` \| `"Inspire"` \| `"Invigorate"` \| `"Resilience"` \| `"Perseverance"` \| `"Tribulation"` \| `"Despair"` \| `"DeathRay"` \| `"EtherealBurst"` \| `"NetherBlast"` \| `"MysticWeapon"` \| `"CommandUndead"` \| `"Conduit"` \| `"ManaShield"` \| `"SummonReaper"` \| `"EnchantedSummoning"` \| `"AnticipateHit"` \| `"Warcry"` \| `"Intuition"` \| `"Rejuvenate"` \| `"HolyFist"` \| `"Shadow"` \| `"WhiteTigerForm"` \| `"FlamingShot"` \| `"PlayingTheOdds"` \| `"Thrust"` \| `"Pierce"` \| `"Stagger"` \| `"Toughness"` \| `"Onslaught"` \| `"FocusedEye"` \| `"ElementalFury"` \| `"CalledShot"` \| `"WarriorsGifts"` \| `"ShieldBash"` \| `"Bodyguard"` \| `"HeightenSenses"` \| `"Tolerance"` \| `"InjectedStrike"` \| `"Potency"` \| `"Rampage"` \| `"FistsOfFury"` \| `"Knockout"` \| `"Whispering"` \| `"CombatTraining"` \| `"Boarding"` |
| `serial`   | [`SerialOrEntity`](../GameObject/index.md#serialorentity)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `timeout`? | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

###### Example

```ts
player.castTo(Spells.Heal, player);
```

</div>

---

<div class="heading-level-5">
<a id="click" name="click"></a>

##### click()

```ts
click(serial: SerialOrEntity): void
```

Simulates clicking an object

###### Parameters

| Parameter | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| `serial`  | [`SerialOrEntity`](../GameObject/index.md#serialorentity) |

###### Example

```ts
player.click(player);
```

</div>

---

<div class="heading-level-5">
<a id="equip" name="equip"></a>

##### equip()

```ts
equip(serial: SerialOrEntity): void
```

Attempts to equip an item if possible

###### Parameters

| Parameter | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| `serial`  | [`SerialOrEntity`](../GameObject/index.md#serialorentity) |

###### Example

```ts
const axe = client.findType(0x0f49); // Axe graphic ID
player.equip(axe);
```

</div>

---

<div class="heading-level-5">
<a id="fly" name="fly"></a>

##### fly()

```ts
fly(): void
```

Attempt to fly... if you can.

###### Example

```ts
player.fly();
```

</div>

---

<div class="heading-level-5">
<a id="getallskills" name="getallskills"></a>

##### getAllSkills()

```ts
getAllSkills(): undefined | object[]
```

Gets an array of all the skill values

###### Returns

`undefined` | `object`\[]

###### Example

```ts
const skills = player.getSkills();
console.log(skills[0].value); // Print Alchemy skill value
```

</div>

---

<div class="heading-level-5">
<a id="getskill" name="getskill"></a>

##### getSkill()

```ts
getSkill(skill: Skills): undefined | object
```

Gets an object containing the values of a skill. The actual `value` of the skill is represented as an integer value with
no decimal. e.g. 74.6 would be 746

###### Parameters

| Parameter | Type                                 |
| :-------- | :----------------------------------- |
| `skill`   | [`Skills`](../enums/index.md#skills) |

###### Returns

`undefined` | `object`

###### Example

```ts
const anatomySkill = player.getSkill(Skills.Anatomy).value;
```

</div>

---

<div class="heading-level-5">
<a id="hasbuffdebuff" name="hasbuffdebuff"></a>

##### hasBuffDebuff()

```ts
hasBuffDebuff(buffID: BuffDebuffs): boolean
```

###### Parameters

| Parameter | Type                                           |
| :-------- | :--------------------------------------------- |
| `buffID`  | [`BuffDebuffs`](../enums/index.md#buffdebuffs) |

###### Returns

`boolean`

</div>

---

<div class="heading-level-5">
<a id="land" name="land"></a>

##### land()

```ts
land(): void
```

Turn off flying and land

###### Example

```ts
player.land();
```

</div>

---

<div class="heading-level-5">
<a id="moveitem" name="moveitem"></a>

##### moveItem()

```ts
moveItem(
   serial: SerialOrEntity,
   container: SerialOrEntity,
   x?: number,
   y?: number,
   z?: number,
   amount?: number): number
```

Attempts to move an object between containers

###### Parameters

| Parameter   | Type                                                      |
| :---------- | :-------------------------------------------------------- |
| `serial`    | [`SerialOrEntity`](../GameObject/index.md#serialorentity) |
| `container` | [`SerialOrEntity`](../GameObject/index.md#serialorentity) |
| `x`?        | `number`                                                  |
| `y`?        | `number`                                                  |
| `z`?        | `number`                                                  |
| `amount`?   | `number`                                                  |

###### Returns

`number`

###### Example

```ts
if (player.equippedItems.robe) {
  player.moveItem(player.equippedItems.robe, player.backpack);
}
```

</div>

---

<div class="heading-level-5">
<a id="moveitemongroundoffset" name="moveitemongroundoffset"></a>

##### moveItemOnGroundOffset()

```ts
moveItemOnGroundOffset(
   serial: SerialOrEntity,
   x?: number,
   y?: number,
   z?: number,
   amount?: number): number
```

Attempts to move an object around on the ground using an offset

###### Parameters

| Parameter | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| `serial`  | [`SerialOrEntity`](../GameObject/index.md#serialorentity) |
| `x`?      | `number`                                                  |
| `y`?      | `number`                                                  |
| `z`?      | `number`                                                  |
| `amount`? | `number`                                                  |

###### Returns

`number`

###### Example

```ts
const targetInfo = target.queryTarget();
if (targetInfo) {
  player.moveItemOnGroundOffset(targetInfo, 1, 0, 0); // Move item to the east
}
```

</div>

---

<div class="heading-level-5">
<a id="movetype" name="movetype"></a>

##### moveType()

```ts
moveType(
   graphic: number,
   src: SerialOrEntity,
   dest: SerialOrEntity,
   x?: number,
   y?: number,
   z?: number,
   hue?: number,
   amount?: number,
   range?: number): number
```

Attempts to move an object of a certain type between containers

###### Parameters

| Parameter | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| `graphic` | `number`                                                  |
| `src`     | [`SerialOrEntity`](../GameObject/index.md#serialorentity) |
| `dest`    | [`SerialOrEntity`](../GameObject/index.md#serialorentity) |
| `x`?      | `number`                                                  |
| `y`?      | `number`                                                  |
| `z`?      | `number`                                                  |
| `hue`?    | `number`                                                  |
| `amount`? | `number`                                                  |
| `range`?  | `number`                                                  |

###### Returns

`number`

###### Example

```ts
player.moveType(0x0f52, player.backpack, bag);
```

</div>

---

<div class="heading-level-5">
<a id="movetypeongroundoffset" name="movetypeongroundoffset"></a>

##### moveTypeOnGroundOffset()

```ts
moveTypeOnGroundOffset(
   graphic: number,
   src: SerialOrEntity,
   x?: number,
   y?: number,
   z?: number,
   hue?: number,
   amount?: number,
   range?: number): number
```

Attempts to move an object of a certain type onto the ground

###### Parameters

| Parameter | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| `graphic` | `number`                                                  |
| `src`     | [`SerialOrEntity`](../GameObject/index.md#serialorentity) |
| `x`?      | `number`                                                  |
| `y`?      | `number`                                                  |
| `z`?      | `number`                                                  |
| `hue`?    | `number`                                                  |
| `amount`? | `number`                                                  |
| `range`?  | `number`                                                  |

###### Returns

`number`

###### Example

```ts
player.moveType(0x0f52, player.backpack); // Move item to the east
```

</div>

---

<div class="heading-level-5">
<a id="opendoor" name="opendoor"></a>

##### openDoor()

```ts
openDoor(): void
```

Uses any door directly in-front of where the player is facing

###### Example

```ts
player.openDoor();
```

</div>

---

<div class="heading-level-5">
<a id="run" name="run"></a>

##### run()

```ts
run(direction: Directions): boolean
```

Run/turn a single step in a direction

###### Parameters

| Parameter   | Type                                         |
| :---------- | :------------------------------------------- |
| `direction` | [`Directions`](../enums/index.md#directions) |

###### Returns

`boolean`

`True` if character can run

###### Example

```ts
player.run(Directions.South);
```

</div>

---

<div class="heading-level-5">
<a id="salute" name="salute"></a>

##### salute()

```ts
salute(): void
```

Triggers the `Salute` emote

###### Example

```ts
player.salute();
```

</div>

---

<div class="heading-level-5">
<a id="say" name="say"></a>

##### say()

```ts
say(message: string, hue?: number): void
```

Sends a chat message as your player, with an optional hue for the message.

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `message` | `string` |
| `hue`?    | `number` |

###### Example

```ts
player.say('Hello there!');
```

</div>

---

<div class="heading-level-5">
<a id="setability" name="setability"></a>

##### setAbility()

```ts
setAbility(primary: boolean, active: boolean): void
```

Toggle ability on/off

###### Parameters

| Parameter | Type      |
| :-------- | :-------- |
| `primary` | `boolean` |
| `active`  | `boolean` |

###### Example

```ts
player.setAbility(true, false); // Turn primary ability off
player.setAbility(false, true); // Turn secondary ability on
```

</div>

---

<div class="heading-level-5">
<a id="setskilllock" name="setskilllock"></a>

##### setSkillLock()

```ts
setSkillLock(skill: Skills, lock: SkillLock): void
```

Set the status of a skill lock

###### Parameters

| Parameter | Type                                       |
| :-------- | :----------------------------------------- |
| `skill`   | [`Skills`](../enums/index.md#skills)       |
| `lock`    | [`SkillLock`](../enums/index.md#skilllock) |

###### Example

```ts
player.setSkillLock(Skills.Anatomy, SkillLock.Down);
```

</div>

---

<div class="heading-level-5">
<a id="toggleflying" name="toggleflying"></a>

##### toggleFlying()

```ts
toggleFlying(): void
```

Toggles flying, provided you are a Gargoyle.

###### Example

```ts
player.toggleFlying();
```

</div>

---

<div class="heading-level-5">
<a id="togglewarmode" name="togglewarmode"></a>

##### toggleWarMode()

```ts
toggleWarMode(): void
```

Toggle War Mode

###### Example

```ts
player.toggleWarMode();
```

</div>

---

<div class="heading-level-5">
<a id="use" name="use"></a>

##### use()

```ts
use(serial: SerialOrEntity): void
```

Attempts to use an object if possible

###### Parameters

| Parameter | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| `serial`  | [`SerialOrEntity`](../GameObject/index.md#serialorentity) |

###### Example

```ts
const dagger = client.findType(0x0f52); // Dagger graphic ID
player.use(dagger);
```

</div>

---

<div class="heading-level-5">
<a id="useiteminhand" name="useiteminhand"></a>

##### useItemInHand()

```ts
useItemInHand(): void
```

Uses the item currently in your left-hand first, otherwise it will try the right.

###### Example

```ts
player.useItemInHand();
```

</div>

---

<div class="heading-level-5">
<a id="uselastobject" name="uselastobject"></a>

##### useLastObject()

```ts
useLastObject(): void
```

Uses the last object you double-clicked

###### Example

```ts
player.useLastObject();
```

</div>

---

<div class="heading-level-5">
<a id="useskill" name="useskill"></a>

##### useSkill()

```ts
useSkill(
   skill:
  | "RemoveTrap"
  | Skills
  | "Alchemy"
  | "Anatomy"
  | "AnimalLore"
  | "ItemID"
  | "ArmsLore"
  | "Parry"
  | "Begging"
  | "Blacksmith"
  | "Fletching"
  | "Peacemaking"
  | "Camping"
  | "Carpentry"
  | "Cartography"
  | "Cooking"
  | "DetectHidden"
  | "Discordance"
  | "EvalInt"
  | "Healing"
  | "Fishing"
  | "Forensics"
  | "Herding"
  | "Hiding"
  | "Provocation"
  | "Inscribe"
  | "Lockpicking"
  | "Magery"
  | "MagicResist"
  | "Tactics"
  | "Snooping"
  | "Musicianship"
  | "Poisoning"
  | "Archery"
  | "SpiritSpeak"
  | "Stealing"
  | "Tailoring"
  | "AnimalTaming"
  | "TasteID"
  | "Tinkering"
  | "Tracking"
  | "Veterinary"
  | "Swords"
  | "Macing"
  | "Fencing"
  | "Wrestling"
  | "Lumberjacking"
  | "Mining"
  | "Meditation"
  | "Stealth"
  | "Necromancy"
  | "Focus"
  | "Chivalry"
  | "Bushido"
  | "Ninjitsu"
  | "Spellweaving"
  | "Mysticism"
  | "Imbuing"
  | "Throwing",
   target?: SerialOrEntity,
   timeout?: number): void
```

Uses a skill

###### Parameters

| Parameter  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `skill`    | \| `"RemoveTrap"` \| [`Skills`](../enums/index.md#skills) \| `"Alchemy"` \| `"Anatomy"` \| `"AnimalLore"` \| `"ItemID"` \| `"ArmsLore"` \| `"Parry"` \| `"Begging"` \| `"Blacksmith"` \| `"Fletching"` \| `"Peacemaking"` \| `"Camping"` \| `"Carpentry"` \| `"Cartography"` \| `"Cooking"` \| `"DetectHidden"` \| `"Discordance"` \| `"EvalInt"` \| `"Healing"` \| `"Fishing"` \| `"Forensics"` \| `"Herding"` \| `"Hiding"` \| `"Provocation"` \| `"Inscribe"` \| `"Lockpicking"` \| `"Magery"` \| `"MagicResist"` \| `"Tactics"` \| `"Snooping"` \| `"Musicianship"` \| `"Poisoning"` \| `"Archery"` \| `"SpiritSpeak"` \| `"Stealing"` \| `"Tailoring"` \| `"AnimalTaming"` \| `"TasteID"` \| `"Tinkering"` \| `"Tracking"` \| `"Veterinary"` \| `"Swords"` \| `"Macing"` \| `"Fencing"` \| `"Wrestling"` \| `"Lumberjacking"` \| `"Mining"` \| `"Meditation"` \| `"Stealth"` \| `"Necromancy"` \| `"Focus"` \| `"Chivalry"` \| `"Bushido"` \| `"Ninjitsu"` \| `"Spellweaving"` \| `"Mysticism"` \| `"Imbuing"` \| `"Throwing"` |
| `target`?  | [`SerialOrEntity`](../GameObject/index.md#serialorentity)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `timeout`? | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

###### Example

````ts
player.useSkill(Skills.Meditation);

@example Use skill and target yourself
```ts
player.useSkill(Skills.Anatomy);
````

</div>

---

<div class="heading-level-5">
<a id="usetype" name="usetype"></a>

##### useType()

```ts
useType(
   graphic: number,
   hue?: number,
   sourceSerial?: SerialOrEntity,
   range?: number): boolean
```

Attempts to use an object of a certain type

###### Parameters

| Parameter       | Type                                                      |
| :-------------- | :-------------------------------------------------------- |
| `graphic`       | `number`                                                  |
| `hue`?          | `number`                                                  |
| `sourceSerial`? | [`SerialOrEntity`](../GameObject/index.md#serialorentity) |
| `range`?        | `number`                                                  |

###### Returns

`boolean`

###### Example

```ts
const myFriend = 0x217ded;
player.useType(0xe21); // Bandage type
target.wait(5000);
target.entity(myFriend);
```

</div>

---

<div class="heading-level-5">
<a id="usevirtue" name="usevirtue"></a>

##### useVirtue()

```ts
useVirtue(
   virtue: Virtues | "Honor" | "Sacrifice" | "Valor",
   target?: SerialOrEntity,
   timeout?: number): void
```

Uses a virtue

###### Parameters

| Parameter  | Type                                                                              |
| :--------- | :-------------------------------------------------------------------------------- |
| `virtue`   | [`Virtues`](../enums/index.md#virtues) \| `"Honor"` \| `"Sacrifice"` \| `"Valor"` |
| `target`?  | [`SerialOrEntity`](../GameObject/index.md#serialorentity)                         |
| `timeout`? | `number`                                                                          |

###### Example

````ts
player.useVirtue(Virtues.Honor);

@example Use virtue and target yourself
```ts
player.useVirtue(Virtues.Honor);
````

</div>

---

<div class="heading-level-5">
<a id="waitforbuffdebuff" name="waitforbuffdebuff"></a>

##### waitForBuffDebuff()

```ts
waitForBuffDebuff(buffId: BuffDebuffs, timeoutMs?: number): null | boolean
```

###### Parameters

| Parameter    | Type                                           |
| :----------- | :--------------------------------------------- |
| `buffId`     | [`BuffDebuffs`](../enums/index.md#buffdebuffs) |
| `timeoutMs`? | `number`                                       |

###### Returns

`null` | `boolean`

</div>

---

<div class="heading-level-5">
<a id="walk" name="walk"></a>

##### walk()

```ts
walk(direction: Directions): boolean
```

Walk/turn a single step in a direction

###### Parameters

| Parameter   | Type                                         |
| :---------- | :------------------------------------------- |
| `direction` | [`Directions`](../enums/index.md#directions) |

###### Returns

`boolean`

`True` if character can walk

###### Example

```ts
player.walk(Directions.North);
```

</div>
</div>
