import React from "react";
import { useForm } from "react-hook-form";

function FormHandling3() {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form
        className="m-10"
        action="#"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <h1 className="mx-2 text-5xl font-semibold underline mb-5">
          {" "}
          Form - useForm Method{" "}
        </h1>
        <input
          className="border-2 rounded-lg mx-2 p-2"
          type="text"
          placeholder="Enter Name"
          {...register("name")}
        />
        <input
          className="border-2 rounded-lg mx-2 p-2"
          type="number"
          placeholder="Enter Age"
          {...register("age")}
        />
        <input
          className="border-2 rounded-lg mx-2 p-2"
          type="email"
          placeholder="Enter Email"
          {...register("email")}
        />
        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg">
          Submit
        </button>
      </form>

      <div className="px-10">
        <h1 className="text-3xl font-semibold"> Name - {} </h1>
        <h1 className="text-3xl font-semibold"> Age - {} </h1>
        <h1 className="text-3xl font-semibold"> Email - {} </h1>
      </div>
    </div>
  );
}

export default FormHandling3;
