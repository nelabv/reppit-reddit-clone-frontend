import React, { useContext } from 'react';
import { UserContext } from '../../context';
import UserDashboard from '../UserDashboard';

import Navbar from '../../components/Navbar';
import Banner from "../../components/Banner";
import Footer from "../../components/Footer"

export default function LandingPage(props) {
  const [ userProfile ] = useContext(UserContext);

  return (
    <>
          { userProfile ? <UserDashboard /> :

                    <>
                        <Navbar isNavTransparent={true} />

                        <Banner />

                        <Footer />
                    </>
          }
    </>
  )
}