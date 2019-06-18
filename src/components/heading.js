import React from "react";
import "../styles/Header.css";
export default ({ name }) => (
  <li>
    <p className={`bg-${name.id}`.toLowerCase()}>{name.name}</p>
  </li>
);
