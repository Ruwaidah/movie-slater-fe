import React, {useState} from 'react';
import { theaterLogin } from '../actions/index';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

const Login = props =>{

        const [loginInfo, setLogininfo] = useState({ email: "", password: "" });

        const handleSubmit = event => {
          event.preventDefault();
          props.theaterLogin(loginInfo)
          props.history.push('/ownerdashboard')
          setLogininfo({ email: "", password: "" });
        };

        const handleChange = event => {
          setLogininfo({ ...loginInfo, [event.target.name]: event.target.value });
        };

    return(
        <div>
          <h1>Theater Log In</h1>
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

        <h2>Or</h2>

        <h2 className='google'>Sign Up with Google</h2>
        
        </div> 
    )

}

export default connect(null, { theaterLogin })(withRouter(Login))