import React from 'react'
import {Link} from 'react-router-dom'

import {Logo} from '../Styles/HeaderNavFooter/Logo'
import {StyledHeader} from '../Styles/HeaderNavFooter/StyledHeader';
import { Nav } from '../Styles/HeaderNavFooter/Nav';

const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <Link to="/">Mario Crap</Link>
      </Logo>
      <Nav>
        <Link to='/register'>Register</Link>
        <Link to='/signin'>Sign in</Link>
      </Nav>
    </StyledHeader>
  )
}

export default Header