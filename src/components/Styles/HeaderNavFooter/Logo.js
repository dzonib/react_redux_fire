import styled from 'styled-components'

const Logo = styled.h1 `
  margin: 5px 10px;
  padding: 5px;
  background: ${props => props.theme.red};
  transform: skew(-8deg);
  a {
    color: white;
    text-transform: uppercase;
  }
`

export {
  Logo
}