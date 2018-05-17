import React, { Component } from 'react';
import { Position } from './facc';

export class Eg1 extends Component {
 
  render() {
    return <Position>{pos => <div>{`X is ${pos.x} and Y is ${pos.y}`}</div>}</Position>;
  }
}
