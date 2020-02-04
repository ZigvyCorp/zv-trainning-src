import { put, takeLatest, call } from 'redux-saga/effects'

import homeService from '../services/home.service'
import { FETCHING_GROUNDS, FAILURE_GROUNDS, SUCCESS_GROUNDS } from '../contants'
function* fetchGrounds() {
    try {
        let { data } = yield call(homeService.fetchGrounds)
        yield put({ type: SUCCESS_GROUNDS, payload: data })
    } catch{
        yield put({ type: FAILURE_GROUNDS })
    }
}


function* watchFetchGrounds() {
    yield takeLatest(FETCHING_GROUNDS, fetchGrounds)
}

export default {
    watchFetchGrounds
}
