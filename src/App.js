import React, { Component } from 'react';
import './App.css';
import People from './People';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      appState: {
        people: {
          numberOfPeople: 1,
          hasInsurance: false,
        },
      },
    };
  }
  savePeopleAction = (people) => {
    this.setState({appState: {...(this.state.appState), people}, currentPage: 2});
  }
  render() {
    const appState = this.state.appState;
    return (
      <div className="App">
        <People {...(appState.people)} saveAction={this.savePeopleAction} />
      </div>
    );
  }
}

export default App;
