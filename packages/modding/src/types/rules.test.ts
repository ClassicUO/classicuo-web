import { shardRulesSchema } from './rules';

describe('rules schema parsing', () => {
  test('it should succeed parsing correct data', () => {
    const data = {
      web: {
        scripting: 'enabled',
        features: {}
      },
      profileOptions: {
        fastSpellsAssign: {
          disabledWithReason: 'because reasons',
          defaultValue: true
        }
      }
    };

    const result = shardRulesSchema.safeParse(data);

    expect(result.success).toBeTruthy();
  });

  test('it should fail parsing incorrect data', () => {
    const data = {
      web: {
        scripting: 'enabled',
        features: {}
      },
      profileOptions: {
        fastSpellsAssign: {
          disabledWithReason: 'because reasons',
          defaultValue: 'hi'
        }
      }
    };

    const result = shardRulesSchema.safeParse(data);

    expect(result.success).toBeFalsy();
  });
});
