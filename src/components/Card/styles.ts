import { rgba } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 350px;
  height: 400px;
  background: ${({ theme }) => theme.colors.neutralBase};

  cursor: pointer;

  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  img {
    position: absolute;
    width: 300px;
    height: 300px;

    display: flex;
    align-self: center;
    border-radius: 50%;
    bottom: 0;
    right: 0;
  }
`

export const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background: ${({ theme }) => rgba(theme.colors.neutralDark, 0.7)};

  z-index: 1;
`

export const Header = styled.div`
  display: flex;
  gap: 8px;

  div {
    display: flex;
    flex-direction: column;

    span: {
      font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
    }
  }
`

export const Content = styled.div``

export const NumberRepo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`
