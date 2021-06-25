import React from "react";
import Post from "../Post/Post";
import "../../styling/containers.css";

function AllPosts(props) {
  return (
    <div className="posts-container">
      <Post posts= {props.posts} />
    </div>
  );
}

export default AllPosts;
