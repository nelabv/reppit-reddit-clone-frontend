import React from 'react';

import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import PostPreview from '../components/PostPreview';

function Home(props) {
  return (
    <div className= "content-container">
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