import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import AllReducers from './redux/reducers';
import {DEFAULT_STATE} from './redux/state';

import App from './app/App';


const isDevTools =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    process.env.NODE_ENV !== 'production';

const composeEnhancers = isDevTools ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers();

const store = createStore(AllReducers, DEFAULT_STATE, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

