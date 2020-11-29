import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {searchReducer} from './features/search/index'
import {filterReducer} from './features/search/features/filter/index'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
const reducers = combineReducers({
  search: searchReducer,
  filter: filterReducer,
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))
window.store = store
