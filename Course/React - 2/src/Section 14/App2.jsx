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

  const postProducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .post(api, {
        title: "Lawde ka product",
        price: 69,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "vibrator",
      })
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
      <button
        onClick={getProducts}
        className="px-4 py-2 bg-red-300 rounded-lg "
      >
        Post Api
      </button>
    </div>
  );
};

export default App2;
