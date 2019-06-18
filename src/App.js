import React from "react";
import Header from "./containers/header";
import Timer, { team1, team2 } from "./containers/timer";
import ScoreDisplay from "./containers/scoreDisplay";
import "./styles/App.css";

function App() {
  return team1 !== team2 && team1 < 5 && team2 < 5 ? (
    <div className="App">
      <Header />
      <Timer />
      <ScoreDisplay />
    </div>
  ) : null;
}

export default App;
