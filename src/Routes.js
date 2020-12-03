import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// BrowserRouter will wrap the other router and help to create the rest of the components
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";
import UserDashboard from "./user/UserDashboard";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/CreateCategory";
import AddProduct from "./admin/CreateProduct";

// exact keyword is to ensure that the path is exact
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/product" exact component={AddProduct} />
        {/* This PrivateRoute component can be reused for any other page as well */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
