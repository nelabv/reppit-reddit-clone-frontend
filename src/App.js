import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import PostFullRead from "./pages/PostFullRead";
import Login from "./pages/Login/";

import Navbar from "./components/Navbar/";
import Register from "./components/Register";
import Footer from "./components/Footer/";
import SortedThread from "./pages/SortedThread/";
import SubmitPost from "./pages/SubmitPost/";
import About from "./pages/About/";

import PostServices from "./services/posts";
import UserServices from "./services/user";

function App() {
/*   const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const APIrequest = await PostServices.getAllPosts();
    const allPosts = APIrequest.data.contents;
    setPosts(allPosts);
    setLoading(false);
  }

  const checkForExistingData = async () => {
    if (sessionStorage.getItem("token") !== null && sessionStorage.getItem("name") !== null) {
      setUser(sessionStorage.getItem("name"));
    }
  }

  const userLogin = async (userDocument) => {
    await UserServices.login(userDocument)
      .then((response) => {
        
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("name", userDocument.username);
        sessionStorage.setItem("auth", true);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response);
        }
    });
    setUser(userDocument.username);
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
  }, []); */

  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/posts/:id" component={PostFullRead} />
          <Route path='/login' component={Login}/>
      </Switch>
    </BrowserRouter>
/*     <BrowserRouter>
      <Route 
          path='/' 
          render={ props => <Navbar user={user} logout={userLogout}/>} />
          
      <Switch >
        <Route 
            exact path='/' 
            render={props => <Home posts={posts} user={user} loading={loading}/>}/>
        <Route 
            exact path='/login' 
            render={props => <Login userLogin={userLogin} />}/>
        <Route 
            exact path='/signup' 
            render={props => <Register userLogin={userLogin}/>}/>
        <Route 
            exact path='/create-post' 
            render={props => <SubmitPost />}/>
        <Route 
            exact path='/posts/:id' 
            render={props => <PostFullView loading={loading} setLoading={setLoading}/>}/>
        <Route 
            exact path='/categories/:category' 
            render={props => <SortedThread loading={loading} setLoading={setLoading} />}/>
            
        <Route 
            exact path='/' 
            component= {Footer}/>

        <Route 
            exact path='/about' 
            component= {About}/>
      </Switch>
    </BrowserRouter> */
  );
}

export default App;
