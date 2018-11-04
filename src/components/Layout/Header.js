import React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../Styles/HeaderNavFooter/Logo'
import { StyledHeader } from '../Styles/HeaderNavFooter/StyledHeader'
import { Nav } from '../Styles/HeaderNavFooter/Nav'
import { AvatarImage } from '../Styles/HeaderNavFooter/AvatarImage'

const Header = () => {
	return (
		<StyledHeader>
			<Logo>
				<Link to="/">Mario Crap</Link>
			</Logo>


			<Nav>
				<Link to="/newproject">New Project</Link>
				<Link to="/signin">Signin</Link>
				<Link to="/signup">Signup</Link>
				<Link to="/signin">Login</Link>
			  <AvatarImage>NN</AvatarImage>
			</Nav>
		</StyledHeader>
	)
}

export default Header
