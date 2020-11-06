import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {searchReducer} from './features/search/index'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
const reducers = combineReducers({
  search: searchReducer,
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))
window.store = store
