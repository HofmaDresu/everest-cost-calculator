import React from 'react';
import PropTypes from 'prop-types';

export default function NumberPicker({selectedNumber, numberRange, labelText, onChangeAction}) {
    const options = numberRange.map(n => <option key={n} value={n}>{n}</option>);
    return (
        <div>
            <label>{labelText}</label>
            <select onChange={onChangeAction} value={selectedNumber}>
                {options}
            </select>
        </div>
    ); 
}

NumberPicker.propTypes = {
    selectedNumber: PropTypes.number.isRequired,
    numberRange: PropTypes.array.isRequired,
    labelText: PropTypes.string.isRequired,
    onChangeAction: PropTypes.func.isRequired,
};