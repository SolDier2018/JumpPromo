import React from 'react';

import PositionList from './PositionList';
import PositionDetails from './PositionDetails';

import style from '../css/position.module.css';

class Positions extends React.Component {
    render() {
        return(
            <div className={'contentGrid'}>
                <PositionList />
                <PositionDetails />
            </div>
        )
    }
}

export default Positions;