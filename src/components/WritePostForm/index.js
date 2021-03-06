import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import PostServices from "../../services/posts";
import { FormTextarea as Textarea,
  Form,
  FormLabel,
  FormSelect,
  FormInput,
  FormButton  } from "./styles";

function WritePostForm() {
  let history = useHistory();

  const token = sessionStorage.getItem("token");

  const [postDocument, setPostDocument] = useState({
    title: '',
    body: '',
    category: 'general',
    username: sessionStorage.getItem("username")
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

    const APIrequest = await PostServices.createPost(postDocument, token);

    if (APIrequest.request.status === 200) {
      setPostDocument({
        title: '',
        body: '',
        category: '',
        username: ''
      });

     history.push(`/posts/${APIrequest.data.id}`);
    }
  }

  useEffect(() => {
    if (!token) {
      history.push("/login")
    } 
  }, [history, token])

  return (
    <>
            <Form onSubmit={submitPost}>
              <FormLabel>Choose a category:</FormLabel>
                <FormSelect value={postDocument.category} name="category" id="category" onChange={handleChange} required>
                  <option value="general">general</option>
                  <option value="politics">politics</option>
                  <option value="animals">animals</option>
                  <option value="programming">programming</option>
                </FormSelect>

              <FormInput 
                type="text" 
                name="title"
                placeholder="Title"
                onChange={handleChange}
                value={postDocument.title} 
                required />

              <Textarea type="text" name="body" placeholder="Text (optional)" onChange={handleChange} value={postDocument.body} required></Textarea>

              <FormButton type="submit">Submit</FormButton>
            </Form>
    </>

  );

}

export default WritePostForm;
