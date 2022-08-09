import { z } from 'zod';


export const shardSchema = z.object({
  id: z.number(),
  manifest: z.string().url(),
  logo: z.string().url(),
  name: z.string(),
  region: z.enum(["US", "EU", "OCE", "ASIA", "BR"]),
  focus: z.string(),
  website: z.string().url(),
  discord: z.string().url().optional(),
  encryption: z.number(),
  clientVersion: z.string(),
  useVerdata: z.boolean(),
  mapLayouts: z.string(),
  useTokenAuth: z.boolean(),
  testing: z.boolean().optional()
})
