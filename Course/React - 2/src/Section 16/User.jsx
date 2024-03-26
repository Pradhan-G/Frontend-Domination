import React, { useContext } from "react";
import { UserContext } from "./MyContext";
import { Link } from "react-router-dom";

const User = () => {
  const { setUser, user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>User</h1>

      <ul className="flex flex-col gap-3 items-center justify-center">
        {user.map((e, ind) => {
          return (
            <Link key={ind} className="bg-red-100 p-5">
              {e.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default User;
