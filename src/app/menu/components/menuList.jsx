import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import style from "../css/menu.module.css";

export const MenuList = ({menu, active, activeSub, onClick}) => {
    return (
        <div className={style.menuItems}>
            <nav>
                <ul>
                    {
                        menu.map((e) =>

                            <li
                                key={e.label}
                                className={'nav-li ' + (e.path === active ? style.openSubmenu : '')}
                                aria-label={e.path}
                            >

                                <img src={e.path === active ? e.iconActive : e.icon} alt={e.label}/>

                                <div className={'block'}>

                                    <Link
                                        to={e.path}
                                        className={e.path === activeSub ? style.badgest + ' ' + style.link : style.link}
                                        name={e.pathContain}
                                        aria-label={e.path}
                                        onClick={(e) => {
                                            onClick(
                                                e.currentTarget.closest('li').getAttribute('aria-label'),
                                                e.currentTarget.getAttribute('aria-label')
                                            )
                                        }}
                                    >
                                        <p>{e.label}</p>
                                        <span>{e.count}</span>

                                        {e.submenu.length > 0 ? <svg width="10" height="6" viewBox="0 0 10 6" fill="#333333"
                                                 xmlns="http://www.w3.org/2000/svg" className={style.dropdown}>
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                      d="M0.303855 0.2821C0.70034 -0.10237 1.33343 -0.0926305 1.7179 0.303855L4.90022 3.58562L8.30352 0.28242C8.69983 -0.102233 9.33293 -0.0927836 9.71758 0.303525C10.1022 0.699834 10.0928 1.33293 9.69648 1.71758L5.57526 5.71758C5.38489 5.90235 5.1289 6.00391 4.86364 5.99989C4.59837 5.99587 4.34557 5.8866 4.16089 5.69615L0.2821 1.69615C-0.10237 1.29966 -0.0926305 0.666571 0.303855 0.2821Z"
                                                      fill=""/>
                                            </svg> : ''}

                                    </Link>

                                    {
                                        e.submenu.map((e) => {
                                            return (
                                                <Link
                                                    key={e.path}
                                                    to={e.path}
                                                    className={e.path === activeSub ? style.badgest + ' ' + style.link : style.link}
                                                    name={e.pathContain}
                                                    aria-label={e.path}
                                                    onClick={(e) => {
                                                        onClick(
                                                            e.currentTarget.closest('li').getAttribute('aria-label'),
                                                            e.currentTarget.getAttribute('aria-label')
                                                        )
                                                    }}
                                                >
                                                    <p>{e.label}</p>
                                                    <span>{e.count}</span>
                                                </Link>
                                            )
                                        })
                                    }

                                </div>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </div>
    )
};

MenuList.defaultProps = {
    menu: [],
    active: '',
    activeSub: '',
    onClick: () => console.error('onClick not at props')
};

MenuList.propTypes = {
    menu: PropTypes.array,
    active: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    activeSub: PropTypes.string,
    onClick: PropTypes.func.isRequired
};
