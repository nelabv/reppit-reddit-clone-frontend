import React from 'react';
import { 
  BannerContainer,
  SigninBtn,
  LoginBtn
} from './styles';
import { Link } from "react-router-dom";

export default function Banner(props) {
  const handleClick = () => {
    console.log("HELLODR")
  }
  return (
    <BannerContainer 
      className="banner-container"
      user={props.user} >
        <h1 className="header-text">Join a conversation today</h1>


        <div className="button-container">
          <Link to="/login">
            <LoginBtn onClick={handleClick}>LOGIN</LoginBtn>
          </Link>

          <Link to="/signup">
            <SigninBtn onClick={handleClick}>SIGN UP</SigninBtn>
          </Link>
        </div>
    </BannerContainer>
  )
}