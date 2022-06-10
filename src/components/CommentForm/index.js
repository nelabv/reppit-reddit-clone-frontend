import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PostServices from "../../services/posts";
import { Form } from "../../styling/";
import { Textarea, FormButton } from "./styles";

function CommentForm(props) {
  const { id } = props;
  const [commentBody, setCommentBody] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    let comment = e.target.value;
    
    setCommentBody(comment);
  }

  const submitComment = (e) => {
    e.preventDefault();

    let comment = {
      id: id,
      username: sessionStorage.getItem("username"),
      body: commentBody
    }

    PostServices.addComment(comment, sessionStorage.getItem("token"))
      .then((response) => {
        history.go(0)
      })
      .catch(error => console.log(error))
  }

  return(
    <Form>
        <Textarea 
            type="text" 
            name="comment" 
            value={commentBody} 
            onChange={handleChange}
            placeholder="Text"/>

        <FormButton onClick={submitComment} >Submit</FormButton>
    </Form>
  )
}

export default CommentForm;