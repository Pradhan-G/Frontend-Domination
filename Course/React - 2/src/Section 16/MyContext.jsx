import React, { createContext, useState } from "react";

export const UserContext = createContext();

const [user, setUser] = useState([
  {
    name: "John Doe",
    email: "johndoe@example.com",
    username: "johndoe123",
    dateOfBirth: "1990-05-15",
    location: {
      city: "New York",
      state: "NY",
      country: "USA",
    },
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    username: "janesmith456",
    dateOfBirth: "1985-09-20",
    location: {
      city: "Los Angeles",
      state: "CA",
      country: "USA",
    },
  },
  {
    name: "Alex Johnson",
    email: "alexj@example.com",
    username: "alex123",
    dateOfBirth: "1995-02-10",
    location: {
      city: "London",
      country: "UK",
    },
  },
  {
    name: "Maria Garcia",
    email: "mariag@example.com",
    username: "mgarcia",
    dateOfBirth: "1988-11-30",
    location: {
      city: "Madrid",
      country: "Spain",
    },
  },
  {
    name: "Kim Lee",
    email: "kiml@example.com",
    username: "kimlee007",
    dateOfBirth: "1993-07-25",
    location: {
      city: "Seoul",
      country: "South Korea",
    },
  },
]);

const MyContext = (props) => {
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default MyContext;
