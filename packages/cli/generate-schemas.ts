import { configSchema } from './src/schemas/config';
import zodToJsonSchema from 'zod-to-json-schema';
import { writeFileSync } from 'fs';
// @ts-ignore
import path from 'path';

const jsonSchema = zodToJsonSchema(configSchema, 'webCuoPatchConfig');

writeFileSync(
  path.join(process.cwd(), './src/schemas/configJsonSchema.json'),
  JSON.stringify(jsonSchema, null, 2) as string,
  'utf8'
);

export {};
