//Create a react app from scratch.
let React = require("react");
let ReactDom = require("react-dom");
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

let fName = "Miroslav";
let lName = "Atanasov";
let year = new Date().getFullYear();

ReactDom.render(
  <div>
    <p>
      Created by {fName} {lName}
    </p>
    <p>CopyRight {year}</p>
  </div>,
  document.getElementById("root")
);
