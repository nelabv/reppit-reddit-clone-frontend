import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostServices from "../../services/posts";
import RatingCounter from "../RatingCounter/RatingCounter";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import "./styles.css";

function IndividualPosts() {
  const { id } = useParams();
  const [post, setPost] = useState();

  const fetchData = async () => {
    const APIrequest = await PostServices.getPostByID(id, localStorage.getItem("token"));
    const _post = await APIrequest.data.retrievedPost[0];
    console.log(_post);
    setPost(_post);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []); 

  return (
    <> 
    {post ? 
    <>
      <div className="flair">
        <span>r/{post.category}</span>
      </div>

      <div className="content-wrapper">
        <RatingCounter count={post.rating}/>
        <div className="content">
          <p>Posted by u/{post.author}</p>
          <p>{post.datePosted}</p>
          <h1>{post.title}</h1>
          <p>{post.body}</p>

          { post.comments.map((comment, index) => {
            return (
              <Comment key={index} comments={comment} />
            )
          })}

          <CommentForm postId = {post._id}/>
        </div>

      </div>

      </>
      : null
    
    }
    </>
  );
}
export default IndividualPosts;
