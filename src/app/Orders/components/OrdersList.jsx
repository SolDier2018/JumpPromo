import React from 'react';

import style from '../css/orders.module.css';

import Head from '../../../containers/listHead/listHead';
import Link from '../../../containers/ItemLink/ItemLink';
import {openMenu} from '../../../utils/openMenu';
import {openDetails} from '../../../utils/openDetails';

class OrdersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 79,
            menuOpen: false
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.menuOpen !== prevProps.menuOpen) {
            openMenu(this.state.menuOpen)
        }
    }

    render() {
        return (
            <div className="content_menu">
                <div className="scroll-wrapper">
                    <Head
                        label={'Заказы'}
                        add={false}
                        search={true}
                        toTheHeight={(value)=> this.setState({height: value})}
                        menuOpen={(value) => {this.setState({menuOpen: value})}}
                    />
                    <div className={style.contentMenuFilter} style={{top: this.state.height}}>
                        <a href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="#333333"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M2 4.99999H14V5.99999H2V4.99999ZM4 7.99999H12V8.99999H4V7.99999ZM10 11H6V12H10V11Z"
                                      fill=""/>
                            </svg>
                            <p>Не обработанные</p>
                        </a>
                    </div>

                    <div className={style.orderItems} style={{marginTop: this.state.height + 49}}>

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
                            click={(value) => {openDetails(value)}}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default OrdersList;