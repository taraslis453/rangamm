import { getPhotos } from '../api'
const SET_RESULT_DATA = "search/SET_RESULT_DATA"

let initialState = {
    query: "",
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
        default: return state
    }
}

const setResultData = (data, query) => ({ type: SET_RESULT_DATA, data, query });

export const fetchPhotos = (query, page = 1) => {
    if (page === 1) {
        return (dispatch) => {
            getPhotos(query).then((data) => {
                dispatch(setResultData(data, query));
            })
        }
    }

}