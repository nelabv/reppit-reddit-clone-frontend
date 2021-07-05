import React from "react";
import { useState } from "react";
import PostServices from "../services/posts.js";
import Success from "./Success";
import NotLoggedIn from "./NotLoggedIn";

function WritePost(props) {
  const [status, setStatus] = useState(null);
  const [postDocument, setPostDocument] = useState({
    title: '',
    body: '',
    flair: '',
    username: localStorage.getItem("name")
  });

  const handleChange = (e) => {
    e.preventDefault();
    const newObject = { ...postDocument,
      [e.target.name] : e.target.value
    }
    setPostDocument(newObject);
  }; 

  const submitPost = async (e) => {
    e.preventDefault();
    const APIrequest = await PostServices.submitPost(postDocument, localStorage.getItem("token"));

    if (APIrequest.request.status === 200) {
      setStatus(true);
      setPostDocument({
        title: '',
        body: '',
        flair: '',
        username: ''
      });
      window.location = "/posts/" + APIrequest.data.id;
    }
  }

  return (
    <>
      { status ? <Success/> : null}

      { props.user ? <div>
        <h1>Submit a post</h1>
      <form id="create-post-form" onSubmit={submitPost}>
        <label>Title</label>
        <input 
          type="text" 
          name="title"
          onChange={handleChange}
          value={postDocument.title} />

        <label>Body</label>
        <input 
          type="text" 
          name="body" 
          onChange={handleChange}
          value={postDocument.body} />

        <label>Flair</label>
        <input 
          type="text" 
          name="flair"
          onChange={handleChange}
          value={postDocument.flair}/>

        <button type="submit">SUBMIT</button>
      </form>
      </div>
      : <NotLoggedIn />}
      

    </>

  );

}

export default WritePost;
