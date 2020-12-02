import React from "react";
import { Link, withRouter } from "react-router-dom";
// Link is used so that we don't have to re-load the page every time there is a click on a link
// withRouter is used to access the props history
import { signout, isAuthenticated } from "../auth";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#fff" };
  }
};
const Menu = ({ history }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div>
          <h2 className="" style={{ color: "#fff" }}>
            Claritin
          </h2>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggle"
          aria-controls="navbarToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offset-xl-8 offset-lg-6 collapse navbar-collapse"
          id="navbarToggle"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mr-sm-2">
              {/* to is similar to href in the anchor tag */}
              <Link className="nav-link" style={isActive(history, "/")} to="/">
                Home
              </Link>
            </li>
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
              <li className="nav-item mr-sm-2">
                {/* to is similar to href in the anchor tag */}
                <Link
                  className="nav-link"
                  style={isActive(history, "/user/dashboard")}
                  to="/user/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            )}
            {isAuthenticated() && isAuthenticated().user.role === 1 && (
              <li className="nav-item mr-sm-2">
                {/* to is similar to href in the anchor tag */}
                <Link
                  className="nav-link"
                  style={isActive(history, "/admin/dashboard")}
                  to="/admin/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            )}
            {!isAuthenticated() && (
              <>
                <li className="nav-item mr-sm-2">
                  {/* to is similar to href in the anchor tag */}
                  <Link
                    className="nav-link"
                    style={isActive(history, "/signin")}
                    to="/signin"
                  >
                    Signin
                  </Link>
                </li>
                <li className="nav-item mr-sm-2">
                  {/* to is similar to href in the anchor tag */}
                  <Link
                    className="nav-link"
                    style={isActive(history, "/signup")}
                    to="/signup"
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}

            {isAuthenticated() && (
              <li className="nav-item mr-sm-2">
                {/* to is similar to href in the anchor tag */}
                <span
                  className="nav-link"
                  style={{ cursor: "pointer", color: "#fff" }}
                  onClick={() =>
                    signout(() => {
                      history.push("/");
                    })
                  }
                >
                  Signout
                </span>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default withRouter(Menu);
