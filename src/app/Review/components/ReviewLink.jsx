import React from 'react';
import PropTypes from 'prop-types';

import style from '../css/review.module.css';
import {Link} from "react-router-dom";

export const ReviewLink = ({to, title, count, img, ...attrs}) => {
        return (
            <Link
                to={to}
                {...attrs}
            >
                <p>{title}</p>
                <span>{count}</span>
                <img src={img} alt={title} className={style.reviewIcon}/>
            </Link>
        );
};

ReviewLink.defaultProps = {
    to: '',
    title: 'Введите заголовок',
    count: '',
    img: 'http://dummyimage.com/56'
};

ReviewLink.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.number,
  img: PropTypes.string
};