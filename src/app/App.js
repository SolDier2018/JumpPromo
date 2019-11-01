import React, {Component} from 'react';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from "history";
import routes from '../router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Menu} from './menu';
import '../index.css';
import {menuOpen} from "../redux/actions";

const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="wrapper">
                    <div className={'menu'}>
                        <Menu/>
                    </div>
                    {routes()}
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menuOpen: state.menuOpen
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({menuOpen}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
