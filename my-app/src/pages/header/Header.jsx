import React from "react";
import SocialLink from "../content/commponent/SocialLink";
import logo from "../../assets/E-Commerce Logo Template2.jfif";

import { Link } from "react-router-dom";
import NavBar from "../header/components/NavBar";
import NavLink from "./components/NavLink";

const Header = () => {
  return (
    <>
      <nav className="navbar bg-light  ">
        <div className="container d-flex justify-content-center">
          <div className=" row ">
            <form className="d-flex" role="search">
              <input
                className="form-control mx-3  "
                type="search"
                placeholder="What are you looking ?"
                aria-label="Search"
              />
              <button className="btn btn-outline-success " type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm  ">
        <div className="container">
          <Link class="navbar-brand" title="E-Commerce" to="/">
            <img src={logo} alt="" width="100" height="50" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <NavBar />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-3 d-flex ">

              <SocialLink />
              <NavLink title="Login" url="login" />
              <NavLink title="Register" url="reg" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
