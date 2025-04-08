import React from "react";
import Login from "./Login.jsx";

let isLogged = false;

function App() {
  return (
    <div className="container">{isLogged ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
