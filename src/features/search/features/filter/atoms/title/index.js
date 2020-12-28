import React from 'react'
import PropTypes from 'prop-types'
import {Typography} from 'shared/atoms/index'
export const Title = ({children, color, ...props}) => {
  return (
    <Typography as='div' fontSize={[1]} color={color ? color : '#767676'} {...props}>
      {children}
    </Typography>
  )
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
}
