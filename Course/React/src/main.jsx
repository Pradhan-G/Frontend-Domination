import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import App from "./components/Section 9/App.jsx";
import "./index.css";
import ConditionalRendering from "./components/ConditionalRendering.jsx";
import UnderstandingState from "./components/UnderstandingState.jsx";
import StateWithObjectsAndArrays from "./components/StateWithObjectsAndArrays.jsx";
import ChangingPhotos from "./components/ChangingPhotos.jsx";
import PassingData from "./components/PassingData.jsx";
import Card from "./components/Card.jsx";
import App2 from "./components/Section 9/App2.jsx";
import App3 from "./components/Section 10/App3.jsx";
import App4 from "./components/Section 11/App4.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ConditionalRendering /> */}
    {/* <UnderstandingState /> */}
    {/* <StateWithObjectsAndArrays /> */}
    {/* <ChangingPhotos /> */}
    {/* <PassingData color={"bg-blue-600"} text={"Click Me"} /> */}
    {/* <PassingData color={"bg-red-600"} text={"Dabao"} /> */}
    {/* <Card /> */}
    {/* <App2 /> */}
    {/* <App3 /> */}
    <App4 />
  </React.StrictMode>
);
