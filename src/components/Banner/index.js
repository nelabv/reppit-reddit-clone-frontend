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
              <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias exceptur</span>
              
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