import React from "react";
import "tachyons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const plus = <FontAwesomeIcon icon={faPlus} />;
export default ({ addPoint, point }) => (
  <button style={{ display: "flex" }} onClick={addPoint}>
    {plus}
    <span style={{ fontSize: "22px", fontWeight: "Bolder" }}> {point}</span>
  </button>
);
