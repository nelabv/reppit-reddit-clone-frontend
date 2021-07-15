import React, { useEffect, useState } from "react";
import "../styling/containers.css";
import "../styling/elements.css";
import RatingCounter from "./RatingCounter";
import CommentForm from "./CommentForm";

function FullViewPost(props) {
  const [isCommentEmpty, setIsCommentEmpty] = useState(false);

  const fetchComments = () => {
    return (
      <>
        {props.post.comments.map((post, index) => {
          return (
            <div key={index}>
              <span>{post.user}</span>
              <p>{post.body}</p>
            </div>
          )
        })}
      </>
    );
  }

  const mapComments = () => {
    if (props.post.comments.length > 0) {
      setIsCommentEmpty(true);
    }
  }
  useEffect(() => {
    mapComments();
  })

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
    
      <CommentForm
          username={props.post.author}
          postID={props.post._id} />

          {
            isCommentEmpty
            ? fetchComments()
            : null
          }
    </div>
  );
}
export default FullViewPost;
