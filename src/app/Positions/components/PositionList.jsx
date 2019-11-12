import React, {Fragment} from 'react';

import style from '../css/position.module.css';

import IlemLink from '../../../containers/ItemLink/ItemLink';
import ListHead from '../../../containers/listHead/listHead';
import AddPosition from './addPosition';
import {scroll} from '../../../utils/hideListHead';

class PositionList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            showPopup: false,
            height: 79
        };
        scroll();
        this.closePopup = this.closePopup.bind(this);
    }

    closePopup() {
        this.setState({
            showPopup: false
        })
    }

    render() {
        return (
            <Fragment>
                <div className="content_menu-wrap">
                    <ListHead
                        label={'Позиции'}
                        add={true}
                        search={true}
                        defaultState={this.state.showPopup}
                        onClick={(e) => this.setState({showPopup: e})}
                        toTheHeight={(value) => this.setState({height: value})}
                        menuOpen={(value) => {
                            this.setState({menuOpen: value})
                        }}
                    />
                </div>

                <div className={style.positionItems} style={{marginTop: this.state.height}}>
                    <IlemLink
                        to={'#'}
                        title={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, id.'}
                        attr={'01:23'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, iste neque. Ab ad architecto eius ipsam laudantium placeat quis suscipit.'}
                        noWrap={true}
                        click={(value) => {}}
                    />

                </div>
                {this.state.showPopup && <AddPosition onClose={this.closePopup}/>}
            </Fragment>
        )
    }
}

export default PositionList;