import React from "react";
import RatingCounter from "./RatingCounter";

function FullViewPost(props) {

  return (
    <>
    <div className="flair">
    <span>r/{props.post.category}</span>
  </div>

  <div className="content-wrapper">
    <RatingCounter total={props.post.votes.totalVoteCount} down={props.post.votes.downvotes.length} id={props.post._id}/>
    
    <div className="content">
      <p>Posted by u/{props.post.author}</p>
      <p>{props.post.datePosted}</p>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
    </div>
  </div>
  </>
  );
}
export default FullViewPost;
