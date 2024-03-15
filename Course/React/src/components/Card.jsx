import React from "react";

function Card({ name, profession, img, isFriend }) {
  return (
    <div className="h-96 w-80 bg-slate-400 rounded-xl overflow-hidden">
      <div className="h-1/2 w-full bg-slate-300 overflow-hidden">
        <img src={img} alt="" />
      </div>
      <div className="h-1/2 w-full text-center">
        <h1 className="font-bold text-4xl mb-9">{name}</h1>
        <h2 className="font-semibold text-3xl mb-8">{profession}</h2>
        <button className="px-5 py-3 text-white bg-blue-800 rounded-lg hover:bg-blue-600">
          Add Friend
        </button>
      </div>
    </div>
  );
}

export default Card;
