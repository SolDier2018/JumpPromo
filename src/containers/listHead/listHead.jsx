import React, {Fragment, Component, createRef} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {menuOpen, showSearch} from '../../redux/actions';

import HeaderControls from './HeaderControls';
import SearchPanel from './SearchPanel';
import {scroll} from '../../utils/hideListHead';

import style from './listHead.module.css';

class ListHead extends Component {

    constructor(props) {
        super(props);
        this.refContainer = createRef();
        this.refContainer2 = createRef();
        scroll();
    }

    componentDidMount() {
        const heightHead = this.refContainer.current.clientHeight;
        const heightFilter = this.refContainer2.current.clientHeight;
        this.props.height(heightHead + heightFilter);
    }

    render() {

        const {label, button, isSearch, menuOpen, openMenu, showSearch, searchText} = this.props;
        return (
            <Fragment>
                <div ref={this.refContainer} className={style.headerWrapper}>
                    <TransitionGroup>
                        {
                            isSearch ?
                                <CSSTransition
                                    in={isSearch}
                                    timeout={100}
                                    classNames="search"
                                >
                                    <SearchPanel
                                        onSearch={(value) => {searchText(value)}}
                                        onClose={() => {showSearch(!isSearch)}}
                                    />
                                </CSSTransition>
                                :
                                <HeaderControls
                                    label={label}
                                    button={button}
                                    openMenu={() => {menuOpen(!openMenu)}}
                                />
                        }
                    </TransitionGroup>
                </div>
                <div ref={this.refContainer2}>
                    {button.filter}
                </div>
            </Fragment>
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
