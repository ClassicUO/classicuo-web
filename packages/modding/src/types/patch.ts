import { z } from 'zod';

export const patchSchema = z.object({
  source: z.string(),
  file: z.string(),
  sha256: z.string(),
  length: z.number(),
  size: z.number()
});

export const patchConfigSchema = z.object({
  cdnBase: z
    .string()
    .url()
    .regex(/^https:\/\/[^/]+/),
  b2: z
    .object({
      accountId: z.string(),
      applicationKey: z.string(),
      bucket: z.string()
    })
    .optional(),
  files: z.array(z.string())
});

export type Patch = z.infer<typeof patchSchema>;
export type PatchConfig = z.infer<typeof patchConfigSchema>;
