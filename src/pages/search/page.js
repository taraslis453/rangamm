import {fetchPhotos, pageUpdater, clearData} from 'features/search/duck'
import {getResultsSelector, getTotalSelector, getPageSelector, getQuerySelector} from 'features/search/index'
import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import {ReactSVG} from 'react-svg'
import {Box, Button, Container, Flex, Icon, Typography} from 'shared/atoms/index'
import {GridWithPhotos} from 'shared/organisms/index'
import {FilterItem} from 'features/search/features/filter/organisms/index'
import {ModalWindow} from 'shared/organisms/index'
import settingsIcon from 'shared/assets/settings.svg'
import {FilterOption} from 'features/search/features/filter/molecules'

export const SearchPage = ({results, total, fetchPhotos, pageUpdater, clearData, page, query}) => {
  const {paramsQuery} = useParams()
  if (paramsQuery !== query) {
    ;(function () {
      fetchPhotos(paramsQuery)
    })()
  }
  let loadMore = () => {
    fetchPhotos(query, pageUpdater(page))
  }
  let filterData = [
    {
      filterTitle: 'Color',
      defaultTitle: 'Any color',
      options: ['Any color', 'Black and white', 'Tones'],
    },
    {
      filterTitle: 'Orientation',
      defaultTitle: 'Any orientation',
      options: ['Any orientation', 'Landscape', 'Square'],
    },
  ]

  useEffect(() => {
    return () => {
      clearData()
    }
  }, [clearData])

  const [modalIsOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div>
      <Box position={[null, null, 'fixed']} bg='#fff' top='75px' width={1} borderBottom='1px solid silver'>
        <Box p={[3]}>
          <Flex justifyContent='space-between'>
            <Typography as={'span'} variant='span'>
              Photos 'count'
            </Typography>
            <Box>
              <Box position='relative' display={['block', 'block', 'none']}>
                <Icon>
                  <ReactSVG onClick={openModal} src={settingsIcon} />
                </Icon>
                {modalIsOpen && (
                  <ModalWindow closeCallback={closeModal}>
                    <Box px={[3]}>
                      <Typography fontSize={[3]} as='h3'>
                        Filters
                      </Typography>
                    </Box>
                    <Box overflow='auto' height='78%'>
                      {filterData.map((item, index) => {
                        return (
                          <FilterItem key={index} filterTitle={item.filterTitle} defaultTitle={item.defaultTitle}>
                            {item.options.map((optionItem, optionIndex) => {
                              return (
                                <FilterOption
                                  radioName={`mradio${index}`}
                                  radioIdName={`mradio${optionIndex}${index}`}
                                  key={optionIndex}
                                  title={optionItem}
                                />
                              )
                            })}
                          </FilterItem>
                        )
                      })}
                    </Box>
                    <Box borderTop='1px solid #d1d1d1' p={[3]} position='fixed' left='0' right='0' bottom='0'>
                      <Flex justifyContent='space-between'>
                        <Button fontSize={[3]} p={[2]} width='48%' bg='#eee' color='#767676'>
                          Clear
                        </Button>
                        <Button
                          onClick={() => setIsOpen(!modalIsOpen)}
                          fontSize={[3]}
                          p={[2]}
                          width='48%'
                          bg='#111'
                          color='#fff'>
                          Close
                        </Button>
                      </Flex>
                    </Box>
                  </ModalWindow>
                )}
              </Box>
              <Box whiteSpace='nowrap' display={['none', 'none', 'block']}>
                <Flex>
                  {filterData.map((item, index) => {
                    return (
                      <FilterItem key={index} filterTitle={item.filterTitle} defaultTitle={item.defaultTitle}>
                        {item.options.map((optionItem, optionIndex) => {
                          return (
                            <FilterOption
                              radioName={`dradio${index}`}
                              radioIdName={`dradio${optionIndex}${index}`}
                              key={optionIndex}
                              title={optionItem}
                            />
                          )
                        })}
                      </FilterItem>
                    )
                  })}
                </Flex>
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

const mapStateToProps = state => {
  return {
    results: getResultsSelector(state),
    total: getTotalSelector(state),
    page: getPageSelector(state),
    query: getQuerySelector(state),
  }
}

export default connect(mapStateToProps, {fetchPhotos, pageUpdater, clearData})(SearchPage)
