import React from 'react';

import Banner from "../../components/Banner";
import PostPreview from '../../components/PostPreview';
import Sidebar from "../../components/Sidebar";
import Loading from "../../components/Loading";
import { 
  GridContainer,
  HomeContainer
} from './styles';

export default function Home(props) {
  return (
    <>
    { props.loading 
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
    }
  </>
  )
}