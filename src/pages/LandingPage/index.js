import React from 'react';
import Navbar from '../../components/Navbar';

import Banner from "../../components/Banner";
import AllPosts from '../../components/AllPosts';
import Sidebar from "../../components/Sidebar";
import Loading from "../../components/Loading";
import { 
  GridContainer,
  HomeContainer
} from './styles';

export default function LandingPage(props) {
  return (
    <>
          <Navbar isNavTransparent={true} />

          <Banner />

          <AllPosts />

          
{/*     { props.loading 
      ? <Loading loadingMessage="Fetching data" /> 
      
      :
      <HomeContainer>
          <Banner
            user={props.user} />
  
          <GridContainer>
              <Sidebar />
              
              <PostPreview 
                  posts={props.posts} 
                  userVotedPosts={props.userVotedPosts}/>
          </GridContainer>
      </HomeContainer>
    } */}
  </>
  )
}