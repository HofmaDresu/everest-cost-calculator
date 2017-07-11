import React, {Component} from 'react';
import NumberPicker from './Components/NumberPicker';
import CheckboxPicker from './Components/CheckboxPicker';


const peopleCountRange = [1,2,3,4];
const peopleCountLabelText = "How many people are in your group?";

const insuranceLabelText = "Do you want trip insurance?";

export default class PeopleComponent extends Component {
    render() {
        return (
            <div className="component">
                <NumberPicker selectedNumber={3} numberRange={peopleCountRange} labelText={peopleCountLabelText} onChangeAction={() => {}} />
                <CheckboxPicker isSelected={false} labelText={insuranceLabelText} onChangeAction={() => {}} />
            </div>
        );
    }
}