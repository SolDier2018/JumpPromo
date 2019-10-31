import React, {Component, Fragment} from 'react';

import FormFieldTitle from '../../../containers/form-field-title/form-field-title';
import ButtonDelete from '../../../containers/delete-button/delete-button';
import Checkbox from '../../../containers/checkbox/Checkbox';
import Select from '../../../containers/select/Select';
import DetailsHead from '../../../containers/detailsHead/detailsHead';

import style from '../css/categories.module.css';
import {openMenu} from "../../../utils/openMenu";
import {openDetails} from "../../../utils/openDetails";

class CategoriesDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            category: [
                'Обслуживание',
                'Слесарный ремонт',
                'Кузовной ремонт'
            ]
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.menuOpen !== prevProps.menuOpen) {
            openMenu(this.state.menuOpen)
        }
    }


    render() {
        return (
            <Fragment>
                <DetailsHead
                    title={'Категория'}
                    menuOpen={(value) => {this.setState({menuOpen: value})}}
                    hideDetails={(value) => {openDetails(value)}}
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