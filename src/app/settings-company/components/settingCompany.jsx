import React, {Component} from 'react';

import Input from '../../../containers/input/Input';
import Button from '../../../ui/button/button';
import ListHead from '../../../containers/listHead/listHead';

import style from '../css/settingCompany.module.css';
import {openMenu} from "../../../utils/openMenu";

class SettingCompany extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.menuOpen !== prevProps.menuOpen) {
            openMenu(this.state.menuOpen)
        }
    }


    render() {
        return (
            <div className={style.contentItem}>
                <ListHead
                    label={'Настройка компании'}
                    add={false}
                    search={false}
                    menuOpen={(value) => {this.setState({menuOpen: value})}}
                />
                <div className={style.body}>
                    <form action="">
                        <div className={style.fieldWrap}>
                            <Input
                                id={'name_company'}
                                label={'Название компании'}
                            />
                        </div>
                        <div className={style.fieldWrap}>
                            <Input
                                id={'percent'}
                                label={'Процент кэшбека'}
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

export default SettingCompany;