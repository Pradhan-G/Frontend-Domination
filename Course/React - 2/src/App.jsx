import React from "react";
import Navbar from "./components/Navbar";
import Routing from "./utils/Routing";

const App = () => {
  return (
    <div className="bg-slate-900 text-white h-[200vh] w-screen">
      <Navbar />
      <Routing />
    </div>
  );
};

export default App;
