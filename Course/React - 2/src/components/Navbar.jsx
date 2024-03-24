import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container text-xl font-semibold flex justify-between m-auto pt-5 mb-5 ">
      <div>Logo</div>
      <div className="flex gap-10">
        <NavLink
          className={(e) => {
            return [
              e.isActive ? "text-cyan-400" : "",
              e.isActive ? "font-bold" : "",
              "hover:text-slate-300",
            ].join(" ");
          }}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={(e) => {
            return [
              e.isActive ? "text-cyan-400" : "",
              e.isActive ? "font-bold" : "",
              "hover:text-slate-300",
            ].join(" ");
          }}
          to={"/about"}
        >
          About{" "}
        </NavLink>
        <NavLink
          className={(e) => {
            return [
              e.isActive ? "text-cyan-400" : "",
              e.isActive ? "font-bold" : "",
              "hover:text-slate-300",
            ].join(" ");
          }}
          to={"/contact"}
        >
          Contact
        </NavLink>
        <NavLink
          className={(e) => {
            return [
              e.isActive ? "text-cyan-400" : "",
              e.isActive ? "font-bold" : "",
              "hover:text-slate-300",
            ].join(" ");
          }}
          to={"/users"}
        >
          Users{" "}
        </NavLink>
        <NavLink
          className={(e) => {
            return [
              e.isActive ? "text-cyan-400" : "",
              e.isActive ? "font-bold" : "",
              "hover:text-slate-300",
            ].join(" ");
          }}
          to={"/products"}
        >
          Products{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
