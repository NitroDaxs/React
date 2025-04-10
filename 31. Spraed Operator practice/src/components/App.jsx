import React, { useState } from "react";

function App() {
  const [items, setItems] = useState(["one", "two", "three"]);
  const [content, setContent] = useState("");
  function handleChange(event) {
    const newValue = event.target.value;
    setContent(newValue);
  }

  function handleClick() {
    if (content !== "") {
      setItems((prevItems) => {
        return [...prevItems, content];
      });
      setContent("");
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={content} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
