import { put, takeLatest, takeEvery, call, delay, take ,retry} from 'redux-saga/effects'
import { MAX_RETRIES, TIME_RETRY } from './../config'
import groundService from '../services/ground.service'
import { FETCHING_GROUNDS, FAILURE_GROUNDS, SUCCESS_GROUNDS, FETCHING_GROUND, SUCCESS_GROUND, FAILURE_GROUND } from '../contants'
import { NotiAction } from '../actions/notification.action'



function* getAll(filter) {
    try {
        let { data } = yield call(groundService.getAll, filter)
        yield put({ type: SUCCESS_GROUNDS, payload: data })
    } catch (err) {
        // alert("Loi")
        yield put({ type: FAILURE_GROUNDS })
    }
}


function* watchGetAll() {
    yield takeLatest(FETCHING_GROUNDS, getAll)
}


function* get({ payload: { id } }) {
    try {
        const { data } = yield call(groundService.get, id)
        yield put({ type: SUCCESS_GROUND, payload: data })
    } catch{
        yield put({ type: FAILURE_GROUND })
    }
}


function* watchGet() {
    yield takeLatest(FETCHING_GROUND, get)
}


function* retryApi(apiRequest, data) {
    for (let i = 0; i < MAX_RETRIES + 1; i++) {
        console.log(i)
        try {
            const apiResponse = yield call(apiRequest, data);
            console.log(apiResponse)
            return apiResponse;
        } catch (err) {
            console.log(err)
            if (i < MAX_RETRIES) {
                // yield put(NotiAction.open())
                yield delay(TIME_RETRY);
            }
        }
    }
    throw new Error('API request failed');
}


export default {
    watchGetAll,
    watchGet
}