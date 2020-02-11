import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { stack as Menu } from "react-burger-menu";

const Nav = props => {
  
// import useDarkMode from "../hooks/useDarkMode";

  // console.log(props.userData.username)

  const logOut = () => {
    localStorage.removeItem("token");
    // toggleMenu();
    props.history.push("/");
    localStorage.removeItem("google_username");
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
    <>
      <h1 className="app-name">Movie Knight</h1>
      <Menu right width={"250px"}>
        <NavLink exact to="/" id="home" className="menu-item">
          Home
        </NavLink>
        <NavLink to="/signup" id="signup" className="menu-item">
          Sign Up
        </NavLink>
        <NavLink to="/login" id="login" className="menu-item">
          Login
        </NavLink>
        <span onClick={() => logOut()} id="logout" className="menu-item">
          Logout
        </span>
        <footer className="menu-footer">&copy; 2020 Movie Knight</footer>
      </Menu>
    </>
  );
};

const mapStateToProps = state => {
  return {
    googleData: state.googleData,
    userData: state.userData
  };
};

export default connect(mapStateToProps)(withRouter(Nav));