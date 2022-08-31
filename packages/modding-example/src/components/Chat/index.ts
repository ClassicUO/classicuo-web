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

export type MessageFilter = (m: JournalEntry) => boolean;

export interface ChatTabEntry {
  name: string;
  filter: MessageFilter;
  default: true;
}

export const formatMessage = (m: JournalEntry) => {
  switch (m.type) {
    case 'System':
    case 'Regular':
      if (m.textType === 'SYSTEM') {
        return `System: ${m.text}`;
      } else {
        return `${m.name ? m.name + ' says' : 'Speech'}: ${m.text}`;
      }
    case 'Emote':
      return `${m.name ? m.name + ' emotes' : 'Emote'}: ${m.text}`;
    case 'Spell':
    case 'Limit3Spell':
      return `${m.name ? m.name + ' casts' : 'Spell'}: ${m.text}`;
    case 'Focus':
      break;
    case 'Whisper':
      return `${m.name ? m.name + ' whispers' : 'Whisper'}: ${m.text}`;
    case 'Yell':
      return `${m.name ? m.name + ' yells' : 'Yell'}: ${m.text}`;
    case 'Guild':
      return `[Guild]${m.name}: ${m.text}`;
    case 'Alliance':
      return `[Alliance]${m.name}: ${m.text}`;
    case 'Command':
      return `[Command]${m.name}: ${m.text}`;
    case 'Encoded':
      return `[Encoded]${m.name}: ${m.text}`;
    case 'Party':
      return `[Party] ${m.name}: ${m.text}`;
    case 'Label':
      return `You see: ${m.text}`;
  }

  return m.text;
};

export const defaultTabs: ChatTabEntry[] = [
  {
    name: 'All',
    filter: () => true,
    default: true
  },
  {
    name: 'System',
    filter: (entry: JournalEntry) => entry.textType === 'SYSTEM' || entry.type === 'System',
    default: true
  },
  {
    name: 'Journal',
    filter: (entry: JournalEntry) => entry.textType !== 'SYSTEM',
    default: true
  },
  {
    name: 'Spells',
    filter: (entry: JournalEntry) => entry.type === 'Spell' || entry.type === 'Limit3Spell',
    default: true
  }
];
