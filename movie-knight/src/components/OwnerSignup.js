import React, {useState} from 'react';
import { connect } from 'react-redux';
import { TheaterSignUp } from '../actions/index';

const Signup = props =>{

    const [signup, setsignup] = useState({ username: "", password: "", email: '' });

  const handleSubmit = event => {
    event.preventDefault();
    props.TheaterSignUp(signup)
    props.history.push('/')
    setsignup({ username: "", password: "", email: '' });
  };

  const handleChange = event => {
    setsignup({ ...signup, [event.target.name]: event.target.value });
    
  };

    return(
        <div>
             <h1>Theater Sign Up</h1>

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

        </div>
    )

}

export default connect(null, { TheaterSignUp })(Signup)