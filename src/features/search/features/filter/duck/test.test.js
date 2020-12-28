import {actions} from './index'
import {filtersReducer} from './index'

describe('Filter reducer actions', () => {
  let initialState = {
    order_by: 'relevant',
    color: 'any',
    orientation: 'any',
  }
  test('Change filter', () => {
    let newState = filtersReducer(initialState, actions.changeFilter('color', 'black_and_white'))
    expect(newState.color).toBe('black_and_white')
  })
  test('Reset filters', () => {
    filtersReducer(initialState, actions.changeFilter('color', 'black_and_white'))
    let newState = filtersReducer(initialState, actions.resetFilters)
    expect(newState.color).toBe('any')
  })
})
