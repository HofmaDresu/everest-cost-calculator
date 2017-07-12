import React, { Component } from 'react';
import './App.css';
import People from './People';
import Flights from './Flights';

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
        flights: {
            includeInternational: true,
            includeDomesticInNepal: true,
            includeVisaFees: true,
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
  saveFlightsAction = (flights) => {
    this.setState({appState: {...(this.state.appState), flights}, currentPage: 3});
  }
  backAction = () => {
    this.setState(prevState => ({currentPage: prevState.currentPage-1}));
  }
  render() {
    const appState = this.state.appState;
    let activeComponent;
    switch(this.state.currentPage) {
      case 1:
        activeComponent = <People {...(appState.people)} saveAction={this.savePeopleAction} />;
        break;
      case 2:
        activeComponent = <Flights {...(appState.flights)} saveAction={this.saveFlightsAction} backAction={this.backAction} />;
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
