import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PostServices from "../../services/posts";
import { Form } from "../../styling/";
import { Textarea } from "./styles";

function CommentForm(props) {
  const [commentBody, setCommentBody] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    let comment = e.target.value;
    
    setCommentBody(comment);
  }

  const submitComment = (e) => {
    e.preventDefault();

    let commentDoc = {
      postID: props.postID,
      username: sessionStorage.getItem("name"),
      body: commentBody
    }

    PostServices.submitComment(commentDoc, sessionStorage.getItem("token"))
      .then((response) => {
        console.log(response);
        history.go(0)
      })
  }

  return(
    <div style={{borderTop: "1px solid #d9d9d9", marginTop: "1em"}}>
    
        <Form>
          <label>Comment as: <span>{sessionStorage.getItem("name")}</span></label>

          <Textarea 
              type="text" 
              name="comment" 
              value={commentBody} 
              onChange={handleChange}
              placeholder="Text"/>

          <button onClick={submitComment} >Submit</button>
        </Form>
    </div>
  )
}

export default CommentForm;