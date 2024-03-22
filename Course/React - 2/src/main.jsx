import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App2 from "./Section 14/App2.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <App2 /> // Get Data using Axios and post data using axios
    </BrowserRouter>
  </React.StrictMode>
);
