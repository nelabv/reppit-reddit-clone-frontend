import React from "react";

function Comment(props) {
  return (
    <div>
      <p>{props.comments.user}</p>
      <p>{props.comments.body}</p>
      <p>{props.comments.date}</p>
    </div>
  );
}
export default Comment;
