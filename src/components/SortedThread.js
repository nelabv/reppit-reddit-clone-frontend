import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostServices from "../services/posts";
import PostPreview from "./PostPreview";
import "../styling/containers.css";

// <PostPreview posts= {props.posts} userVotedPosts={props.userVotedPosts}/>

function SortedThread(props) {
  const query = useParams();

  const fetchPosts = async () => {
    if (sessionStorage.getItem("token")) {
      console.log("Fetch API here");
    } else {
      window.location = "/signup";
    }
  } 

  useEffect(() => {
    fetchPosts();
  })
  return (
    <div className="posts-container">
      HELLO
    </div>
  );
}

export default SortedThread;
