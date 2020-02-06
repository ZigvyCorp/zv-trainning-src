import { put, takeLatest, takeEvery, call, delay, take, retry } from 'redux-saga/effects'
import { MAX_RETRIES, TIME_RETRY } from './../config'
import groundService from '../services/ground.service'
import { FETCHING_GROUNDS, FAILURE_GROUNDS, SUCCESS_GROUNDS, FETCHING_GROUND, SUCCESS_GROUND, FAILURE_GROUND, CLOSE_NOTIFICATION } from '../contants'
import { NotiAction } from '../actions/notification.action'
import { GroundAction } from '../actions/ground.action'



function* getAll() {
    while (true) {
        const data = yield take(FETCHING_GROUNDS);
        try {
            let responseApi = yield call(retryApi, groundService.getAll, data)
            yield put(GroundAction.getAllSuccess(responseApi.data))
        } catch (err) {
            yield put(GroundAction.getAllFail())
            yield put(NotiAction.open({ duration: 2, message: `All retry fail` }))
        } finally {
            yield put(NotiAction.close())
        }
    }
}


function* watchGetAll() {
    yield takeLatest(FETCHING_GROUNDS, getAll)
}


function* get({ payload: { id } }) {
    try {
        const { data } = yield call(groundService.get, id)
        yield put(GroundAction.getAll(data))
    } catch (error) {
        yield put({ type: FAILURE_GROUND })
    }
}


function* watchGet() {
    yield takeLatest(FETCHING_GROUND, get)
}


function* retryApi(apiRequest, data) {
    for (let i = 1; i <= MAX_RETRIES + 1; i++) {
        console.log(i)
        try {
            const apiResponse = yield call(apiRequest, data);
            console.log(apiResponse)
            return apiResponse;
        } catch (err) {
            if (err.response.status !== 404)
                break;
            if (i < MAX_RETRIES) {
                const timeRetry = i * 2 - 1;
                yield put(NotiAction.open({ duration: timeRetry, message: `Retry after ${timeRetry}s` }))
                yield delay(TIME_RETRY * timeRetry);
                yield take(CLOSE_NOTIFICATION)
            }
        }
    }
    throw new Error('API request failed');
}


export default {
    // watchGetAll,
    getAll,
    watchGet
}