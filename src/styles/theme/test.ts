import * as theme from './index'

describe('theme', () => {
  it('Theme should match snapshot', () => {
    expect(theme).toMatchSnapshot()
  })

  it('transition helper should return correct string', () => {
    expect(theme.helpers.transitions('background')).toBe('background 400ms ease')
  })
})
