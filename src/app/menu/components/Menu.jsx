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
            active: '',
            activeSub: ''
        };
    }

    componentDidUpdate(prevProps) {
        const pathName = this.props.pathName;
        if(pathName !== prevProps.pathName) {
            this.setState({
                active: '',
                activeSub: ''
            });
            const li = document.getElementsByClassName('nav-li');
            for (let i = 0; i < li.length; i++) {
                const div = li[i].getElementsByTagName('div')[0];
                const link = div.getElementsByTagName('a');
                for(let k = 0; k < link.length; k++) {
                    if(link[k].getAttribute('href') === pathName) {
                        const activeLi = link[k].getAttribute('name');
                        const activeA = link[k].getAttribute('href');
                        this.setState({
                            active: activeLi,
                            activeSub: activeA
                        });
                    }
                }
            }
        }
    }

    handleClick = (labelLi, labelA) => {
        this.props.menuOpen(!this.props.openMenu);
        this.setState({
            active: labelLi,
            activeSub: labelA
        });
    };

    render() {
        const {menu, pathName, menuOpen, openMenu} = this.props;
        const {active, activeSub} = this.state;

        return (
            <Fragment>

                <MenuHead
                    onClick={() => menuOpen(!openMenu)}
                />

                <MenuList
                    menu={menu}
                    active={active}
                    activeSub={activeSub}
                    pathName={pathName}
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
        menu: state.menu,
        pathName: state.pathName
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({menuOpen}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);