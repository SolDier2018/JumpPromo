import React, {Component, Fragment} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {openDetails} from '../../../redux/actions';

import AddCategories from './addCategories';
import ListHead from '../../../containers/listHead/listHead';
import Link from '../../../containers/ItemLink/ItemLink';

import style from '../css/categories.module.css';

class CategoriesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: ''
        };
        this.openDetails = this.openDetails.bind(this);
    }

    openDetails() {
        this.props.openDetails(!this.props.details)
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
                        height={(value) => this.setState({height: value})}
                    />
                </div>

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
                {/*{this.state.showPopup && <AddCategories closePopup={this.closePopup}/>}*/}

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