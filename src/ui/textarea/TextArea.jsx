import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import style from './textarea.module.css';
import kit from '../../app/kit.module.css';

const idFromString = (str) => {
    let id = 'ch_';
    for (let i = 0; i < str.length; i++) {
        id += str.charCodeAt(i);
    }

    return id;
};

const TextArea = ({id, label, className, ...attrs}) => {

    const key = label.length > 1 ? idFromString(label) : '';

    return (
        <Fragment>
            {label === '' ? null : <label htmlFor={key} className={kit.h3}>{label}</label>}
            <textarea
                name={label}
                id={key}
                className={style.textarea + (className ? ' ' + className : '')}
                {...attrs}
            />
        </Fragment>
    )
};

TextArea.defaultProps = {
    id: null,
    label: '',
    className: ''
};

TextArea.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string
};

export default TextArea;