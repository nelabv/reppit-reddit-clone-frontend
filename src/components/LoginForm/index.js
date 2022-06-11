import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context";
import UserServices from "../../services/user";
import {
  FormLabel,
  FormInput,
  FormButton,
  Form,
  PasswordVisibility
} from "./styles";

export default function LoginForm() {
  const [userProfile, setUserProfile] = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  let history = useHistory();

  const handlePassword = () => {
    setShowPassword(prevState => !prevState)
  }

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
            sessionStorage.setItem("token", response.data.token);

            sessionStorage.setItem("username", response.data.username);

            setUserProfile(userDocument.username);
            history.push("/")
        })

        .catch(error => console.log(error));
  }

  return (
    <Form onSubmit={handleSubmit}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <FormInput 
            size="40" 
            type="text" 
            name="username" 
            onChange={handleChange} 
            value={user.username} ></FormInput>

          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput 
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleChange} 
            value={user.password}></FormInput>
          
          <PasswordVisibility onClick={handlePassword}>{showPassword ? "Hide password":"Show Password"}</PasswordVisibility>

          <FormButton>
            Login
          </FormButton>
  </Form>
  )
}
