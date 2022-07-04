import { ReactNode, ButtonHTMLAttributes, ReactElement } from 'react'

import { colors } from 'styles/theme/configs/colors/types'

export type Button = {
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
  small?: boolean
  type?: 'submit' | 'reset' | 'button'
  loading?: boolean
  color?: colors
  fullWidth?: boolean
  variant?: 'primary' | 'secondary' | 'tertiary' | 'text'
  background?: colors
  border?: colors
  leftElement?: ReactElement
  rightElement?: ReactElement
} & ButtonHTMLAttributes<HTMLButtonElement>
