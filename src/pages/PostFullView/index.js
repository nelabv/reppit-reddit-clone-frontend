import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostServices from "../../services/posts";
import Loading from "../../components/Loading";
import FullViewPost from "../../components/FullViewPost";
import Register from "../../components/Register";
import {
  Container
} from "./styles";

function PostFullView(props) {
  const [postID, setPostID] = useState();
  const [post, setPost] = useState([]);
  const [isAuthSuccessful, setIsAuthSuccessful] = useState(false);

  const { id } = useParams();
/*   const { id } = useParams();

  const fetchData = useCallback(async () => {
    props.setLoading(true);
    const authenticated = sessionStorage.getItem("auth");

    if (authenticated !== "true") {
     
    } else {
      try {
        const APIcall = await PostServices.getPostByID(id, sessionStorage.getItem("token"))
          .catch(function (error) {
            console.log("An error occured: ", error.response);
          })
        
        let APIresponse = APIcall.data.retrievedPost[0];
  
        setPost(APIresponse);
        setIsAuthSuccessful(true);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    }
  }, [props, id]) */

  useEffect(() => {
    async function APIcall() {
      try {
        const APIcall = await PostServices.getPostByID(id, sessionStorage.getItem("token"))
          .catch(function (error) {
            console.log("An error occured: ", error.response);
          })
        
        let APIresponse = APIcall.data.retrievedPost[0];
  
        setPost(APIresponse);
        setIsAuthSuccessful(true);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    }

    APIcall();
  }, [postID, id])

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setPostID(id);
    } else {
      window.location = "/signup";
    }
  }, [id])

  return (
    <>
    { props.loading ? 
      <Loading loadingMessage="Fetching post" />
      :
      <Container>
        { isAuthSuccessful ? 
          <FullViewPost 
              post={post}/> : 
          <Register />
        }
      </Container> }
      </>
  );
}
export default PostFullView;
