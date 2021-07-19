import React from 'react';

import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import PostPreview from '../components/PostPreview';

import "../styling/containers.css";

function Home(props) {
  return (
    <div style={{height: "100%"}}>
        { props.user 
          ? null 
          : <Banner />
        }

        <div className="grid-container">
          <PostPreview 
              posts={props.posts} 
              userVotedPosts={props.userVotedPosts}/>

          <Sidebar />
        </div>
    </div>
  )
}

export default Home;