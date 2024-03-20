import React, { useState } from "react";
import Cards from "./Cards";
import Form from "./Form";

function App4() {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState("");
  const [imgURL, setImgURL] = useState("");

  const [val, setVal] = useState([]);
  function handleInputSubmit(data) {
    console.log(data);
    // setName(data.name);
    // setProfession(data.profession);
    // setAge(data.age);
    // setImgURL(data.image);
    setVal([
      ...val,
      {
        name: data.name,
        profession: data.profession,
        age: data.age,
        imgURL: data.image,
      },
    ]);
  }
  return (
    <div className="h-screen w-screen bg-green-400 flex flex-col justify-center items-center ">
      {/* <Cards name={name} profession={profession} age={age} imgUrl={imgURL} /> */}

      <Cards val={val} />

      <Form handleInputSubmit={handleInputSubmit} />
    </div>
  );
}

export default App4;
