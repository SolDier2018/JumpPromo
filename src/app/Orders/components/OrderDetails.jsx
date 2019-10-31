import React, {Fragment} from 'react';

import DetailsHead from '../../../containers/detailsHead/detailsHead';
import Select from '../../../containers/select/Select';
import kit from '../../kit.module.css';

import {openMenu} from '../../../utils/openMenu';
import {openDetails} from '../../../utils/openDetails';

import style from '../css/orders.module.css';

class OrderDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: [
                'Не обработан',
                'Ожидает оплаты'
            ],
            menuOpen: false,
            details: null
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.menuOpen !== prevProps.menuOpen) {
            openMenu(this.state.menuOpen)
        }
    }

    render() {
        return (
            <Fragment>
                <DetailsHead
                    title={'Заказ'}
                    menuOpen={(value) => {
                        this.setState({menuOpen: value})
                    }}
                    hideDetails={(value) => {
                        openDetails(value)
                    }}
                />
                <div className="item_details-wrap">
                    <div className={style.itemTitle}>
                        <p className={style.itemName + ' ' + kit.h1}>Заказ #235</p>
                        <p className={style.itemTime + ' ' + kit.p}>Вчера в 16:33</p>
                    </div>
                    <div className={style.userContacts}>
                        <p className={style.userName}>Константин Константинопольский</p>
                        <a href="tel:+79123456789" className={style.userPhone}>+7 912 345 67 89</a>
                        <a href="mailto:example@example.ru" className={style.userEmail}>example@example.ru</a>
                    </div>
                    <div className={style.userOrder}>

                        <ul className={style.userOrderItems}>
                            <li><b>Позиции</b></li>
                            <li>
                                <p>Диагностика ходовой</p>
                                <span>1 000 ₽</span>
                            </li>
                            <li>
                                <p>Автомойка с химчисткой и удалением следов корозии</p>
                                <span>1 000 ₽</span>
                            </li>
                            <li>
                                <p><b>Итого</b></p>
                                <span><b>2 000 ₽</b></span>
                            </li>
                        </ul>

                        <div className={style.userComment}>
                            <p className={style.userCommentTitle}>
                                <b>Комментарий</b>
                            </p>
                            <p className={style.userCommentText}>
                                Эриксоновский гипноз зеркально вызывает стресс, следовательно тенденция к конформизму
                                связана с менее низким интеллектом.
                            </p>
                        </div>

                        <div className={style.userComment}>
                            <p className={style.userCommentTitle}>
                                <b>Комментарий</b>
                            </p>
                            <p className={style.userCommentText}>
                                Эриксоновский гипноз зеркально вызывает стресс, следовательно тенденция к конформизму
                                связана с менее низким интеллектом.
                            </p>
                        </div>

                        <div className={style.userComment}>
                            <p className={style.userCommentTitle}>
                                <b>Комментарий</b>
                            </p>
                            <p className={style.userCommentText}>
                                Эриксоновский гипноз зеркально вызывает стресс, следовательно тенденция к конформизму
                                связана с менее низким интеллектом.
                            </p>
                        </div>

                        <div className={style.orderStatus}>
                            <Select option={this.state.status} label={'Статус'}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default OrderDetails;