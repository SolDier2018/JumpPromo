import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';

import {Orders} from './app/Orders';
import {Review} from './app/Review';
import {Positions} from './app/Positions';
import {Categories} from './app/Сategories';
import {News} from './app/News';
import {Clientele} from './app/Clientele';
import {SettingCompany} from './app/settings-company/';
import {Profile} from './app/profile';
import {Login} from './app/Login';

export default function() {
    return (
        <Fragment>
            <Route exact path='/orders' component={Orders} />
            <Route path={'/login'} component={Login}/>
            <Route path='/review' component={Review} />
            <Route path='/positions' component={Positions} />
            <Route path='/categories' component={Categories} />
            <Route path='/news' component={News} />
            <Route path='/clientele' component={Clientele} />
            <Route path='/setting-company' component={SettingCompany} />
            <Route path='/profile' component={Profile} />
        </Fragment>
    )
}