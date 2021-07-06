import PostServices from "./services/posts";
import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import LoginSection from "./components/Login";
import WritePost from "./components/WritePost";
import Signup from "./components/Signup";
import FullViewContainer from "./components/FullViewContainer";
import Footer from "./components/Footer";

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
    }
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
    <div>
      <BrowserRouter>
        <Route path='/' render={props => <Navbar user={user} logout={userLogout}/>}/>
        <Route exact path='/' render={props => <Home posts={posts} user={user}/>}/>
        <Route exact path='/login' render={props => <LoginSection userLogin={userLogin} />}/>
        <Route exact path='/signup' render={props => <Signup userLogin={userLogin}/>}/>
        <Route exact path='/create-post' render={props => <WritePost />}/>
        <Route exact path='/posts/:id' render={props => <FullViewContainer/>}/>
        <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
