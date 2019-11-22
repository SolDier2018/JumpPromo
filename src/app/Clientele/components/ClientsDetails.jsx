import React, {Fragment} from 'react';
import DetailsHead from '../../../containers/detailsHead/detailsHead';
import TabBar from '../../../ui/tabs/TabBar';
import TabBarItem from '../../../ui/tabs/TabBarItem'

import style from '../css/cliente.module.css';
import kit from '../../kit.module.css';

const ClientsDetails = () => {
    return (
        <Fragment>
            <DetailsHead
                title={'Клиент'}
            />
            <div className={'item_details-wrap'}>
                <div className={style.clientTitle}>
                    <h1 className={kit.h1}>Константин Константинопольский</h1>
                    <p className={kit.p}>Кэшбек 5% · 500 баллов</p>
                </div>
                <div className={style.clientContacts}>
                    <a href="tel:89137621160" className={kit.p}>+79137621160</a>
                    <a href="mailto:example@mail.com" className={kit.p}>example@mail.com</a>
                </div>
                <div className={style.clientInfo}>
                    <p className={kit.p}>Регистрация: 16 июля 2019</p>
                    <p className={kit.p}>Последнее посещение: 13 сен 2019</p>
                </div>

                <div className={style.clientInfoTabs}>
                    <TabBar>
                        <TabBarItem label='Кэшбек'>
                            <article>
                                <div className={style.item}>
                                    <p className={style.title}>+10 баллов · 1000 ₽</p>
                                    <span className={style.attribute}>03 сен</span>
                                    <p className={style.name}>Анна Семенова</p>
                                </div>
                                <div className={style.item}>
                                    <p className={style.title}>+10 баллов · 1000 ₽</p>
                                    <span className={style.attribute}>03 сен</span>
                                    <p className={style.name}>Константин Константинопольский</p>
                                </div>
                                <div className={style.item}>
                                    <p className={style.title}>+10 баллов · 1000 ₽</p>
                                    <span className={style.attribute}>03 сен</span>
                                    <p className={style.name}>Константин Константинопольский</p>
                                </div>
                                <div className={style.item}>
                                    <p className={style.title}>+10 баллов · 1000 ₽</p>
                                    <span className={style.attribute}>03 сен</span>
                                    <p className={style.name}>Константин Константинопольский</p>
                                </div>
                                <div className={style.item}>
                                    <p className={style.title}>+10 баллов · 1000 ₽</p>
                                    <span className={style.attribute}>03 сен</span>
                                    <p className={style.name}>Константин Константинопольский</p>
                                </div>
                                <div className={style.item}>
                                    <p className={style.title}>+10 баллов · 1000 ₽</p>
                                    <span className={style.attribute}>03 сен</span>
                                    <p className={style.name}>Константин Константинопольский</p>
                                </div>
                                <div className={style.item}>
                                    <p className={style.title}>+10 баллов · 1000 ₽</p>
                                    <span className={style.attribute}>03 сен</span>
                                    <p className={style.name}>Константин Константинопольский</p>
                                </div>
                            </article>
                        </TabBarItem>
                        <TabBarItem label='Заказы'>
                            <article>
                                <div className={style.item}>
                                    <p className={style.title}>Заказ #233</p>
                                    <span className={style.attribute}>03 сен</span>
                                    <p className={style.name}>Диагностика ходовой</p>
                                </div>
                                <div className={style.item}>
                                    <p className={style.title}>Заказ #232</p>
                                    <span className={style.attribute}>03 сен</span>
                                    <p className={style.name}>Диагностика ходовой. Автомойка и монтаж карбюратора</p>
                                </div>
                            </article>
                        </TabBarItem>
                    </TabBar>
                </div>
            </div>
        </Fragment>
    );
};

export default ClientsDetails;