export type ValidEventTypes = string | symbol | object;
export type EventNames<T extends ValidEventTypes> = T extends string | symbol ? T : keyof T;
export type ArgumentMap<T extends object> = {
  [K in keyof T]: T[K] extends (...args: any[]) => void ? Parameters<T[K]> : T[K] extends any[] ? T[K] : any[];
};
export type EventListener<T extends ValidEventTypes, K extends EventNames<T>> = T extends string | symbol
  ? (...args: any[]) => void
  : (...args: ArgumentMap<Exclude<T, string | symbol>>[Extract<K, keyof T>]) => void;

export interface EventMap {
  journalEntry: (ev: JournalEntry) => void;
  playerCreated: (ev: any) => void;
  worldClear: (ev: any) => void;
  profileLoaded: (ev: any) => void;
  gumpUpdate: (ev: GumpUpdateEvent) => void;
  gumpClose: (ev: GumpCloseEvent) => void;
  [K: `webGump:${string}:update`]: (ev: GumpUpdateEvent) => void;
  [K: `webGump:${string}:close`]: (ev: GumpUpdateEvent) => void;
}

export interface JournalEntry {
  serial: number;
  text: string;
  name: string;
  hue: number;
  type:
    | 'Regular'
    | 'System'
    | 'Emote'
    | 'Limit3Spell'
    | 'Label'
    | 'Focus'
    | 'Whisper'
    | 'Yell'
    | 'Spell'
    | 'Guild'
    | 'Alliance'
    | 'Command'
    | 'Encoded'
    | 'Party';
  font: number;
  textType: 'CLIENT' | 'SYSTEM' | 'OBJECT' | 'GUILD_ALLY';
  unicode: boolean;
  time: string;
  hueArgb: number;
}

export interface GumpIdentity {
  serial: number;
  serverId: number;
}

export interface GumpUpdateEvent extends GumpIdentity {
  type: string;
  json: string;
}

export interface GumpCloseEvent extends GumpIdentity {}

export interface GumpInfo extends GumpIdentity {
  type: string;
  data: any;
}
