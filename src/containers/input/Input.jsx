import React from 'react';
import PropTypes from 'prop-types';

import style from './input.module.css';

const idFromString = (str) => {
    let id = 'ch_';
    for(let i=0; i< str.length; i++) {
        id += str.charCodeAt(i);
    }
    return id;
};

function Input ({id, label, type, placeholder, onChange, className}) {

    const key = id || idFromString(label);

        return (
            <div>
                {label.length > 1 ? <label htmlFor={key} className={style.label}><b>{label}</b></label> : ''}
                <input
                    type={type}
                    id={key}
                    className={style.input + (className ? ' '+className: '')}
                    placeholder={placeholder}
                    onChange={(e) => {
                        const value = e.target.value;
                        onChange(value);
                    }}
                    autoComplete={'on'}
                />
            </div>
        );
}

Input.defaultProps = {
    id: null,
    label: '',
    type: 'text',
    placeholder: '',
    onChange: () => console.error('onCahnge not at props'),
    className: ''
};

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string
};

export default Input;

// this.props.error ? style.inputError :