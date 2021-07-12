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

import UserServices from "./services/user.js";

function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  const [userVotedPosts, setUserVotedPosts] = useState([]);

  const fetchPosts = async () => {
    const APIrequest = await PostServices.getAllPosts();
    const allPosts = APIrequest.data.contents;
    setPosts(allPosts);
  }

  const checkForExistingData = async () => {
    if (sessionStorage.getItem("token") !== null && sessionStorage.getItem("name") !== null) {
      setUser(sessionStorage.getItem("name"));
      
      const userInformation = await UserServices.fetchUserInformation(sessionStorage.getItem("token"));
      setUserVotedPosts(userInformation.data[0].votes);
    }
  }

  const userLogin = async (username) => {
    setUser(username);
    window.location = "/";


  }

  const userLogout = () => {
    setUser('');
    sessionStorage.clear();
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
        <Route exact path='/' render={props => <Home posts={posts} user={user} userVotedPosts={userVotedPosts}/>}/>
        <Route exact path='/login' render={props => <LoginSection userLogin={userLogin} />}/>
        <Route exact path='/signup' render={props => <Signup userLogin={userLogin}/>}/>
        <Route exact path='/create-post' render={props => <WritePost />}/>
        <Route exact path='/posts/:id' render={props => <FullViewContainer userVotedPosts={userVotedPosts}/>}/>
        <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
