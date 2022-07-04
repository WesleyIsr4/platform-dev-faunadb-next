import styled, { css } from 'styled-components'

import * as T from './types'

const modifiers = {
  strong: () => css`
    font-weight: 700;
  `,
}

export const Text = styled.span<T.Text>`
  &:is(a) {
    cursor: pointer;
  }

  color: ${({ theme, color = 'neutralWhite' }) => theme.colors[color]};
  font-size: ${({ fontSize }) => fontSize};
  margin-bottom: ${({ marginBottom }) => marginBottom};

  ${({ strong }) => strong && modifiers.strong()};
`
