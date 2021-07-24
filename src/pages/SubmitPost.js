import React from "react";
import { useState, useEffect } from "react";
import PostServices from "../services/posts.js";
import Success from "../components/Success";

function SubmitPost(props) {
  const [status, setStatus] = useState(null);
  const [postDocument, setPostDocument] = useState({
    title: '',
    body: '',
    flair: 'random',
    username: sessionStorage.getItem("name")
  });
  const [isAuth, setIsAuth] = useState(false);

  const checkAuth = () => {
    const authenticated = sessionStorage.getItem("auth");

    if (authenticated) {
      setIsAuth(true);
    } else {
      window.location = "/signup";
    }
  }

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

  useEffect(() => {
    checkAuth();
  }, [])

  return (
    <>
      { status ? <Success/> : null}

      { isAuth ? 
        <div className="form-container">
          <div className="content-wrapper right-align ">
            <span className="header-text">Submit a post</span>
            <form className="form" id="create-post-form" onSubmit={submitPost}>
            <label>Choose a category:</label>
                <select value={postDocument.flair} name="flair" id="flair" className="dropdown" onChange={handleChange}>
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

              <label>Body</label>
              <textarea 
                type="text" 
                name="body" 
                className="input textarea"
                placeholder="Text (optional)"
                onChange={handleChange}
                value={postDocument.body} />

              <button className="btn btn-3" type="submit">SUBMIT</button>
            </form>

          </div>
        </div>
      : null }
      

    </>

  );

}

export default SubmitPost;
