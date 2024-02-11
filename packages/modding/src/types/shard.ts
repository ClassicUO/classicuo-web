import { z } from 'zod';
import { shardRulesSchema } from './rules';
import { regionSchema } from './regions';

export type Shard = z.infer<typeof shardSchema>;

export const focusSchema = z.union([z.literal('PvP'), z.literal('PvM'), z.literal('PvP / PvM')]);

export const shardSchema = z.object({
  id: z.number(),
  manifest: z
    .string()
    .url()
    .regex(/^https:\/\/[^/]+/),
  mods: z
    .array(
      z.object({
        name: z.string(),
        url: z.string().url()
      })
    )
    .optional(),
  rules: shardRulesSchema.optional(),
  logo: z.string().url(),
  name: z.string().max(80),
  region: regionSchema,
  focus: focusSchema,
  website: z
    .string()
    .regex(/^https:\/\/[^/]+/)
    .url(),
  discord: z
    .string()
    .url()
    .regex(/^https:\/\/discord\.gg\/[^/]+/)
    .optional(),
  encryption: z.number(),
  clientVersion: z.string().regex(/^(\d+\.\d+\.\d+(\.\d+)?[a-z]*)$/),
  useVerdata: z.boolean(),
  mapLayouts: z.string().regex(/^(\d+,\d+;?)*/),
  useTokenAuth: z.boolean().optional(),
  testing: z.boolean().optional(),
  emulatorType: z.number().optional()
});
