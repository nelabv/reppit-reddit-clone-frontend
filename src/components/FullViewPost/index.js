import React from "react";
import RatingCounter from "../RatingCounter/";
import Post from "../Post";
import { 
  PostContainer, 
  CommentContainer, 
  InformationHolder } from "./styles";

function FullViewPost(props) {
  const { post } = props;
/*   const [isCommentsEmpty, setIsCommentsEmpty] = useState(true);

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
  }, [setIsCommentsEmpty, post.comments]); */

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
                   />

        </PostContainer>
  );
}
export default FullViewPost;
