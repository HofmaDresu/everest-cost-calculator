import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavButtons from './Components/NavButtons';

export default class TotalCost extends Component {
    render() {
        let people, flights, gearItems, costs;
        ({people, flights, gearItems, costs} = this.props.appState);
        const tripCost = (costs.people.perPerson * people.numberOfPeople) +
                        (people.hasInsurance ? costs.people.insuranceEach * people.numberOfPeople : 0);

        const flightCost = (flights.includeInternational ? costs.flights.international * people.numberOfPeople : 0) +
                            (flights.includeDomesticInNepal ? costs.flights.domestic * people.numberOfPeople : 0) +
                            (flights.includeVisaFees ? costs.flights.visa * people.numberOfPeople : 0);
        const gearCost = gearItems.map(a => Object.assign({}, a)).reduce((sum, g) => sum + (g.price * g.currentCount), 0)

        const totalCost = tripCost + flightCost + gearCost;
        return (
            <div className="component">
                <h1>Total Cost</h1>
                <h2>${totalCost}</h2>
                <NavButtons onBackAction={() => this.props.backAction(this.state)} isLast={true} />
            </div>
        );
    }
}

TotalCost.propTypes = {
    backAction: PropTypes.func.isRequired,
    appState: PropTypes.object.isRequired,
};