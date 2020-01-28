import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = props =>{
    return (
        <div>

            <NavLink  to='/' > Home </NavLink>
            <NavLink to='signup' > Sign Up</NavLink>
            <NavLink to='login' > Login</NavLink>

        </div>
    )
}

export default Nav;