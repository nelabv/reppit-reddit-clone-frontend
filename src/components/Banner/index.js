import React from 'react';
import { 
  BannerContainer,
  SigninBtn
} from './styles';
import { Link } from "react-router-dom";

export default function Banner(props) {
  return (
    <BannerContainer 
      user={props.user} >
        <h1 className="header-text">Join a conversation today</h1>


    { sessionStorage.getItem("token") ? null :
      <Link to="/signup">
        <SigninBtn>SIGN UP</SigninBtn>
      </Link> }
    </BannerContainer>
  )
}