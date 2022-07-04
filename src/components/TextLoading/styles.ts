import styled, { keyframes } from 'styled-components'

export const LoadingWrapper = styled.span``

export const bounce = keyframes`
  0%, 80%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
`

export const Dot = styled.span`
  animation: ${bounce} 1.4s infinite ease-in-out;
  animation-fill-mode: both;
`

export const DotOne = styled(Dot)`
  animation-delay: -0.32s;
`

export const DotTwo = styled(Dot)`
  animation-delay: -0.16s;
`
