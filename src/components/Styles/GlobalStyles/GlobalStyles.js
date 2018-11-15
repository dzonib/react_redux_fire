import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle `
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    height: 100vh;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'KoHo', sans-serif;
    background: url(/img/mario-bg.png) no-repeat;
    background-size: 100%;
    background-position: bottom;
    background-color: #95e8f3;
    
    a {
      text-decoration: none;
      color: ${props => props.theme.black}
    }
  }
`

export default GlobalStyle