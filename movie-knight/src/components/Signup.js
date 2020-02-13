import React, { useState } from "react";
import { connect } from "react-redux";
import { signUp } from "../actions/index";
import { signUpGoogle } from "../actions/index";
import { withRouter } from "react-router-dom";

//Oauth//
import GoogleLogin, { GoogleLogout } from "react-google-login";

const Signup = props => {
  const [signup, setsignup] = useState({
    username: "",
    password: "",
    email: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    props.signUp(signup);
    props.history.push("/");
    setsignup({ username: "", password: "", email: "" });
  };

  const handleChange = event => {
    setsignup({ ...signup, [event.target.name]: event.target.value });
  };

  //Oauth
  const responseGoogle = response => {
    console.log("google response", response);
    const { tokenId } = response;
    localStorage.setItem("token", tokenId);

    props.signUpGoogle(response);
    props.history.push("/");
  };

  const logoutGoogle = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };

  return (
    <div className="signup-com">
      <h4>Register</h4>

      {/* Oauth */}
      <div
        className="login-google"
        style={{ display: localStorage.token ? "none" : "block" }}
      >
        <GoogleLogin
          className="google-btn"
          clientId="1058848707297-n2rl4b301ivq0gipo2pbenr80sa5mtp2.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
      {/* <div style={{ display: localStorage.token ? "block" : "none" }}>
        <GoogleLogout
          clientId="1058848707297-n2rl4b301ivq0gipo2pbenr80sa5mtp2.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logoutGoogle}
        ></GoogleLogout> */}
      <div>
        <p>or</p>{" "}
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"> Username </label>
          <input
            required
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            value={signup.username}
            onChange={handleChange}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="email">Email</label>
          <input
            required
            id="email"
            type="email"
            name="email"
            placeholder="email@example.com"
            value={signup.email}
            onChange={handleChange}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="password">Password</label>
          <input
            id="password"
            required
            type="password"
            name="password"
            placeholder="********"
            value={signup.password}
            onChange={handleChange}
          />
        </div>{" "}
        <button type="submit" className="next-button">
          Sign Up
        </button>
      </form>
      <button onClick={() => props.history.push("/")} className="guest-button">
        continue as a guest
      </button>
      <footer>
        {" "}
        <p>
          Already have an account?
          <span onClick={() => props.history.push("/login")}>Log in here</span>
        </p>{" "}
      </footer>
    </div>
  );
};

export default connect(null, { signUp, signUpGoogle })(withRouter(Signup));
