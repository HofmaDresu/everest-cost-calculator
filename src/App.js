import React, { Component } from 'react';
import './App.css';
import People from './People';
import Flights from './Flights';
import GearItems from './GearItems';
import Gear from './Gear';
import TotalCost from './TotalCost';

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
        gearItems: GearItems.map(a => Object.assign({}, a)),
        costs: {
          people: {
            perPerson: 4299,
            insuranceEach: 264,
          },
          flights: {
            international: 2000,
            domestic: 450,
            visa: 25,
          },
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
  saveGearAction = (gearItems) => {
    this.setState({appState: {...(this.state.appState), gearItems}, currentPage: 4});
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
      case 3: 
        activeComponent = <Gear gearItems={appState.gearItems} saveAction={this.saveGearAction} backAction={this.backAction} />;
        break;
      case 4: 
        activeComponent = <TotalCost appState={appState} backAction={this.backAction} />;
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
