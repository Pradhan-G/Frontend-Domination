import React, { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

function App2() {
  let counter = 0;

  const data = [
    {
      song: "Channa Mereya",
      artist: "Arijit Singh",
      img: "src/assets/images/1.webp",
      added: false,
    },
    {
      song: "Maula",
      artist: "Anuv Jain",
      img: "src/assets/images/2.webp",
      added: false,
    },
    {
      song: "Maayeri",
      artist: "Palash Sen",
      img: "src/assets/images/3.webp",
      added: false,
    },
    {
      song: "Rap God",
      artist: "Eminem",
      img: "src/assets/images/4.webp",
      added: false,
    },
    {
      song: "Papa Meri Jaan",
      artist: "Sonu Nigam",
      img: "src/assets/images/5.webp",
      added: false,
    },
    {
      song: "O Saathi",
      artist: "Atif Aslam",
      img: "src/assets/images/6.webp",
      added: false,
    },
  ];

  const [realData, setRealData] = useState(data);

  const handleClick = (index) => {
    setRealData((prev) => {
      return prev.map((item, i) => {
        if (index === i) {
          counter += 1;
          return { ...item, added: !item.added };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <div className="bg-slate-900 w-full h-screen text-white">
      <Navbar counter={counter} />
      <div className="flex flex-wrap gap-20 mt-10">
        {realData.map((item, index) => {
          return (
            <Card
              img={item.img}
              artistName={item.artist}
              songName={item.song}
              added={item.added}
              handleClick={handleClick}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App2;
