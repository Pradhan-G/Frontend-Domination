import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Users from "../components/Users";
import About from "../components/About";
import Contact from "../components/Contact";
import UserDetails from "../components/UserDetails";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:name" element={<UserDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Routing;
