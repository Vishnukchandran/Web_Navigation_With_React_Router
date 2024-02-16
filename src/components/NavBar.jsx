//NavBar page

import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Navbar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent mb-3">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{
              height: "100px",
              diplay: "flex",
              flexDirection: "column-reverse",
              alignContent: "center",
              backgroundColor: "none",
              maxWidth: "100%",
            }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                >
                  ALL
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/fullstack"
                  className="nav-link"
                  activeClassName="active"
                >
                  FULLSTACK DEVELOPMENT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/datascience"
                  className="nav-link"
                  activeClassName="active"
                >
                  DATA SCIENCE
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/cybersecurity"
                  className="nav-link"
                  activeClassName="active"
                >
                  CYBER SECURITY
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/career"
                  className="nav-link"
                  activeClassName="active"
                >
                  CAREER
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="visited-link-line"></div>
    </div>
  );
};

export default NavBar;
