import React from 'react'
import {render, screen} from 'lib/test-utils'
import {FilterItem} from './index'
import userEvent from '@testing-library/user-event'
import {FilterOption} from '../index'
describe('<FilterItem/>', () => {
  let currentFilter
  beforeEach(() => {
    render(
      <FilterItem title='Orientation' defaultTitle='Any orientation'>
        <FilterOption label='Any orientation' />
        <FilterOption label='Landscape' />
        <FilterOption label='Square' />
      </FilterItem>,
    )
    currentFilter = screen.getByTestId('currentFilter')
  })
  test('popover display on click, close on item click or document', () => {
    userEvent.click(currentFilter)
    expect(screen.getByTestId('filters')).toBeDefined()
    screen.debug()
    userEvent.click(currentFilter)
    expect(screen.getByTestId('filters')).toBeUndefined()
  })
})
