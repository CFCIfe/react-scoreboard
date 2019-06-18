import React from "react";

export default ({ name }) => (
  <h5 className={`${name.toLowerCase()}`} style={{ margin: 0 }}>
    {" "}
    {name} house is in possession!
  </h5>
);
