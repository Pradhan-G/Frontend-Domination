import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App2 from "./Section 14/App2.jsx";
import MyContext from "./Section 16/MyContext.jsx";
import App3 from "./Section 16/App3.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContext>
    <BrowserRouter>
      <App3 />
    </BrowserRouter>
  </MyContext>
);
