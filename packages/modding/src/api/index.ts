import { EventListener, EventMap, EventNames, JournalEntry } from './events';
import { Client } from './client';
import { Player } from './player';

/**
 * Add a listener for a given event.
 */
declare const addEventListener: <T extends EventNames<EventMap>>(
  event: T,
  fn: EventListener<EventMap, T>,
  once?: boolean
) => number;

/**
 * Remove the listeners of a given event.
 */
declare const removeEventListener: <T extends EventNames<EventMap>>(listenerId: number) => void;

declare const client: Client;
declare const player: Player;
export { client, player, addEventListener, removeEventListener };
