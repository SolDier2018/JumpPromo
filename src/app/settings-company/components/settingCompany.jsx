import React, {Component} from 'react';
import PageContainer from '../../../core/HOC/pageContainer';
import Input from '../../../ui/input/Input';
import {Button} from '../../../ui/button/button';
import ListHead from '../../../containers/listHead/listHead';
import LogoLoading from "./logo-loading";

import style from '../css/settingCompany.module.css';
import kit from '../../../app/kit.module.css';

class SettingCompany extends Component {

    render() {
        return (
            <div className={style.contentItem}>

                <ListHead
                    label={'Настройка компании'}
                />

                <div className={style.body}>
                    <form action="">

                        <LogoLoading
                            value={(value) => console.log(value)}
                        />

                        <div className={style.fieldWrap}>
                            <Input
                                id={'name_company'}
                                label={'Название компании'}
                                className={kit.input}
                                onChange={(value) => {
                                    console.log(value)
                                }}
                            />
                        </div>
                        <div className={style.fieldWrap}>
                            <Input
                                id={'percent'}
                                label={'Процент кэшбека'}
                                className={kit.input}
                                onChange={(value) => {
                                    console.log(value)
                                }}
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

export default PageContainer(SettingCompany);