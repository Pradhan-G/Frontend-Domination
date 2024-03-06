import React, { useState } from "react";

function ConditionalRendering() {
  const name = " Abhishek";
  let [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <div className="h-screen w-screen bg-slate-600 p-4 flex flex-wrap justify-center items-center gap-5">
        <div className="h-48 w-60 bg-gray-800 rounded-xl p-10">
          <h1 className="text-white ">
            Display Name : {counter % 2 === 0 ? name : ""}{" "}
            {/* This is Conditional Rendering. if this is true then do this or else do that */}
          </h1>

          <button
            onClick={increaseCounter}
            className="h-10 w-40 text-white mt-3 bg-blue-700 rounded-xl "
          >
            {" "}
            Increase Counter{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default ConditionalRendering;
