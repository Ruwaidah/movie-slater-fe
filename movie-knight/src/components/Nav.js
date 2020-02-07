import React, {useState} from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import useDarkMode from '../hooks/useDarkMode';

const Nav = props =>{
    
    const [DarkMode, setUseDarkMode] = useDarkMode(false)
    // const [google, setGoogle] = useState(props.googleData)

    const toggleDarkMode = e =>{
        e.preventDefault()
        setUseDarkMode(!DarkMode);
    }

    //console.log(props.userData.username)
    const logOut = () => {
        localStorage.removeItem('token')
        props.history.push('/')
        localStorage.removeItem("google_username");
    }

    return (

        localStorage.getItem('token')
        ?
            <div>
                <NavLink  to='/' >Home</NavLink>

                <p>{props.userData.username === true?`${props.userData.username}`:`${localStorage.getItem('google_username')}`}</p>
                {/* <p>{props.userData.username}</p> */}
                {/* <p>{google === true?`${google.data.user.name}`:"not loaded"}</p> */}
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
        ...state,
        userData: state.userData,
        // googleUser: state.googleData
        
    };
  };

export default connect(mapStateToProps)(withRouter(Nav));