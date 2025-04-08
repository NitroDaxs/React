import React from "react";

function Note(params) {
  return (
    <div className="note">
      <h1>{params.header}</h1>
      <p>{params.paragraph}</p>
    </div>
  );
}

export default Note;
