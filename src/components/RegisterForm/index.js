import React, { useState, useEffect } from 'react';
import UserServices from "../../services/user";
import {
  FormLabel,
  FormInput,
  FormButton,
  Form
} from "./styles";

function RegisterForm(props) {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });
  const [requestStatus, setRequestStatus] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    const userDetails = { ...userData,
      [e.target.name] : e.target.value
    }
    setUserData(userDetails);
  }

  const register = (e) => {
    e.preventDefault();

    const userDocument = {
      username: userData.username,
      password: userData.password
    }

    UserServices.register(userDocument)
      .then(() => {
          props.userLogin(userDocument);
      })
      .catch((error) => {
        if (error.response) {
          setRequestStatus(error.response.data.error);
        }
      })
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      window.location = "/";
    }
  }, [])

  return(

      <Form className="form">
        <FormLabel className="label" >Username</FormLabel>
        <FormInput type="text" name="username" onChange={handleChange} value={userData.username}></FormInput>

        <FormLabel className="label" >Password</FormLabel>
        <FormInput type="password" name="password" onChange={handleChange} value={userData.password}></FormInput>

        <FormButton className="btn login-register-btn" onClick={register}>Register</FormButton>
      </Form>
  )
}

export default RegisterForm;