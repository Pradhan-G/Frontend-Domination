import React from "react";

function Card({ name, profession, age, image }) {
  return (
    <div className="h-64 w-52 bg-lime-800 text-white rounded-lg flex flex-col items-center p-2">
      <div className="h-20 w-20 rounded-full bg-lime-200 overflow-hidden">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <h1 className="font-semibold tracking-tighter mt-2 text-2xl">{name}</h1>
      <h1 className="font-semibold tracking-tighter mt-2 text-xl text-gray-200">
        {profession}
      </h1>
      <h1 className="font-semibold tracking-tighter mt-2 text-xl text-gray-300">
        {age}
      </h1>
      <button className="px-5 py-2 mt-2 bg-green-700 rounded-lg hover:bg-green-600 transition-colors">
        Remove
      </button>
    </div>
  );
}

export default Card;
