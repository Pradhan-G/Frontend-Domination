import React from "react";

function PassingData({ color, text }) {
  const data = [
    {
      name: "Abhishek",
      profession: "Web Developer",
      img: "https://plus.unsplash.com/premium_photo-1666536060536-f328f4a9b6d9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Harshit",
      profession: "Web Developer",
      img: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div>
      <button className={`rounded-md px-1 py-2 ${color} text-white`}>
        {text}
      </button>
    </div>
  );
}

export default PassingData;
