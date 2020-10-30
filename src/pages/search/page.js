import { fetchPhotos, pageUpdater } from 'features/search/duck';
import { getResultsSelector, getTotalSelector, getPageSelector } from 'features/search/index';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GridWithPhotos } from 'shared/organisms';
import styled from 'styled-components';
const Top = styled.div`
    margin: 65px 0;
`

export const SearchPage = ({ results, total, fetchPhotos, pageUpdater, page }) => {
    const { query } = useParams()
    useEffect(() => {
        fetchPhotos()
    }, [fetchPhotos, query]
    );
    let loadMore = () => {
        fetchPhotos(query, pageUpdater(page))
    }
    return (
        <>
            <Top>
                <div>SUbheader
                    <div>Photos 7085</div>
                    <div>ANy orientation</div>
                </div>
                <h1>{query}</h1>
            </Top>

            <GridWithPhotos items={results} urlPath={'urls.small'} altPath={'user.username'} totalItems={total} loadMore={loadMore} />
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        results: getResultsSelector(state),
        total: getTotalSelector(state),
        page: getPageSelector(state),
    }
}

export default connect(mapStateToProps, { fetchPhotos, pageUpdater })(SearchPage)