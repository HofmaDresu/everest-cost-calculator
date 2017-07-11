import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NumberPicker from './Components/NumberPicker';
import CheckboxPicker from './Components/CheckboxPicker';


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
    render() {
        return (
            <div className="component">
                <NumberPicker selectedNumber={this.state.numberOfPeople} numberRange={peopleCountRange} labelText={peopleCountLabelText} onChangeAction={() => {}} />
                <CheckboxPicker isSelected={this.state.hasInsurance} labelText={insuranceLabelText} onChangeAction={() => {}} />
            </div>
        );
    }
}

PeopleComponent.propTypes = {
    numberOfPeople: PropTypes.number.isRequired,
    hasInsurance: PropTypes.bool.isRequired,
    saveAction: PropTypes.func.isRequired,
};