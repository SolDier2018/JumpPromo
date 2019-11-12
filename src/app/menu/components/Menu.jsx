import React, {Fragment} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {menuOpen} from "../../../redux/actions";
import {Link} from 'react-router-dom';

import MenuItem from './menuItem';

import review from '../../../ui/img/review.svg';
import reviewActive from '../../../ui/img/reviewActive.svg';
import orders from '../../../ui/img/orders.svg';
import ordersActive from '../../../ui/img/ordersActive.svg';
import news from '../../../ui/img/news.svg';
import newsActive from '../../../ui/img/newsActive.svg';
import clients from '../../../ui/img/clients.svg';
import clientsActive from '../../../ui/img/clientsActive.svg';

import close from '../../../ui/img/close_menu.svg';
import user from '../../../ui/img/icon_user.svg';
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
                    iconActive: reviewActive,
                    submenu: [],
                    count: ''
                },
                {
                    label: 'Заказы',
                    path: '/orders',
                    icon: orders,
                    iconActive: ordersActive,
                    submenu: [
                        {
                            label: 'Позиции',
                            path: '/positions'
                        },
                        {
                            label: 'Категории',
                            path: '/categories'
                        }
                    ],
                    count: 2
                },
                {
                    label: 'Новости',
                    path: '/news',
                    icon: news,
                    iconActive: newsActive,
                    submenu: [],
                    count: ''
                },
                {
                    label: 'Клиенты',
                    path: 'clientele',
                    icon: clients,
                    iconActive: clientsActive,
                    submenu: [],
                    count: ''
                }
            ],
            selected: 'Обзор'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(value) {
        this.props.menuOpen(false);
        this.setState({
            selected: value
        });
    }

    render() {

        const {menuOpen, openMenu} = this.props;

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
                                <img src={user} alt=""/>
                                <p className={style.name}>Евгений Головатый</p>
                                <p className={style.email}>example@example.com</p>
                            </div>
                            <ul>
                                <li>
                                    <Link to={'/profile'} onClick={this.closeMenu}>Профиль</Link>
                                </li>
                                <li>
                                    <Link to={'/setting-company'} onClick={this.closeMenu}>Настройка компании</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button type="button" id="js-close_menu" className={style.closeMenu} onClick={() => {menuOpen(!openMenu)}}>
                        <img src={close} alt=""/>
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
                                            iconActive={e.iconActive}
                                            count={e.count}
                                            active={e.label === this.state.selected}
                                            onClick={(value) => this.handleClick(value)}
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

function mapStateToProps(store) {
    return {
        openMenu: store.menuOpen
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({menuOpen}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);