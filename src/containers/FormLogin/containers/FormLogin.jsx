import React, {Component} from 'react';

import style from '../css/formLogin.module.css';
import Input from "../../input/Input";
import Button from "../../../ui/button/button";

class FormLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: true,
            email: '',
            password: '',
            emailValid: false,
            passwordValid: false
        };
        this.recoverPassword = this.recoverPassword.bind(this);
    }


    recoverPassword() {
        this.setState({
            login: false
        }, () => {this.props.onClick(this.state.login)});
    }

    onSubmit(e) {
        e.preventDefault();
    }
    
    render() {

        const {emailValid, passwordValid} = this.props;

        return (
            <div className={style.login}>
                <div className={style.loginWrapper}>
                    <form action="" onSubmit={this.onSubmit}>
                        <h1 className={style.h1}>Войти в Jump Promo</h1>
                        <div className={style.formField}>
                            <Input
                                error={emailValid}
                                placeholder={'Эл. почта'}
                                type={'text'}
                                onChange={(value) => {
                                    this.setState({email: value})
                                }}
                            />
                            {emailValid && <p className={style.noValidForm}>Неверный email</p>}

                        </div>
                        <div className={style.formField}>
                            <Input
                                error={passwordValid}
                                placeholder={'Пароль'}
                                type={'password'}
                                onChange={(value) => {
                                    this.setState({password: value})
                                }}
                            />
                            {passwordValid && <p className={style.noValidForm}>Неверный пароль</p>}

                        </div>

                        <Button
                            name={'Войти'}
                            type={'submit'}
                        />
                    </form>
                    <a href={'#'} className={style.recovPassword} onClick={this.recoverPassword}>Не помню пароль</a>
                </div>
            </div>
        );
    }
}

export default FormLogin;