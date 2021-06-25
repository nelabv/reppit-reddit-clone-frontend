import React, { useState } from "react";
import PostServices from "../../services/posts";

function CommentForm(props) {
  const [commentBody, setCommentBody] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const _commentBody = e.target.value;
    setCommentBody(_commentBody);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const commentDoc = {
      postID: props.postId,
      body: commentBody
    }
    PostServices.submitComment(commentDoc, localStorage.getItem("token"));
    setCommentBody('');
    window.location.reload();
  }

  return(
    <div>
      <form>
        <label htmlFor="username">Comment</label>
        <input type="text" name="commentBody" onChange={handleChange} value={commentBody} ></input>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default CommentForm;