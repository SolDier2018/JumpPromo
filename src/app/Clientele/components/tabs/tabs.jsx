import React, {Component, Fragment} from 'react';

import style from './tabs.module.css';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: true
        }
    }

    render() {

        return (
            <Fragment>
                <ul className={style.tabsList}>
                    <li>
                        <button
                            type={'button'}
                            className={this.state.tabIndex ? style.active : ''}
                            onClick={() => this.setState({tabIndex: true})}
                        >
                            Кэшбек
                        </button>
                    </li>
                    <li>
                        <button
                            type={'button'}
                            className={!this.state.tabIndex ? style.active : ''}
                            onClick={() => this.setState({tabIndex: false})}
                        >
                            Заказы
                        </button>
                    </li>
                </ul>
                <section className={style.tabsSection}>
                    {this.state.tabIndex === true
                        ?
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
                        : null}

                    {this.state.tabIndex === false
                        ?
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
                        : null}
                </section>
            </Fragment>
        );
    }
}

export default Tabs;