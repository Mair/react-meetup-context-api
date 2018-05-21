import React, { Component } from 'react';

import { MouseConsumer } from '../context';

export class Eg3 extends Component {
  render() {
    return (
      <div className="control">
        <MouseConsumer>{pos => <div>{`X is ${pos.x} and Y is ${pos.y}`}</div>}</MouseConsumer>
      </div>
    );
  }
}
