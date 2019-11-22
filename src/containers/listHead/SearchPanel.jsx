import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from "../../ui/input/Input";

import style from './listHead.module.css';
import kit from '../../app/kit.module.css';

class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        };
    }

    hideSearch = () => {
        this.props.onClose();
        this.setState({
            searchValue: ''
        });
    };

    render() {
        const {onSearch, className} = this.props;
        const {searchValue} = this.state;
        return (
            <div className={style.search + ' ' + className}>
                <Input
                    placeholder={'Найти'}
                    type={'search'}
                    className={kit.input}
                    onChange={(value) => {this.setState({searchValue: value});}}
                />

                <button
                    type={'button'}
                    className={style.btnSearch}
                    onClick={() => {onSearch(searchValue)}}
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="#333333"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7ZM10.908 12.8084C9.79193 13.5608 8.44725 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 8.70049 13.3936 10.2594 12.3854 11.4722C12.3951 11.4812 12.4048 11.4905 12.4143 11.5L17.0001 16.0858C17.3906 16.4763 17.3906 17.1095 17.0001 17.5C16.6096 17.8905 15.9764 17.8905 15.5859 17.5L11.0001 12.9142C10.9665 12.8806 10.9358 12.8453 10.908 12.8084Z"
                              fill=""/>
                    </svg>
                </button>

                <button
                    type={'button'}
                    className={style.btnSearch}
                    onClick={this.hideSearch}
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M0.777763 11.6667C0.348208 12.0962 0.348208 12.7927 0.777763 13.2222C1.20732 13.6518 1.90376 13.6518 2.33332 13.2222L6.99998 8.55555L11.6667 13.2222C12.0962 13.6518 12.7927 13.6518 13.2222 13.2222C13.6518 12.7927 13.6518 12.0962 13.2222 11.6667L8.55554 7L13.2222 2.33333C13.6518 1.90378 13.6518 1.20733 13.2222 0.777775C12.7927 0.34822 12.0962 0.348219 11.6667 0.777774L6.99998 5.44444L2.33332 0.777778C1.90376 0.348223 1.20732 0.348225 0.777763 0.777779C0.348208 1.20733 0.348208 1.90378 0.777763 2.33333L5.44443 7L0.777763 11.6667Z"
                              fill="#333333"/>
                    </svg>
                </button>
            </div>
        );
    }
}

SearchPanel.defaultProps = {
    onSearch: () => {},
    onClose: () => {}
};

SearchPanel.propTypes = {
    onSearch: PropTypes.func,
    onClose: PropTypes.func
};

export default SearchPanel;