import React from "react";

const ShowData = ({ val }) => {
  console.log(val);

  return val.map((e, i) => {
    return (
      <div key={i}>
        <div className="container mx-auto p-10">
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Card Image */}
            <img
              className="w-full h-60 object-cover"
              src={e.image}
              alt={e.title}
            />
            {/* Card Body */}
            <div className="py-4 px-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {e.title}
              </h2>
              <p className="text-gray-700 text-base">{e.description}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-700 font-bold">${e.price}</p>
                <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default ShowData;
