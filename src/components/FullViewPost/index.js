import React, { useEffect, useState } from "react";
import RatingCounter from "../RatingCounter/";
import CommentForm from "../CommentForm/";
import { 
  PostContainer, 
  CommentContainer, 
  InformationHolder,
  Post } from "./styles";

function FullViewPost(props) {
  const { post } = props;
  const [isCommentsEmpty, setIsCommentsEmpty] = useState(true);

  const fetchComments = () => {
    return (
      <>
        { post?.comments.map((post, index) => {
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
    if (post.comments.length !== 0) {
      setIsCommentsEmpty(false)
    }
  }, [setIsCommentsEmpty, post.comments]);

  return (
        <PostContainer>
                    <InformationHolder>
                      <RatingCounter 
                          total={post?.votes?.totalVoteCount} 
                          down={post?.votes?.downvotes?.length} 
                          id={post?._id}/> 

                      <Post>
                          <div className="author-category">
                            <span className="category">r/{post?.category}</span> 
                            <span className="author">Posted by u/{post?.author}</span> 
                          </div>

                          <h3>{post?.title}</h3>
                          <p>{post?.body}</p> 
                          
                          <span className="comments-length">Comments: {post?.comments.length}</span>
                      </Post>
                    </InformationHolder>
                    <div>
                      <CommentForm
                          username={post?.author}
                          postID={post?._id} />


                      { isCommentsEmpty ? null : fetchComments() }
                    </div>
                </PostContainer>
  );
}
export default FullViewPost;
