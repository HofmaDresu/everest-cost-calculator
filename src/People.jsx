import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NumberPicker from './Components/NumberPicker';
import CheckboxPicker from './Components/CheckboxPicker';
import NavButtons from './Components/NavButtons';


const peopleCountRange = [1,2,3,4];
const peopleCountLabelText = "How many people are in your group?";

const insuranceLabelText = "Do you want trip insurance?";

export default class PeopleComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            numberOfPeople: props.numberOfPeople,
            hasInsurance: props.hasInsurance
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
                <NumberPicker selectedNumber={this.state.numberOfPeople} numberRange={peopleCountRange} labelText={peopleCountLabelText} onChangeAction={this.handlePersonCountChange} />
                <CheckboxPicker isSelected={this.state.hasInsurance} labelText={insuranceLabelText} onChangeAction={this.handleInsuranceChange} />
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