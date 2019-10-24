import React, {Fragment} from 'react';

import style from '../css/position.module.css';

import IlemLink from '../../../containers/ItemLink/ItemLink';
import ListHead from '../../../containers/listHead/listHead';
import AddPosition from './addPosition';
import {openMenu} from "../../../utils/openMenu";
import {openDetails} from "../../../utils/openDetails";

class PositionList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            showPopup: false,
            height: 79
        };

        this.closePopup = this.closePopup.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.menuOpen !== prevProps.menuOpen) {
            openMenu(this.state.menuOpen)
        }
    }

    closePopup() {
        this.setState({
            showPopup: false
        })
    }
    render() {
        return (
            <Fragment>
                <div className='content_menu'>
                    <div className={'scroll-wrapper'}>
                        <ListHead
                            label={'Позиции'}
                            add={true}
                            search={true}
                            defaultState={this.state.showPopup}
                            onClick={(e) => this.setState({showPopup: e})}
                            toTheHeight={(value)=> this.setState({height: value})}
                            menuOpen={(value) => {this.setState({menuOpen: value})}}
                        />

                        <div className={style.positionItems} style={{marginTop: this.state.height}}>
                            <IlemLink
                                to={'#'}
                                title={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, id.'}
                                attr={'01:23'}
                                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, iste neque. Ab ad architecto eius ipsam laudantium placeat quis suscipit.'}
                                noWrap={true}
                                click={(value) => {openDetails(value)}}
                            />
                        </div>
                    </div>
                </div>
                {this.state.showPopup && <AddPosition onClose={this.closePopup} />}
            </Fragment>
        )
    }
}

export default PositionList;