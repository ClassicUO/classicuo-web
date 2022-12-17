import { configSchema } from './src/schemas/config';
import { z } from 'zod';
import zodToJsonSchema from 'zod-to-json-schema';
import { writeFileSync } from 'fs';
import path from 'path';

const jsonSchema = zodToJsonSchema(configSchema, 'webCuoPatchConfig');

writeFileSync(
  path.join(process.cwd(), './src/schemas/configJsonSchema.json'),
  JSON.stringify(jsonSchema, null, 2) as string,
  'utf8'
);

export {};
