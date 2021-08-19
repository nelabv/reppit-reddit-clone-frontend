import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RatingCounter from "../RatingCounter/";
import PostServices from "../../services/posts";
import CommentForm from "../CommentForm/";
import Loading from "../Loading";
import { 
  PostContainer, 
  CommentContainer, 
  InformationHolder,
  Post } from "./styles";

function FullViewPost(props) {
  const [post, setPost] = useState();
  const [isCommentsEmpty, setIsCommentsEmpty] = useState(true)
  
  const { loading, setLoading } = props;

  const { id } = useParams();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoading(true)
      PostServices.getPostByID(id, sessionStorage.getItem("token"))
        .then((res) => {
          const post = res.data.retrievedPost[0];
          setPost(post);

          if (post.comments.length !== 0) {
            setIsCommentsEmpty(false)
          }
          setLoading(false)
        })
    } else {
      window.location = "/signup";
    };
  }, [id, setLoading])


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

  return (
    <>
    { loading 
      ? <Loading loadingMessage="Fetching post" />
      : <PostContainer>
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
    }
    </>
  );
}
export default FullViewPost;
