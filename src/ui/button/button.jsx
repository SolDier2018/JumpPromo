import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({type, label, ...attrs}) => {
    return (
        <button
            type={type}
            {...attrs}
        >
            {label}
        </button>
    );
};

Button.defaultProps ={
    type: 'button',
    label: 'Button'
};

Button.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string
};