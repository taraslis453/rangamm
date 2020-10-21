const TEST = "search/TEST"

let initialState = {
    
}

export const searchReducer = (state = initialState, action) => {
    switch (action.rype) {
        case TEST: {
            return console.log('test')
        }
        default: return state
    }
}


export const putTest = () => ({type: TEST});

