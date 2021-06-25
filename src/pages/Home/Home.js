import React from 'react';
import AllPosts from "../../components/AllPosts/AllPosts";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./styles.css";

function Home(props) {
  return (
    <div className="grid-container">
      <div>
        <AllPosts posts={props.posts} />
      </div>

      <div className="sidebar">
        <Sidebar />
      </div>
    </div>
  )
}

export default Home;