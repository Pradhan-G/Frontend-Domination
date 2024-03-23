import React from "react";
import axios from "axios";

function PostData() {
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
    <div>
      <button
        onClick={postProducts}
        className="px-4 py-2 bg-red-300 rounded-lg "
      >
        Post Api
      </button>
    </div>
  );
}

export default PostData;
