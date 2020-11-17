import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import {Box} from 'shared/atoms'
export const FilterItem = ({filterTitle, defaultTitle, children}) => {
  const [visible, setVisible] = useState(false)
  const filterBox = useRef(null)
  const handler = () => {
    setVisible(!visible)
    filterBox.current.focus(filterBox)
  }
  return (
    <>
      <Box display={['none', 'none', 'block']} position='relative'>
        <Box
          px={[3]}
          cursor='pointer'
          data-testid='currentFilter'
          tabIndex='0'
          ref={filterBox}
          onBlur={() => setVisible(!visible)}
          onClick={handler}>
          {defaultTitle}
        </Box>
        {visible && (
          <Box
            as='ul'
            px={[3]}
            position='absolute'
            top='25px'
            right='0'
            background='#fff'
            border='1px solid silver'
            cursor='pointer'
            data-testid='filters'>
            {children}
          </Box>
        )}
      </Box>
      <Box display={['block', 'block', 'none']} borderTop='1px solid #d1d1d1'>
        <Box p={[3]}>
          <div>{filterTitle}</div>
          {children}
        </Box>
      </Box>
    </>
  )
}

FilterItem.propTypes = {
  filterTitle: PropTypes.string,
  defaultTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
