import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostServices from "../../services/posts";
import PostPreview from "../../components/PostPreview";
import {
  Banner,
  Container
} from "./styles";

function SortedThread(props) {
  const id = useParams();
	const [filteredPosts, setFilteredPosts] = useState([]);
  const retrieveData = async () => {
    if (sessionStorage.getItem("token")) {
      const result = await PostServices.getPostsByCategory(id.category);
      setFilteredPosts(result.data.contents);
    } else {
      window.location = "/signup";
    }
  }

	useEffect(() => {
    retrieveData();
	}, []);

	return (
    <>
      <Banner>
        <h2 className="thread-tag">r/{id.category}</h2>
      </Banner>

      <Container>
          <PostPreview 
                posts= {filteredPosts} 
                userVotedPosts={props.userVotedPosts}/>
      </Container>
    </>
	);
}

export default SortedThread;
