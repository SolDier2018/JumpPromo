import React, {Component, Fragment} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {openDetails} from '../../../redux/actions';

import PopupContainer from '../../../containers/PopupContainer/popupContainer';
import ListHead from '../../../containers/listHead/listHead';
import Link from '../../../containers/ItemLink/ItemLink';
import {Button} from '../../../ui/button/button';
import Input from '../../../ui/input/Input';
import CheckBox from '../../../ui/checkbox/Checkbox';
import Select from '../../../ui/select/Select';

import style from '../css/categories.module.css';
import kit from '../../kit.module.css';

class CategoriesList extends Component {

    state = {
        height: '',
        showPopup: false,
        category: [
            'Обслуживание',
            'Слесарный ремонт',
            'Кузовной ремонт'
        ]
    };

    openDetails = () => {
        this.props.openDetails(!this.props.details)
    };

    render() {

        const button = {
            button: [
                <button
                    key={'add'}
                    type={'button'}
                    onClick={() => this.setState({showPopup: true})}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z"
                              fill="#333333"/>
                    </svg>
                </button>
            ]
        };

        const popupContent = {
            fields: [
                <Input
                    key={'name'}
                    label={'Название'}
                    className={kit.input}
                    onChange={(value) => console.log(value)}
                />,
                <CheckBox
                    key={'subCategory'}
                    label={'подкатегория'}
                    checked={this.state.showParent}
                    onChange={(value) => this.setState({showParent: value})}
                />,
                this.state.showParent &&
                <Select
                    key={'category'}
                    option={this.state.category}
                    onChange={(e) => console.log(e.target.value)}
                />
            ],
            button: [
                <Button
                    key={'submit'}
                    type={'button'}
                    label={'Создать'}
                    className={kit.button}
                    onClick={() => console.log('Создать')}
                />,
                <Button
                    key={'close'}
                    type={'button'}
                    label={'Отмена'}
                    className={kit.transparent}
                    onClick={() => this.setState({showPopup: false})}
                />
            ]
        };

        return (
            <Fragment>

                <ListHead
                    label={'Категории'}
                    button={button}
                    height={(value) => this.setState({height: value})}
                />

                <div className={style.categoriesItems} style={{marginTop: this.state.height}}>

                    <details>
                        <summary className={style.summary}>
                            Обслуживание
                        </summary>
                        <ul>
                            <li className={style.summaryItem}>
                                <Link
                                    to={'#'}
                                    title={'Замена масла'}
                                    fontWeight={'normal'}
                                    onClick={this.openDetails}
                                />
                            </li>
                            <li className={style.summaryItem}>
                                <Link
                                    to={'#'}
                                    title={'Смена фильтра'}
                                    fontWeight={'normal'}
                                    onClick={this.openDetails}
                                />
                            </li>
                        </ul>
                    </details>

                </div>
                <TransitionGroup>
                    {this.state.showPopup &&
                    <CSSTransition
                        timeout={200}
                        classNames="popup"
                    >
                        <PopupContainer
                            title={'Создание категории'}
                            popupContent={popupContent}
                            onClick={() => this.setState({showPopup: false})}
                        />
                    </CSSTransition>
                    }
                </TransitionGroup>

            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        details: state.openDetails
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({openDetails}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);