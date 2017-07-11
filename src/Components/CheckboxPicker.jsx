import React from 'react';
import PropTypes from 'prop-types';

export default function CheckboxPicker({isSelected, labelText, onChangeAction}) {
    return (
        <div>
            <label>{labelText}</label>
            <input type="checkbox" checked={isSelected} onChange={onChangeAction}/>
        </div>
    ); 
}

CheckboxPicker.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    labelText: PropTypes.string.isRequired,
    onChangeAction: PropTypes.func.isRequired,
};