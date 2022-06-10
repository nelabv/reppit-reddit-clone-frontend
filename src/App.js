import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserContext } from "./context";

import LandingPage from "./pages/LandingPage";
import PostFullRead from "./pages/PostFullRead";
import Login from "./pages/Login/";
import Register from "./pages/Register";
import SubmitPost from "./pages/SubmitPost";
import SortedThread from "./pages/SortedThread";

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
                <Route exact path="/posts/:id" component={PostFullRead} />
                <Route exact path="/write" component={SubmitPost}/>
                <Route path='/login' component={Login}/>
                <Route path="/register" component={Register} />
                <Route path="/categories/:category" component={SortedThread} />
            </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
