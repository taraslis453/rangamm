import { fetchPhotos, pageUpdater } from 'features/search/duck';
import { getResultsSelector, getTotalSelector, getPageSelector } from 'features/search/index';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { GridWithPhotos } from 'shared/organisms';
export const SearchPage = ({ results, total, fetchPhotos, pageUpdater, match: { params: { query } }, page }) => {
    useEffect(() => {
        fetchPhotos(query)
    }, [fetchPhotos, query]
    );
    let loadMore = () => {
        fetchPhotos(query, pageUpdater(page))
    }
    return (
        <>
            <GridWithPhotos items={results} urlPath={'urls.small'} altPath={'user.username'} totalItems={total} loadMore={loadMore} />
        </>
    )
}
const mapStateToProps = (state) => {
    debugger
    return {
        results: getResultsSelector(state),
        total: getTotalSelector(state),
        page: getPageSelector(state),
    }
}

export default compose(
    connect(mapStateToProps, { fetchPhotos, pageUpdater }),
    withRouter
)(SearchPage)