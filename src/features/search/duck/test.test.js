import {actions} from './index'
import {searchReducer} from './index'
let initialState = {
  query: '',
  results: [],
  page: 1,
  total: 0,
  total_pages: 0,
}
describe('Search Reducer actions', () => {
  test('set result data', () => {
    let newState = searchReducer(initialState, actions.setResultData({results: [{}]}, 'night'))
    expect(newState.results).toHaveLength(1)
    expect(newState.query).toBe('night')
  })
  test('setNewResultData', () => {
    let newState = searchReducer(initialState, actions.setNewResultData({results: [{}, {}]}))
    expect(newState.results).toHaveLength(2)
  })
  test('page update', () => {
    let newState = searchReducer(initialState, actions.pageUpdate(2))
    expect(newState.page).toBe(2)
  })
})
