import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import useDarkMode from '../hooks/useDarkMode';

const Nav = props =>{
    
    const [DarkMode, setUseDarkMode] = useDarkMode(false)

    const toggleDarkMode = e =>{
        e.preventDefault()
        setUseDarkMode(!DarkMode);
    }

    const logOut = () => {
        localStorage.removeItem('token')
        props.history.push('/')
    }

    return (

        localStorage.getItem('token')
        ?
        <div>
            <NavLink  to='/' >Home</NavLink>
            <button onClick={()=> logOut()}>Log Out</button>
            {
                DarkMode === true ?
                (<button onClick={toggleDarkMode} className={DarkMode ? 'dark-button dark-mode' : 'dark-button' } >Light</button>)
                :
                (<button onClick={toggleDarkMode} className={DarkMode ? 'dark-button dark-mode' : 'dark-button' } >Dark</button>)   
            }
        </div>
        :
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

export default withRouter(Nav);