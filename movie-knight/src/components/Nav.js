import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { stack as Menu } from "react-burger-menu";

const Nav = props => {
  // import useDarkMode from "../hooks/useDarkMode";
  const [isOpen, setIsOpen] = useState(false);
  // console.log(props.userData.username)

  const logOut = () => {
    localStorage.removeItem("token");
    // toggleMenu();
    localStorage.removeItem("google_username");
    localStorage.clear()
    setIsOpen(false);
    props.history.push("/");
  };

  const homeButton = () => {
    props.history.push("/");
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

  const goProfile = () => {
    setIsOpen(false);
  }

  const handleStateChange = state => {
    setIsOpen(state);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return localStorage.getItem("token") ? (
    <div className={props.location.pathname !== "/profile" ? null : "noMenu"}>
      <h1 onClick={() => homeButton()} className="app-name">
        Movie<span className="app-name-knight">Knight</span>
      </h1>
      <Menu right width={"250px"} isOpen={isOpen} onStateChange={state => handleStateChange(state.isOpen)}>
        <NavLink
          exact
          to="/"
          id="home"
          className="menu-item"
          onClick={() => closeMenu()}
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/profile"
          id="profile"
          className="menu-item"
          onClick={() => goProfile()}
        >
          My Account
        </NavLink>
        <span onClick={() => logOut()} id="logout" className="menu-item">
          Logout
        </span>
        <footer className="menu-footer">&copy; 2020 Movie Knight</footer>
      </Menu>
    </div>
  ) : (
      <>
        <h1 onClick={() => homeButton()} className="app-name">
          Movie<span className="app-name-knight">Knight</span>
        </h1>
        <Menu
          right
          width={"250px"}
          isOpen={isOpen}
          onStateChange={state => handleStateChange(state.isOpen)}
        >
          <NavLink
            exact
            to="/"
            id="home"
            className="menu-item"
            onClick={() => closeMenu()}
          >
            Home
        </NavLink>
          <NavLink
            to="/signup"
            id="signup"
            className="menu-item"
            onClick={closeMenu}
          >
            Sign Up
        </NavLink>
          <NavLink
            to="/login"
            id="login"
            className="menu-item"
            onClick={closeMenu}
          >
            Login
        </NavLink>
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

export default withRouter(connect(mapStateToProps)(withRouter(Nav)))
