import React from "react";
import ReactDOM from "react-dom";

import config from "@arcgis/core/config.js";

// Assets have been moved from the default location

import "@arcgis/core/assets/esri/themes/light/main.css";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
config.assetsPath = "/public/assets";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
