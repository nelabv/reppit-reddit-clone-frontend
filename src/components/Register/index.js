import React, { useState, useEffect } from 'react';
import UserServices from "../../services/user";
import {
  FormContainer,
  CenterAlign,
  Form
} from "./styles";

function Register(props) {
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
    <FormContainer>
      <CenterAlign>
        <span className="header-text">Sign up for free</span>

        <Form className="form">
          <label className="label" >Username</label>
          <input type="text" name="username" onChange={handleChange} value={userData.username}></input>

          <label className="label" >Password</label>
          <input type="password" name="password" onChange={handleChange} value={userData.password}></input>

          <button className="btn login-register-btn" onClick={register}>Register</button>
        </Form>
        
        <span>{requestStatus}</span>
      </CenterAlign>
    </FormContainer>
  )
}

export default Register;