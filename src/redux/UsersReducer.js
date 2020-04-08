import { GET_USER } from './Types'

const initialState = {
    users: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return { ...state, users: action.payload }
        default: return state
    }
}