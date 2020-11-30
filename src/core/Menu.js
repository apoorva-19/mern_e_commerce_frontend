import React from "react";
import { Link, withRouter } from "react-router-dom";
// Link is used so that we don't have to re-load the page every time there is a click on a link
// withRouter is used to access the props history

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
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* to is similar to href in the anchor tag */}
              <Link className="nav-link" style={isActive(history, "/")} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              {/* to is similar to href in the anchor tag */}
              <Link
                className="nav-link"
                style={isActive(history, "/signin")}
                to="/signin"
              >
                Signin
              </Link>
            </li>
            <li className="nav-item">
              {/* to is similar to href in the anchor tag */}
              <Link
                className="nav-link"
                style={isActive(history, "/signup")}
                to="/signup"
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default withRouter(Menu);
