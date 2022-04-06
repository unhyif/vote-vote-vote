import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Operation from "./operations";

const operation = new Operation();

ReactDOM.render(
  <React.StrictMode>
    <App operation={operation} />
  </React.StrictMode>,
  document.getElementById("root")
);
