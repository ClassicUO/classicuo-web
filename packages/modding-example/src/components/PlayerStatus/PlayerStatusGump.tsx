import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { cursors, View, client, player } from '@classicuo/modding';
import { useWebGump } from '@classicuo/modding/src/hooks/useWebGump';

export interface PlayerStatusData {
  name: string;
  nameHue: number;
  female: boolean;
  hits: number;
  hitsMax: number;
  isPoisoned: boolean;
  isYellowHits: boolean;
  str: number;
  dex: number;
  int: number;
  stam: number;
  stamMax: number;
  mana: number;
  manaMax: number;
  totalGold: number;
  physicalResistance: number;
  armorRating: number;
  totalWeight: number;
  maxWeight: number;
  race: string;
  statCap: number;
  followers: number;
  followersMax: number;
  fireResistance: number;
  coldResistance: number;
  poisonResistance: number;
  energyResistance: number;
  luck: number;
  tithingPoints: number;
  hunger: number;
  healingBonus: number;
  magicImmunity: number;
  magicReflection: number;
  physicalResist: number;
  poisonImmunity: number;
  fireResist: number;
  waterResist: number;
  airResist: number;
  earthResist: number;
  necroResist: number;
  shortTermMurders: number;
  kills: number;
  minDamage: number;
  maxDamage: number;
}

const Space = styled.div`
  //padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;

  pre {
    //padding: 1rem;
  }

  h1 {
    //padding-top: 1rem;
  }
`;

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
`;

// const StatusFillBar: React.FC<{
//   fillGraphic: number;
//   value: number;
//   max: number;
//   width?: number;
//   height?: number;
// }> = ({ value, max, fillGraphic, width = 110, height = 11 }) => (
//   <div style={{ padding: '1px' }}>
//     <div style={{ position: 'relative', height }}>
//       <TextureImage style={{ position: 'absolute' }} art={0x0805} size={{ width, height }} />
//       <section
//         style={{
//           display: 'flex',
//           position: 'absolute',
//           zIndex: 1,
//           maxWidth: (width * (value * 100)) / max / 100,
//           overflow: 'hidden'
//         }}
//       >
//         <TextureImage art={fillGraphic} size={{ height, width }} />
//       </section>
//     </div>
//   </div>
// );

export const PlayerStatusGump = () => {
  const gump = useWebGump('WebPlayerStatusGump');

  if (gump.closed) {
    return null;
  }

  const { data } = gump;

  return (
    <View
      cursors={cursors}
      width={500}
      height={300}
      draggable={true}
      resizeable={true}
      initialPosition={{ x: 500, y: 200 }}
    >
      <Container>
        <Space
          onClick={async (e) => {
            // if (e.button === 0 && (await ipc?.client.isTargeting())) {
            //   ipc?.client.target(await ipc?.player.serial);
            // }
          }}
        >
          <div>
            <h1>{data.name}</h1>

            {/*<StatusFillBar*/}
            {/*  value={data.hits}*/}
            {/*  max={data.hitsMax}*/}
            {/*  fillGraphic={data.isYellowHits ? 0x0809 : data.isPoisoned ? 0x0808 : 0x0806}*/}
            {/*/>*/}
            {/*<StatusFillBar value={data.mana} max={data.manaMax} fillGraphic={0x0806} />*/}
            {/*<StatusFillBar value={data.stam} max={data.stamMax} fillGraphic={0x0806} />*/}
            <pre>{JSON.stringify(Object.keys(client), null, 2)}</pre>
          </div>
        </Space>
      </Container>
    </View>
  );
};
