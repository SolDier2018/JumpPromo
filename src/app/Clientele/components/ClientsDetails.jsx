import React, {Component} from 'react';

import DetailsHead from '../../../containers/detailsHead/detailsHead';
import Tabs from './tabs/tabs';

import style from '../css/cliente.module.css';
import kit from '../../kit.module.css';
import {openMenu} from "../../../utils/openMenu";
import {openDetails} from "../../../utils/openDetails";

class ClientsDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.menuOpen !== prevProps.menuOpen) {
            openMenu(this.state.menuOpen)
        }
    }


    render() {
        return (
            <div className="item_details">

                <DetailsHead
                    title={'Клиент'}
                    menuOpen={(value) => {this.setState({menuOpen: value})}}
                    hideDetails={(value) => {openDetails(value)}}
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
                        <Tabs/>
                    </div>

                </div>
            </div>
        );
    }
}

export {ClientsDetails};