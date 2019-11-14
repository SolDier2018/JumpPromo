import React, {Component, Fragment} from 'react';

import AddCategories from './addCategories';
import ListHead from '../../../containers/listHead/listHead';
import Link from '../../../containers/ItemLink/ItemLink';
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

        const button = {
            button: [
                <button key={'add'} type={'button'} onClick={() => {}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z"
                          fill="#333333"/>
                </svg></button>
            ]
        };

        return (
            <Fragment>

                <div className="content_menu-wrap">
                    <ListHead
                        label={'Категории'}
                        button={button}
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
                                    click={(value) => {}}
                                />
                            </li>
                            <li className={style.summaryItem}>
                                <Link
                                    to={'#'}
                                    title={'Смена фильтра'}
                                    description={''}
                                    noWrap={true}
                                    fontWeight={false}
                                    click={(value) => {}}
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