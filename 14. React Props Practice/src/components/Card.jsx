import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img src={props.img} className="circle-img" alt="avatar_img" />
      </div>
      <div className="bottom">
        <div className="info">
          <p>{props.tel}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
