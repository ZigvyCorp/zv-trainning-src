import { OPEN_NOTIFICATION, CLOSE_NOTIFICATION } from "../contants";

function open() {
    return { type: OPEN_NOTIFICATION }
}

function close() {
    return { type: CLOSE_NOTIFICATION }
}


export const NotiAction = {
    open,
    close
}