import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import LoginForm from '../../components/LoginForm';
import Navbar from '../../components/Navbar';
import {
  FormContainer,
  CenterAlign
} from "./styles";

function Login(props) {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  let history = useHistory();

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

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      history.push("/")
    }
  }, [history])

  return (
    <>
        <Navbar />
        
        <FormContainer>
          <CenterAlign>
            <span className="header-text">Welcome back!</span>
            <span className="subtext">Join the conversation today.</span>
            
            <LoginForm />
          </CenterAlign>
        </FormContainer>
    </>
  )
}

export default Login;