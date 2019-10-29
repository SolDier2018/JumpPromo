import React, {Component} from 'react';

import Head from '../../../containers/listHead/listHead';
import Input from '../../../containers/input/Input';
import Button from '../../../ui/button/button';

import style from '../css/profile.module.css';
import {openMenu} from "../../../utils/openMenu";

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.menuOpen !== prevProps.menuOpen) {
            openMenu(this.state.menuOpen)
        }
    }

    render() {
        return (
            <div className={style.contentItem}>
                <div className="content_menu-wrap">
                    <Head
                        label={'Профиль'}
                        add={false}
                        search={false}
                        menuOpen={(value) => {
                            this.setState({menuOpen: value})
                        }}
                    />
                </div>
                <div className={style.body}>
                    <form action="">
                        <div className={style.fieldWrap}>
                            <Input
                                label={'Имя'}
                                id={'name'}
                                placeholder={'Иван'}
                            />
                        </div>

                        <div className={style.fieldWrap}>
                            <Input
                                label={'Фамилия'}
                                id={'surname'}
                                placeholder={'Иванов'}
                            />
                        </div>

                        <div className={style.fieldWrap}>
                            <Input
                                label={'Эл.почта'}
                                id={'email'}
                                type={'email'}
                                placeholder={'example@example.com'}
                            />
                        </div>

                        <div className={style.fieldWrap}>
                            <Input
                                label={'Пароль'}
                                id={'password'}
                                type={'password'}
                            />
                        </div>

                        <div className={style.fieldWrap}>
                            <Input
                                label={'Новый пароль'}
                                id={'password_new'}
                                type={'password'}
                            />
                        </div>

                        <div className={style.fieldWrap}>
                            <Button
                                type={'submit'}
                                name={'Сохранить'}
                                transparent={false}
                            />
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Profile;