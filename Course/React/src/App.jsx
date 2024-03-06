import React from "react";

const App = () => {
  const Data = [
    {
      id: 1,
      name: "John",
      age: 30,
      car: "Ford",
      image:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2707&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Peter",
      age: 33,
      car: "BMW",
      image:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Mary",
      age: 25,
      car: "Toyota",
      image:
        "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Paul",
      age: 28,
      car: "Toyota",
      image:
        "https://images.unsplash.com/photo-1567784177951-6fa58317e16b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Johnathan",
      age: 30,
      car: "Mercedes",
      image:
        "https://images.unsplash.com/photo-1507081323647-4d250478b919?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      {/* Using Tailwind Css to create Cards */}

      <div className="h-screen w-screen bg-slate-600 p-4 flex flex-wrap justify-center items-center gap-5">
        {Data.map((e, index) => {
          return (
            <div
              className="card h-96 w-80 bg-slate-900 rounded-xl flex flex-col overflow-hidden"
              key={index}
            >
              <div className="card-image h-52 bg-cyan-700 overflow-hidden">
                <img
                  className="object-cover object-center h-full w-full"
                  src={e.image}
                  alt=""
                />
              </div>
              <div className="card-name text-white text-4xl mt-5 pl-3">
                <h1>{e.name}</h1>
              </div>
              <div className="card-other-details text-white mt-5">
                <h2 className="text-lg text-slate-400 pl-4">Age : {e.age} </h2>
                <h2 className="text-lg text-slate-400 mt-2 pl-4">
                  Car : {e.car}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
