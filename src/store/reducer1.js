import { INCREMENT, DECREMENT } from "./action";

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1 // Increment the count
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1 // Decrement the count
            }
        default:
            return state
    }
}

export default reducer
