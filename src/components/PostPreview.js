import React from "react";
import { Link } from "react-router-dom";
import "../styling/containers.css";
import RatingCounter from "./RatingCounter";

function PostPreview(props) {
  return (
    <>

    { props.posts.map((post, index) => {
      return (
        <div key={post._id} className="individual-post-container">
          <RatingCounter count={post.votes.totalVoteCount} id={post._id}/> 

          <div>
            <div className="user-container">
              <span className="category-tag">r/{post.category}</span> 
              <span className="author-tag">Posted by u/{post.author}</span> 
            </div>

            <Link to={`/posts/${post._id}`} style={{textDecoration: "none"}}>
              <h3 className="post-title">{post.title}</h3>
            </Link>
            <p className="body-preview">{post.body}</p> 
            
            <span className="num-of-comments-tag">Comments: {post.comments.length}</span> 
          </div>
        </div>
      )
    })}

    </>
  );
}

export default PostPreview;
