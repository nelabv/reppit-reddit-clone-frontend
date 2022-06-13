import React from 'react';
import { 
  BannerContainer,
  PrimaryButton,
  SecondaryButton,
  GradientBackground
} from './styles';
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <GradientBackground>
        <BannerContainer>
              <h1>Join a conversation today</h1>
              
              <div>
                    <Link to="/register">
                          <SecondaryButton>Register</SecondaryButton>
                    </Link>

                    <Link to="/login">
                          <PrimaryButton>Login</PrimaryButton>
                    </Link>
              </div>
        </BannerContainer>
    </GradientBackground>
  )
}