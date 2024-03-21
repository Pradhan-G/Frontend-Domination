import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "./dummyData.json";
const UserDetails = () => {
  const d = useParams();
  const navigate = useNavigate();
  //   console.log(d);
  function goBackHandler() {
    navigate(-1);
  }

  return (
    <div>
      UserDetails
      <div className="w-1/4 m-auto mt-10">
        {data.map((e, ind) => {
          if (d.name === e.name) {
            return (
              <div key={ind}>
                Name : {e.name} <br />
                Age : {e.age} <br />
                Profession : {e.profession} <br />
                Country : {e.country} <br />
                Phone Number : {e.phone} <br />
                Email : {e.email} <br /> <br />
                <button
                  onClick={goBackHandler}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg"
                >
                  Go Back
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default UserDetails;
