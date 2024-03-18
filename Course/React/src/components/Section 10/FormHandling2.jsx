import React, { useState } from "react";

// This is the way we where handle forms using useRef

function FormHandling2() {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [email, setEmail] = useState("");
  const [val, setVal] = useState({ name: "", email: "", age: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form className="m-10" action="#" onSubmit={handleSubmit}>
        <h1 className="mx-2 text-5xl font-semibold underline mb-5">
          {" "}
          Form - Controlled Components{" "}
        </h1>
        <input
          className="border-2 rounded-lg mx-2 p-2"
          type="text"
          placeholder="Enter Name"
          onChange={(event) => {
            setVal({ ...val, name: event.target.value });
          }}
        />
        <input
          className="border-2 rounded-lg mx-2 p-2"
          type="number"
          placeholder="Enter Age"
          onChange={(event) => {
            setVal({ ...val, age: event.target.value });
          }}
        />
        <input
          className="border-2 rounded-lg mx-2 p-2"
          type="email"
          placeholder="Enter Email"
          onChange={(event) => {
            setVal({ ...val, email: event.target.value });
          }}
        />
        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg">
          Submit
        </button>
      </form>

      <div className="px-10">
        <h1 className="text-3xl font-semibold"> Name - {val.name} </h1>
        <h1 className="text-3xl font-semibold"> Age - {val.age} </h1>
        <h1 className="text-3xl font-semibold"> Email - {val.email} </h1>
      </div>
    </div>
  );
}

export default FormHandling2;
