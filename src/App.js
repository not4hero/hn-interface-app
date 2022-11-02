import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import { Homepage, MainPage } from "./components/MainPage/MainPage";
import { StoryInfo } from "./components/StoryInfo/StoryInfo";


export const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/info/:id" component={StoryInfo} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
