import React, {Component, Fragment} from 'react';

import FormFieldTitle from '../../../containers/form-field-title/form-field-title';
import ButtonDelete from '../../../containers/delete-button/delete-button';
import Checkbox from '../../../ui/checkbox/Checkbox';
import Select from '../../../ui/select/Select';
import DetailsHead from '../../../containers/detailsHead/detailsHead';

import style from '../css/categories.module.css';

class CategoriesDetails extends Component {

    state = {
        category: [
            'Обслуживание',
            'Слесарный ремонт',
            'Кузовной ремонт'
        ]
    };

    render() {
        return (
            <Fragment>
                <DetailsHead
                    title={'Категория'}
                />
                <div className={'item_details-wrap'}>
                    <form action="">
                        <div className={style.categoriesTitle}>
                            <FormFieldTitle value={'Замена масла'} onChange={(text) => console.log('---', text)}/>
                            <ButtonDelete background={'transparent'}/>
                        </div>
                        <div className={style.categoriesBody}>
                            <Checkbox
                                id={'category'}
                                label={'подкатегория'}
                                checked={this.state.showParent}
                                onChange={(value) => this.setState({showParent: value})}
                            />
                            {this.state.showParent &&
                            <Select
                                option={this.state.category}
                                onChange={(e) => console.log(e.target.value)}
                            />}
                        </div>
                    </form>
                </div>
            </Fragment>
        );
    }
}

export default CategoriesDetails;