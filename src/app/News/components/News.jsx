import React from 'react';
import NewList from './NewsList';
import NewsDetails from './NewsDetails';


class News extends React.Component {
    render() {
        return(
            <div className={'contentGrid'}>
                <NewList />
                <NewsDetails />
            </div>
        )
    }
}

export default News;