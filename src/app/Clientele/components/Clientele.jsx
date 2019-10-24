import React from 'react';

import {ClientsList} from './ClientsList';
import {ClientsDetails} from './ClientsDetails';

class Clientele extends React.Component {
    render() {
        return(
            <div className={'contentGrid'}>
                <ClientsList />
                <ClientsDetails/>
            </div>
        )
    }
}

export default Clientele;