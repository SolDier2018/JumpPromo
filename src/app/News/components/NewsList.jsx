import React, {Component, Fragment} from 'react';

import style from '../css/new.module.css';

import ListHead from '../../../containers/listHead/listHead';
import Link from '../../../containers/ItemLink/ItemLink';
import AddNews from './addNews';
import {openMenu} from "../../../utils/openMenu";
import {openDetails} from "../../../utils/openDetails";
import {scroll} from "../../../utils/hideListHead";

class NewsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            showPopup: false,
            height: 79
        };
        scroll();
        this.closePopup = this.closePopup.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.menuOpen !== prevProps.menuOpen) {
            openMenu(this.state.menuOpen)
        }
    }

    closePopup() {
        this.setState({
            showPopup: false
        });
    }

    render() {
        return (
            <Fragment>
                <div className="content_menu-wrap">
                    <ListHead
                        label={'Новости'}
                        add={true}
                        search={true}
                        defaultState={this.state.showPopup}
                        onClick={(e) => this.setState({showPopup: e})}
                        toTheHeight={(value) => this.setState({height: value})}
                        menuOpen={(value) => {
                            this.setState({menuOpen: value})
                        }}
                    />
                </div>
                <div className={style.newsItems} style={{marginTop: this.state.height}}>
                    <Link
                        to={'#'}
                        title={'Бочковое моторное масло Shell защитит ваш авто'}
                        attr={'01:23'}
                        description={'Преимущества бочкового масла перед обычным: - Контроль качества и состав чего то там'}
                        noWrap={false}
                        click={(value) => {
                            openDetails(value)
                        }}
                    />
                </div>
                {this.state.showPopup && <AddNews onClose={this.closePopup}/>}
            </Fragment>
        );
    }
}

export default NewsList;