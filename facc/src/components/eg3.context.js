import React, { Component } from 'react';

import { MouseConsumer } from '../context';

export class Eg3 extends Component {
  render() {
    return (
      <div className="control">
        <MouseConsumer>{pos => <div onClick={() => pos.onCount()}>{`X is ${pos.position.x} and Y is ${pos.position.y}`}</div>}</MouseConsumer>
      </div>
    );
  }
}
