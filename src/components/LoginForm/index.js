import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import UserServices from "../../services/user";
import {
  FormContainer,
  CenterAlign,
  Form
} from "./styles";

export default function LoginForm(props) {
  let history = useHistory();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userDocument = {
      username: user.username,
      password: user.password
    }

    UserServices.login(userDocument)
        .then(response => {
            sessionStorage.setItem("token", response.data.token)


            // redirections here
        })

        .catch(error => console.log(error));
  }

  return (
    <Form onSubmit={handleSubmit}>
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

          <button>
            Login
          </button>
  </Form>
  )
}
