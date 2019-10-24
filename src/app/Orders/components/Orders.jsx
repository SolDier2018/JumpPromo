import React, {Fragment} from 'react';

import OrdersList from './OrdersList';
import OrderDetails from './OrderDetails';

class Orders extends React.Component {
    render() {
        return(
            <Fragment>
                <div className={'contentGrid'}>
                    <OrdersList />
                    <OrderDetails />
                </div>
            </Fragment>
        )
    }
}

export default Orders;