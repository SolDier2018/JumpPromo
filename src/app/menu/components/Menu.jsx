import React, {Fragment} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {menuOpen} from "../../../redux/actions";

import {MenuHead} from './menuHead';
import {MenuList} from './menuList';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 'Обзор',
            selectedSub: 'Обзор'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(labelLi, labelA) {
        this.props.menuOpen(!this.props.openMenu);
        this.setState({
            selected: labelLi,
            selectedSub: labelA
        });
    }

    render() {

        const {menu} = this.props;

        return (
            <Fragment>

                <MenuHead
                    onClick={(value) => {
                        this.handleClick(value);
                    }}
                />

                <MenuList
                    menu={menu}
                    active={this.state.selected}
                    activeSub={this.state.selectedSub}
                    onClick={(e, s) => {
                        this.handleClick(e, s);
                    }}
                />

            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        openMenu: state.menuOpen,
        menu: state.menu
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({menuOpen}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);