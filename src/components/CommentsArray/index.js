import React from "react";
import { Container } from "./styles";

export default function CommentsArray(props) {
  const { commentsArray } = props;

  return (
    <>
        { commentsArray.map((comment) => {
          return (
            <Container key={comment}>
                  <span>{comment.user}</span>

                  <p>{comment.body}</p>
            </Container>
          )
        })}
    </>
  )
}