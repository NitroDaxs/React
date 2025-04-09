import React from "react";
import cars from "../practice.js";

function App() {
  const [tesla, honda] = cars;
  const { topSpeed: teslaTopSpeed } = tesla.speedStats;
  const { topSpeed: hondaTopSpeed } = honda.speedStats;
  const [teslaTopColour] = tesla.coloursByPopularity;
  const [hondaTopColour] = honda.coloursByPopularity;

  return (
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>
  );
}

export default App;
