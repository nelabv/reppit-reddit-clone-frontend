import React from "react";
import PostPreview from "./PostPreview";
import "../styling/containers.css";

function MainPostThread(props) {
  return (
    <div className="posts-container">
      <PostPreview posts= {props.posts} />
    </div>
  );
}

export default MainPostThread;
