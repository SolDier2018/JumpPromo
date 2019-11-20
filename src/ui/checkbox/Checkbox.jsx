import React from 'react';
import PropTypes from 'prop-types';

import style from './checkbox.module.css';

const idFromString = (str) => {
    let id = 'ch_';
    for(let i=0; i< str.length; i++) {
        id += str.charCodeAt(i);
    }

    return id;
};

function Checkbox({label, checked, onChange, id, className, ...attr}) {
    const key = id || idFromString(label);
    return (
        <div>
            <input type="checkbox"
                   id={key}
                   className={style.inputCheckbox + (className ? ' '+ className : '')}
                   defaultChecked={checked}
                   onChange={() => onChange(!checked)}
                   {...attr}
            />

            <label htmlFor={key} className={style.labelCheckbox}>
                {label}
            </label>
        </div>
    );
}

Checkbox.defaultProps = {
    id: null,
    label: 'NuN',
    checked: false,
    onChange: () => {},
    className: ''
};

Checkbox.propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string
};

export default Checkbox;