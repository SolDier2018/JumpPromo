import React, {Component, Fragment} from 'react';

import style from '../css/categories.module.css';
import Button from "../../../ui/button/button";
import Checkbox from "../../../containers/checkbox/Checkbox";
import kit from "../../kit.module.css";
import Select from "../../../containers/select/Select";

class AddCategories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: [
                'Обслуживание',
                'Слесарный ремонт',
                'Кузовной ремонт'
            ]
        };
        this.closePopup = this.closePopup.bind(this);
    }

    closePopup() {
        return (
            this.props.closePopup()
        )
    }


    render() {
        return (
            <Fragment>
                <div className={style.shadowAddCategories}></div>
                <div className={style.addCategories}>
                    <button type={'button'} className={style.closePopup} onClick={this.closePopup}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.777763 11.6667C0.348208 12.0962 0.348208 12.7927 0.777763 13.2222C1.20732 13.6518 1.90376 13.6518 2.33332 13.2222L6.99998 8.55555L11.6667 13.2222C12.0962 13.6518 12.7927 13.6518 13.2222 13.2222C13.6518 12.7927 13.6518 12.0962 13.2222 11.6667L8.55554 7L13.2222 2.33333C13.6518 1.90378 13.6518 1.20733 13.2222 0.777775C12.7927 0.34822 12.0962 0.348219 11.6667 0.777774L6.99998 5.44444L2.33332 0.777778C1.90376 0.348223 1.20732 0.348225 0.777763 0.777779C0.348208 1.20733 0.348208 1.90378 0.777763 2.33333L5.44443 7L0.777763 11.6667Z" fill="#333333"/>
                        </svg>
                    </button>
                    <p className={kit.h1}>Создание категории</p>
                    <div className={style.fieldWrap}>
                        <label htmlFor="title" className={kit.h3}>Название</label>
                        <input type="text"/>
                    </div>
                    <div className={style.fieldWrap}>
                        <Checkbox
                            id={'category'}
                            label={'подкатегория'}
                            checked={this.state.showParent}
                            onChange={(value) => this.setState({showParent: value})} />

                        {this.state.showParent && <Select option={this.state.category} label={''} />}

                    </div>

                    <div className={style.buttonWrap}>
                        <Button type={'submit'} name={'Создать'} transparent={false} />
                        &nbsp;
                        <Button type={'button'} name={'Отмена'} transparent={true} />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AddCategories;