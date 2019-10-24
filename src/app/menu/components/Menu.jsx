import React, {Fragment} from 'react';

import {Link} from 'react-router-dom';

import MenuItem from './menuItem';

import review from '../../../ui/img/review.svg';
import orders from '../../../ui/img/orders.svg';
import news from '../../../ui/img/news.svg';
import clients from '../../../ui/img/clients.svg';

import style from '../css/menu.module.css';


class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: [

                {
                    label: 'Обзор',
                    path: '/review',
                    icon: review,
                    submenu: []
                },
                {
                    label: 'Заказы',
                    path: '/orders',
                    icon: orders,
                    submenu: [
                        {
                            label: 'Позиции',
                            path: '/positions'
                        },
                        {
                            label: 'Категории',
                            path: '/categories'
                        }
                    ]
                },
                {
                    label: 'Новости',
                    path: '/news',
                    icon: news,
                    submenu: []
                },
                {
                    label: 'Клиенты',
                    path: 'clientele',
                    icon: clients,
                    submenu: []
                }
            ]

        }
    }

    closeMenu() {
        document.getElementsByClassName('menu')[0].className = 'menu';
    }

    render() {
        return (
            <Fragment>

                <div className={style.user}>
                    <div className={style.userWrap}>
                        <span className={style.avatar}>A</span>
                        <span className={style.name}>Автомир Богемия</span>
                        <span className={style.company}>Jump Promo Service</span>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.dropdown}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.303855 0.2821C0.70034 -0.10237 1.33343 -0.0926305 1.7179 0.303855L4.90022 3.58562L8.30352 0.28242C8.69983 -0.102233 9.33293 -0.0927836 9.71758 0.303525C10.1022 0.699834 10.0928 1.33293 9.69648 1.71758L5.57526 5.71758C5.38489 5.90235 5.1289 6.00391 4.86364 5.99989C4.59837 5.99587 4.34557 5.8866 4.16089 5.69615L0.2821 1.69615C-0.10237 1.29966 -0.0926305 0.666571 0.303855 0.2821Z" fill="#333333"/>
                        </svg>
                        <div className={style.accountPreview}>
                            <div className=''>
                                <img src="./img/icon_user.svg" alt=""/>
                                <p className={style.name}>Евгений Головатый</p>
                                <p className={style.email}>example@example.com</p>
                            </div>
                            <ul>
                                <li>
                                    <Link to={'/profile'}>Профиль</Link>
                                </li>
                                <li>
                                    <Link to={'/setting-company'}>Настройка компании</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button type="button" id="js-close_menu" className={style.closeMenu} onClick={this.closeMenu}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.777763 11.6667C0.348208 12.0962 0.348208 12.7927 0.777763 13.2222C1.20732 13.6518 1.90376 13.6518 2.33332 13.2222L6.99998 8.55555L11.6667 13.2222C12.0962 13.6518 12.7927 13.6518 13.2222 13.2222C13.6518 12.7927 13.6518 12.0962 13.2222 11.6667L8.55554 7L13.2222 2.33333C13.6518 1.90378 13.6518 1.20733 13.2222 0.777775C12.7927 0.34822 12.0962 0.348219 11.6667 0.777774L6.99998 5.44444L2.33332 0.777778C1.90376 0.348223 1.20732 0.348225 0.777763 0.777779C0.348208 1.20733 0.348208 1.90378 0.777763 2.33333L5.44443 7L0.777763 11.6667Z" fill="#333333"/>
                        </svg>
                    </button>
                </div>

                <div className={style.menuItems}>
                    <nav>
                        <ul>
                            {
                                this.state.menu.map((e) => {
                                    return(
                                        <MenuItem
                                            key={e.label}
                                            to={e.path}
                                            label={e.label}
                                            submenu={e.submenu}
                                            icon={e.icon}
                                        />
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </Fragment>
        )
    }
}

export default Menu;