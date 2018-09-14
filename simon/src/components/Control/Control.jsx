import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Control.css";

class Control extends Component {
  startGame = () => {
    let first = this.props.series.slice(0, 3);
    this.playSeq(first);
  };

  playSeq = sequence => {
    let i = 0;
    console.log(sequence.length);
    var interval = setInterval(() => {
      this.props.lightUp(sequence[i]);
      i++;
      if (i >= sequence.length) {
        clearInterval(interval);
        this.props.toggleClickable();
      }
    }, 1200);
  };

  render() {
    return (
      <div className={this.props.name}>
        <h1>SIMON</h1>
        <Button className="start" bsStyle="default" onClick={this.startGame}>
          Start
        </Button>
      </div>
    );
  }
}

export default Control;
