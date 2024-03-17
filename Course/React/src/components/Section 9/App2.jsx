import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";

function App2() {
  const data = [
    {
      song: "Channa Mereya",
      artist: "Arijit Singh",
      img: "src/assets/images/1.webp",
    },
    { song: "Maula", artist: "Anuv Jain", img: "src/assets/images/2.webp" },
    { song: "Maayeri", artist: "Palash Sen", img: "src/assets/images/3.webp" },
    { song: "Rap God", artist: "Eminem", img: "src/assets/images/4.webp" },
    {
      song: "Papa Meri Jaan",
      artist: "Sonu Nigam",
      img: "src/assets/images/5.webp",
    },
    {
      song: "O Saathi",
      artist: "Atif Aslam",
      img: "src/assets/images/6.webp",
    },
  ];

  return (
    <div className="bg-slate-900 w-full h-screen text-white">
      <Navbar />
      <Card />
    </div>
  );
}

export default App2;
