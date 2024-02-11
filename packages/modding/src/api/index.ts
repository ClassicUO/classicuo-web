import { EventListener, EventMap, EventNames, JournalEntry } from './events';
import { Client } from './client';
import { Player } from './player';
import { ShardRules } from '../types';

export const {
  addEventListener,
  removeEventListener,
  addExtraPlayerBody,
  setShardRules,
  sendWebGumpResponse,
  closeWebGump,
  client,
  player
}: {
  /**
   * Add a listener for a given event.
   */
  addEventListener: <T extends EventNames<EventMap>>(
    event: T,
    fn: EventListener<EventMap, T>,
    once?: boolean
  ) => number;

  /**
   * Remove the listeners of a given event.
   */
  removeEventListener: <T extends EventNames<EventMap>>(listenerId: number) => void;

  addExtraPlayerBody: (
    graphicId: number,
    gumpArtId: number,
    animId: number,
    isFemale: boolean,
    race: number,
    copyEquipConv?: boolean
  ) => void;

  setShardRules: (flags: ShardRules) => boolean;
  sendWebGumpResponse: (serial: number, serverId: number, data: string | Object) => void;
  closeWebGump: (serial: number, serverId: number) => void;
  client: Client;
  player: Player;
} = globalThis as any;
