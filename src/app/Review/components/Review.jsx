import React from 'react';

import ReviewLink from './ReviewLink';

import style from '../css/review.module.css';
import clienteleImg from '../../../ui/img/clientele_svg.svg';
import ordersImg from '../../../ui/img/orders_svg.svg';

import {openMenu} from '../../../utils/openMenu';

class Review extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
        this.openMenu = this.openMenu.bind(this);
    }

    openMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen
        }, () => {
            openMenu(this.state.menuOpen)
        });
    }


    render() {
        return (
            <div className={style.contentItem}>
                <div className="content_menu-wrap">
                    <div className={style.reviewHead}>
                        <p className={style.item_name}>Обзор</p>
                        <button className={style.item_time} onClick={this.openMenu}>
                            <svg width="16" height="8" viewBox="0 0 16 8" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16 0H0V2H16V0ZM16 6H0V8H16V6Z"
                                      fill="#333333"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={style.reviewWrapper}>

                    <ReviewLink
                        to={'/clientele'}
                        title={'Клиенты'}
                        number={'318'}
                        img={clienteleImg}
                    />

                    <ReviewLink
                        to={'/orders'}
                        title={'Заказы'}
                        number={'24'}
                        img={ordersImg}
                    />

                    <ReviewLink
                        to={'/orders'}
                        title={'Заказы'}
                        number={'24'}
                        img={ordersImg}
                    />

                    <ReviewLink
                        to={'/orders'}
                        title={'Заказы'}
                        number={'24'}
                        img={ordersImg}
                    />

                    <ReviewLink
                        to={'/orders'}
                        title={'Заказы'}
                        number={'24'}
                        img={ordersImg}
                    />

                    <ReviewLink
                        to={'/orders'}
                        title={'Заказы'}
                        number={'24'}
                        img={ordersImg}
                    />

                    <ReviewLink
                        to={'/orders'}
                        title={'Заказы'}
                        number={'24'}
                        img={ordersImg}
                    />

                    <ReviewLink
                        to={'/orders'}
                        title={'Заказы'}
                        number={'24'}
                        img={ordersImg}
                    />

                </div>
            </div>
        )
    }
}

export default Review;