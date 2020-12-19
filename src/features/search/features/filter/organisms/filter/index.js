import React, {useState, useRef, useEffect} from 'react'
import {ReactSVG} from 'react-svg'
import {Box, Button, Flex, Icon, Typography} from 'shared/atoms/'
import {ModalWindow} from 'shared/organisms'
import settingsIcon from 'shared/assets/settings.svg'
import {FilterItem, FilterOption} from '../../molecules/'
import {useDispatch, useSelector} from 'react-redux'
import {actions} from '../../index'
export const Filter = () => {
  const dispatch = useDispatch()
  const filters = useSelector(state => state.filters)
  const prevFiltersRef = useRef()
  useEffect(() => {
    prevFilters.current = filters
  }, [])
  const prevFilters = prevFiltersRef
  console.log(JSON.stringify(prevFilters.current) === JSON.stringify(filters))
  let filterData = [
    {
      title: 'Color',
      name: 'color',
      options: [
        {label: 'Any color', value: 'any'},
        {label: 'Black and white', value: 'black-white'},
        {label: 'Tones', value: 'tones'},
      ],
    },
    {
      title: 'Orientation',
      name: 'orientation',
      options: [
        {label: 'Any orientation', value: 'any'},
        {label: 'Landscape', value: 'landscape'},
        {label: 'Square', value: 'square'},
      ],
    },
  ]
  const [modalIsOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
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
            {filterData.map(item => {
              return (
                <FilterItem key={item.name} title={item.title}>
                  {item.options.map(option => {
                    return (
                      <FilterOption
                        name={item.name}
                        id={`radio-${item.name}-${option.value}`}
                        key={option.value}
                        label={option.label}
                        value={option.value}
                        onChange={({target: {value, name}}) => dispatch(actions.changeFilter(name, value))}
                        checked={filters[item.name] === option.value}
                      />
                    )
                  })}
                </FilterItem>
              )
            })}
          </Box>
          <Box borderTop='1px solid #d1d1d1' p={[3]} position='fixed' left='0' right='0' bottom='0' bg='white'>
            <Flex justifyContent='space-between'>
              <Button
                onClick={() => dispatch(actions.resetFilters())}
                fontSize={[3]}
                p={[2]}
                width='48%'
                bg='#eee'
                color='#767676'>
                Clear
              </Button>
              <Button onClick={() => setIsOpen(!modalIsOpen)} fontSize={[3]} p={[2]} width='48%' bg='#111' color='#fff'>
                {JSON.stringify(prevFilters.current) === JSON.stringify(filters) ? 'Close' : 'Apply'}
              </Button>
            </Flex>
          </Box>
        </ModalWindow>
      )}
    </>
  )
}
