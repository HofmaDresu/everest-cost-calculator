import React, { Component } from 'react';
import './App.css';
import People from './People';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }
  render() {
    return (
      <div className="App">
        <People />
      </div>
    );
  }
}

export default App;
