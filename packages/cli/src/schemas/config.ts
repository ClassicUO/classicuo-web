import { z } from 'zod';
import { shardSchema } from './shard';
import { patchConfigSchema } from './patch';


export const configSchema = z.object({
  shard: shardSchema,
  patch: patchConfigSchema,
})
