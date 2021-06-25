import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import RatingCounter from "../RatingCounter/RatingCounter";

function AllPosts(props) {
  return (
    <>

    { props.posts.map((post, index) => {
      return (
        <div key={post._id} className="container">
          <RatingCounter id={post._id}/> 

          <div>
            <div className="user-section">
              <p className="flair-tag">r/{post.category}</p> 
              <p className="author-tag">Posted by u/{post.author}</p> 
            </div>

            <Link to={`/posts/${post._id}`} style={{textDecoration: "none"}}>
              <h3 className="title">{post.title}</h3>
            </Link>
            <p>{post.body}</p> 
            
            <p className="num-of-comments-tag">Comments: {post.comments.length}</p> 
          </div>
        </div>
      )
    })}

    </>
  );
}

export default AllPosts;
