import React from "react";
import ReactDOM from "react-dom";
import pi, { piDoubled, piTripled } from "./components/math";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{piDoubled()}</li>
    <li>{piTripled()}</li>
  </ul>,
  document.getElementById("root")
);
