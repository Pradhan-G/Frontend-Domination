import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";

const MainPage = () => {
  return (
    <div className="flex">
      <Navbar />
      <Home />
    </div>
  );
};

export default MainPage;
