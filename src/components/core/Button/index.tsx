import { Fragment } from 'react'

import TextLoading from 'components/TextLoading'

import * as S from './styles'
import * as T from './types'

function Button({
  children,
  loading,
  disabled,
  type = 'button',
  variant = 'primary',
  color,
  leftElement,
  rightElement,
  background,
  border,
  ...rest
}: T.Button) {
  return (
    <S.Button
      {...rest}
      border={border}
      color={color}
      background={background}
      disabled={disabled || loading}
      type={type}
      variant={variant}
    >
      {loading ? (
        <TextLoading>
          {leftElement}
          {children}
          {rightElement}
        </TextLoading>
      ) : (
        <Fragment>
          {leftElement}
          {children}
          {rightElement}
        </Fragment>
      )}
    </S.Button>
  )
}

export default Button
