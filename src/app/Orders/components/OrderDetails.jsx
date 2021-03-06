import React, {Fragment} from 'react';

import DetailsHead from '../../../containers/detailsHead/detailsHead';
import Select from '../../../ui/select/Select';
import kit from '../../kit.module.css';

import style from '../css/orders.module.css';

const option = [
    'Не обработан',
    'Обработан'
];

const OrderDetails = () => {
    return (
        <Fragment>
            <DetailsHead
                title={'Заказ'}
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

                    <div className={style.orderStatus}>
                        <form action="">
                            <Select
                                option={option}
                                label={'Статус'}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default OrderDetails;