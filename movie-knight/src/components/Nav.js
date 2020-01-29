import React from 'react';
import { NavLink } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';

const Nav = props =>{
    
    const [DarkMode, setUseDarkMode] = useDarkMode(false)

    const toggleDarkMode = e =>{
        e.preventDefault()
        setUseDarkMode(!DarkMode);
    }

    return (
        <div>

            <NavLink  to='/' > Home </NavLink>
            <NavLink to='signup' > Sign Up</NavLink>
            <NavLink to='login' > Login</NavLink>

            {
                DarkMode === true ?
                (<button onClick={toggleDarkMode} className={DarkMode ? 'dark-button dark-mode' : 'dark-button' } >Light</button>)
                :
                (<button onClick={toggleDarkMode} className={DarkMode ? 'dark-button dark-mode' : 'dark-button' } >Dark</button>)   
            }

        </div>
    )
}

export default Nav;