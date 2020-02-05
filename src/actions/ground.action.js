import { FETCHING_GROUNDS, FETCHING_GROUND } from "../contants";

function getAll(data) {
    return { type: FETCHING_GROUNDS, payload: { filter: data } }
}

function get(id) {
    return { type: FETCHING_GROUND, payload: { id } }
}

export const GroundAction = {
    getAll,
    get
}