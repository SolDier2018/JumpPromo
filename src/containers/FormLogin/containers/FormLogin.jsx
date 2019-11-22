import React, {Component} from 'react';
import Input from "../../../ui/input/Input";
import {Button} from "../../../ui/button/button";

import style from '../css/formLogin.module.css';
import kit from '../../../app/kit.module.css';

class FormLogin extends Component {

    state = {
        login: true,
        email: '',
        password: '',
        emailValid: false,
        passwordValid: false
    };

    recoverPassword = () => {
        this.setState({
            login: false
        }, () => {this.props.onClick(this.state.login)});
    };

    onSubmit = (e) => {
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

    };
    
    render() {

        const {emailValid, passwordValid} = this.state;

        return (
            <div className={style.login}>
                <div className={style.loginWrapper}>
                    <form action="" onSubmit={this.onSubmit}>
                        <h1 className={style.h1}>Войти в Jump Promo</h1>
                        <div className={style.formField}>
                            <Input
                                id={'email'}
                                placeholder={'Эл. почта'}
                                type={'text'}
                                className={kit.input + ' ' + (emailValid ? kit.error : '')}
                                onChange={(value) => {
                                    this.setState({email: value})
                                }}
                            />
                            {emailValid && <p className={style.noValidForm}>Неверный email</p>}

                        </div>
                        <div className={style.formField}>
                            <Input
                                id={'password'}
                                placeholder={'Пароль'}
                                type={'password'}
                                className={kit.input  + ' ' + (emailValid ? kit.error : '')}
                                onChange={(value) => {
                                    this.setState({password: value})
                                }}
                            />
                            {passwordValid && <p className={style.noValidForm}>Неверный пароль</p>}

                        </div>

                        <Button
                            label={'Войти'}
                            type={'submit'}
                            className={kit.button}
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