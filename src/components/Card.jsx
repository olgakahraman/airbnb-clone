import React from "react";

export default function Card() {
  return (
    <section className="card">
      <img
        src="../images/katie-zaferes.png"
        alt="Katie Zaferes's photo"
        className="card-image"
      />
      <div className="card-body">
        <div className="card-stats">
          <img src="../images/star.png" alt="red star" className="card-star" />
          <span>5.0</span>
          <span className="gray">(6) • </span>
          <span className="gray">USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          {" "}
          <span className="bold">From $136</span>/person
        </p>
      </div>
    </section>
  );
}
