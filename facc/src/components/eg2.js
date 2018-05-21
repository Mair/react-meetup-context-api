import React, { Component } from 'react';
import { Position } from './facc';
export class Eg2 extends Component {
  render() {
    return (
      <Position>
        {pos => (
          <div style={{ backgroundColor: `hsl(0, ${pos.x % 100}%, ${pos.y % 100}% )` }}>
            <div>{`X is ${pos.x} and Y is ${pos.y}`}</div>
          </div>
        )}
      </Position>
    );
  }
}
