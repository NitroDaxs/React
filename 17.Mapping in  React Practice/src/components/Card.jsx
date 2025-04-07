import React from "react";
import emodjipedia from "../emojipedia.js";
import Details from "./Details.jsx";

function Card() {
  return (
    <dl className="dictionary">
      {emodjipedia.map((item) => (
        <Details name={item.name} emoji={item.emoji} meaning={item.meaning} />
      ))}
    </dl>
  );
}

export default Card;
