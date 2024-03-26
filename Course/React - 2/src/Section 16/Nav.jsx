import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import UserDetail from "./UserDetail";

const Nav = () => {
  return (
    <div>
      <Link to={"/"}> Home </Link>
      <Link to={"/us"}> User </Link>
      <Link to={"/usd"}> UserDetails </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/us" element={<User />}></Route>
        <Route path="/usd" element={<UserDetail />} />
      </Routes>
    </div>
  );
};

export default Nav;
