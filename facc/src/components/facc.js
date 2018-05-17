import React, { Component } from 'react';

export class Position extends Component {
  state = {
    position: { x: 0, y: 0 }
  };

  registerMouseEvent = element =>
    (element.onmousemove = e => this.setState({ position: { x: e.clientX, y: e.clientY } }));

  render() {
    return <div className="control" ref={this.registerMouseEvent}>{this.props.children(this.state.position)}</div>;
  }
}
