import styled from 'styled-components'

const StyledNav = styled.nav `
  display: flex;
  background-color: blue;
  width: 100%;
  height: 67px;
  align-items: center;

  .links {
    display: flex;
    justify-content: space-between;
  }

  a {
    text-align: center;
    border: 1px solid black;
    width: 90px;
    height: 30px;
    background: gray;
    color: white;
    text-transform: uppercase;
    &:hover {
      background: yellow;
      color: black;
    }
  }
`


export {
  StyledNav
}