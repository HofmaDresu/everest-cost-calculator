import React from 'react';

export default function CheckboxPicker({isSelected, labelText, onChangeAction}) {
    return (
        <div>
            <label>{labelText}</label>
            <input type="checkbox" checked={isSelected} onChange={onChangeAction}/>
        </div>
    ); 
}