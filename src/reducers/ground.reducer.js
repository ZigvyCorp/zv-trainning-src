import { FETCHING_GROUNDS, SUCCESS_GROUNDS, FAILURE_GROUNDS, FETCHING_GROUND, SUCCESS_GROUND, FAILURE_GROUND } from "../contants"

const initalizeState = {
    isPending: false,
    grounds: [],
    ground: {}
}
const groundReducer = (state = initalizeState, action) => {
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
        case FETCHING_GROUND:
            return {
                ...state,
                isPending: true
            }
        case SUCCESS_GROUND:
            return {
                ...state,
                ground: { ...action.payload }
            }
        case FAILURE_GROUND:
            return {
                ...state,
                // ground
            }
        default:
            return { ...state }
    }
}

export default groundReducer;