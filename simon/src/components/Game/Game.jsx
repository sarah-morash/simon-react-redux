import React, { Component } from "react";
import $ from "jquery";
import { createStore } from "redux";
import {
  Colour1,
  Colour2,
  Colour3,
  Colour4,
  soundBoard
} from "../Colours/Colours.jsx";
import "./Game.css";
import "../Colours/Colours.css";
import Control from "../Control/Control.jsx";

const store = createStore(this.reducer);

class Game extends Component {
  initialStore = {
    series: this.getSeries(),
    clickable: false,
    lightUp: this.lightUp,
    count: 0
  };

  // HELPER FUNCTIONS
  getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  lightUp = tile => {
    var toAnimate = $("#tile" + tile);
    toAnimate.addClass("anim");

    soundBoard[tile].playbackRate = 0.7;
    soundBoard[tile].play();

    setTimeout(function() {
      toAnimate.removeClass("anim");
    }, 500);
  };

  getSeries = () => {
    let state = store.getState();
    var series = [];
    for (var i = 0; i < 24; i++) {
      series[i] = state.getRandomIntInclusive(0, 3);
    }
    return series;
  };

  // ACTIONS
  clickable = () => {
    return {
      type: "t.change",
      payload: true
    };
  };

  // REDUCERS
  reducer = (state = this.initialStore, { type, payload }) => {
    switch (type) {
      case "t.change": {
        return { ...state, clickable: payload };
      }
      default:
        return state;
    }
  };

  // LIFECYCLE
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    let state = store.getState();

    return (
      <div className={"flex-container"}>
        <Colour1
          name="colors t-l"
          lightUp={state.lightUp}
          id="tile0"
          clickable={state.clickable}
        />
        <Colour2
          name="colors t-r"
          lightUp={state.lightUp}
          id="tile1"
          clickable={state.clickable}
        />
        <Colour3
          name="colors b-l"
          lightUp={state.lightUp}
          id="tile2"
          clickable={state.clickable}
        />
        <Colour4
          name="colors b-r"
          lightUp={state.lightUp}
          id="tile3"
          clickable={state.clickable}
        />
        <Control name="center" series={state.series} lightUp={state.lightUp} />
      </div>
    );
  }
}

export default Game;
