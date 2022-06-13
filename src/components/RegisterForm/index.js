import React, { useState, useEffect, useContext } from 'react';
import UserServices from "../../services/user";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context";
import {
  FormLabel,
  FormInput,
  FormButton,
  Form,
  PasswordInput,
  PasswordVisibility
} from "./styles";
import { validUsername } from "../../regex";
import UsernameError from '../UsernameError';
import ErrorPrompt from '../ErrorPrompt';

function RegisterForm(props) {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });
  const [usernameRegex, showUsernameRegex] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [userProfile, setUserProfile] = useContext(UserContext);
  
  let history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();

    const userDetails = { ...userData,
      [e.target.name] : e.target.value
    }
    setUserData(userDetails);

    if(e.target.value.length === 0) {
      showUsernameRegex(false);
    } else if(!validUsername.test(userData.username)) {
      showUsernameRegex(true);
    } else if (validUsername.test(userData.username)) {
      showUsernameRegex(false);
    }
  }

  const register = (e) => {
    e.preventDefault();

    const userDocument = {
      username: userData.username,
      password: userData.password
    }

    UserServices.register(userDocument)
      .then(() => {
            UserServices.login(userDocument)
            .then(response => {
                sessionStorage.setItem("token", response.data.token);

                sessionStorage.setItem("username", response.data.username);

                setUserProfile(userDocument.username);
                history.push("/")
        })
        .catch((error) => {
          setErrorMessage(error.response.data.error);
        })
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
      })
  }

  const handlePassword = () => {
    setShowPassword(prevState => !prevState)
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      window.location = "/";
    }
  }, [])

  return(

      <Form className="form">
        <FormLabel className="label" >Username</FormLabel>
        <FormInput 
              type="text" 
              name="username" 
              onChange={handleChange} 
              value={userData.username} 
              required></FormInput>

        { usernameRegex ? <UsernameError /> : null}

        <FormLabel className="label" >Password</FormLabel>
        <PasswordInput 
              type={showPassword ? "text" : "password"} 
              name="password" 
              onChange={handleChange} 
              value={userData.password}
              required ></PasswordInput>

        <PasswordVisibility onClick={handlePassword}>{showPassword ? "Hide password":"Show Password"}</PasswordVisibility>

        <ErrorPrompt errorMessage={errorMessage} />

        <FormButton className="btn login-register-btn" onClick={register}>Register</FormButton>
      </Form>
  )
}

export default RegisterForm;