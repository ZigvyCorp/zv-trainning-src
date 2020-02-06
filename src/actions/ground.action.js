import { FETCHING_GROUNDS, FETCHING_GROUND, SUCCESS_GROUNDS, FAILURE_GROUNDS, FAILURE_GROUND, SUCCESS_GROUND } from "../contants";

function getAll(data) {
    return { type: FETCHING_GROUNDS, payload: { filter: data } }
}

function get(id) {
    return { type: FETCHING_GROUND, payload: { id } }
}

function getAllFail() {
    return { type: FAILURE_GROUNDS }
}

function getFail() {
    return { type: FAILURE_GROUND }
}

function getAllSuccess(data) {
    return { type: SUCCESS_GROUNDS, payload: data }
}

function getSuccess(data) {
    return { type: SUCCESS_GROUND, payload: data }
}

export const GroundAction = {
    getAll,
    get,
    getAllSuccess,
    getSuccess,
    getAllFail,
    getFail
}