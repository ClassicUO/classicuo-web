export interface Client {
  readonly castSpell: (id: number) => null;
  /**
   * Sends a chat message as your player, with an optional hue for the message.
   *
   * Can be used to send server chat commands, e.g. **[help**
   */
  readonly say: (message: string, hue?: number | undefined) => Promise<null>;
  readonly sysMsg: (message: string, hue?: number | undefined) => Promise<null>;
  readonly headMsg: (message: string, serial: number, hue?: number | undefined) => Promise<null>;
  readonly useSkill: (id: number) => Promise<null>;
  readonly equipItem: (serial: number) => Promise<null>;
  readonly unequipItem: (serial: number) => Promise<null>;
  readonly attack: (serial: number) => Promise<null>;
  readonly fly: () => Promise<null>;
  readonly land: () => Promise<null>;
}
