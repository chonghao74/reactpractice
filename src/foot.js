import React from "react";
import "./style/subfoot.css";

const Foot = () => {
  let friends = ["Tim", "Ivy", "Oliver"];

  return (
    <div className="background-data">
      <div className="div-commond">{5 * 100}</div>
      <div className="div-commond">{Math.PI.toFixed(2)}</div>
      <div className="div-commond">{(Math.random() * 100).toFixed(0)}</div>
      <div className="div-commond">My Friends is..My Friends is</div>
      <div className="div-commond">My Friends is..My Friends is</div>
      <div className="div-commond">My Friends is..My Friends is</div>
      <div className="div-commond">My Friends is..My Friends is</div>
      <div className="div-commond">My Friends is..My Friends is</div>
      <div className="div-commond">My Friends is..My Friends is</div>
    </div>
  );
};

export default Foot;
