import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostServices from "../../services/posts";
import FullViewPost from "../FullViewPost.js";
import Signup from "../SignUp/Signup";
import "./styles.css";

function IndividualPosts(props) {

  const { id } = useParams();
  const [isAuthSuccessful, setIsAuthSuccessful] = useState(false);
  const [post, setPost] = useState([]);
  const authenticated = localStorage.getItem("auth");

  const fetchData = async () => {
    if (authenticated !== "true") {
      window.location = "/signup";
    } else {
      try {
        const APIcall = await PostServices.getPostByID(id, localStorage.getItem("token"))
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
  }

  useEffect(() => {
    fetchData();

    return () => {
      setPost({}); 
    };
  }, [])

  return (
    <>
      { isAuthSuccessful ? 
        <FullViewPost post={post}/> : 
        <Signup />
      }
    </>
  );
}
export default IndividualPosts;
