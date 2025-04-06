//Create a react app from scratch.
let React = require("react");
let ReactDom = require("react-dom");
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDom.render(
  <div>
    <h1>This is my heading!</h1>
    <ul>
      <li>List element 1</li>
      <li>List element 2</li>
      <li>List element 3</li>
    </ul>
  </div>,
  document.getElementById("root")
);
