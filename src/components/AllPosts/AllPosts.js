import React from "react";
import Post from "../Post/Post";

function AllPosts(props) {
  return (
    <div>
      <Post posts= {props.posts} />
    </div>
  );
}

export default AllPosts;
