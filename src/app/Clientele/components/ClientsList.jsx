import React, {Component, Fragment} from 'react';

import ListHead from '../../../containers/listHead/listHead';
import Link from '../../../containers/ItemLink/ItemLink';

import style from '../css/cliente.module.css';
import {scroll} from "../../../utils/hideListHead";

class ClientsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            height: 79
        };
        scroll();
    }

    render() {

        return (
            <Fragment>
                <div className='content_menu-wrap'>
                    <ListHead
                        label={'Клиенты'}
                        add={false}
                        search={true}
                        toTheHeight={(value) => this.setState({height: value})}
                        menuOpen={(value) => {
                            this.setState({menuOpen: value})
                        }}
                    />
                </div>

                <div className={style.clientsItem} style={{marginTop: this.state.height}}>
                    <Link
                        to={'#'}
                        title={'Константин Константинопольский'}
                        attr={''}
                        description={'+7 912 345-67-89 · example@example.ru'}
                        noWrap={true}
                        click={(value) => {}}
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
            </Fragment>
        );
    }
}

export default ClientsList;