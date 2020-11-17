import React from 'react'
import {Typography} from 'shared/atoms/index'
export const Title = ({children, ...props}) => {
  return (
    <Typography as='div' fontSize={[1]} color={'#767676'} {...props}>
      {children}
    </Typography>
  )
}
