import React, { Component } from 'react';

export class Eg1 extends Component {
  state = {
    position: { x: 0, y: 0 }
  };

  registerMouseEvent = element =>
    (element.onmousemove = e => this.setState({ position: { x: e.clientX, y: e.clientY } }));

  render() {
    return (
      <div className="control" ref={this.registerMouseEvent}>
        <div>{`X is ${this.state.position.x} and Y is ${this.state.position.y}`}</div>
      </div>
    );
  }
}