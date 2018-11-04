import styled from 'styled-components'

const StyledHeader = styled.header `
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  border-bottom: 10px solid ${props => props.theme.black};
  a {
    align-items: center;
  }
  @media(max-width: ${props => props.theme.mobile}) {
    grid-template-columns: 1fr;
  }
`

export {
  StyledHeader
}