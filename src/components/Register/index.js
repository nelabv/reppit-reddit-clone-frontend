import React, { useState } from 'react';
import UserServices from "../../services/user";

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

  return(
    <div className="form-container">
      <div className="center-align content-wrapper">
        <span className="header-text">Sign up for free</span>

        <form className="form">
          <label className="label" >Username</label>
          <input type="text" name="username" onChange={handleChange} value={userData.username}></input>

          <label className="label" >Password</label>
          <input type="password" name="password" onChange={handleChange} value={userData.password}></input>

          <button className="btn login-register-btn" onClick={register}>Register</button>
        </form>
        <span>{requestStatus}</span>
      </div>
    </div>
  )
}

export default Register;