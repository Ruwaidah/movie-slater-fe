import React, {useState} from 'react'

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
        </div>
    )

}

export default Login;