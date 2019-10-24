import React, {Component, createRef} from 'react';

import Input from '../../containers/input/Input';

import style from './listHead.module.css';

class ListHead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSearch: false,
            height: 0
        };

        this.showSearch = this.showSearch.bind(this);
        this.openMenu = this.openMenu.bind(this);
        this.refContainer = createRef();
    }

    showSearch() {
        this.setState((state) => ({
            showSearch: !state.showSearch
        }), ()=>{
            this.props.toTheHeight(this.refContainer.current.offsetHeight);
        });
    }

    openMenu() {
        return (
            this.props.menuOpen(true)
        )
    }

    render() {

        const {label, add, search, defaultState, onClick} = this.props;

        return (
            <div ref={this.refContainer} className={style.listHeadWrap}>
                <div className={style.listHead}>

                    <p>{label}</p>

                    <div className={style.wrapButton}>
                        {
                            add && (
                                <button type={'button'} onClick={() => onClick(!defaultState)}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z"
                                              fill="#333333"/>
                                    </svg>
                                </button>
                            )
                        }
                        {
                            search && (
                                <button type={'button'} onClick={this.showSearch}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="#333333"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7ZM10.908 12.8084C9.79193 13.5608 8.44725 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 8.70049 13.3936 10.2594 12.3854 11.4722C12.3951 11.4812 12.4048 11.4905 12.4143 11.5L17.0001 16.0858C17.3906 16.4763 17.3906 17.1095 17.0001 17.5C16.6096 17.8905 15.9764 17.8905 15.5859 17.5L11.0001 12.9142C10.9665 12.8806 10.9358 12.8453 10.908 12.8084Z"
                                              fill=""/>
                                    </svg>
                                </button>
                            )
                        }
                        <button type="button" className={style.burgerMenu} onClick={this.openMenu}>
                            <svg width="16" height="8" viewBox="0 0 16 8" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16 0H0V2H16V0ZM16 6H0V8H16V6Z"
                                      fill="#333333"/>
                            </svg>
                        </button>
                    </div>
                </div>
                {this.state.showSearch && 
                    <div className={style.search}>
                        <Input
                            placeholder={'Найти'}
                            type={'search'}
                            onChange={(value) => {
                                this.setState({search: value})
                            }}
                        />
                    </div>}
                
            </div>
        );
    }
}

export default ListHead;
