import React from "react";
import titleCase from "./titleCase";
import "tachyons";
import "../styles/ScoreDisplay.css";

export default ({ house, name, score }) => (
  <div className={`${name} w-40`}>
    <img
      className={`${titleCase(house.id)}`}
      alt={`${house.id}`}
      src={house.image}
    />
    <input type="text" value={score} min="0" max="2" />
  </div>
);
