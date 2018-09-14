import React, { Component } from "react";

var sound1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var sound2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var sound3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var sound4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
export var soundBoard = [sound1, sound2, sound3, sound4];

export class Colour1 extends Component {
  onClick = item => {
    if (this.props.clickable) {
      this.props.lightUp(0);
    }
  };

  render() {
    return (
      <div
        className={this.props.name}
        onClick={this.onClick}
        id={this.props.id}
      />
    );
  }
}

export class Colour2 extends Component {
  onClick = item => {
    if (this.props.clickable) {
      this.props.lightUp(1);
    }
  };

  render() {
    return (
      <div
        className={this.props.name}
        onClick={this.onClick}
        id={this.props.id}
      />
    );
  }
}

export class Colour3 extends Component {
  onClick = item => {
    if (this.props.clickable) {
      this.props.lightUp(2);
    }
  };

  render() {
    return (
      <div
        className={this.props.name}
        onClick={this.onClick}
        id={this.props.id}
      />
    );
  }
}

export class Colour4 extends Component {
  onClick = item => {
    if (this.props.clickable) {
      this.props.lightUp(3);
    }
  };

  render() {
    return (
      <div
        className={this.props.name}
        onClick={this.onClick}
        id={this.props.id}
      />
    );
  }
}
