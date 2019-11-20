import React, {Component} from 'react';

import style from '../css/formLogin.module.css';
import Input from "../../../ui/input/Input";
import {Button} from "../../../ui/button/button";

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
        this.onSubmit = this.onSubmit.bind(this);
    }


    recoverPassword() {
        this.setState({
            login: false
        }, () => {this.props.onClick(this.state.login)});
    }

    onSubmit(e) {
        e.preventDefault();
        const regEmail = /^\w+@\w+\.\w{2,4}$/i;
        !regEmail.test(this.state.email)
            ? this.setState({
                emailValid: true
            })
            : this.setState({
                emailValid: false
            });

        this.state.password.length < 6
            ? this.setState({
                passwordValid: true
            })
            : this.setState({
                passwordValid: false
            })

    }
    
    render() {

        const {emailValid, passwordValid} = this.state;

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
                            onClick={() => {console.log('Отправка формы');}}
                        />
                    </form>
                    <button type={'button'} className={style.recovPassword} onClick={this.recoverPassword}>Не помню пароль</button>
                </div>
            </div>
        );
    }
}

export default FormLogin;