import { getPhotos } from '../api'
const SET_RESULT_DATA = 'search/SET_RESULT_DATA'
const UPDATE_PHOTOS = 'search/UPDATE_PHOTOS'
const UPDATE_PAGE = 'search/UPDATE_PAGE'
let initialState = {
    query: "",
    results: [],
    page: 1,
    total: 0
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULT_DATA: {
            return {
                ...state,
                ...action.data,
                query: action.query
            }
        }
        case UPDATE_PHOTOS: {
            return {
                ...state,
                results: [...state.results, ...action.data.results]
            }
        }
        case UPDATE_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        default: return state
    }
}

const setResultData = (data, query) => ({ type: SET_RESULT_DATA, data, query });
const setNewResultData = (data) => ({ type: UPDATE_PHOTOS, data })
const pageUpdate = (page) => ({ type: UPDATE_PAGE, page })

export const fetchPhotos = (query, page = 1) => {
    return async (dispatch) => {
        let response = await getPhotos(query, page);
        page === 1 ? dispatch(setResultData(response, query)) : dispatch(setNewResultData(response))
    }
}

export const pageUpdater = (page) => {
    let newPage = page + 1;
    return (dispatch) => {
        dispatch(pageUpdate(newPage));
        return newPage;
    }
}