import React from "react";
import Card from "./Card";

function Cards() {
  return (
    // Main div that will contain all the cards
    <div className="h-[40vh] w-[80vw] bg-lime-400 rounded-lg overflow-auto flex flex-wrap gap-4 p-4 items-center">
      <Card />
    </div>
  );
}

export default Cards;
