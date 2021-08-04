import React, { useEffect, useState } from "react";
import RatingCounter from "../RatingCounter/";
import CommentForm from "../CommentForm/";
import { 
  PostContainer, 
  CommentContainer, 
  InformationHolder,
  Post } from "./styles";

function FullViewPost(props) {
  const [isCommentEmpty, setIsCommentEmpty] = useState(false);

  const fetchComments = () => {
    return (
      <>
        {props.post.comments.map((post, index) => {
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

  const mapComments = () => {
    if (props.post.comments.length > 0) {
      setIsCommentEmpty(true);
    }
  }
  useEffect(() => {
    mapComments();
  })

  return (
    <PostContainer>
      <InformationHolder>
        <RatingCounter 
            total={props?.post?.votes?.totalVoteCount} 
            down={props?.post?.votes?.downvotes?.length} 
            id={props?.post?._id}
            userVotedPosts={props?.userVotedPosts}/> 

        <Post>
            <div className="author-category">
              <span className="category">r/{props.post.category}</span> 
              <span className="author">Posted by u/{props.post.author}</span> 
            </div>

            <h3>{props.post.title}</h3>
            <p>{props.post.body}</p> 
            
            <span className="comments-length">Comments: {props.post.comments.length}</span>
        </Post>
      </InformationHolder>

        <div>
          <CommentForm
              username={props.post.author}
              postID={props.post._id} />

              {
                isCommentEmpty
                ? fetchComments()
                : null
              }
        </div>
    </PostContainer>
  );
}
export default FullViewPost;
