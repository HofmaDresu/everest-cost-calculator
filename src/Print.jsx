import React from 'react';
import PropTypes from 'prop-types';
import './print.css';

export default function Print({appState}) {
    let {people, flights, gearItems} = appState;
    const tripCost = (people.perPersonCost * people.numberOfPeople) +
                    (people.hasInsurance ? people.insuranceEachCost * people.numberOfPeople : 0);

    const flightCost = (flights.includeInternational ? flights.internationalCost * people.numberOfPeople : 0) +
                        (flights.includeDomesticInNepal ? flights.domesticCost * people.numberOfPeople : 0) +
                        (flights.includeVisaFees ? flights.visaCost * people.numberOfPeople : 0);
    const gearCost = gearItems.map(a => Object.assign({}, a)).reduce((sum, g) => sum + (g.price * g.currentCount), 0)

    const totalCost = tripCost + flightCost + gearCost;
    return (
        <div className="print-section">
            <h1>Booking Costs</h1>
            <div>Trip cost for {people.numberOfPeople} people:</div>
            <div>${people.perPersonCost * people.numberOfPeople}</div>
            {people.hasInsurance ? <div>Insurance cost for {people.numberOfPeople} people:</div> : null}
            {people.hasInsurance ? <div>${people.insuranceEachCost * people.numberOfPeople}</div> : null}   
            <div className="subtotal">Subtotal: </div>
            <div className="subtotal">${tripCost}</div>
            <h1>Travel Costs</h1>    
            <div className="subtotal">Subtotal: </div>
            <div className="subtotal">${flightCost}</div>
            
            <h1>Gear Costs</h1>   
            <div className="subtotal">Subtotal: </div>
            <div className="subtotal">${gearCost}</div>

            <div className="total">Total:</div>
            <div className="total">${totalCost}</div>      
        </div>
    ); 
}

Print.propTypes = {
    appState: PropTypes.object.isRequired,
};