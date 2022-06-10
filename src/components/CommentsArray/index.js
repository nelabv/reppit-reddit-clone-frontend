import React from "react";
import { Container } from "./styles";
import AuthorTag from "../AuthorTag";

export default function CommentsArray(props) {
  const { commentsArray } = props;

  return (
    <>
        { commentsArray.map((comment) => {
          return (
            <Container>
                  <span>{comment.user}</span>

                  <p>{comment.body}</p>
            </Container>
          )
        })}
    </>
  )
}