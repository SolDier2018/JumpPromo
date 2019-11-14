import React from 'react';

import ListHead from '../../../containers/listHead/listHead';
import {ReviewLink} from './ReviewLink';

import style from '../css/review.module.css';
import clienteleImg from '../../../ui/img/clientele_svg.svg';
import ordersImg from '../../../ui/img/orders_svg.svg';

class Review extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            heightHead: ''
        }
    }

    render() {
        return (
            <div className={style.contentItem}>

                <div className="content_menu-wrap">
                    <ListHead
                        label={'Обзор'}
                        height={(value) => this.setState({heightHead: value})}
                    />
                </div>

                <div className={style.reviewWrapper} style={{marginTop: this.state.heightHead}}>

                    <ReviewLink
                        to={'/clientele'}
                        title={'Клиенты'}
                        count={318}
                    />

                    <ReviewLink
                        to={'/orders'}
                        title={'Заказы'}
                        count={24}
                        img={clienteleImg}
                    />

                    <ReviewLink
                        to={'/orders'}
                        title={'Заказы'}
                        count={24}
                        img={ordersImg}
                    />

                    <ReviewLink
                        to={'/orders'}
                        title={'Заказы'}
                        count={24}
                        img={ordersImg}
                    />

                    <ReviewLink
                        to={'/orders'}
                        title={'Заказы'}
                        count={24}
                        img={ordersImg}
                    />

                    <ReviewLink
                        to={'/orders'}
                        title={'Заказы'}
                        count={24}
                        img={ordersImg}
                    />

                    <ReviewLink
                        to={'/orders'}
                        title={'Заказы'}
                        count={24}
                        img={ordersImg}
                    />

                    <ReviewLink
                        to={'/orders'}
                        title={'Заказы'}
                        count={24}
                        img={ordersImg}
                    />

                </div>
            </div>
        )
    }
}

export default Review;