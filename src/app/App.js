import React, {Component} from 'react';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from "history";
import routes from '../router';
import {connect} from 'react-redux';

import {Menu} from './menu';
import '../index.css';

const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className={'wrapper'}>
                    <div className={this.props.openMenu ? 'menu menu_open' : 'menu'}>
                        <Menu/>
                    </div>
                    {routes()}
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        openMenu: store.menuOpen
    }
};

export default connect(mapStateToProps)(App);
