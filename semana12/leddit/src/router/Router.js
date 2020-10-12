import React from "react";

// Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import LoginPage from "../components/LoginPage/LoginPage";
import SignUpPage from "../components/SignUpPage/SignUpPage";
import Feed from "../components/Feed/Feed";
import PostPage from "../components/PostPage/PostPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <Route exact path="/signup">
          <SignUpPage />
        </Route>

        <Route exact path="/feed">
          <Feed />
        </Route>

        <Route exact path="/feed/:id">
          <PostPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
