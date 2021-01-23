import React from 'react'
import PropTypes from 'prop-types'
import {Box} from 'shared/atoms'

export const FilterItem = ({title, children}) => {
  return (
    <Box data-testid='filterItem' borderTop='1px solid #d1d1d1'>
      <Box p={[3]}>
        <div>{title}</div>
        {children}
      </Box>
    </Box>
  )
}

FilterItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
