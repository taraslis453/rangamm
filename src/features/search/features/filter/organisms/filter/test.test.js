import React from 'react'
import {render, screen, fireEvent} from 'lib/test-utils'
import {Filter} from './index'
describe('<Filter/>', () => {
  const mock = jest.fn()
  beforeEach(() => {
    render(<Filter initialFetch={mock} />)
    fireEvent.click(screen.getByTestId('openFilterBtn'))
  })
  it('should be the same checked items as filter items ', () => {
    screen.getAllByTestId('filterItem')
    expect(screen.getAllByTestId('filterItem').length === screen.getAllByTestId('filterIconChecked').length)
  })
  test('when change selected option, close button should change to apply and vice versa ', () => {
    fireEvent.click(screen.getByText(/Latest/))
    expect(screen.findByText(/Apply/).toBeInTheDocument)
    fireEvent.click(screen.getByText(/Relevant/))
    expect(screen.findByText(/Close/).toBeInTheDocument)
  })
  it('initial fetch should be called 1 time', () => {
    fireEvent.click(screen.getByText(/Latest/))
    fireEvent.click(screen.getByText(/Apply/))
    expect(mock).toBeCalledTimes(1)
  })
})
