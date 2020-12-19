import React from 'react'
import {SearchForm} from 'features/search/molecules/'
import {Flex, Box} from 'shared/atoms'
import {Logo} from 'shared/molecules/index'
export const Header = () => {
  return (
    <Box position='fixed' bg='#fff' top='0' zIndex='99' width={1} borderBottom='1px solid silver'>
      <Box p={[3]}>
        <Flex justifyContent='space-between'>
          <Logo />
          <SearchForm variant='secondary' />
        </Flex>
      </Box>
    </Box>
  )
}
