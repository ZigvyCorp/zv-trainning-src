import { actionChannel } from "redux-saga/effects"
import { FETCHING_GROUNDS, FETCHING_GROUND, SUCCESS_GROUNDS, SUCCESS_GROUND, FAILURE_GROUNDS, FAILURE_GROUND } from "../contants"

const initializeState = {
    isPending: false,
    ground: {}
}


const infoReducer = (state = initializeState, action) => {
    switch (action.type) {
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

export default infoReducer;