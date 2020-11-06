import React from 'react'
import {SearchForm} from 'features/search/molecules/'
import {Logo} from 'shared/molecules/index'
import {Flex, Container, Fixed} from 'shared/atoms'
export const Header = () => {
  return (
    <Fixed bg='#fff' top='0' width={1} borderBottom='1px solid silver'>
      <Container py={[3]}>
        <Flex justifyContent='space-between'>
          <Logo />
          <SearchForm variant='secondary' />
        </Flex>
      </Container>
    </Fixed>
  )
}
