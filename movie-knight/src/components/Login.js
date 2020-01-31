import React, {useState} from 'react'
//Oauth//
import ReactDOM from 'react-dom';
import GoogleLogin, {GoogleLogout} from 'react-google-login';
//Oauth//

const Login = props =>{

        const [loginInfo, setLogininfo] = useState({ email: "", password: "" });
        const handleSubmit = event => {
          event.preventDefault();
          props.login(loginInfo)
          setLogininfo({ email: "", password: "" });
        };
        const handleChange = event => {
          setLogininfo({ ...loginInfo, [event.target.name]: event.target.value });
        //   console.log(event.target.name, event.target.value);
        };

        //Oauth
        const responseGoogle = (response) => {
          console.log("what we are getting back from google",response);
          const { tokenId, w3 } = response;
          localStorage.setItem("token", tokenId);
          localStorage.setItem("user_email", w3.U3);
        }

        const logout = (response) => {
        }
        //Oauth      
    return(
        <div>
          <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <br/>
          <input
            required
            type="text"
            name="email"
            placeholder="email"
            value={loginInfo.email}
            onChange={handleChange}
            />
          <br/>
          <label>Password</label>
          <br/>
          <input
            required
            type="password"
            name="password"
            placeholder="password"
            value={loginInfo.password}
            onChange={handleChange}
            />
          <br/>
          <button type='submit'>Log In</button>
        </form>

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
          onLogoutSuccess={logout}
        >
        </GoogleLogout>
        {/* Oauth */}
        </div> 
    )

}

export default Login;