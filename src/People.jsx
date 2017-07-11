import React, {Component} from 'react';
import NumberPicker from './Components/NumberPicker'


const peopleCountRange = [1,2,3,4];
const peopleCountLabelText = "How many people are in your group?";

export default class PeopleComponent extends Component {
    render() {
        return (
            <div className="component">
                <NumberPicker selectedNumber={3} numberRange={peopleCountRange} labelText={peopleCountLabelText} onChangeAction={() => {}} />
            </div>
        );
    }
}