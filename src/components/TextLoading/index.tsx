import * as S from './styles'
import * as T from './types'

const TextLoading = ({ children }: T.TextLoading) => (
  <S.LoadingWrapper>
    {children}
    <S.DotOne>.</S.DotOne>
    <S.DotTwo>.</S.DotTwo>
    <S.Dot>.</S.Dot>
  </S.LoadingWrapper>
)

export default TextLoading
