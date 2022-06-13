import React from 'react';
import LoginForm from '../../components/LoginForm';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { GradientBackground, MaxWidth } from "./styles";

export default function Login() {
  return (
    <>
      <Navbar isNavTransparent={false} />

      <GradientBackground>
            <MaxWidth>
              <h2>Login</h2>

              <LoginForm />

            </MaxWidth>

      </GradientBackground>

      <Footer />
    </>
  )
};