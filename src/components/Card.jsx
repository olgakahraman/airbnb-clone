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
        <img src="../images/star.png" alt="red star" className="star-img" />
        <span>5.0</span>
        <span>(6) • </span>
        <span>USA</span></div>
        <p>Life lessons with Katie Zaferes</p>
       <p> <strong>From $136</strong>/person</p>
      </div>
    </section>
  );
}
