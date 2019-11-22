import React, {Component, Fragment} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {showSearch, openDetails} from '../../../redux/actions';

import ListHead from '../../../containers/listHead/listHead';
import Link from '../../../containers/ItemLink/ItemLink';

import style from '../css/cliente.module.css';

class ClientsList extends Component {

    state = {
      height: ''
    };

    render() {
        const {openDetails, details, showSearch, search} = this.props;
        const button = {
            button: [
                <button key={'search'} type={'button'} onClick={() => showSearch(!search)}><svg width="18" height="18" viewBox="0 0 18 18" fill="#333333"
                                                                                      xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7ZM10.908 12.8084C9.79193 13.5608 8.44725 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 8.70049 13.3936 10.2594 12.3854 11.4722C12.3951 11.4812 12.4048 11.4905 12.4143 11.5L17.0001 16.0858C17.3906 16.4763 17.3906 17.1095 17.0001 17.5C16.6096 17.8905 15.9764 17.8905 15.5859 17.5L11.0001 12.9142C10.9665 12.8806 10.9358 12.8453 10.908 12.8084Z"
                          fill=""/>
                </svg></button>
            ]
        };

        return (
            <Fragment>

                <ListHead
                    label={'Клиенты'}
                    button={button}
                    height={(value) => this.setState({height: value})}
                />

                <div className={style.clientsItem} style={{marginTop: this.state.height}}>
                    <Link
                        to={'#'}
                        title={'Константин Константинопольский'}
                        description={'+7 912 345-67-89 · example@example.ru'}
                        onClick={() => openDetails(!details)}
                    />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.showSearch,
        details: state.openDetails
    }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({showSearch, openDetails}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientsList);