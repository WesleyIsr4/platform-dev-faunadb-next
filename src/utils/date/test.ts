import { normalizeDate } from './index'

describe('date utils', () => {
  it('normalizeDate', () => {
    expect(normalizeDate(`10/30/2022`)).toStrictEqual('2022/10/30')
  })
})
