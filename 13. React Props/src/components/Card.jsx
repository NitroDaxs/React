import React from "react";

function Card(params) {
  return (
    <div>
      <h2>{params.name}</h2>
      <img src={params.img} alt="avatar_img" />
      <p>{params.tel}</p>
      <p>{params.email}</p>
    </div>
  );
}

export default Card;
