import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("Home Component is Created"); // Using use Effect we can see which of the lifecycle methods are happening. This statement will run when the component is created

    return () => {
      console.log("Home Component is Deleted"); // This code statement will run when the component is deleted.
    };
  });

  return (
    <div>
      <h1 className="text-2xl container m-auto text-center">Home Component</h1>
    </div>
  );
};

export default Home;
