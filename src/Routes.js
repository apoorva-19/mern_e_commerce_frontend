import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// BrowserRouter will wrap the other router and help to create the rest of the components
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";

// exact keyword is to ensure that the path is exact
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
