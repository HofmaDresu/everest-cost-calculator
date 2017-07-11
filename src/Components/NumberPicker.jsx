import React from 'react';

export default function NumberPicker({selectedNumber, numberRange, labelText, onChangeAction}) {
    const options = numberRange.map(n => {
        const selected = n === selectedNumber ? "selected" : "";
        return <option value={n} selected={selected}>{n}</option>
    });
    return (
        <div>
            <label>{labelText}</label>
            <select onChange={onChangeAction}>
                {options}
            </select>
        </div>
    ); 
}