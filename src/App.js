import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      img: ''
    };
  }


  onChange = (event) => {
    this.setState({term: event.target.value});
  }
  

  render() {
    return (
      <div className="App">
        <input value={this.state.term} onChange={this.onChange} />
      </div>
    );
  }
}


export default App;