import React, { useEffect, useState } from "react";
import RatingCounter from "../RatingCounter/";
import CommentForm from "../CommentForm/";
import { 
  PostContainer, 
  CommentContainer, 
  InformationHolder,
  Post } from "./styles";

function FullViewPost(props) {
  const [isCommentEmpty, setIsCommentEmpty] = useState(true);
  const { _id, 
    author, 
    body, 
    category, 
    comments, 
    // datePosted, 
    title,
    votes } = props.post;


  const fetchComments = () => {
    return (
      <>
        { comments.map((post, index) => {
          return (
            <CommentContainer key={index}>
              <span className="bold-text">u/{post.user}</span>
              <p>{post.body}</p>
            </CommentContainer>
          )
        })}
      </>
    );
  }

  useEffect(() => {
    if (comments.length > 0) {
      setIsCommentEmpty(false);
    } else if (comments.length === 0) {
      setIsCommentEmpty(true);
    }
  }, [comments.length]);

  return (
    <PostContainer>
      <InformationHolder>
        <RatingCounter 
            total={votes?.totalVoteCount} 
            down={votes?.downvotes?.length} 
            id={_id}/> 

        <Post>
            <div className="author-category">
              <span className="category">r/{category}</span> 
              <span className="author">Posted by u/{author}</span> 
            </div>

            <h3>{title}</h3>
            <p>{body}</p> 
            
            <span className="comments-length">Comments: {comments.length}</span>
        </Post>
      </InformationHolder>

        <div>
          <CommentForm
              username={author}
              postID={_id} />

          { isCommentEmpty ? null : fetchComments() }
        </div>
    </PostContainer> 
  );
}
export default FullViewPost;
