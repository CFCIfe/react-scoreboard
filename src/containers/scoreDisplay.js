import React, { Component } from "react";
import houses from "../houses";
import { team1, team2 } from "./timer";
import Team from "../components/team";
import Buttons from "../components/buttons";
import "../styles/ScoreDisplay.css";

class ScoreDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      team1Score: 0,
      team2Score: 0
    };
  }

  increaseTeam1Score = () => {
    this.setState({
      team1Score: this.state.team1Score + 1
    });
  };

  increaseTeam2Score = () => {
    this.setState({
      team2Score: this.state.team2Score + 1
    });
  };
  render() {
    return (
      <div className="displayContainer">
        <Team
          name="team1"
          house={houses[Number(team1) - 1]}
          score={this.state.team1Score}
        />
        <p className="vs">VS.</p>
        <Team
          name="team2"
          house={houses[Number(team2) - 1]}
          score={this.state.team2Score}
        />
        <Buttons addPoint={this.increaseTeam1Score} point={3} />
      </div>
    );
  }
}

export default ScoreDisplay;
