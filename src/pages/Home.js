import React from 'react';
import styled from "styled-components";

import Banner from "../components/Banner/";
import PostPreview from '../components/PostPreview/';
import Sidebar from "../components/Sidebar/";

const GridContainer = styled.div`
  display: grid; 
  grid-template-columns: 2fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 10px 0px; 
  grid-template-areas: 
    "posts-container sidebar-container";
  margin: 1em auto;
  padding: 3em 15vw;
`;

export default function Home(props) {
  return (
    <div style={{  height: "100%", width: "100vw"}}>
        <Banner
          user={props.user} />

        <GridContainer>
            <PostPreview 
                posts={props.posts} 
                userVotedPosts={props.userVotedPosts}/>

            <Sidebar />
        </GridContainer>
    </div>
  )
}