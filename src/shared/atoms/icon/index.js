import React from 'react';
import { icons } from '../../assets/icons'
import PropTypes from 'prop-types'
export const Icon = ({ iconName }) => {
    if (icons[iconName] === undefined) return 'undefined'
    return (
        <svg width='22px' height='22px' viewBox={icons[iconName].viewBox}>
            <path d={icons[iconName].d}></path>
        </svg>
    )
}

Icon.propTypes = {
    iconName: PropTypes.string.isRequired
}