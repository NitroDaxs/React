import React, { useState } from "react";

// function App() {
//   let time = new Date().toLocaleTimeString();
//   const [currentTime, setTime] = useState(time);

//   function getNewTime() {
//     setTime(new Date().toLocaleTimeString());
//   }

//   return (
//     <div className="container">
//       <h1>{currentTime}</h1>
//       <button onClick={getNewTime}>Get Time</button>
//     </div>
//   );
// }

function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(time);

  function getNewTime() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(getNewTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getNewTime}>Get Time</button>
    </div>
  );
}

export default App;
