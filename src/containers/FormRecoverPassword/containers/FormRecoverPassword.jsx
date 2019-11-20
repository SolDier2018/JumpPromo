import React, {Component, Fragment} from 'react';

import {Link} from 'react-router-dom';
import Input from "../../../ui/input/Input";
import {Button} from "../../../ui/button/button";

import style from '../../FormLogin/css/formLogin.module.css';

class FormRecoverPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            email: '',
            successfully: false,
            login: true,
            emailValid: false
        };
        this.rememberPassword = this.rememberPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    rememberPassword() {
        this.setState({
            login: true
        }, () => {
            this.props.onClick(this.state.login)
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const regEmail = /^\w+@\w+\.\w{2,4}$/i;
        !regEmail.test(this.state.email)
            ? this.setState({
                emailValid: true
            })
            : this.setState({
                emailValid: false,
                successfully: true
            });
    }

    render() {
        return (
            <div className={style.login}>
                <div className={style.loginWrapper}>
                    <h1 className={style.h1}>
                        Востановление пароля в Jump Promo
                    </h1>

                    {this.state.successfully
                        ?
                        <div className={style.successfully}>
                            <p>
                                На почту {this.state.email} отправлено письмо
                                с дальнейшими инструкциями.
                            </p>
                            <Link to={'/login'} className={style.recovPassword} onClick={this.rememberPassword}>Войти</Link>
                        </div>
                        :
                        <Fragment>
                            <form action="" onSubmit={this.onSubmit}>
                                <div className={style.formField}>
                                    <Input
                                        error={this.state.emailValid}
                                        placeholder={'Эл. почта'}
                                        type={'text'}
                                        onChange={(value) => {
                                            this.setState({
                                                email: value
                                            });
                                        }}
                                    />
                                    {this.state.emailValid ? <p className={style.noValidForm}>Неверный email</p> : ''}
                                </div>
                                <Button
                                    name={'Восстановить'}
                                    type={'submit'}
                                    onClick={() => {console.log('Отправка формы');}}
                                />
                            </form>
                            <button type={'button'} className={style.recovPassword} onClick={this.rememberPassword}>Вспомнил пароль</button>
                        </Fragment>}

                </div>
            </div>
        );
    }
}

export default FormRecoverPassword;