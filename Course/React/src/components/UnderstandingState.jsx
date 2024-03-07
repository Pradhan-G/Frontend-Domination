// To understand State we need to use react hooks.
// useState is a hook that allows us to create a state.
// How to use useState hook ?
// 1. Import useState from react
// 2. Create a state variable
// 3. Pass the variable to the component
// 4. Use the variable in the component
// 5. Update the state variable
// 6. the useState hook returns an array.
// The first element of the array is the state variable.
// The second element of the array is a function that allows us to update the state variable which should be a function.
// const [name, setName] = useState("John");
// const [age, setAge] = useState(30);
// here name and age are the state variables and setName and setAge are the functions that allow us to update the state variables.

import React, { useState } from "react";

function UnderstandingState() {
  const [counter, setCounter] = useState(0);
  function handleIncrease() {
    setCounter(counter + 1);
  }
  function handleDecrease() {
    if (counter > 0) setCounter(counter - 1);
  }
  return (
    <div className="p-4">
      <h1 className="text-lime-900 text-4xl">{counter}</h1>
      <button
        className="bg-blue-800 text-white py-3 px-2 mt-4 mr-4 rounded-xl"
        onClick={handleIncrease}
      >
        Increase Counter
      </button>{" "}
      <button
        className="bg-blue-800 text-white py-3 px-2 mt-4 rounded-xl"
        onClick={handleDecrease}
      >
        Decrease Counter
      </button>
    </div>
  );
}

export default UnderstandingState;
