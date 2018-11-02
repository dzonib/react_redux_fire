import styled from 'styled-components'

const Nav = styled.ul `
margin: 0;
  display: flex;
  grid-template-columns: 1fr auto;
  font-size: 2rem;
  justify-self: end;
  a {
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    padding: 1rem 3rem;
    &:before {
      content: '';
      width: 2px;
      background: ${props => props.theme.lightGrey};
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: red;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
      &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
`

export {
  Nav
}