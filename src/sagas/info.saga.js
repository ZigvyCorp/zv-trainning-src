import { call, takeLatest, put } from 'redux-saga/effects'
import infoService from '../services/info.service'
import { SUCCESS_GROUND, FETCHING_GROUND } from '../contants'


function* getGround({ payload: { id } }) {
    const { data } = yield call(infoService.getGround, id)
    yield put({ type: SUCCESS_GROUND, payload: data })
}


function* watchGetRound() {
    yield takeLatest(FETCHING_GROUND, getGround)
}

export default {
    watchGetRound
}