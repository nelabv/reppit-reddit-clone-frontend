import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar';
import AllPosts from '../../components/AllPosts';
import Footer from '../../components/Footer';
import { GrayBackground, MaxWidth, WritePostBtn } from './styles';
import { UserContext } from '../../context';

export default function UserDashboard(props) {
  const [userProfile] = useContext(UserContext);

  return (
    <>
          <Navbar isNavTransparent={false} />

          <GrayBackground>
            <MaxWidth>
                <h3>Hello, <span>{userProfile}</span>!</h3>


                <WritePostBtn>
                      <Link to="/posts/create">
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