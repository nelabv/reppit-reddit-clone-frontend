import PostServices from "./services/posts";
import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import SubmitPost from "./components/SubmitPost/SubmitPost";
import Signup from "./components/SignUp/Signup";
import IndividualPosts from "./components/IndividualPosts/IndividualPosts";
import Footer from "./components/Footer/Footer";

function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();

  const fetchPosts = async () => {
    const APIrequest = await PostServices.getAllPosts();
    const allPosts = APIrequest.data.contents.posts;
    setPosts(allPosts);
  }

  const checkForExistingData = () => {
    if (localStorage.getItem("token") !== null && localStorage.getItem("name") !== null) {
      setUser(localStorage.getItem("name"))
    } else {}
  }

  const userLogin = (username) => {
    setUser(username);
    window.location = "/";
  }

  const userLogout = () => {
    setUser('');
    localStorage.clear();
    window.location = "/";
  }

  useEffect(() => {
    fetchPosts();
    checkForExistingData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Route path='/' render={props => <Navbar user={user} logout={userLogout}/>}/>
        <Route exact path='/' render={props => <Home posts={posts} />}/>
        <Route exact path='/login' render={props => <Login userLogin={userLogin} />}/>
        <Route exact path='/signup' render={props => <Signup userLogin={userLogin}/>}/>
        <Route exact path='/create-post' render={props => <SubmitPost user={user} />}/>
        <Route exact path='/posts/:id' render={props => <IndividualPosts />}/>
        <Footer/>
      </BrowserRouter>
    </>

  );
}

export default App;
