import React, {Fragment} from 'react';

import FormFieldTextarea from '../../../containers/form-field-title/form-field-title';
import DeleteButton from '../../../containers/delete-button/delete-button';
import FormFieldText from '../../../containers/form-field-text/form-field-text';
import Select from '../../../ui/select/Select';
import Input from '../../../ui/input/Input';
import Checkbox from '../../../ui/checkbox/Checkbox';
import DetailsHead from '../../../containers/detailsHead/detailsHead';

import style from '../css/position.module.css';


const PositionDetails = () => {
    return (
        <Fragment>
            <DetailsHead
                title={'Позиция'}
            />

            <div className="item_details-wrap">

                <div className={style.positionDetailsTitle}>
                    <FormFieldTextarea
                        value={'Ремонт коммерческого транспорта'}
                        onChange={(text) => console.log(text)}
                    />
                    <DeleteButton
                        onClick={() => console.log('Delete')}
                    />
                </div>

                <FormFieldText
                    title={'Описание'}
                    value={`Эриксоновский гипноз зеркально вызывает стресс,
                            следовательно тенденция к конформизму связана с менее низким интеллектом.
                            Ещё строчка что бы проверить количество строк.
                            Эх раз ещё раз ещё много много раз.`}
                    onChange={(text) => console.log(text)}/>

                <div className={style.positionContent}>
                    <div className={style.category}>
                        <Select
                            label={'Категория'}
                        />
                    </div>
                    <div className={style.price}>
                        <Input
                            id={'price'}
                            label={'Цена'}
                        />
                    </div>
                    <div className={style.currency}>
                        <Select
                            label={'Валюта'}
                        />
                    </div>
                    <div className={style.priceFrom}>
                        <Checkbox
                            label={'цена от'}
                            onChange={() => console.log('onClick')}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default PositionDetails;