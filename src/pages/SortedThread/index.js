import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import PostServices from "../../services/posts";
import Utilities from "../../services/utils";
import PostPreview from "../../components/PostPreview";
import {
  Banner,
  Container
} from "./styles";

function SortedThread(props) {
  const id = useParams();
	const [filteredPosts, setFilteredPosts] = useState([]);
  const [voteArray, setVoteArray] = useState([]);

  const retrieveData = useCallback(async () => {
    if (sessionStorage.getItem("token")) {
      const result = await PostServices.getPostsByCategory(id.category);
      setFilteredPosts(result.data.contents);

      const data = await Utilities.fetchVoteArray(sessionStorage.getItem("token"));
      setVoteArray(data.data[0].votes);
    } else {
      window.location = "/signup";
    }
  }, [id.category])

	useEffect(() => {
    retrieveData();
	});

	return (
    <>
      <Banner>
        <h2 className="thread-tag">r/{id.category}</h2>
      </Banner>

      <Container>
          <PostPreview 
                posts={filteredPosts} 
                voteArray={voteArray}/>
      </Container>
    </>
	);
}

export default SortedThread;
