import React from "react";
import { AuthorTagContainer } from "./styles.js"

export default function AuthorTag(props) {
  const { post } = props;
  
  return (
    <AuthorTagContainer>
      <div className="circle"><span>{post.charAt(0)}</span></div>

      <span>{post}</span>
    </AuthorTagContainer>
  );
}
