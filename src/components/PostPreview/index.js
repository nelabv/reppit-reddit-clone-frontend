import React from "react";
import { Link } from "react-router-dom";

import RatingCounter from "../RatingCounter/";
import { 
  Post,
  BorderedContainer
} from "./styles";

export default function PostPreview(props) {
  return (
    <div className="posts-container">
      { props.posts.map((post) => {

        return (
          <BorderedContainer key={post._id}>
            <RatingCounter 
                total={post.votes.totalVoteCount}
                down={post.votes.downvotes.length} 
                id={post._id}
            /> 

            <Post>
              <div className="author-category">
                <span className="category">r/{post.category}</span> 
                <span className="author">Posted by u/{post.author}</span> 
              </div>

              <Link to={`/posts/${post._id}`} style={{textDecoration: "none"}}>
                <h3>{post.title}</h3>
              </Link>
              <p>{post.body}</p> 
              
              <span className="comments-length">Comments: {post.comments.length}</span> 
            </Post>
          </BorderedContainer>
        )
      })}

    </div>
  );
}
