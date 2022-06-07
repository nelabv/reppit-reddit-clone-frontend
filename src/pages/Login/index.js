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

              <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</span>

              <LoginForm />

            </MaxWidth>

      </GradientBackground>

      <Footer />
    </>
  )
};