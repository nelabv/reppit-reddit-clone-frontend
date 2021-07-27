import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PostServices from "../services/posts";

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
    
        <form className="form">
          <label className="bold-text">
            Comment as: <span className="user-tag">{sessionStorage.getItem("name")}</span>
          </label>

          <textarea 
              type="text" 
              name="comment" 
              value={commentBody} 
              onChange={handleChange}
              className="input textarea comment-form"/>

          <button className="btn login-register-btn" onClick={submitComment} >Submit</button>
        </form>
    </div>
  )
}

export default CommentForm;