import React from 'react';
import { 
  BannerContainer,
  SigninBtn
} from './styles';
import { Link } from "react-router-dom";

export default function Banner(props) {
  const handleClick = () => {
    console.log("HELLODR")
  }
  return (
    <BannerContainer 
      user={props.user} >
        <h1 className="header-text">Join a conversation today</h1>


    { props.user ? null :
      <Link to="/signup">
        <SigninBtn onClick={handleClick}>SIGN UP</SigninBtn>
      </Link> }
    </BannerContainer>
  )
}