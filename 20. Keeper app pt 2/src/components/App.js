import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => (
        <Note header={note.title} paragraph={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
