import React from 'react';
import AllPosts from "../../components/AllPosts/AllPosts";
import Sidebar from "../../components/Sidebar/Sidebar";
import Banner from "../../components/Banner/Banner";
import "../../styling/containers.css";

function Home(props) {
  return (
    <div style={{height: "100%"}}>
        { props.user ? 
          null :
          <Banner />
        }
        <div className="grid-container">
          <AllPosts posts={props.posts} />

          <Sidebar />
        </div>
    </div>
  )
}

export default Home;