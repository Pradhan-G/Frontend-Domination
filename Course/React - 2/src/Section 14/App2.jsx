import axios from "axios";
import React from "react";

const App2 = () => {
  const getProducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <button
        onClick={getProducts}
        className="px-4 py-2 bg-red-300 rounded-lg "
      >
        Call Api
      </button>
    </div>
  );
};

export default App2;
