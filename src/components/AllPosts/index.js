import React, { useState, useEffect } from "react";
import PostServices from "../../services/posts";
import PostPreview from "../PostPreview";

export default function AllPosts(props) {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    PostServices.getPosts()
        .then(response => {
          setPosts(response.data.reverse());
        })
  }, [])

  return (
    <div>
          { posts.map((post) => {
            return <PostPreview post={post} key={post._id}/>
          })}
    </div>
  );
}
