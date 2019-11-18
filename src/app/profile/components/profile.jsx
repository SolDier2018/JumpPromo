import React, {Component} from 'react';

import Head from '../../../containers/listHead/listHead';
import Input from '../../../containers/input/Input';
import {Button} from '../../../ui/button/button';

import style from '../css/profile.module.css';
import kit from '../../../app/kit.module.css';

class Profile extends Component {

    render() {
        return (
            <div className={style.contentItem}>
                <div className="content_menu-wrap">
                    <Head
                        label={'Профиль'}
                    />
                </div>
                <div className={style.body}>
                    <form action="">
                        <div className={style.fieldWrap}>
                            <Input
                                label={'Имя'}
                                placeholder={'Иван'}
                                type={'text'}
                                onChange={(value) => console.log(value)}
                            />
                        </div>

                        <div className={style.fieldWrap}>
                            <Input
                                label={'Фамилия'}
                                placeholder={'Иванов'}
                                type={'text'}
                                onChange={(value) => console.log(value)}
                            />
                        </div>

                        <div className={style.fieldWrap}>
                            <Input
                                label={'Эл.почта'}
                                type={'email'}
                                placeholder={'example@example.com'}
                                onChange={() => {}}
                            />
                        </div>

                        <div className={style.fieldWrap}>
                            <Input
                                label={'Пароль'}
                                type={'password'}
                                onChange={() => {}}
                            />
                        </div>

                        <div className={style.fieldWrap}>
                            <Input
                                label={'Новый пароль'}
                                type={'password'}
                                onChange={() => {}}
                            />
                        </div>

                        <div className={style.fieldWrap}>
                            <Button
                                label={'Сохранить'}
                                className={kit.button}
                                onClick={() => console.log('---')}
                            />
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Profile;