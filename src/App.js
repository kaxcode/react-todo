import React, { Component } from "react";

const Context = React.createContext();
const { Provider, Consumer } = Context;

class AppProvider extends Component {
  state = {
    count: 10
  };

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          actions: {
            increment: () => this.setState({ count: this.state.count + 1 })
          }
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

const Green = () => (
  <div className="green">
    <Consumer>{({ state }) => <span>{state.count}</span>}</Consumer>
  </div>
);

const Blue = () => (
  <div className="blue">
    <Consumer>
      {({ actions }) => <button onClick={actions.increment}>+</button>}
    </Consumer>
    <Green />
  </div>
);

class Red extends Component {
  render() {
    return (
      <AppProvider>
        <div className="App__container">
          <div className="red">
            <Consumer>{({ state }) => <span>{state.count}</span>}</Consumer>
            <Blue />
          </div>
        </div>
      </AppProvider>
    );
  }
}

export default Red;
