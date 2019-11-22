import React, {Component, Fragment} from 'react';

import {Link} from 'react-router-dom';
import Input from "../../../ui/input/Input";
import {Button} from "../../../ui/button/button";

import style from '../../FormLogin/css/formLogin.module.css';
import kit from '../../../app/kit.module.css';

class FormRecoverPassword extends Component {

    state = {
        error: false,
        email: '',
        successfully: false,
        login: true,
        emailValid: false
    };

    rememberPassword = () => {
        this.setState({
            login: true
        }, () => {
            this.props.onClick(this.state.login)
        });
    };

    onSubmit = (e) => {
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
    };

    render() {
        const {emailValid} = this.state;
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
                                        placeholder={'Эл. почта'}
                                        type={'text'}
                                        className={kit.input + ' ' + (emailValid ? kit.error : '')}
                                        onChange={(value) => {
                                            this.setState({
                                                email: value
                                            });
                                        }}
                                    />
                                    {this.state.emailValid ? <p className={style.noValidForm}>Неверный email</p> : ''}
                                </div>
                                <Button
                                    label={'Восстановить'}
                                    type={'submit'}
                                    className={kit.button}
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