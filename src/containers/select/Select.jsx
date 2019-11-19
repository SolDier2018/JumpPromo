import React from 'react';
import PropTypes from 'prop-types';

import style from './select.module.css';

const idFromString = (str) => {
    let id = 'ch_';
    for(let i=0; i< str.length; i++) {
        id += str.charCodeAt(i);
    }

    return id;
};

const Select = ({id, label, option, className, ...attrs}) => {

    const key = label.length > 1 ? idFromString(label) : '';

    return (
        <div className={className}>
            {label.length > 1 ? <label htmlFor={key} className={style.label}><b>{label}</b></label> : ''}
            <select name={label} id={key} className={style.select} {...attrs}>
                {
                    option.map((e) => {
                        return (
                            <option value={e} key={e}>{e}</option>
                        )
                    })
                }
            </select>
        </div>
    );
};

Select.defaultProps = {
    id: null,
    label: '',
    option: [
        'Рыбный текст 1',
        'Рыбный текст 2',
        'Рыбный текст 3'
    ],
    className: ''
};

Select.propTypes = {
    label: PropTypes.string,
    option: PropTypes.array,
    className: PropTypes.string
};

export default Select;