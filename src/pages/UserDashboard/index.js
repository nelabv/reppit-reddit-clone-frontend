import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar';
import AllPosts from '../../components/AllPosts';
import Footer from '../../components/Footer';

export default function UserDashboard(props) {
  return (
    <>
          <Navbar isNavTransparent={true} />

          
          <Link to="/posts/create">
            Write Post
          </Link>

          <AllPosts />

          <Footer />
  </>
  )
}