import { FETCHING_GROUNDS, SUCCESS_GROUNDS, FAILURE_GROUNDS } from "../contants"

const initalizeState = {
    isPending: false,
    grounds: []
}
const homeReducer = (state = initalizeState, action) => {
    switch (action.type) {
        case FETCHING_GROUNDS:
            return {
                ...state,
                isPending: true,
            }
        case SUCCESS_GROUNDS:
            return {
                ...state,
                isPending: true,
                grounds: [...action.payload]
            }
        case FAILURE_GROUNDS:
            return {
                ...state,
                isPending: false,
            }
        default:
            return { ...state }
    }
}

export default homeReducer;