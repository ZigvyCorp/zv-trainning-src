import { OPEN_NOTIFICATION, CLOSE_NOTIFICATION } from "../contants";

function open({ duration, message }) {
    console.log(message)
    return { type: OPEN_NOTIFICATION, payload: { duration, message } }
}

function close() {
    return { type: CLOSE_NOTIFICATION }
}


export const NotiAction = {
    open,
    close
}