import React, {Component, Fragment} from 'react';

import {FormLogin} from '../../../containers/FormLogin';
import {FormRecoverPassword} from '../../../containers/FormRecoverPassword';

class AuthContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: true
        }
    }

    render() {
        return (
            <Fragment>
                {
                    this.state.login
                        ?
                        <FormLogin
                            emailValid={false}
                            passwordValid={false}
                            onClick={(value) => {this.setState({
                                login: value
                            })}}
                        />
                        :
                        <FormRecoverPassword
                            onClick={(value) => {this.setState({login: value})}}
                        />
                }
            </Fragment>
        );
    }
}

export default AuthContainer;