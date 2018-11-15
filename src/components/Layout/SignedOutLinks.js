import React from 'react'
import {NavLink} from 'react-router-dom'


const SignedOutLinks = () => {
    return (
        <>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/signin">Login</NavLink>
        </>
    )
}

export default SignedOutLinks