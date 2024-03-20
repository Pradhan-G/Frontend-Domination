import React from "react";
import Card from "./Card";

function Cards({ val }) {
  return (
    // Main div that will contain all the cards
    <div className="h-[40vh] w-[80vw] bg-lime-400 rounded-lg overflow-auto flex flex-wrap gap-4 p-4 items-center">
      {val.map((e, index) => {
        return (
          <Card
            key={index}
            name={e.name}
            profession={e.profession}
            age={e.age}
            image={e.imgURL}
          />
        );
      })}
    </div>
  );
}

export default Cards;
