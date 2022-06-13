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
                  <h2>Sign up</h2>

                  <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</span>

                  <RegisterForm />

                </MaxWidth>

          </GradientBackground>

          <Footer />
      </>
  )
}

export default Register;