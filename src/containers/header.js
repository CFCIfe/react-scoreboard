import React from "react";
import houses from "../houses";
import Heading from "../components/heading";
import { team1, team2 } from "./timer";
import "../styles/Header.css";
import "tachyons";

function Header() {
  return (
    <div className="headerContainer">
      <h1> BASKETBALL SCOREBOARD </h1>
      <p>
        <span className="black" title="NBA RULES">
          12 &nbsp;
        </span>
        minutes per quarter
      </p>
      <div className="table">
        <ul id="hl">
          <Heading name={houses[Number(team1) - 1]} />
          <Heading name={houses[Number(team2) - 1]} />
        </ul>
      </div>
    </div>
  );
}

export default Header;
