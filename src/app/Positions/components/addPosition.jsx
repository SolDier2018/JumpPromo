import React, {Component, Fragment} from 'react';

import style from '../css/position.module.css';
import kit from '../../kit.module.css';

import Select from '../../../containers/select/Select';
import Input from '../../../containers/input/Input';
import Checkbox from '../../../containers/checkbox/Checkbox';
import Button from '../../../ui/button/button';

class AddPosition extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: ['Один', 'Два', 'Три'],
            currency: ['Рубль', 'USD', 'EURO']
        };

        this.closePopup = this.closePopup.bind(this);
    }

    closePopup() {
        return(
            this.props.onClose()
        )
    }


    render() {
        return (
            <Fragment>
                <div className={style.popupShadow}></div>
                <div className={style.popup}>
                    <button type={'button'} className={style.closePopup} onClick={this.closePopup}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.777763 11.6667C0.348208 12.0962 0.348208 12.7927 0.777763 13.2222C1.20732 13.6518 1.90376 13.6518 2.33332 13.2222L6.99998 8.55555L11.6667 13.2222C12.0962 13.6518 12.7927 13.6518 13.2222 13.2222C13.6518 12.7927 13.6518 12.0962 13.2222 11.6667L8.55554 7L13.2222 2.33333C13.6518 1.90378 13.6518 1.20733 13.2222 0.777775C12.7927 0.34822 12.0962 0.348219 11.6667 0.777774L6.99998 5.44444L2.33332 0.777778C1.90376 0.348223 1.20732 0.348225 0.777763 0.777779C0.348208 1.20733 0.348208 1.90378 0.777763 2.33333L5.44443 7L0.777763 11.6667Z" fill="#333333"/>
                        </svg>
                    </button>
                    <p className={kit.h1}>Создание позиции</p>
                    <div className={style.fieldWrap}>
                        <label htmlFor="title" className={kit.h3}>Название</label>
                        <input type="text"/>
                    </div>
                    <div className={style.fieldWrap}>
                        <label htmlFor="" className={kit.h3}>Описание</label>
                        <textarea name="" id=""></textarea>
                    </div>
                    <div className={style.fieldContainer}>

                        <div className={style.category}>
                            <Select option={this.state.category} label={'Категория'} />
                        </div>

                        <div className={style.price}>
                            <Input id={'price'} label={'Цена'}/>
                        </div>

                        <div className={style.currency}>
                            <Select option={this.state.currency} label={'Валюта'} />
                        </div>

                        <div className={style.priceFrom}>
                            <Checkbox
                                id={'price_from'}
                                label={'цена от'}
                                onChange={(value) => this.setState({showParent: value})}
                            />
                        </div>
                    </div>
                    <div className={style.buttonWrap}>
                        <Button type={'submit'} name={'Создать'} transparent={false} />
                        <Button
                            type={'button'}
                            name={'Отмена'}
                            transparent={true}
                            onClick={this.closePopup}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AddPosition;