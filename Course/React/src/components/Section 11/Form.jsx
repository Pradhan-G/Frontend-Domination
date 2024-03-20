import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleInputSubmit }) {
  const { register, handleSubmit, reset } = useForm();
  return (
    <div>
      <form
        action=""
        className="mt-10"
        onSubmit={handleSubmit((data) => {
          handleInputSubmit(data);
          reset();
        })}
      >
        <input
          {...register("name")}
          type="text"
          className="px-5 py-4 rounded-lg mr-4 font-semibold"
          placeholder="Enter Name"
        />
        <input
          {...register("profession")}
          type="text"
          className="px-5 py-4 rounded-lg mr-4 font-semibold"
          placeholder="Enter Profession"
        />
        <input
          {...register("age")}
          type="number"
          className="px-5 py-4 rounded-lg mr-4 font-semibold"
          placeholder="Enter Age"
        />
        <input
          {...register("image")}
          type="text"
          className="px-5 py-4 rounded-lg mr-4 font-semibold"
          placeholder="Enter Image URL"
        />
        <button className="bg-lime-600 rounded-lg px-4 py-3 text-white text-lg font-semibold hover:bg-lime-700 hover: transition-all">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
