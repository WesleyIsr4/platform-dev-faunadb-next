import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    background: #202020;
    overflow-x: hidden;
  }

  * {
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fonts.type.primary};
  }

  *, *::after, *::before  {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
`

export default GlobalStyles
