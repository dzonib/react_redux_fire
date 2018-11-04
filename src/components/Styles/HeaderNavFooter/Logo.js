import styled from 'styled-components'

const Logo = styled.h1 `
  margin: 5px 9rem;
  padding: 5px;
  background: ${props => props.theme.red};
  transform: skew(-8deg);
  a {
    color: white;
    text-transform: uppercase;
  }
  @media(max-width: ${props => props.theme.mobile}) {
    margin: 0 auto;
    text-align: center;
  }
`

export {
  Logo
}