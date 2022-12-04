import { Client } from './api/client';
import { Player } from './api/player';

global {
  const player: Player;
  const client: Client;
  function sleep(ms: number): void;
}
