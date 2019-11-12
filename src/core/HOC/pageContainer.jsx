import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        openDetails: state.openDetails
    }
};

export default (ContentList, ContentDetails) => {
    return connect(mapStateToProps)(function (props) {
        console.log(props);
        return (
            <div className="contentGrid">
                <div className={props.openDetails ? 'content_menu disabled_scroll' : 'content_menu'}>
                    <div className="scroll-wrapper">
                        <ContentList {...props} />
                    </div>
                </div>
                <div className={props.openDetails ?'item_details loaded' : 'item_details'}>
                    <ContentDetails {...props} />
                </div>
            </div>
        )
    })
};
