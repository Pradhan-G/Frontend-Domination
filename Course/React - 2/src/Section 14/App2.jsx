import React, { useEffect, useState } from "react";
import GetData from "./GetData";
import PostData from "./PostData";
import ShowData from "./ShowData";
const App2 = () => {
  const [val, setVal] = useState([]);

  function bringValue(data) {
    // data();
    // const g = data();
    setVal(data);
  }

  return (
    <div className="">
      <GetData bringValue={bringValue} />
      <PostData />
      <ShowData val={val} />
    </div>
  );
};

export default App2;
