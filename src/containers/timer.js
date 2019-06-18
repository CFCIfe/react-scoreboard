import React from "react";
import "tachyons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";
import On from "../components/on";
import Off from "../components/off";
import houses from "../houses";
import "../styles/Timer.css";

alert("1: blue, 2: red, 3: green, 4: yellow ");
export const team1 = prompt("Pick Team 1 Number: ");
export const team2 = prompt("Pick Team 2 Number: ");
const tossWinner = prompt(
  "Who was the toss winner? * 1: blue, 2: red, 3: green, 4: yellow *"
);

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameTime: 720000,
      shotClock: 24000,
      quarter: 1,
      gameStartTime: 0,
      isGameTimeOn: false,
      name: houses[tossWinner - 1].id,
      showOn: true
    };
  }

  startGameTime = () => {
    this.setState({
      gameTime: this.state.gameTime,
      gameStartTime: this.state.gameTime,
      isGameTimeOn: true
    });

    this.gameTimer = setInterval(() => {
      const newTime = this.state.gameTime - 10;
      if (newTime >= 0) {
        this.setState({
          gameTime: newTime
        });
      } else {
        clearInterval(this.gameTimer);
        this.setState({ isGameTimeOn: false });
        alert("End of Quarter");
      }
    }, 10);
  };

  startShotClock = () => {
    this.setState({
      shotClock: this.state.shotClock
    });
    this.shotClockTimer = setInterval(() => {
      const shotTime = this.state.shotClock - 10;
      if (shotTime >= 0 && this.state.isGameTimeOn) {
        this.setState({
          shotClock: shotTime
        });
      } else {
        clearInterval(this.shotClockTimer);
        alert("Shot clock up");
        this.setState({
          shotClock: 25000
        });
        this.pauseGameTime();
        this.pauseShotClock();
      }
    }, 10);
  };

  pauseShotClock = () => {
    clearInterval(this.shotClockTimer);
  };

  pauseGameTime = () => {
    clearInterval(this.gameTimer);
    this.setState({ isGameTimeOn: false });
  };

  resetShotClock = () => {
    this.setState({
      shotClock: 25000,
      showOn: !this.state.showOn
    });
  };

  resetTimer = () => {
    if (this.state.isGameTimeOn === false) {
      this.setState({
        gameTime: this.state.gameStartTime,
        quarter: this.state.quarter + 1
      });
    }
  };

  checkQuarter() {
    switch (this.state.quarter) {
      case 1: {
        return `${this.state.quarter}st`;
      }
      case 2: {
        return `${this.state.quarter}nd`;
      }
      case 3: {
        return `${this.state.quarter}rd`;
      }
      case 4: {
        return `${this.state.quarter}th`;
      }
      default: {
        return `${this.state.quarter}st`;
      }
    }
  }

  checkLoser() {
    if (tossWinner === team1) {
      let loser = team2;
      return loser;
    } else {
      let loser = team1;
      return loser;
    }
  }

  render() {
    const tossLoser = this.checkLoser();
    const { isGameTimeOn, gameStartTime, gameTime, shotClock } = this.state;
    let seconds = Math.floor(gameTime / 1000) % 60;
    let minutes = Math.floor(gameTime / 60000) % 60;
    let shotSeconds = Math.floor(shotClock / 1000) % 60;

    const start = <FontAwesomeIcon icon={faPlay} />;
    const pause = <FontAwesomeIcon icon={faPause} />;
    const reset = <FontAwesomeIcon icon={faRedo} />;
    return (
      <div className="timerContainer">
        {(tossWinner === team1 || tossWinner === team2) && (
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                display: this.state.showOn ? "inherit" : "none"
              }}
            >
              <On name={this.state.name} />
            </div>
            <div
              style={{
                display: this.state.showOn ? "none" : "inherit"
              }}
            >
              <Off name={houses[tossLoser - 1].id} />
            </div>
          </div>
        )}
        <h3 className="colored" style={{ marginBottom: "30px" }}>
          <span className="black">{this.checkQuarter()}</span> Quarter:
        </h3>
        <h3 style={{ marginBottom: "50px" }}>
          {minutes < 10 ? `0${minutes}` : `${minutes}`}:
          {seconds < 10 ? `0${seconds}` : `${seconds}`} &nbsp; ({shotSeconds})
        </h3>
        <div>
          {isGameTimeOn === false &&
            (gameStartTime === 0 || gameTime === gameStartTime) && (
              <button
                onClick={() => {
                  this.startGameTime();
                  this.startShotClock();
                }}
              >
                {" "}
                {start}{" "}
              </button>
            )}
          {isGameTimeOn === true && gameTime >= 1000 && (
            <button
              onClick={() => {
                this.pauseGameTime();
                this.pauseShotClock();
              }}
            >
              {pause}
            </button>
          )}
          {isGameTimeOn === false &&
            (gameStartTime !== 0 &&
              gameStartTime !== gameTime &&
              gameTime !== 0) && (
              <button
                onClick={() => {
                  this.startGameTime();
                  this.startShotClock();
                }}
              >
                {start}
              </button>
            )}
          {isGameTimeOn === false && gameTime === 0 && (
            <button onClick={this.resetTimer}>{reset}</button>
          )}{" "}
          &nbsp;
          {isGameTimeOn === true && gameTime !== 0 && (
            <button onClick={this.resetShotClock}>{reset}</button>
          )}
        </div>
      </div>
    );
  }
}

export default Timer;
