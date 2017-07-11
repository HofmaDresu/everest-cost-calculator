import React from 'react';

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