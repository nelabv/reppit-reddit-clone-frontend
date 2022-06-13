import React from 'react';
import Navbar from '../../components/Navbar';
import RegisterForm from "../../components/RegisterForm";
import Footer from '../../components/Footer';
import { GradientBackground, MaxWidth } from "./styles";

function Register(props) {
  return(
      <>
          <Navbar isNavTransparent={false} />

          <GradientBackground>
                <MaxWidth>
                  <h2>Create account</h2>

                  <RegisterForm />

                </MaxWidth>

          </GradientBackground>

          <Footer />
      </>
  )
}

export default Register;