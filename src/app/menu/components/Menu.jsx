import React, {Fragment} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {menuOpen} from "../../../redux/actions";

import {MenuHead} from './menuHead';
import MenuList from './menuList';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 'Заказы'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(text) {
        this.props.menuOpen(!this.props.openMenu);
        this.setState({
            selected: text
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
                    onClick={(text) => {
                        this.handleClick(text);
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