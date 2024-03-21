import React from "react";
import data from "./dummyData.json";
import { Link, Outlet } from "react-router-dom";
const Users = () => {
  //   console.log(data);
  return (
    <div>
      <h1 className="text-2xl container m-auto text-center">Users Component</h1>
      <ul className="w-screen text-center mt-10">
        {data.map((e, index) => {
          return (
            <li key={index} className="mb-3 w-1/4 m-auto">
              <Link
                className="px-5 py-1 w-full bg-slate-500 hover:bg-slate-600"
                to={`${e.name}`}
              >
                {e.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <hr />

      <Outlet />
    </div>
  );
};

export default Users;
