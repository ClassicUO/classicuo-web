export interface ShardRules {
  scripting: 'enabled' | 'disabled' | 'disable-ts';
  agents: 'enabled' | 'disabled' | string[];
}
