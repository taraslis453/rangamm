const INITIALIZE_OPTIONS_STATUS = 'filter/INITIALIZE_OPTIONS_STATUS'
const CHANGE_OPTIONS_STATUS = 'filter/CHANGE_OPTIONS_STATUS'

let initialState = {
  options: [],
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_OPTIONS_STATUS: {
      return {
        ...state,
        options: action.optionsStatus,
      }
    }
    case CHANGE_OPTIONS_STATUS: {
      return {
        ...state,
        options: action.newOptionsStatus,
      }
    }
    default:
      return state
  }
}

export const initializeOptions = optionsStatus => ({type: INITIALIZE_OPTIONS_STATUS, optionsStatus})
export const changeOptionsStatus = newOptionsStatus => ({type: CHANGE_OPTIONS_STATUS, newOptionsStatus})
