import styled, { css, DefaultTheme } from 'styled-components'
import { shade } from 'polished'

import * as T from './types'

const modifiers: any = {
  disabled: () => css`
    cursor: not-allowed;
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  variant: {
    primary: (theme: DefaultTheme, disabled?: boolean) => css`
      background: ${theme.colors.primaryDarkest};
      color: ${theme.colors.neutralLightest};
      font-weight: ${theme.fonts.weight.semiBold};

      &:hover,
      :focus {
        background: ${!disabled && shade(0.2, theme.colors.primaryDark)};
      }

      &:active {
        background: ${!disabled && theme.colors.secondaryDarkest};
      }
    `,
    secondary: (theme: DefaultTheme, disabled?: boolean) => css`
      border: 1px solid ${theme.colors.primaryDarkest};
      background: none;
      color: ${theme.colors.neutralLightest};

      &:hover,
      :focus {
        border: 1px solid ${!disabled && shade(0.5, theme.colors.primaryDark)};
      }

      &:active {
        background: ${!disabled && theme.colors.neutralDark};
      }
    `,
    tertiary: (theme: DefaultTheme) => css`
      background: transparent;
      color: ${theme.colors.neutralBase};
      border: 1px solid ${theme.colors.secondaryDark};
    `,
    text: (theme: DefaultTheme, disabled?: boolean) => css`
      border: none;
      background: none;
      font-weight: ${theme.fonts.weight.semiBold};
      color: ${theme.colors.neutralLightest};

      &:hover,
      :focus {
        color: 1px solid ${!disabled && shade(0.5, theme.colors.neutralLight)};
      }

      &:active {
        background: ${!disabled && theme.colors.neutralDark};
      }
    `,
  },
}

export const Button = styled.button<T.Button>`
  cursor: pointer;
  font-weight: 400;
  border: none;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  white-space: nowrap;
  height: 56px;
  font-size: 18px;
  padding: 13px 24px;
  transition: ${({ theme }) => theme.helpers.transitions(['background', 'opacity'])};

  ${({ theme }) => theme.breakPoints.lessThan.tablet} {
    gap: 8px;
  }

  ${({ fullWidth }) => fullWidth && modifiers.fullWidth()};
  ${({ disabled }) => disabled && modifiers.disabled()};
  ${({ theme, disabled, variant = 'primary' }) => modifiers.variant[variant](theme, disabled)};
`
