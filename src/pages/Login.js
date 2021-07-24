import React, { useState } from 'react';

function Login(props) {

  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    e.preventDefault();
    const _user = { ...user,
      [e.target.name] : e.target.value
    }
    setUser(_user);
  }

  const setUserData = async (e) => {
    e.preventDefault();
    
    const userDocument = {
      username: user.username,
      password: user.password
    }

    props.userLogin(userDocument);
  }

  return (
    <div className="form-container">
      <div className="center-align content-wrapper">
        <span className="header-text">Welcome back!</span>
        <span className="subtext">Join the conversation today.</span>
        
        <form className="form">
          <label htmlFor="username">Username</label>
          <input size="40" type="text" name="username" onChange={handleChange} value={user.username} ></input>

          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleChange} value={user.password}></input>

          <button className="btn login-register-btn" onClick={setUserData}>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;