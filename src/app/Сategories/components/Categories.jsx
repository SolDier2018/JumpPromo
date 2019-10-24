import React from 'react';

import CategoriesList from './CategoriesList';
import CategoriesDetails from './CategoriesDetails';

class Categories extends React.Component {
    render() {
        return(
            <div className={'contentGrid'}>
                <CategoriesList />
                <CategoriesDetails />
            </div>
        )
    }
}

export default Categories;