import React from 'react';
import PropTypes from 'prop-types';
import './NavButtons.css';

export default function NavButtons({isFirst, isLast, onForwardAction, onBackAction}) {
    const firstButton = isFirst ? null : (
        <span>
            <input type="button" onClick={onBackAction} value="Back"/>
        </span>
    )
    return (
        <div id="nav-buttons">
            {firstButton}
            <span className="forward-button">
                <input type="button" onClick={onForwardAction} value={isLast ? "Finish" : "Next"} />
            </span>
        </div>
    ); 
}

NavButtons.propTypes = {
    isFirst: PropTypes.bool,
    isLast: PropTypes.bool,
    onForwardAction: PropTypes.func.isRequired,
    onBackAction: PropTypes.func,
};