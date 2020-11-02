import { fetchPhotos, pageUpdater } from 'features/search/duck';
import { getResultsSelector, getTotalSelector, getPageSelector } from 'features/search/index';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Typography } from 'shared/atoms/index';
import { GridWithPhotos } from 'shared/organisms/index';
export const SearchPage = ({ results, total, fetchPhotos, pageUpdater, page }) => {
    const { query } = useParams()
    useEffect(() => {
        fetchPhotos(query)
    }, [fetchPhotos, query]
    );
    let loadMore = () => {
        fetchPhotos(query, pageUpdater(page))
    }
    return (
        <>
            <Container pt={[6]}>
                <Typography variant='h1' as='h1'>{query}</Typography>
            </Container>
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