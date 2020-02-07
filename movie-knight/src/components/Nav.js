import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import useDarkMode from '../hooks/useDarkMode';

const Nav = props =>{
    
    const [DarkMode, setUseDarkMode] = useDarkMode(false)

    const toggleDarkMode = e =>{
        e.preventDefault()
        setUseDarkMode(!DarkMode);
    }

    // console.log(props.userData.username)
    const logOut = () => {
        localStorage.removeItem('token')
        props.history.push('/')
    }

    return (

        localStorage.getItem('token')
        ?
            <div>
                <NavLink  to='/' >Home</NavLink>
                <p>{props.userData.username}</p>
                {/* <p>{props.googleUser.data.user.name}</p> */}
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
                <NavLink to='/signup' > Sign Up</NavLink>
                <NavLink to='/login' > Login</NavLink>

                {
                    DarkMode === true ?
                    (<button onClick={toggleDarkMode} className={DarkMode ? 'dark-button dark-mode' : 'dark-button' } >Light</button>)
                    :
                    (<button onClick={toggleDarkMode} className={DarkMode ? 'dark-button dark-mode' : 'dark-button' } >Dark</button>)   
                }

            </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.userData,
        googleUser: state.googleData
    };
  };

export default connect(mapStateToProps)(withRouter(Nav));