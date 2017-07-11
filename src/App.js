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
        costs: {
          perPerson: 100,
          insurance: 50,
        }
      },
    };
  }
  savePeopleAction = (people) => {
    this.setState({appState: {...(this.state.appState), people}, currentPage: 2});
  }
  render() {
    const appState = this.state.appState;
    let activeComponent;
    switch(this.state.currentPage) {
      case 1:
        activeComponent = <People {...(appState.people)} saveAction={this.savePeopleAction} />;
        break;
      default:
        activeComponent = null;
        break;
    }

    return (
      <div className="App">
        {activeComponent}
      </div>
    );
  }
}

export default App;
