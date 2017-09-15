import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

export default function CheckboxPicker({isSelected, labelText, onChangeAction}) {
    const id = uuidv4();
    return (
        <div>
            <label htmlFor={id}>{labelText}</label>
            <input id={id} type="checkbox" checked={isSelected} onChange={onChangeAction}/>
        </div>
    ); 
}

CheckboxPicker.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    labelText: PropTypes.string.isRequired,
    onChangeAction: PropTypes.func.isRequired,
};