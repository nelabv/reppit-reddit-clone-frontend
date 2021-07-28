import React, { useState } from 'react';
import {
  FormContainer,
  CenterAlign,
  Form
} from "./styles";

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
    <FormContainer>
      <CenterAlign>
        <span className="header-text">Welcome back!</span>
        <span className="subtext">Join the conversation today.</span>
        
        <Form>
          <label htmlFor="username">Username</label>
          <input 
            size="40" 
            type="text" 
            name="username" 
            onChange={handleChange} 
            value={user.username} ></input>

          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password"
            onChange={handleChange} 
            value={user.password}></input>

          <button onClick={setUserData}>
            Login
          </button>
        </Form>
      </CenterAlign>
    </FormContainer>
  )
}

export default Login;