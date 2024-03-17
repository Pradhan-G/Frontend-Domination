import React from "react";

function Card({ img, artistName, songName, added }) {
  return (
    <div className="bg-gray-500 h-[100px] w-[350px] rounded-lg flex gap-5 justify-between relative z-0">
      <div className="bg-gray-700 h-full w-1/4 rounded-lg overflow-hidden">
        <img className="h-full w-full " src={img} alt="" />
      </div>
      <div className="h-full w-3/4 flex flex-col">
        <h1 className="font-bold text-2xl">{songName}</h1>
        <h1 className="font-semiboldbold text-1xl">{artistName}</h1>
      </div>
      <button className="absolute bg-orange-600 h-[50px] w-[180px] rounded-lg  translate-x-[-50%] -translate-y-[-50%] bottom-0 z-10 left-1/2 hover:bg-orange-400 transition-all">
        Add to Favourites
      </button>
    </div>
  );
}

export default Card;
