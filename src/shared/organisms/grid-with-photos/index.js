import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Preloader } from 'shared/atoms/index'
import classes from './index.module.css'
export const GridWithPhotos = ({ items, totalItems, urlPath, altPath, loadMore }) => {
    function pathParser(obj, path) {
        return path.split('.').reduce((accumulator, currentValue) => {
            if (accumulator === null) {
                return obj[currentValue];
            }
            return accumulator[currentValue];
        }, null)
    }
    let photos = items.map((item, index) => {
        return (
            <div key={index}>
                <img style={{ maxWidth: '100%' }} src={pathParser(item, urlPath)} alt={pathParser(item, altPath)} />
            </div>
        )
    })
    const breakpointColumnsObj = {
        default: 3,
        700: 2,
        500: 1
    };
    return (
        <InfiniteScroll dataLength={items.length} hasMore={totalItems === items.length ? false : true} next={loadMore} loader={<div style={{ textAlign: 'center' }}><Preloader /></div>} endMessage={<p style={{ textAlign: 'center' }}><b>Yay! You have seen it all</b></p>}>
            <Masonry breakpointCols={breakpointColumnsObj} className={classes.myMasonryGrid} columnClassName={classes.myMasonryGrid_column}>
                {photos}
            </Masonry >
        </InfiniteScroll>
    )
}

GridWithPhotos.propTypes = {
    items: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
    totalItems: PropTypes.number.isRequired,
    altPath: PropTypes.string,
    loadMore: PropTypes.func.isRequired,
}