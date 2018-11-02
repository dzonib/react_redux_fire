import styled from 'styled-components'

const StyledHeader = styled.header `
  display: flex;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  border-bottom: 10px solid ${props => props.theme.black};
  a {
    align-items: center;
  }
`

export {
  StyledHeader
}