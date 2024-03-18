import React, { useRef } from "react";

// This is the way we where handle forms using useRef

function FormHandling1() {
  const name = useRef(null);
  const age = useRef(null);
  const email = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name.current.value);
    console.log(age.current.value);
    console.log(email.current.value);
  };

  return (
    <div>
      <form className="m-10" action="#" onSubmit={handleSubmit}>
        <h1 className="mx-2 text-5xl font-semibold underline mb-5">
          {" "}
          Form - UseRef{" "}
        </h1>
        <input
          className="border-2 rounded-lg mx-2 p-2"
          ref={name}
          type="text"
          placeholder="Enter Name"
        />
        <input
          className="border-2 rounded-lg mx-2 p-2"
          ref={age}
          type="number"
          placeholder="Enter Age"
        />
        <input
          className="border-2 rounded-lg mx-2 p-2"
          ref={email}
          type="email"
          placeholder="Enter Email"
        />
        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormHandling1;
