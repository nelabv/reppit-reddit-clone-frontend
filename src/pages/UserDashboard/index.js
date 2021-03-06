import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar';
import AllPosts from '../../components/AllPosts';
import Footer from '../../components/Footer';
import Categories from '../../components/Categories';
import { GrayBackground, MaxWidth, WritePostBtn } from './styles';
import { UserContext } from '../../context';

export default function UserDashboard(props) {
  const [ userProfile, setUserProfile ] = useContext(UserContext);

  return (
    <>
          <Navbar isNavTransparent={false} />

          <GrayBackground>
            <MaxWidth>
                <h3>Hello, <span>{userProfile}</span>!</h3>

                <Categories />


                <WritePostBtn>
                      <Link to="/write">
                        Write Post
                      </Link>
                </WritePostBtn>

                <AllPosts />

            </MaxWidth>
          </GrayBackground>

          <Footer />
  </>
  )
}