import { OPEN_NOTIFICATION, CLOSE_NOTIFICATION } from "../contants"

const initalizeState = {
    isOpen: false,
}
const notificationReducer = (state = initalizeState, action) => {
    switch (action.type) {
        case OPEN_NOTIFICATION:
            console.log("OPENREDUCER")
            return {
                ...state,
                isOpen: true,
            }
        case CLOSE_NOTIFICATION:
            return {
                ...state,
                isOpen: false,
            }
        default:
            return { ...state }
    }
}

export default notificationReducer;