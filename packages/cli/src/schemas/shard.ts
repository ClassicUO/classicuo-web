import { z } from 'zod';

export const shardSchema = z.object({
  id: z.number(),
  manifest: z.string().url(),
  mods: z
    .array(
      z.object({
        name: z.string(),
        url: z.string().url()
      })
    )
    .optional(),
  logo: z.string().url(),
  name: z.string(),
  region: z.string(),
  focus: z.string(),
  website: z.string().url(),
  discord: z.string().url().optional(),
  encryption: z.number(),
  clientVersion: z.string(),
  useVerdata: z.boolean(),
  mapLayouts: z.string(),
  useTokenAuth: z.boolean(),
  testing: z.boolean().optional()
});
