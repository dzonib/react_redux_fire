import React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../Styles/HeaderNavFooter/Logo'
import { StyledHeader } from '../Styles/HeaderNavFooter/StyledHeader'
import { Nav } from '../Styles/HeaderNavFooter/Nav'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Header = () => {
	return (
		<StyledHeader>
			<Logo>
				<Link to="/">Mario Crap</Link>
			</Logo>


			<Nav>
				{/* <Link to="/create">New Project</Link>
				<Link to="/signin">Login</Link>
				<Link to="/signup">Signup</Link>
				<Link to="/signin">Logout</Link> */}
				<SignedOutLinks />
				<SignedInLinks />
			</Nav>
		</StyledHeader>
	)
}

export default Header
