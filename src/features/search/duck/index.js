const UPDATE_PHOTOS = "search/UPDATE_PHOTOS"

let initialState = {

}

export const searchReducer = (state = initialState, action) => {
    switch (action.rype) {
        case UPDATE_PHOTOS: {
            return {}
        }
        default: return state
    }
}

export const updatePhotos = () => ({ type: UPDATE_PHOTOS });

