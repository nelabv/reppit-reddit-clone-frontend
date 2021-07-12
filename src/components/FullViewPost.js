import React from "react";
import "../styling/containers.css";
import "../styling/elements.css";
import RatingCounter from "./RatingCounter";

function FullViewPost(props) {

  return (
    <div className="fullview-post">
      <div className="individual-post-container">
          <RatingCounter 
              total={props.post.votes.totalVoteCount} 
              down={props.post.votes.downvotes.length} 
              id={props.post._id}
              userVotedPosts={props.userVotedPosts}/> 

          <div>
            <div className="user-container">
              <span className="category-tag">r/{props.post.category}</span> 
              <span className="author-tag">Posted by u/{props.post.author}</span> 
            </div>

              <h3 className="post-title">{props.post.title}</h3>
            <p>{props.post.body}</p> 
            
            <span className="num-of-comments-tag">Comments: {props.post.comments.length}</span> 
          </div>
      </div>
    </div>
  );
}
export default FullViewPost;
