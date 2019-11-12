import React, {Component, Fragment} from 'react';

import FormFieldTitle from '../../../containers/form-field-title/form-field-title';
import ButtonDelete from '../../../containers/delete-button/delete-button';
import Checkbox from '../../../containers/checkbox/Checkbox';
import Select from '../../../containers/select/Select';
import DetailsHead from '../../../containers/detailsHead/detailsHead';

import style from '../css/categories.module.css';

class CategoriesDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: [
                'Обслуживание',
                'Слесарный ремонт',
                'Кузовной ремонт'
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <DetailsHead
                    title={'Категория'}
                    menuOpen={(value) => {this.setState({menuOpen: value})}}
                    hideDetails={(value) => {}}
                />
                <div className={'item_details-wrap'}>
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

                        {this.state.showParent && <Select option={this.state.category} label={''}/>}

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default CategoriesDetails;