import React, {Fragment} from 'react';

export default function a (ContentList, ContentDetails) {
    return function (props) {
        return (
            <Fragment>
                <div className="contentGrid">
                    <div className="content_menu">
                        <div className="scroll-wrapper">
                            <ContentList {...props} />
                        </div>
                    </div>
                    <div className="item_details">
                        <ContentDetails {...props} />
                    </div>
                </div>
            </Fragment>
        )
    }
}