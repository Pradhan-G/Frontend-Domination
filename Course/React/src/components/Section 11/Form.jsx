import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit, reset } = useForm();
  return (
    <div>
      <form action="" className="mt-10">
        <input
          type="text"
          className="px-5 py-4 rounded-lg mr-4 font-semibold"
          placeholder="Enter Name"
        />
        <input
          type="email"
          className="px-5 py-4 rounded-lg mr-4 font-semibold"
          placeholder="Enter Profession"
        />
        <input
          type="number"
          className="px-5 py-4 rounded-lg mr-4 font-semibold"
          placeholder="Enter Age"
        />
        <button className="bg-lime-600 rounded-lg px-4 py-3 text-white text-lg font-semibold hover:bg-lime-700 hover: transition-all">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
