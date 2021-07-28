import React, { useEffect, useState } from "react";
import RatingCounter from "../RatingCounter/";
import CommentForm from "../CommentForm/";

function FullViewPost(props) {
  const [isCommentEmpty, setIsCommentEmpty] = useState(false);

  const fetchComments = () => {
    return (
      <>
        {props.post.comments.map((post, index) => {
          return (
            <div className="bordered-container comment-by-user" key={index}>
              <span className="bold-text">u/{post.user}</span>
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
    <>
      <div className="bordered-container full-view-container">
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
            
             
            <CommentForm
                username={props.post.author}
                postID={props.post._id} />

                {
                  isCommentEmpty
                  ? fetchComments()
                  : null
                }
          </div>

          
      </div>
    
          </>
  );
}
export default FullViewPost;
