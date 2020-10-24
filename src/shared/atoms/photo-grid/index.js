import React from 'react';
import PropTypes from 'prop-types';

export const PhotoGrid = ({ items, urlPath, altPath, ...props }) => {
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
                <img src={pathParser(item, urlPath)} alt={pathParser(item, altPath)} />
            </div>
        )
    })
    return (
        <div>{photos}</div>
    )
}