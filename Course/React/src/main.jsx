import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ConditionalRendering from "./components/ConditionalRendering.jsx";
import UnderstandingState from "./components/UnderstandingState.jsx";
import StateWithObjectsAndArrays from "./components/StateWithObjectsAndArrays.jsx";
import ChangingPhotos from "./components/ChangingPhotos.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ConditionalRendering /> */}
    {/* <UnderstandingState /> */}
    {/* <StateWithObjectsAndArrays /> */}
    <ChangingPhotos />
  </React.StrictMode>
);
