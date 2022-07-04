import styled from 'styled-components'

export const Wrapper = styled.div`
  z-index: 5;
  position: fixed;
  width: 100%;
  margin-top: -400px;

  transition: ${({ theme }) => theme.helpers.transitions('background')};

  ${({ theme }) => theme.breakPoints.lessThan.tablet} {
    background: none;
  }
`

export const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 70px;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1184px;
`
