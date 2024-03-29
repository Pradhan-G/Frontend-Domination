import React, { useState } from "react";

function StateWithObjectsAndArrays() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [val1, setVal1] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [obj, setObj] = useState([
    { name: "Abhishek", age: 20, isBanned: false },
    { name: "Sachin", age: 21, isBanned: true },
    { name: "Rahul", age: 22, isBanned: false },
    { name: "Shivam", age: 23, isBanned: true },
  ]);

  return (
    <>
      <div className="p-10 bg-slate-900 h-screen w-full">
        <h1 className="text-lime-900 text-4xl mb-4">State With Arrays</h1>
        <div className="flex gap-10">
          <div>
            <h1 className="text-orange-200 text-3xl">
              Changing the value of <br /> Data in objects <br /> which is
              inside an <br /> array.
            </h1>
            {obj.map((el, index) => {
              return (
                <div className="border-4 mb-4 flex gap-6 flex-auto   ">
                  <h1 key={index} className="text-amber-200 text-4xl">
                    Name : {el.name} <br />
                    Age : {el.age} <br />
                    Is Banned : {el.isBanned.toString()} <br /> <br />
                  </h1>
                  <button
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-900"
                    onClick={() => {
                      setObj([
                        ...obj.slice(0, index),
                        {
                          ...obj[index],
                          isBanned: !obj[index].isBanned,
                        },
                        ...obj.slice(index + 1),
                      ]);
                    }}
                  >
                    Change
                  </button>
                </div>
              );
            })}
          </div>

          <div>
            <h1 className="text-orange-200 text-3xl">
              Delete the last <br /> element of the array
            </h1>
            {val.map((el, index) => (
              <h1 key={index} className="text-orange-700 text-4xl">
                {el}
              </h1>
            ))}
            <button
              onClick={() => setVal(val.slice(0, -1))}
              className="w-36 h-16 bg-lime-500 text-lime-950 hover:bg-lime-700 hover:text-white font-bold py-2 px-4 rounded-full"
            >
              Delete
            </button>
          </div>

          <div>
            <h1 className="text-orange-200 text-3xl">
              Delete specific element <br /> when delete button is clicked
            </h1>
            {val1.map((el, index) => (
              <div key={index} className="flex items-center gap-2">
                <h1 className="text-orange-700 text-4xl">{el}</h1>
                <button
                  onClick={() =>
                    setVal1(val1.filter((_, idx) => idx !== index))
                  }
                  className="w-40 h-9 text-white bg-slate-800"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default StateWithObjectsAndArrays;
