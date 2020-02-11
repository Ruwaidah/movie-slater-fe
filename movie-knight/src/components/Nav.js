import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import useDarkMode from "../hooks/useDarkMode";

const Nav = props => {
  // const [DarkMode, setUseDarkMode] = useDarkMode(false);
  // const toggleDarkMode = e => {
  //   e.preventDefault();
  //   toggleMenu();
  //   setUseDarkMode(!DarkMode);
  // };

  // console.log(props.userData.username)

  const logOut = () => {
    localStorage.removeItem("token");
    toggleMenu();
    props.history.push("/");
    localStorage.removeItem("google_username");
  };

  const toggleMenu = () => {
    document.getElementById("nav").classList.toggle("toggle-menu");
  };

  var userName = () => {
        if (props.userData.username) {
        return `${props.userData.username}`;
        } else if (props.userData.username && localStorage.google_username) {
        return `${props.userData.username}`;
        } else if (localStorage.google_username) {
        return `${localStorage.google_username}`;
        } else {
        return ""; 
        }
    };

  return (
    <div className="nav-component">
      <div className="nav-bar">
        <h1>See a movie</h1>
        <h1>
            {userName()}
        </h1>
        <div onClick={toggleMenu} id="hamburger-menu">
          {/* <img src="./images/menu.png" width="30px" /> */}
          <div className="line black"></div>
          <div className="line white"></div>
          <div className="line black"></div>
          <div className="line white"></div>
          <div className="line black"></div>
          <div className="line white"></div>
        </div>
      </div>
      <div className="menu-list" id="nav">
        {localStorage.getItem("token") ? (
          <div>
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
            {/* <p>{props.userData.username}</p> */}
            <button onClick={() => logOut()}>Log Out</button>
            {/* {DarkMode === true ? (
              <button
                onClick={toggleDarkMode}
                className={DarkMode ? "dark-button dark-mode" : "dark-button"}
              >
                Light
              </button>
            ) : (
              <button
                onClick={toggleDarkMode}
                className={DarkMode ? "dark-button dark-mode" : "dark-button"}
              >
                Dark
              </button>
            )} */}
          </div>
        ) : (
          <div>

            <NavLink to="/" onClick={toggleMenu}>
              {" "}
              Home{" "}
            </NavLink>
            <NavLink to="/signup" onClick={toggleMenu}>
              {" "}
              Sign Up
            </NavLink>
            <NavLink to="/login" onClick={toggleMenu}>
              {" "}
              Login
            </NavLink>
            
            {/* {DarkMode === true ? (
              <button
                onClick={toggleDarkMode}
                className={DarkMode ? "dark-button dark-mode" : "dark-button"}
              >
                Light
              </button>
            ) : (
              <button
                onClick={toggleDarkMode}
                className={DarkMode ? "dark-button dark-mode" : "dark-button"}
              >
                Dark
              </button>
            )} */}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    googleData: state.googleData,
    userData: state.userData
  };
};

export default connect(mapStateToProps)(withRouter(Nav));
