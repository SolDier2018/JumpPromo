import React, {Component} from 'react';
import {AuthContainer} from '../../../containers/authContainer';

import style from '../css/login.module.css';

class Login extends Component {
    render() {
        return (
            <div className={style.loginForm}>
                <AuthContainer />
            </div>
        );
    }
}

export default Login;