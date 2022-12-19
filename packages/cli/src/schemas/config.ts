import { z } from 'zod';
import { shardSchema, patchConfigSchema } from '@classicuo/modding';
import * as configJsonSchema from './configJsonSchema.json';

export const configSchema = z.object({
  // $schema: z.string().optional(),
  shard: shardSchema,
  patch: patchConfigSchema
});

export { configJsonSchema };
