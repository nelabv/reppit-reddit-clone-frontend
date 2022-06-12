import React from 'react';
import { Container } from "./styles";
 
export default function ErrorPrompt(props) {
  const { errorMessage } = props;

  return (
    <>
      {
        errorMessage ? <Container>{errorMessage}</Container> : null
      }
    </>
  )
}
