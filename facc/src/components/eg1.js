import React, { Component } from 'react';
import { Position } from './facc';
import { MouseConsumer } from '../context';
export class Eg1 extends Component {
  render() {
    return (
      <Position>
        {pos => (
          <div>
            <div>
              {`X is ${pos.x} and Y is ${pos.y}`} <MouseConsumer>{pos => <div>{pos.counter}</div>}</MouseConsumer>
            </div>
          </div>
        )}
      </Position>
    );
  }
}
