import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
function ChangingPhotos() {
  const [count, setCount] = useState(0);
  return (
    <div className="w-screen h-screen bg-zinc-700 flex justify-center items-center">
      <div className="w-1/2 h-1/2 bg-slate-900 rounded-md overflow-hidden flex relative">
        <img
          className={`h-full w-full ${
            count === 0 ? "translate-x-[0%]" : "-translate-x-[100%]"
          }  object-cover flex-shrink-0`}
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`h-full w-full ${
            count === 1 ? "" : "-translate-x-[100%]"
          } object-cover flex-shrink-0`}
          src="https://plus.unsplash.com/premium_photo-1675368244123-082a84cf3072?q=80&w=2150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`h-full w-full ${
            count === 2 ? "" : "-translate-x-[200%]"
          } object-cover flex-shrink-0`}
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`h-full w-full ${
            count === 3 ? "" : "-translate-x-[300%]"
          } object-cover flex-shrink-0`}
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span>
          <button
            onClick={() => {
              setCount((prev) => prev + 1);
            }}
            className="absolute top-0 right-0 m-4 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-900"
          >
            <FaLongArrowAltRight size={"2em"} />
          </button>
        </span>
      </div>
    </div>
  );
}

export default ChangingPhotos;
