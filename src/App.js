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
          perPersonCost: 4299,
          insuranceEachCost: 264,
        },
        flights: {
          includeInternational: true,
          includeDomesticInNepal: true,
          includeVisaFees: true,
          internationalCost: 2000,
          domesticCost: 450,
          visaCost: 25,
        },
        gearItems: GearItems.map(a => Object.assign({}, a)),
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
        <div className="spacer"></div>
        {activeComponent}
        <div className="disclaimer">
          Trip info and gear list gathered from <a target="_blank" rel="noopener noreferrer" href="https://www.rei.com/adventures/trips/asia/mount-everest-base-camp-trek.html">REI Adventures</a>
          <br />
          Travel and Gear prices heavily estimated
        </div>
      </div>
    );
  }
}

export default App;
