import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css'
import classes from './index.module.css'
export const GridWithPhotos = ({ items, urlPath, altPath, ...props }) => {
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
        <Masonry breakpointCols={breakpointColumnsObj} className={classes.myMasonryGrid} columnClassName={classes.myMasonryGrid_column}>
            { photos}
        </Masonry >
    )
}

GridWithPhotos.propTypes = {
    items: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
    altPath: PropTypes.string
}