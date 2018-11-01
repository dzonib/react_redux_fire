import React from 'react'
import {StyledNav} from './StyledNav'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <StyledNav>
      <div className="links">
        <Link to='/register'>register</Link>
        <Link to='/signin'>sign in</Link>
      </div>
    </StyledNav>
  )
}

export default Navbar