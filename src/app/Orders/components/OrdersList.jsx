import React, {Fragment} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showSearch, openDetails} from '../../../redux/actions';

import Head from '../../../containers/listHead/listHead';
import Link from '../../../containers/ItemLink/ItemLink';
import Filter from '../../../containers/listHead/Filter';

import style from '../css/orders.module.css';

class OrdersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            heightHead: ''
        };
        this.showSearch = this.showSearch.bind(this);
        this.openDetails = this.openDetails.bind(this);
    }

    showSearch() {
        this.props.showSearch(!this.props.isSearch)
    }

    openDetails() {
        this.props.openDetails(!this.props.Details)
    }

    render() {

        const button = {
            button: [
                <button key={'search'} type={'button'} onClick={this.showSearch}><svg width="18" height="18" viewBox="0 0 18 18" fill="#333333"
                                                                                      xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7ZM10.908 12.8084C9.79193 13.5608 8.44725 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 8.70049 13.3936 10.2594 12.3854 11.4722C12.3951 11.4812 12.4048 11.4905 12.4143 11.5L17.0001 16.0858C17.3906 16.4763 17.3906 17.1095 17.0001 17.5C16.6096 17.8905 15.9764 17.8905 15.5859 17.5L11.0001 12.9142C10.9665 12.8806 10.9358 12.8453 10.908 12.8084Z"
                          fill=""/>
                </svg></button>
            ],
            filter: [
                <Filter key={'filter'} onClick={() => console.log('---')}/>
            ]
        };

        return (
            <Fragment>
                <Head
                    label={'Заказы'}
                    height={(value) => this.setState({heightHead: value})}
                    searchText={(value) => console.log(value)}
                    button={button}
                />

                <div className={style.orderItems} style={{marginTop: this.state.heightHead}}>
                    <Link
                        to={'#'}
                        title={'Заказ #238'}
                        attr={'01:23'}
                        description={`Lorem ipsum dolor sit amet`}
                        onClick={this.openDetails}
                    />
                    <Link
                        to={'#'}
                        title={'Заказ #238'}
                        attr={'01:23'}
                        description={`Lorem ipsum dolor sit amet`}
                        onClick={this.openDetails}
                    />
                    <Link
                        to={'#'}
                        title={'Заказ #238'}
                        attr={'01:23'}
                        description={`Lorem ipsum dolor sit amet`}
                        onClick={this.openDetails}
                    />
                    <Link
                        to={'#'}
                        title={'Заказ #238'}
                        attr={'01:23'}
                        description={`Lorem ipsum dolor sit amet`}
                        onClick={this.openDetails}
                    />
                    <Link
                        to={'#'}
                        title={'Заказ #238'}
                        attr={'01:23'}
                        description={`Lorem ipsum dolor sit amet`}
                        onClick={this.openDetails}
                    />
                    <Link
                        to={'#'}
                        title={'Заказ #238'}
                        attr={'01:23'}
                        description={`Lorem ipsum dolor sit amet`}
                        onClick={this.openDetails}
                    />
                    <Link
                        to={'#'}
                        title={'Заказ #238'}
                        attr={'01:23'}
                        description={`Lorem ipsum dolor sit amet`}
                        onClick={this.openDetails}
                    />
                    <Link
                        to={'#'}
                        title={'Заказ #238'}
                        attr={'01:23'}
                        description={`Lorem ipsum dolor sit amet`}
                        onClick={this.openDetails}
                    />
                    <Link
                        to={'#'}
                        title={'Заказ #238'}
                        attr={'01:23'}
                        description={`Lorem ipsum dolor sit amet`}
                        onClick={this.openDetails}
                    />
                    <Link
                        to={'#'}
                        title={'Заказ #238'}
                        attr={'01:23'}
                        description={`Lorem ipsum dolor sit amet`}
                        onClick={this.openDetails}
                    />
                    <Link
                        to={'#'}
                        title={'Заказ #238'}
                        attr={'01:23'}
                        description={`Lorem ipsum dolor sit amet`}
                        onClick={this.openDetails}
                    />
                    <Link
                        to={'#'}
                        title={'Заказ #238'}
                        attr={'01:23'}
                        description={`Lorem ipsum dolor sit amet`}
                        onClick={this.openDetails}
                    />
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(store) {
    return {
        isSearch: store.showSearch,
        Details: store.openDetails
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({showSearch, openDetails}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList);
