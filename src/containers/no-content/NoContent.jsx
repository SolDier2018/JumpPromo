import React from 'react';
import PropTypes from 'prop-types';

import style from './NoContent.module.css';

const NoContent = ({label, children}) => {
    return(
        <div className={style.wrapper}>
            <p className={style.label}>{label}</p>
            {children}
        </div>
    )
};

NoContent.defaultProps = {
    label: 'Передайте props - label'
};

NoContent.propTypes = {
    label: PropTypes.string.isRequired
};

export default NoContent;

// ПРИМЕР ИСПОЛЬЗОВАНИЯ

{/*<NoContent*/}
{/*    label={'Нет заказов'}*/}
{/*>*/}
{/*    <Button*/}
{/*        label={'Создать'}*/}
{/*        className={kit.button}*/}
{/*    />*/}
{/*</NoContent>*/}