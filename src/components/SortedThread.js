import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostServices from "../services/posts";
import PostPreview from "./PostPreview";
import "../styling/containers.css";

// <PostPreview posts= {props.posts} userVotedPosts={props.userVotedPosts}/>

function SortedThread(props) {
  const id = useParams();
  const [filteredPosts, setFilteredPosts] = useState([]);

  const fetchPosts = async () => {
    if (sessionStorage.getItem("token")) {
      const result = await PostServices.getPostsByCategory(id.category);
      setFilteredPosts(result.data.contents);
    } else {
      window.location = "/signup";
    }
  } 

  useEffect(() => {
    fetchPosts();
  })

  return (
    <>
      <div>
        <h2>{id.category}</h2>
      </div>
      
      <div className="posts-container">
        <PostPreview 
              posts= {filteredPosts} 
              userVotedPosts={props.userVotedPosts}/>
      </div>
    </>
  );
}

export default SortedThread;
