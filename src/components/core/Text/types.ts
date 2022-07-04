import { ReactNode } from 'react'

import * as T from 'styles/theme/configs/colors/types'

export type Text = {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'div' | 'a'
  color: T.colors
  fontSize?: string
  marginBottom?: string
  strong?: boolean
  onClick?: () => void
  className?: string
}
