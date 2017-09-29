import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavButtons from './Components/NavButtons';
import './totalCost.css';

export default class TotalCost extends Component {
    render() {
        let people, flights, gearItems;
        ({people, flights, gearItems} = this.props.appState);
        const tripCost = (people.perPersonCost * people.numberOfPeople) +
                        (people.hasInsurance ? people.insuranceEachCost * people.numberOfPeople : 0);

        const flightCost = (flights.includeInternational ? flights.internationalCost * people.numberOfPeople : 0) +
                            (flights.includeDomesticInNepal ? flights.domesticCost * people.numberOfPeople : 0) +
                            (flights.includeVisaFees ? flights.visaCost * people.numberOfPeople : 0);
        const gearCost = gearItems.map(a => Object.assign({}, a)).reduce((sum, g) => sum + (g.price * g.currentCount), 0)

        const totalCost = tripCost + flightCost + gearCost;
        return (
            <div id="total-cost" className="component">
                <h1>Trip Cost</h1>
                <div className="costs">
                    <div className="title">Booking:</div>
                    <div className="cost">${tripCost}</div>
                    <div className="title">Travel:</div>
                    <div className="cost">${flightCost}</div>
                    <div className="title">Gear:</div>
                    <div className="cost">${gearCost}</div>
                    <div className="title total">Total:</div>
                    <div className="cost total">${totalCost}</div>
                </div>
                <NavButtons onBackAction={() => this.props.backAction(this.state)} isLast={true} />
            </div>
        );
    }
}

TotalCost.propTypes = {
    backAction: PropTypes.func.isRequired,
    appState: PropTypes.object.isRequired,
};