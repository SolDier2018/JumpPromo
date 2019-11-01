import React, {Fragment} from 'react';

import style from '../css/orders.module.css';

import Head from '../../../containers/listHead/listHead';
import Link from '../../../containers/ItemLink/ItemLink';
import {openMenu} from '../../../utils/openMenu';
import {openDetails} from '../../../utils/openDetails';
import {scroll} from '../../../utils/hideListHead';

class OrdersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 122,
            menuOpen: false
        };
        scroll();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.menuOpen !== prevProps.menuOpen) {
            openMenu(this.state.menuOpen)
        }
    }

    render() {
        return (
            <Fragment>
                <div className="content_menu-wrap">
                    <Head
                        label={'Заказы'}
                        add={false}
                        search={true}
                        toTheHeight={(value) => this.setState({height: value})}
                        menuOpen={(value) => {this.setState({menuOpen: value})}}
                        filter={true}
                    />
                </div>

                <div className={style.orderItems} style={{marginTop: this.state.height}}>

                    <Link
                        to={'#'}
                        title={'Заказ #238'}
                        attr={'01:23'}
                        description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                            consectetur cupiditate dicta dolore doloremque dolores doloribus ducimus eaque earum
                            eligendi excepturi fugit ipsum iure labore, libero magnam minus molestiae nam nihil odio
                            odit optio pariatur placeat porro quis quo quos repellendus reprehenderit similique sint
                            tenetur totam unde veniam! Quo, soluta?.`}
                        noWrap={true}
                        click={(details) => {
                            openDetails(details)
                        }}
                    />
                </div>
            </Fragment>
        )
    }
}

export default OrdersList;