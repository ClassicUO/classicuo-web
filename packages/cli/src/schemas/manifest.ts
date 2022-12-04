import { z } from 'zod';
import { patchSchema } from './patch';

export const clientManifestSchema = z.object({
  source: z.string(),
  target: z.string(),
  shardId: z.number().gt(0),
  cdnBase: z.string().url(),
  version: z.number().gt(0),
  mods: z.array(z.string().url()).optional(),
  dictFile: patchSchema,
  sourceFiles: z.array(z.string()),
  patches: z.array(patchSchema)
});

export const sourceManifestSchema = z.object({
  source: z.string(),
  cdnBase: z.string().url(),
  version: z.number().optional(),
  files: z.array(z.string())
});
