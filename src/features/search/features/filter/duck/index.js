const CHANGE_FILTER = 'filter/CHANGE_FILTER'
const RESET_FILTERS = 'filter/RESET_FILTERS'

let initialState = {
  color: 'any',
  orientation: 'any',
}

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    }
    case RESET_FILTERS: {
      return initialState
    }
    default:
      return state
  }
}

export const actions = {
  changeFilter: (name, value) => ({
    type: CHANGE_FILTER,
    payload: {name, value},
  }),
  resetFilters: () => ({
    type: RESET_FILTERS,
  }),
}
