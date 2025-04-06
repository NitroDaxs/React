import React from "react";
import ReactDOM from "react-dom";

const customSyle = {
  color: "blue",
  fontSize: "4rem",
};

ReactDOM.render(
  <h1 style={customSyle}>Hello World!</h1>,
  document.getElementById("root")
);
