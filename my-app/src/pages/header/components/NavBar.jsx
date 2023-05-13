import React from "react";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 pe-3">
      <NavLink title="Home" url="/" />
      <NavLink title="Card" url="card" />
      <NavLink title="Productspage" url="productspage" />
      <NavLink title="Best Seller" url="bestseller" />
    </ul>
  );
};

export default NavBar;
