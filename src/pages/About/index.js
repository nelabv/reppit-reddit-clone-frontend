import React from "react";
import {
  ContentHolder,
  LinkBtn
} from "./styles"

export default function About() {
  return (
    <ContentHolder>
      <span>About</span>

      <p>Tidbit is a Reddit clone made with ReactJS, Express, and MongoDB Atlas. It allows users to create posts, cast their votes on threads, and post comments on posts as well.</p>

      <LinkBtn rel="noopener noreferrer" href="https://www.google.com/" target="_blank">VIEW SOURCE CODE</LinkBtn>
    </ContentHolder>
  )
}