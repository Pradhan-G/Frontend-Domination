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

// There is one more thing about these setName and setAge that it can also accept functions as arguments.
// In these functions we can access the previous state of the variable and then update it.
// For eg- if we want to increment the age by 1 then we can do this.
// setAge((prevAge) => prevAge + 1);

// When we talk about reference type variables inside of setState, we can only change the values by using the spread operator and not by directly changing the variables value.
// What does this mean ? Let's see an example

import React, { useState } from "react";

function UnderstandingState() {
  const [counter, setCounter] = useState(0);
  const [obj, setObj] = useState({ name: "Abhishek", isBanned: false });
  function handleDecrease() {
    if (counter > 0) setCounter(counter - 1);
  }
  return (
    <>
      <div className="p-4">
        <h1 className="text-lime-900 text-4xl">{counter}</h1>
        <button
          className="bg-blue-800 text-white py-3 px-2 mt-4 mr-4 rounded-xl"
          onClick={() => {
            setCounter((prev) => prev + 1);
          }}
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
      <div className="p-4">
        <h1 className="text-lime-900 text-4xl"> Name : {obj.name}</h1>
        <h1 className="text-lime-900 text-4xl">
          {" "}
          Banned : {obj.isBanned.toString()}
        </h1>
        <button
          className="bg-blue-800 text-white py-3 px-2 mt-4 mr-4 rounded-xl"
          onClick={() => {
            setObj({ ...obj, isBanned: !obj.isBanned });
          }}
        >
          {/* This way we can change the behaviour of the obj and similar to this is what we can do with arrays */}
          Change
        </button>{" "}
      </div>
    </>
  );
}

export default UnderstandingState;
