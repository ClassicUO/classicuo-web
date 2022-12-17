import z from 'zod';
import { profileSchema } from './gameProfile';

type ProfileSchemaShape = typeof profileSchema['shape'];

// Zod needs some help discovering the schema type, i.e. the Key => DefaultValue schema
type GameOptionOverrideSchemaType<S extends z.ZodSchema> = z.ZodOptional<
  z.ZodObject<{
    disabledWithReason: z.ZodOptional<z.ZodString>;
    defaultValue: z.ZodOptional<S>;
  }>
>;

const toGameOptionsOverrideType = <K extends keyof ProfileSchemaShape, S extends ProfileSchemaShape[K]>(
  key: K,
  schema: S
): [K, GameOptionOverrideSchemaType<S>] => [
  key,
  z
    .object({
      defaultValue: schema.optional() as z.ZodOptional<S>,
      disabledWithReason: z.string().min(1).optional()
    })
    .optional()
];

export const profileOverridesSchema = z.object(
  Object.fromEntries(
    Object.entries(profileSchema.shape) //
      .map(([k, v]) => toGameOptionsOverrideType(k as keyof ProfileSchemaShape, v))
  ) as {
    [K in keyof ProfileSchemaShape]: GameOptionOverrideSchemaType<ProfileSchemaShape[K]>;
  }
);

export const shardRulesSchema = z.object({
  web: z.object({
    scripting: z.union([z.literal('enabled'), z.literal('disabled'), z.literal('disable-ts')]),
    features: z
      .object({
        dressAgent: z.boolean().default(true).optional(),
        friends: z.boolean().default(true).optional()
      })
      .optional()
  }),
  options: z
    .object({
      profileOverrides: profileOverridesSchema.optional()
    })
    .optional()
});

export type ShardRules = z.infer<typeof shardRulesSchema>;
