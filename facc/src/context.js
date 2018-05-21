import React from 'react';

// 1 create the context
const MouseContext = React.createContext({ x: 0, y: 0 });

// 2 create create a react component
class MouseProvider extends React.Component {
  state = {
    position: { x: 0, y: 0 },
    counter: 0
  };

  onCount = () => this.setState({counter: this.state.counter + 1});

  registerMouseEvent = element =>
    (element.onmousemove = e => this.setState({ position: { x: e.clientX, y: e.clientY } }));

  render() {
    return (
      <div ref={this.registerMouseEvent}>
        <MouseContext.Provider
          value={{ position: this.state.position, counter: this.state.counter, onCount: this.onCount }}
        >
          {this.props.children}
        </MouseContext.Provider>
      </div>
    );
  }
}
// 3 export the provider and the consumer
const MouseConsumer = MouseContext.Consumer;
export { MouseProvider, MouseConsumer };
