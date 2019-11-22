import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Button} from '../button/button';

import style from './TabBar.module.css';

const TabBarNav = ({navLabel, className, onChangeActiveTab}) => {

    const classes = classNames(
        style.navItem,
        className
    );

    return (
        <Button
            label={navLabel}
            className={classes}
            onClick={() => {onChangeActiveTab(navLabel)}}
        />
    )
};

TabBarNav.propTypes = {
    navLabel: PropTypes.string,
    className: PropTypes.string,
    onChangeActiveTab: PropTypes.func
};

TabBarNav.defaultProps = {
    navLabel: `Tab`,
    className: '',
    onChangeActiveTab: () => {}
};

export default TabBarNav;

