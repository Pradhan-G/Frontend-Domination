import React, { useState } from "react";
import Card from "./Card";

function PassingData({ color, text }) {
  const data = [
    {
      name: "Abhishek",
      profession: "Web Developer",
      img: "https://plus.unsplash.com/premium_photo-1666536060536-f328f4a9b6d9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFriend: true,
    },
    {
      name: "Harshit",
      profession: "Lighting Artist",
      img: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFriend: true,
    },
    {
      name: "Sahil",
      profession: "Web Designer",
      img: "https://plus.unsplash.com/premium_photo-1710294627170-e063a544a7e6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFriend: true,
    },
    {
      name: "Aman",
      profession: "Visual Artist",
      img: "https://plus.unsplash.com/premium_photo-1709865803539-69809922ac45?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFriend: true,
    },
  ];
  const [realData, setRealData] = useState(data);

  function handleClick(ind) {
    setRealData((prev) => {
      return prev.map((e, index) => {
        if (index === ind) {
          return { ...e, isFriend: !e.isFriend };
        } else {
          return e;
        }
      });
    });
  }

  return (
    <div>
      <button className={`rounded-md px-1 py-2 ${color} text-white`}>
        {text}
      </button>
      <div className="flex gap-10">
        {realData.map((e, index) => {
          return (
            <Card
              key={index}
              name={e.name}
              profession={e.profession}
              img={e.img}
              friend={e.isFriend}
              handleClick={handleClick}
              ind={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PassingData;
