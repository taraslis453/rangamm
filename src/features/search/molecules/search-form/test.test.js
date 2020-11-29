import React from 'react'
import {render, screen} from 'lib/test-utils'
import userEvent from '@testing-library/user-event'
import {SearchForm} from './index'
describe('<SearchForm/>', () => {
  let input
  beforeEach(() => {
    render(<SearchForm />)
    input = screen.getByTestId('searchInput')
  })
  it('should display resetButton when input change', () => {
    userEvent.type(input, 'My search query')
    expect(screen.getByTestId('resetButton')).toBeDefined()
  })
  it('should reset input value onClick', () => {
    userEvent.type(input, 'My search query')
    userEvent.click(screen.getByTestId('resetButton'))
    expect(input.value).toHaveLength(0)
  })
})
