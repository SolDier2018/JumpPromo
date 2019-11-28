import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {pathName} from '../../redux/actions';

const mapStateToProps = (state) => {
    return {
        openDetails: state.openDetails,
        pathName: state.pathName
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({pathName}, dispatch)
};

const PageContainer = (ContentList, ContentDetails) => {
    const contentGrid = {
        display: ContentDetails === undefined ? 'block' : 'grid'
    };
    return connect(mapStateToProps, mapDispatchToProps)(function (props) {
        props.pathName(props.location.pathname);
        return (
            <div className="contentGrid" style={contentGrid}>
                <div className={props.openDetails ? 'content_menu disabled_scroll' : 'content_menu'}>
                    <div className="scroll-wrapper">
                        {ContentList === undefined ? null : <ContentList {...props} />}
                    </div>
                </div>
                {ContentDetails === undefined ? null :
                    <div className={props.openDetails ? 'item_details loaded' : 'item_details'}>
                        <ContentDetails {...props} />
                    </div>}
            </div>
        )
    })
};

export default PageContainer;
