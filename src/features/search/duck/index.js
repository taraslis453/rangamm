import {getPhotos} from '../api'
const SET_RESULT_DATA = 'search/SET_RESULT_DATA'
const UPDATE_PHOTOS = 'search/UPDATE_PHOTOS'
const UPDATE_PAGE = 'search/UPDATE_PAGE'
const CLEAR_DATA = 'search/CLEAR_DATA'
let initialState = {
  query: '',
  results: [],
  page: 1,
  total: 0,
  total_pages: 0,
}

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULT_DATA: {
      return {
        ...state,
        ...action.data,
        query: action.query,
      }
    }
    case UPDATE_PHOTOS: {
      return {
        ...state,
        results: [...state.results, ...action.data.results],
      }
    }
    case UPDATE_PAGE: {
      return {
        ...state,
        page: action.page,
      }
    }
    case CLEAR_DATA: {
      return initialState
    }
    default:
      return state
  }
}

export const actions = {
  setResultData: (data, query) => ({type: SET_RESULT_DATA, data, query}),
  setNewResultData: data => ({type: UPDATE_PHOTOS, data}),
  pageUpdate: page => ({type: UPDATE_PAGE, page}),
  clearData: () => ({type: CLEAR_DATA}),
}

export const thunks = {
  fetchPhotos: (query, page = 1) => {
    return async dispatch => {
      let response = await getPhotos(query, page)
      page === 1 ? dispatch(actions.setResultData(response, query)) : dispatch(actions.setNewResultData(response))
    }
  },
  pageUpdater: page => {
    let newPage = page + 1
    return dispatch => {
      dispatch(actions.pageUpdate(newPage))
      return newPage
    }
  },
}
