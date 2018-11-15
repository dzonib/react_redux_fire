import React from 'react'
import {NavLink} from 'react-router-dom'
import { AvatarImage } from '../Styles/HeaderNavFooter/AvatarImage';


const SignedInLinks = () => {
    return (
        <>
            <NavLink to="/create">New Project</NavLink>
            <NavLink to="/create">Log Out</NavLink>
            <AvatarImage>NN</AvatarImage>
        </>
    )
}

export default SignedInLinks