import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const userLinks = () => {
    return (
      <div className="card mb-5">
        <h4 className="card-header">User Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/cart" className="nav-link">
              My Cart
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/profile/update" className="nav-link">
              Update Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  const userInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <span style={{ fontWeight: "bold" }}>Name:</span> {name}
          </li>
          <li className="list-group-item">
            <span style={{ fontWeight: "bold" }}>Registered Email id:</span>{" "}
            {email}
          </li>
          <li className="list-group-item">
            <span style={{ fontWeight: "bold" }}>Role:</span>{" "}
            {role === 0 ? "Customer" : "Admin"}
          </li>
        </ul>
      </div>
    );
  };

  const purchaseHistory = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Purchase History</h3>
        <ul className="list-group">
          <li className="list-group-item">History</li>
        </ul>
      </div>
    );
  };
  return (
    <Layout
      title="Dashboard"
      description={`Welcome to your dashboard ${name}!`}
      className="container"
    >
      <div className="row">
        <div className="col-md-3">{userLinks()}</div>
        <div className="col-md-9">
          {userInfo()}
          {purchaseHistory()}
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
