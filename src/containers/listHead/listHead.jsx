import React, {Component, createRef} from 'react';
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
            height: 0
        };
        this.refContainer = createRef();
    }

    render() {
        const {label, button, isSearch, menuOpen, openMenu, showSearch} = this.props;
        return (
            <div ref={this.refContainer} className={style.listHeadWrap}>

                {
                    isSearch ?
                        <SearchPanel
                            onSearch={(value) => {console.log(value)}}
                            onClose={() => {showSearch(!isSearch)}}
                        /> :
                        <HeaderControls
                            label={label}
                            button={button}
                            openMenu={() => {menuOpen(!openMenu)}}
                        />
                }

                {button.filter}

            </div>
        );
    }
}

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
