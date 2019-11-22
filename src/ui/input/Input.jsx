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

function Input ({id, label, className, onChange, ...attrs}) {

    const key = id || idFromString(label);

        return (
            <div>
                {label.length > 1 ? <label htmlFor={key} className={style.label}><b>{label}</b></label> : ''}
                <input
                    id={key}
                    className={style.input + (className ? ' ' + className : '')}
                    autoComplete={attrs.type === 'password' ? 'on' : 'off'}
                    onChange={(e) => {
                        const value = e.target.value;
                        onChange(value)
                    }}
                    {...attrs}
                />
            </div>
        );
}

Input.defaultProps = {
    id: null,
    label: '',
    className: '',
    onChange: () => {}
};

Input.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func
};

export default Input;