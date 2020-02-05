
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions/index';
import { signUpGoogle } from '../actions/index';

//Oauth//
import ReactDOM from 'react-dom';
import GoogleLogin, {GoogleLogout} from 'react-google-login';
//Oauth//


const Signup = props =>{

    const [signup, setsignup] = useState({ username: "", password: "", email: '' });

  const handleSubmit = event => {
    event.preventDefault();
    props.signUp(signup)
    props.history.push('/')
    setsignup({ username: "", password: "", email: '' });
  };

  const handleChange = event => {
    setsignup({ ...signup, [event.target.name]: event.target.value });
    
  };

  //Oauth
  const responseGoogle = (response) => {
    console.log("google response",response);
    const { tokenId, profileObj } = response;
    localStorage.setItem("google_token", tokenId);
    localStorage.setItem("user_email", profileObj.email);
    localStorage.setItem("user_name", profileObj.name);
    signUpGoogle(tokenId, profileObj.email, profileObj.name)
  }

  const logoutGoogle = () => {
    localStorage.removeItem("google_token");
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_name");
  }
  //Oauth

    return(
        <div>
             <h1>Sign Up</h1>

        <form onSubmit={handleSubmit}>

        <label> Username </label> 

        <br/>

        <input
          required
          type="text"
          name="username"
          placeholder="Username"
          value={signup.username}
          onChange={handleChange}
        />

        <br/>

        <label>Email</label>

        <br/>

        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          value={signup.email}
          onChange={handleChange}
        />

        <br/>

        <label>Password</label>

        <br/>

        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          value={signup.password}
          onChange={handleChange}
        />

        <br/>

        <button type='submit'>Sign Up</button>
        
      </form>

        <h2>Or</h2>

        <h2 className='google'>Sign Up with Google</h2>

        {/* Oauth */}
        <GoogleLogin
          clientId="1058848707297-n2rl4b301ivq0gipo2pbenr80sa5mtp2.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />

        <GoogleLogout
          clientId="1058848707297-n2rl4b301ivq0gipo2pbenr80sa5mtp2.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logoutGoogle}
        >
        </GoogleLogout>
        {/* Oauth */}

        </div>
    )

}

export default connect(null, { signUp })(Signup)