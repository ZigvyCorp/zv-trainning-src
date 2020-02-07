import { OPEN_NOTIFICATION, CLOSE_NOTIFICATION } from "../contants"

const initalizeState = {
    isOpen: false,
    duration: -1,
    message: ''
}
const notificationReducer = (state = initalizeState, action) => {
    switch (action.type) {
        case OPEN_NOTIFICATION:
            console.log(action.payload.message)
            return {
                ...state,
                isOpen: true,
                duration: action.payload.duration,
                message: action.payload.message
            }
        case CLOSE_NOTIFICATION:
            return {
                ...state,
                isOpen: false,
                duration: -1,
                message: ''
            }
        default:
            return { ...state }
    }
}

export default notificationReducer;