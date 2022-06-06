import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostServices from "../../services/posts";
import Utilities from "../../services/utils";
import PostPreview from "../../components/AllPosts";
import Loading from "../../components/Loading";
import {
  Banner,
  Container
} from "./styles";

function SortedThread(props) {
  const id = useParams();
  const { loading, setLoading } = props;
	const [filteredPosts, setFilteredPosts] = useState([]);
  const [voteArray, setVoteArray] = useState([]);

	useEffect(() => {
    setLoading(true);
      if (!sessionStorage.getItem("token")) {
        window.location = "/signup";
      } else {
        PostServices.getPostsByCategory(id.category)
        .then((res) => {
          setFilteredPosts(res.data.contents);
        })

        Utilities.fetchVoteArray(sessionStorage.getItem("token"))
          .then((res) => {
            setVoteArray(res.data[0].votes);
          })
      }
    setLoading(false);
	}, [id.category, setLoading]);

	return (
    <>
      { loading 
          ? <Loading loadingMessage="Loading" /> 
          : <>
            <Banner>
              <h2 className="thread-tag">r/{id.category}</h2>
            </Banner>

            <Container>
              <PostPreview 
                    posts={filteredPosts} 
                    voteArray={voteArray}/>
            </Container> </> }
    </>
	);
}

export default SortedThread;
