import React, { useState, useEffect } from "react";
import PostServices from "../../services/posts";
import PostPreview from "../PostPreview";

import { Link } from "react-router-dom";

import RatingCounter from "../RatingCounter";
import { 
  Post,
  BorderedContainer
} from "./styles";

export default function AllPosts(props) {
  const [ posts, setPosts ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    PostServices.getPosts()
        .then(response => {
          setPosts(response.data);
        })
  }, [])

  return (
    <div className="posts-container">
          { posts.map((post) => {
            return <PostPreview post={post} />
          })}
    </div>
  );
}
