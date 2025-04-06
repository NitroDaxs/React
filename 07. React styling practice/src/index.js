//Create a React app from scratch.
let React = require("react");
let ReactDom = require("react-dom");
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

let message = "";
let customStyling = {
  color: "",
};
let time = new Date().getHours();

if (time >= "00" && time <= "12") {
  message = "Good morning!";
  customStyling.color = "red";
} else if (time > "12" && time <= "18") {
  message = "Good Afternoon!";
  customStyling.color = "green";
} else if (time > "18" && time < "00") {
  message = "Good evening!";
  customStyling.color = "blue";
}

ReactDom.render(
  <h1 style={customStyling} className="heading">
    {message}
  </h1>,
  document.getElementById("root")
);
