import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const category = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
  ];
  return (
    <>
      <div className="bg-slate-300 h-screen w-[15%]">
        <button className="px-4 py-2 w-[100%] border-2 rounded-lg mx-auto border-blue-400 text-blue-500">
          Add New Product
        </button>
        <div className="flex gap-2 flex-col mt-4">
          {category.map((item, index) => {
            return (
              <Link
                key={index}
                to={`/category/${"category" + index}`}
                className="px-4 py-2 w-[100%] mx-auto text-center text-md"
              >
                {" "}
                {item}{" "}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
