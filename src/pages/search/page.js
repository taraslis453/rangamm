import {thunks as searchThunks, actions as searchActions} from 'features/search/index'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {Box, Container, Flex, Typography} from 'shared/atoms/index'
import {GridWithPhotos} from 'shared/organisms/index'
import {Filter} from 'features/search/features/filter/organisms/filter'

export const Search = () => {
  const results = useSelector(state => state.search.results)
  const total = useSelector(state => state.search.total)
  const query = useSelector(state => state.search.query)
  const page = useSelector(state => state.search.page)
  const dispatch = useDispatch()
  const {paramsQuery} = useParams()
  if (paramsQuery !== query) {
    ;(function () {
      dispatch(searchThunks.fetchPhotos(paramsQuery))
    })()
  }
  let loadMore = () => {
    dispatch(searchThunks.fetchPhotos(query, dispatch(searchThunks.pageUpdater(page))))
  }
  useEffect(() => {
    return () => {
      dispatch(() => searchActions.clearData())
    }
  }, [dispatch])
  return (
    <div>
      <Box position='absolute' bg='#fff' top='75px' width={1} borderBottom='1px solid silver'>
        <Box p={[3]}>
          <Flex justifyContent='space-between'>
            <Typography as={'span'} variant='span'>
              Photos 'count'
            </Typography>
            <Box>
              {/* <Box position='relative'>
                <Filter mobile />
              </Box> */}
              <Box whiteSpace='nowrap'>
                <Filter />
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Container pt={[2, 2, 6]}>
        <Typography variant='h1' as='h1'>
          {query}
        </Typography>
      </Container>
      <GridWithPhotos
        items={results}
        urlPath={'urls.small'}
        altPath={'user.username'}
        totalItems={total}
        loadMore={loadMore}
      />
    </div>
  )
}
