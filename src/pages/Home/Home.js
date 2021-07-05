import React from 'react';
import MainPostThread from "../../components/MainPostThread";
import Sidebar from "../../components/Sidebar";
import Banner from "../../components/Banner";
import "../../styling/containers.css";

function Home(props) {
  return (
    <div style={{height: "100%"}}>
        { props.user ? 
          null :
          <Banner />
        }
        <div className="grid-container">
          <MainPostThread posts={props.posts} />

          <Sidebar />
        </div>
    </div>
  )
}

export default Home;