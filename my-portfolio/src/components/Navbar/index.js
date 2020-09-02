import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Chidi Franklin Onyeabo
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/discover"
              className={window.location.pathname === "/About Me" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/discover"
              className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
              >
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
