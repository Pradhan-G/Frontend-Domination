import React from "react";

function Card() {
  return (
    <div className="h-64 w-52 bg-lime-800 text-white rounded-lg flex flex-col items-center p-2">
      <div className="h-20 w-20 rounded-full bg-lime-200 overflow-hidden"></div>
      <h1 className="font-semibold tracking-tighter mt-2 text-2xl">
        Abhishek Pradhan
      </h1>
      <h1 className="font-semibold tracking-tighter mt-2 text-xl text-gray-200">
        Web Developer
      </h1>
      <h1 className="font-semibold tracking-tighter mt-2 text-xl text-gray-300">
        21
      </h1>
      <button className="px-5 py-2 mt-2 bg-green-700 rounded-lg hover:bg-green-600 transition-colors">
        Remove
      </button>
    </div>
  );
}

export default Card;
