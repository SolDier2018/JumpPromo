import React, {Component} from 'react';
import PageContainer from '../../../core/HOC/pageContainer';
import Head from '../../../containers/listHead/listHead';
import Input from '../../../ui/input/Input';
import {Button} from '../../../ui/button/button';

import style from '../css/profile.module.css';
import kit from '../../../app/kit.module.css';

class Profile extends Component {

    render() {
        return (
            <div className={style.contentItem}>

                <Head
                    label={'Профиль'}
                />

                <div className={style.body}>
                    <form action="">
                        <div className={style.fieldWrap}>
                            <Input
                                label={'Имя'}
                                placeholder={'Иван'}
                                type={'text'}
                                className={kit.input}
                                onChange={(value) => console.log(value)}
                            />
                        </div>

                        <div className={style.fieldWrap}>
                            <Input
                                label={'Фамилия'}
                                placeholder={'Иванов'}
                                type={'text'}
                                className={kit.input}
                                onChange={(value) => console.log(value)}
                            />
                        </div>

                        <div className={style.fieldWrap}>
                            <Input
                                label={'Эл.почта'}
                                type={'email'}
                                className={kit.input}
                                placeholder={'example@example.com'}
                                onChange={() => {}}
                            />
                        </div>

                        <div className={style.fieldWrap}>
                            <Input
                                label={'Пароль'}
                                type={'password'}
                                className={kit.input}
                                onChange={() => {}}
                            />
                        </div>

                        <div className={style.fieldWrap}>
                            <Input
                                label={'Новый пароль'}
                                type={'password'}
                                className={kit.input}
                                onChange={() => {}}
                            />
                        </div>

                        <div className={style.fieldWrap}>
                            <Button
                                type={'submit'}
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

export default PageContainer(Profile);