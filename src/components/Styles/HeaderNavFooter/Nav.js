import styled from 'styled-components'

const Nav = styled.ul`
margin: 0;
  display: flex;
  grid-template-columns: 1fr auto;
  font-size: 2rem;
  justify-self: end;
  
  a {
    display: flex;
    font-weight: 900;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    padding: 1rem 3rem;
    cursor: pointer;
    &:before {
      content: '';
      width: 2px;
      background: ${(props) => props.theme.lightGrey};
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
  }

  @media(max-width: ${(props) => props.theme.mobile}) {
      width: 100%;
      justify-content: center;
      border-top: 1px solid ${(props) => props.theme.lightGrey};
      font-size: 1rem;
      margin: 0;
      a {
        margin: 0;
        padding: 0 10px;
      }
    }
    
`

export { Nav }
