import { configSchema } from './src/schemas/config';
import zodToJsonSchema from 'zod-to-json-schema';
import { writeFileSync } from 'fs';
// @ts-ignore
import path from 'path';
import { shardSchema, patchConfigSchema, profileOverridesSchema, shardRulesSchema } from '@classicuo/modding';

const jsonSchema = zodToJsonSchema(configSchema, {
  name: 'webCuoPatchConfig',
  $refStrategy: 'root',
  basePath: ['#'],
  definitions: {
    shardSchema,
    patchConfigSchema,
    shardRulesSchema,
    profileOverridesSchema
  }
});

writeFileSync(
  path.join(process.cwd(), './src/schemas/configJsonSchema.json'),
  JSON.stringify(jsonSchema, null, 2) as string,
  'utf8'
);

export {};
