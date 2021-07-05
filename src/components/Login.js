import React, { useState } from 'react';
import UserServices from "../services/user.js";
import "../styling/containers.css";
import "../styling/elements.css";
import "../styling/text.css";

function LoginSection(props) {
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
    
    const loginDoc = {
      username: user.username,
      password: user.password
    }

    UserServices.login(loginDoc)
      .then((response) => {
        props.userLogin(loginDoc.username);

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", loginDoc.username);
        localStorage.setItem("auth", true);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response);
        }
    });
  }

  return(
    <div className="login-container">
      <div className="login-area">
        <p className="huge-text">Welcome back!</p>
          <p className="subtext">Join the conversation today.</p>
        
          <form className="form">
            <label className="label" htmlFor="username">Username</label>
            <input size="40" className="input" type="text" name="username" onChange={handleChange} value={user.username} ></input>

            <label className="label" htmlFor="password">Password</label>
            <input type="text" name="password" onChange={handleChange} value={user.password}></input>

            <button className="btn btn-3" onClick={setUserData}>
              Login
            </button>
          </form>
      </div>
    
      <div className="background-wrapper"></div>
    </div>
  )
}

export default LoginSection;