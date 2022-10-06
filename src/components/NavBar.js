import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "flex",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#3f4c6b",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <ul className="flex flex-row-reverse space-x-4 space-x-reverse ml-auto w-full font-bold">
      <NavLink to="/" style={linkStyles} className="text-xs text-gray-800 mr-6 alert-notice cursor-pointer border-b-2 hover:border-green-400">
        Weather
      </NavLink>
      <NavLink to="/about" style={linkStyles} className="text-xs text-gray-800 mr-6 alert-notice cursor-pointer border-b-2 hover:border-green-400">
        About
      </NavLink>
      <NavLink to="/news" style={linkStyles} className="text-xs text-gray-800 cursor-pointer border-b-2 hover:border-green-400">
        News
      </NavLink>
    </ul>
  );
}

export default NavBar;
