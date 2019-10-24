import React, {Component, Fragment} from 'react';

import ListHead from '../../../containers/listHead/listHead';
import Link from '../../../containers/ItemLink/ItemLink';

import style from '../css/cliente.module.css';
import {openMenu} from "../../../utils/openMenu";
import {openDetails} from "../../../utils/openDetails";

class ClientsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            height: 79
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.menuOpen !== prevProps.menuOpen) {
            openMenu(this.state.menuOpen)
        }
    }

    render() {

        return (
            <div className={'content_menu'}>
                <div className={'scroll-wrapper'}>
                    <ListHead
                        label={'Клиенты'}
                        add={false}
                        search={true}
                        toTheHeight={(value)=> this.setState({height: value})}
                        menuOpen={(value) => {this.setState({menuOpen: value})}}
                    />

                    <div className={style.clientsItem} style={{marginTop: this.state.height}}>
                        <Link
                            to={'#'}
                            title={'Константин Константинопольский'}
                            attr={''}
                            description={'+7 912 345-67-89 · example@example.ru'}
                            noWrap={true}
                            click={(value) => {openDetails(value)}}
                        />
                        <Link
                            to={'/'}
                            title={'+7 912 345-67-89'}
                            attr={''}
                            description={'+7 912 345-67-89 · example@example.ru'}
                            noWrap={true}
                        />
                        <Link
                            to={'/'}
                            title={'Константин Константинопольский'}
                            attr={''}
                            description={'+7 912 345-67-89 · example@example.ru'}
                            noWrap={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export {ClientsList} ;