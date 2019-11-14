import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import style from './ItemLink.module.css';

export default function ItemLink({to, title, description, attr, noWrap, fontWeight, ...attrs}) {
    return (
        <Link to={to} className={style.link} {...attrs}>

            <p
                className={style.title}
                style={{
                    whiteSpace: noWrap ? 'nowrap' : 'normal',
                    gridColumn: attr === '' ? '1/3' : '1',
                    fontWeight: fontWeight
                }}
            >
                {title}
            </p>

            <span>{attr}</span>

            <p className={style.description}
               style={{whiteSpace: noWrap ? 'nowrap' : 'normal', gridColumn: attr === '' ? '1/3' : '1'}}>
                {description}
            </p>

        </Link>
    )
};

ItemLink.defaultProps = {
    to: '',
    title: 'Введите заголовок ссылки',
    attr: '',
    description: '',
    noWrap: true,
    fontWeight: 'bold'
};

ItemLink.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    attr: PropTypes.string,
    noWrap: PropTypes.bool,
    fontWeight: PropTypes.string
};