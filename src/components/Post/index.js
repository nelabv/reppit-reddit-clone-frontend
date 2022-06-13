import React from "react";
import { useParams } from "react-router-dom";
import AuthorTag from "../AuthorTag/index.js";
import { Container } from "./styles.js"
import CommentForm from "../CommentForm/index.js";
import NoCommentsYet from "../NoCommentsYet";
import CommentsArray from "../CommentsArray/index.js";
import moment from "moment";

export default function Post(props) {
  const { title, author, body, comments, category, datePosted } = props;
  const { id } = useParams();

  const formatDate = (date) => {
    const startDate = moment(date).startOf('day').fromNow(); 
    return startDate;
  }

  return (
    <>
      <Container>
          <h3>{title}</h3>
          <span className="category">{category.toUpperCase()}</span> 

          <AuthorTag post={author} />
          <span className="date">{formatDate(datePosted)}</span>


          <p>{body}</p> 

          <span className="comments-length">Comments: {comments.length}</span>
          
          <CommentForm id={id}/>
          { comments.length === 0 ? <NoCommentsYet /> : <CommentsArray commentsArray={comments} /> }

      </Container>
      
    </>
  );
}
