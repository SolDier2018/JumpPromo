import React, {Component, createRef} from 'react';
import {Transition} from 'react-transition-group';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {menuOpen, showSearch} from '../../redux/actions';

import HeaderControls from './HeaderControls';
import SearchPanel from './SearchPanel';
import style from './listHead.module.css';

class ListHead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prevPos: window.scrollY,
            hiddenScroll: false,
            height: 0
        };
        this.refContainer = createRef();
    }

    componentDidMount() {
        const heightHead = this.refContainer.current.clientHeight + 1;
        this.setState({
            height: heightHead
        });
        this.props.height(heightHead);
        window.addEventListener('scroll', this.scroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
    }

    scroll = () => {
        const scrollTop = window.scrollY;
        const direction = this.state.prevPos - scrollTop > 0 ? 'up' : 'down';
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.prevPos = scrollTop;
        switch (direction) {
            case "down":
                if (scrollTop > 100) {
                    this.setState({
                        hiddenScroll: true
                    });
                }
                break;
            case "up":
                this.setState({
                    hiddenScroll: false
                });
                break;
            default:
                break;
        }
    };

    render() {
        const {hiddenScroll} = this.state;
        const {label, button, isSearch, menuOpen, openMenu, showSearch, searchText} = this.props;
        return (
            <header
                ref={this.refContainer}
                className={style.contentMenuWrap}
                style={hiddenScroll ? {transform: `translateY(-${this.state.height}px)`} : {transform: `translateY(0px)`}}
            >
                <div className={style.headerWrapper}>

                    <Transition
                        in={isSearch}
                        timeout={100}
                        unmountOnExit
                    >
                        {
                            (state) => {
                                return (
                                    <SearchPanel
                                        className={state}
                                        onSearch={(value) => {searchText(value)}}
                                        onClose={() => {showSearch(!isSearch)}}
                                    />
                                )
                            }
                        }
                    </Transition>

                    <HeaderControls
                        label={label}
                        button={button}
                        openMenu={() => {menuOpen(!openMenu)}}
                    />
                </div>
                <div>
                    {button.filter}
                </div>
            </header>
        );
    }
}

ListHead.defaultProps = {
    label: 'Заголовок шапки',
    button: {},
    height: () => {
    },
    searchText: () => {
    }
};

ListHead.propTypes = {
    label: PropTypes.string,
    button: PropTypes.object,
    isSearch: PropTypes.bool,
    menuOpen: PropTypes.func,
    openMenu: PropTypes.bool,
    showSearch: PropTypes.func,
    searchText: PropTypes.func
};


function mapStateToProps(store) {
    return {
        openMenu: store.menuOpen,
        isSearch: store.showSearch
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({menuOpen, showSearch}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListHead);
