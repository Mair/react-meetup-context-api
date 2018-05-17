import React, { Component } from 'react';

export class Eg2 extends Component {
  state = {
    position: { x: 0, y: 0 }
  };

  registerMouseEvent = element =>
    (element.onmousemove = e => this.setState({ position: { x: e.clientX, y: e.clientY } }));

  render() {
    const { x, y } = this.state.position;
    return (
      <div
        className="control"
        ref={this.registerMouseEvent}
        style={{ backgroundColor: `hsl(0, ${x % 100}%, ${y % 100}% )` }}
      >
        <div>{`X is ${x} and Y is ${y}`}</div>
      </div>
    );
  }
}
