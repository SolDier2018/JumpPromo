import React, {Component} from 'react';

import NewsTitle from '../../../containers/form-field-title/form-field-title';

import style from '../css/new.module.css';
import ButtonDelete from "../../../containers/delete-button/delete-button";
import FormFieldText from "../../../containers/form-field-text/form-field-text";
import Input from "../../../containers/input/Input";
import Checkbox from "../../../containers/checkbox/Checkbox";
import Button from "../../../ui/button/button";
import DetailsHead from "../../../containers/detailsHead/detailsHead";
import {openMenu} from "../../../utils/openMenu";
import {openDetails} from "../../../utils/openDetails";


class NewsDetails extends Component {

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
            <div className="item_details">
                <DetailsHead
                    title={'Новость'}
                    menuOpen={(value) => {this.setState({menuOpen: value})}}
                    hideDetails={(value) => {openDetails(value)}}
                />

                <div className={'item_details-wrap'}>

                    <div className={style.newsTitle}>
                        <NewsTitle
                            value={'Бочковое моторное масло Shell защитит ваш авто'}
                            onChange={(text) => console.log('---', text)}
                        />
                        <ButtonDelete
                            background={'transparent'}
                        />
                    </div>

                    <FormFieldText
                        title={''}
                        value={`Преимущества бочкового масла перед обычным:
                         - Контроль качества заводом производителем. Проверки торговыми представителями и службой безопасности официальных точек продаж.
                        - Гарантия хорошей цены. Заключен контракт на прямую от производителя, а не от перекупщиков
                        - Точный объём залива. Не нужно переплачивать за всю канистру. Из бочки можно залить любой объём
                        
                        Что будет, если заливать некачественное моторное масло:
                        - Снижается давление масла в двигателе, что ведёт к увеличению расхода топлива и увеличению износа;
                        - Теряя смазочные свойства, детали двигателя подвергаются повышенному трению, что образует задиры в поршнях, а это в свою очередь может привести к провороту клапанов.
                        
                        Масло из бочки является высшего порядка, а также консультация с широким активом требуют от нас анализа систем массового участия.`}
                        onChange={(text) => console.log('---', text)}
                        minHieght={'400'}
                    />
                    <div className={style.timePublication}>
                        <div className={style.date}>

                            <Input
                                id={'date'}
                                label={'Время публикации'}
                                type={'date'}
                            />

                        </div>
                        <div className={style.time}>

                            <Input
                                id={'time'}
                                label={''}
                                type={'time'}
                            />

                        </div>

                        <div className={style.push}>

                            <Checkbox
                                id={'push'}
                                label={'отправить push-уведомления'}
                                onChange={(value) => this.setState({showParent: value})}
                            />

                        </div>
                    </div>
                    <div className={style.submit}>

                        <Button
                            type={'submit'}
                            name={'Сохранить'}
                            transparent={false}
                        />

                    </div>
                </div>

            </div>
        );
    }
}

export default NewsDetails;