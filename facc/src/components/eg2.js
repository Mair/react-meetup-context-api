import React, { Component } from 'react';
import { Position } from './facc';
export class Eg2 extends Component {
  state = {
    position: { x: 0, y: 0 }
  };

  registerMouseEvent = element =>
    (element.onmousemove = e => this.setState({ position: { x: e.clientX, y: e.clientY } }));

  render() {
    const { x, y } = this.state.position;
    return (
      <Position>
        {pos => (
          <div
            ref={this.registerMouseEvent}
            style={{ backgroundColor: `hsl(0, ${pos.x % 100}%, ${pos.y % 100}% )` }}
          >
            <div>{`X is ${pos.x} and Y is ${pos.y}`}</div>
          </div>
        )}
      </Position>
    );
  }
}
