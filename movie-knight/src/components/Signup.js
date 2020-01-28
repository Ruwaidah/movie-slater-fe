import React, {useState} from 'react'

const Signup = props =>{

    const [signup, setsignup] = useState({ username: "", password: "", email: '' });

  const handleSubmit = event => {
    event.preventDefault();
    setsignup({ username: "", password: "", email: '' });
  };

  const handleChange = event => {
    setsignup({ ...signup, [event.target.name]: event.target.value });
    
  };

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
        </div>
    )

}

export default Signup;