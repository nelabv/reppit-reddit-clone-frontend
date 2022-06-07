import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserContext } from "./context";

import LandingPage from "./pages/LandingPage";
import PostFullRead from "./pages/PostFullRead";
import Login from "./pages/Login/";
import Register from "./pages/Register";


import UserServices from "./services/user";

function App() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("username")) {
      UserServices.fetchUserInformation(sessionStorage.getItem("username"), sessionStorage.getItem("token"))
          .then(response => {
            const username = response.data[0].username;

            setUserProfile(username);
          })
    }
  }, [userProfile])
  return (
    <UserContext.Provider value={[userProfile, setUserProfile]}>
      <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/posts/:id" component={PostFullRead} />
                <Route path='/login' component={Login}/>
                <Route path="/register" component={Register} />
            </Switch>
      </BrowserRouter>
    </UserContext.Provider>
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
