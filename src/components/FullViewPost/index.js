import React from "react";
import RatingCounter from "../RatingCounter/";
import Post from "../Post";
import { 
  PostContainer, 
  CommentContainer, 
  InformationHolder } from "./styles";

function FullViewPost(props) {
  const { post } = props;

  return (
        <PostContainer>
            <RatingCounter 
                total={post?.votes?.totalVoteCount} 
                down={post?.votes?.downvotes?.length} 
                id={post?._id}/> 

            <Post title={post.title}
                  author={post.author}
                  body={post.body}
                  comments={post.comments}
                  category={post.category}
                  datePosted={post.datePosted}
                   />

        </PostContainer>
  );
}
export default FullViewPost;
