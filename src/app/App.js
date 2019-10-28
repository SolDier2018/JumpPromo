import React from 'react';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from "history";
import routes from '../router';

import {Menu} from './menu';
import '../index.css';

const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <div className="wrapper">
                <div className="menu">
                    <Menu/>
                </div>
                {routes()}
            </div>
        </Router>
    );
}

export default App;
