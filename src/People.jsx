import React from 'react';
import NumberPicker from './Components/NumberPicker'

export default function PeopleComponent(props) {
    const numberRange = [1,2,3,4];
    const labelText = "How many people are in your group?";
    return (
        <div className="component">
            <NumberPicker numberRange={numberRange} labelText={labelText} onChangeAction={() => {}} />
        </div>
    );
}