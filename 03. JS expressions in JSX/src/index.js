import React from "react";
import ReactDOM from "react-dom";

const fName = "Miroslav";
const lName = "Atanasov";
const random = Math.floor(Math.random() * 100);

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}
    </h1>
    <p>Your random number is {random}</p>
  </div>,
  document.getElementById("root")
);
