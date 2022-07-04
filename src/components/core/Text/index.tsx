import * as S from './styles'
import * as T from './types'

function Text({ children, as, ...rest }: T.Text) {
  return (
    <S.Text as={as} {...rest}>
      {children}
    </S.Text>
  )
}

export default Text
