import React from "react";
import { useState, useEffect } from "react";
import PostServices from "../../services/posts";
import {
  Form,
  FormContainer,
  CenterAlign,
  Textarea
} from "./styles";

function SubmitPost() {
  const [postDocument, setPostDocument] = useState({
    title: '',
    body: '',
    flair: 'random',
    username: sessionStorage.getItem("name")
  });
  const [isAuth, setIsAuth] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const newObject = { ...postDocument,
      [e.target.name] : e.target.value
    }
    setPostDocument(newObject);
  }; 

  const submitPost = async (e) => {
    e.preventDefault();
    const APIrequest = await PostServices.submitPost(postDocument, sessionStorage.getItem("token"));

    if (APIrequest.request.status === 200) {
      setPostDocument({
        title: '',
        body: '',
        flair: '',
        username: ''
      });
      window.location = "/posts/" + APIrequest.data.id;
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsAuth(true);
    } else {
      window.location = "/signup";
    }
  }, [])

  return (
    <>
      { isAuth ? 
          <FormContainer>
            <CenterAlign>
            <span className="header-text">Submit a post</span>
            <Form onSubmit={submitPost}>
              <label>Choose a category:</label>
                <select value={postDocument.flair} name="flair" id="flair" onChange={handleChange}>
                  <option value="random">random</option>
                  <option value="nice">nice</option>
                  <option value="programming">programming</option>
                </select>

              <input 
                type="text" 
                name="title"
                placeholder="Title"
                onChange={handleChange}
                value={postDocument.title} />

              <Textarea type="text" name="body" placeholder="Text (optional)" onChange={handleChange} value={postDocument.body}></Textarea>

              <button type="submit">SUBMIT</button>
            </Form>
            </CenterAlign>
          </FormContainer>
      : null }
      

    </>

  );

}

export default SubmitPost;
