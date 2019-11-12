import React, {Fragment} from 'react';

import FormFieldTextarea from '../../../containers/form-field-title/form-field-title';
import DeleteButton from '../../../containers/delete-button/delete-button';
import FormFieldText from '../../../containers/form-field-text/form-field-text';
import Select from '../../../containers/select/Select';
import Input from '../../../containers/input/Input';
import Checkbox from '../../../containers/checkbox/Checkbox';
import DetailsHead from '../../../containers/detailsHead/detailsHead';

import style from '../css/position.module.css';

class PositionDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            category: ['Один', 'Два', 'Три'],
            currency: ['Рубль', 'USD', 'EURO']
        }
    }

    render() {
        return (
            <Fragment>
                <DetailsHead
                    title={'Позиция'}
                    menuOpen={(value) => {
                        this.setState({menuOpen: value})
                    }}
                    hideDetails={(value) => {}}
                />

                <div className="item_details-wrap">

                    <div className={style.positionDetailsTitle}>
                        <FormFieldTextarea value={'Ремонт коммерческого транспорта'} onChange={(text) => {
                        }}/>
                        <DeleteButton/>
                    </div>

                    <div className={style.description}>
                        <FormFieldText
                            title={'Описание'}
                            value={`Эриксоновский гипноз зеркально вызывает стресс,
                            следовательно тенденция к конформизму связана с менее низким интеллектом.`}
                            onChange={(text) => {
                            }}/>
                    </div>

                    <div className={style.positionContent}>

                        <div className={style.category}>
                            <Select option={this.state.category} label={'Категория'}/>
                        </div>

                        <div className={style.price}>
                            <Input id={'price'} label={'Цена'}/>
                        </div>

                        <div className={style.currency}>
                            <Select option={this.state.currency} label={'Валюта'}/>
                        </div>

                        <div className={style.priceFrom}>
                            <Checkbox
                                disabled={false}
                                className={'lolo'}
                                style={{color:"red"}}
                                id={'price_from'}
                                label={'цена от'}
                                onClick={()=> console.log('---onClick')}
                            />
                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default PositionDetails;