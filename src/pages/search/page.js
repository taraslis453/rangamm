import {
  fetchPhotos,
  pageUpdater,
  clearData,
  getResultsSelector,
  getTotalSelector,
  getPageSelector,
  getQuerySelector,
} from 'features/search/index'
import {getOptionsSelector, initializeOptions, changeOptionsStatus} from 'features/search/features/filter/index'
import React, {useEffect, useState, useRef} from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import {ReactSVG} from 'react-svg'
import {Box, Button, Container, Flex, Icon, Typography} from 'shared/atoms/index'
import {GridWithPhotos} from 'shared/organisms/index'
import {FilterItem} from 'features/search/features/filter/organisms/index'
import {ModalWindow} from 'shared/organisms/index'
import settingsIcon from 'shared/assets/settings.svg'
import {FilterOption} from 'features/search/features/filter/molecules'

export const SearchPage = ({
  results,
  total,
  fetchPhotos,
  pageUpdater,
  clearData,
  page,
  query,
  options,
  initializeOptions,
  changeOptionsStatus,
}) => {
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
  if (options.length === 0) {
    let filterItemsLength = filterData.length
    let array = []
    for (let i = 0; i < filterItemsLength; i++) {
      let optionsLength = filterData[i].options.length
      let optionsStatus = []
      for (let b = 0; b < optionsLength; b++) {
        if (b === 0) {
          optionsStatus.push(true)
        } else {
          optionsStatus.push(false)
        }
      }
      array.push(optionsStatus)
    }
    initializeOptions(array)
  }
  const optionsHandler = (itemIndex, optionIndex) => {
    let currentOptionsStatus = [...options]
    let optionsItemLength = currentOptionsStatus[itemIndex].length
    let newArrayStatus = []
    for (let i = 0; i < optionsItemLength; i++) {
      if (i === optionIndex) {
        newArrayStatus.push(true)
      } else {
        newArrayStatus.push(false)
      }
    }
    currentOptionsStatus.splice(itemIndex, 1, newArrayStatus)
    changeOptionsStatus(currentOptionsStatus)
  }
  useEffect(() => {
    return () => {
      clearData()
    }
  }, [clearData])

  const filterOptionsElements = useRef(null)
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
                    <Box overflow='auto' height='78%' ref={filterOptionsElements}>
                      {options.length > 0 &&
                        filterData.map((item, itemIndex) => {
                          return (
                            <FilterItem
                              mobile={true}
                              key={itemIndex}
                              filterTitle={item.filterTitle}
                              defaultTitle={item.defaultTitle}>
                              {item.options.map((optionItem, optionIndex) => {
                                return (
                                  <FilterOption
                                    onClick={() => console.log('hi')}
                                    radioName={`radio${itemIndex}`}
                                    radioIdName={`radio${optionIndex}${itemIndex}`}
                                    key={optionIndex}
                                    title={optionItem}
                                    optionsHandler={() => optionsHandler(itemIndex, optionIndex)}
                                    checked={options[itemIndex][optionIndex]}
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
                  {options.length > 0 &&
                    filterData.map((item, itemIndex) => {
                      return (
                        <FilterItem key={itemIndex} filterTitle={item.filterTitle} defaultTitle={item.defaultTitle}>
                          {item.options.map((optionItem, optionIndex) => {
                            return (
                              <FilterOption
                                radioName={`radio${itemIndex}`}
                                radioIdName={`radio${optionIndex}${itemIndex}`}
                                key={optionIndex}
                                title={optionItem}
                                checked={options[itemIndex][optionIndex]}
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
    options: getOptionsSelector(state),
  }
}

export default connect(mapStateToProps, {fetchPhotos, pageUpdater, clearData, initializeOptions, changeOptionsStatus})(
  SearchPage,
)
