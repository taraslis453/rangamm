import React from 'react'
import PropTypes from 'prop-types'
import {Box} from 'shared/atoms'
export const FilterItem = ({title, children}) => {
  return (
    <>
      <Box borderTop='1px solid #d1d1d1'>
        <Box p={[3]}>
          <div>{title}</div>
          {children}
        </Box>
      </Box>
    </>
  )
}

FilterItem.propTypes = {
  mobile: PropTypes.bool,
  title: PropTypes.string,
  defaultTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}
