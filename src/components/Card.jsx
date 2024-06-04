import React from "react";

export default function Card(props) {
  return (
    <section className="card">
      <img
        src={`../images/${props.img}`}
        alt="card image"
        className="card-image"
      />
      <div className="card-body">
        <div className="card-stats">
          <img
            src="../images/star.png"
            alt="red star icon"
            className="card-star"
          />
          <span>{props.rating}</span>
          <span className="gray">({props.reviewCount}) • </span>
          <span className="gray">{props.country}</span>
        </div>
        <h2>{props.title}</h2>
        <p>
          <span className="bold">From ${props.price}</span>/person
        </p>
      </div>
    </section>
  );
}
