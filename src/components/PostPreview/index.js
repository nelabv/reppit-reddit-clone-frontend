import React from "react";
import { Link } from "react-router-dom";
import RatingCounter from "../RatingCounter";
import { PostPreviewContainer, Post } from "./styles";
import moment from "moment";

export default function PostPreview(props) {
  const { post } = props;

  const formatDate = (date) => {
    const startDate = moment(date).startOf('day').fromNow(); 
    return startDate;
  }

    return (
        <PostPreviewContainer key={post._id}>
          <RatingCounter 
              total={post.votes.totalVoteCount}
              down={post.votes.downvotes.length} 
              id={post._id} /> 

          <Post>
            <div className="author-category">
              <Link to={`/categories/${post.category}`}>
                    <span className="category">{post?.category?.toUpperCase()}</span> 
              </Link>

              <span className="author">Posted by {post.author}</span>
              <span className="author">{formatDate(post.datePosted)}</span>
            </div>

            <Link to={`/posts/${post._id}`} style={{textDecoration: "none"}}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.body}</p> 
            
            <span className="comments-length">Comments: {post.comments.length}</span> 
          </Post>
        </PostPreviewContainer>
    )
}
