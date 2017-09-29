import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NumberPicker from './Components/NumberPicker';
import CheckboxPicker from './Components/CheckboxPicker';
import NavButtons from './Components/NavButtons';


const peopleCountRange = [1,2,3,4];

export default class PeopleComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            numberOfPeople: props.numberOfPeople,
            hasInsurance: props.hasInsurance,
            perPersonCost: props.perPersonCost,
            insuranceEachCost: props.insuranceEachCost,
        };
    }
    handlePersonCountChange = (event) => {        
        this.setState({numberOfPeople: parseInt(event.target.value, 10)});
    }
    handleInsuranceChange = (event) => {
        this.setState({hasInsurance: event.target.checked});
    }
    render() {
        return (
            <div className="component">
                <h1>Booking Costs</h1>
                <NumberPicker selectedNumber={this.state.numberOfPeople} numberRange={peopleCountRange} labelText={`How many people are in your group ($${this.props.perPersonCost} each)?`} onChangeAction={this.handlePersonCountChange} />
                <CheckboxPicker isSelected={this.state.hasInsurance} labelText={`Do you want trip insurance ($${this.props.insuranceEachCost} each)?`} onChangeAction={this.handleInsuranceChange} />
                <NavButtons isFirst={true} onForwardAction={() => this.props.saveAction(this.state)} />
            </div>
        );
    }
}

PeopleComponent.propTypes = {
    numberOfPeople: PropTypes.number.isRequired,
    hasInsurance: PropTypes.bool.isRequired,
    saveAction: PropTypes.func.isRequired,
};