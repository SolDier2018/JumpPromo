import React, {Component, Fragment} from 'react';

import AddCategories from './addCategories';
import ListHead from '../../../containers/listHead/listHead';
import Link from '../../../containers/ItemLink/ItemLink';
import {openMenu} from "../../../utils/openMenu";
import {openDetails} from '../../../utils/openDetails';
import {scroll} from "../../../utils/hideListHead";

import style from '../css/categories.module.css';

class CategoriesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            menuOpen: false
        };
        scroll();
        this.showPopup = this.showPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.menuOpen !== prevProps.menuOpen) {
            openMenu(this.state.menuOpen)
        }
    }

    showPopup() {
        this.setState({
            showPopup: true
        });
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
                        label={'Категории'}
                        add={true}
                        search={false}
                        defaultState={this.state.showPopup}
                        onClick={(e) => this.setState({showPopup: e})}
                        menuOpen={(value) => {
                            this.setState({menuOpen: value})
                        }}
                    />
                </div>

                <div className={style.categoriesItems}>

                    <details>
                        <summary className={style.summary}>
                            Обслуживание
                        </summary>
                        <ul>
                            <li className={style.summaryItem}>
                                <Link
                                    to={'#'}
                                    title={'Замена масла'}
                                    description={''}
                                    noWrap={true}
                                    fontWeight={false}
                                    click={(value) => {
                                        openDetails(value)
                                    }}
                                />
                            </li>
                            <li className={style.summaryItem}>
                                <Link
                                    to={'#'}
                                    title={'Смена фильтра'}
                                    description={''}
                                    noWrap={true}
                                    fontWeight={false}
                                    click={(value) => {
                                        openDetails(value)
                                    }}
                                />
                            </li>
                        </ul>
                    </details>

                </div>
                {this.state.showPopup && <AddCategories closePopup={this.closePopup}/>}

            </Fragment>
        );
    }
}

export default CategoriesList;