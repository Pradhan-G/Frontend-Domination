import React from "react";

function Navbar({ counter }) {
  return (
    <div className="h-32 w-screen bg-slate-700 flex items-center justify-between px-10">
      <div className="nav-left">
        <h1 className="text-orange-500 font-bold text-4xl">Orange</h1>
      </div>
      <div className="nav-right">
        <button className="flex gap-8 px-4 bg-orange-600 py-4 rounded-lg">
          <h1 className=" font-bold text-4xl">Favourites</h1>
          <h1 className=" font-bold text-4xl">{counter}</h1>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
