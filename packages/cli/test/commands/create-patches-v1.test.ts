import {expect, test} from '@oclif/test'

describe('create-patches-v1', () => {
  test
  .stdout()
  .command(['create-patches-v1'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['create-patches-v1', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
