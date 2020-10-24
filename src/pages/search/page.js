import { fetchPhotos } from 'features/search/duck';
import { getResultsSelector } from 'features/search/index';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { GridWithPhotos } from 'shared/organisms';
export const SearchPage = ({ results, fetchPhotos, match: { params: { query } } }) => {
    useEffect(() => {
        fetchPhotos(query)
    }, [fetchPhotos, query])
    return (
        <>
            <GridWithPhotos items={results} urlPath={'urls.small'} altPath={'user.username'} />
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        results: getResultsSelector(state)
    }
}

export default compose(
    connect(mapStateToProps, { fetchPhotos }),
    withRouter
)(SearchPage)