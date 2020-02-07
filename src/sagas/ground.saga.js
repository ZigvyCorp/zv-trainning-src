import { call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { GroundAction } from '../actions/ground.action'
import { NotiAction } from '../actions/notification.action'
import { CLOSE_NOTIFICATION, FETCHING_GROUND, FETCHING_GROUNDS } from '../contants'
import groundService from '../services/ground.service'
import { MAX_RETRIES, TIME_RETRY } from './../config'



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

function* get({ payload: { id } }) {
    try {
        const { data } = yield call(groundService.get, id)
        yield put(GroundAction.getSuccess(data))
    } catch (error) {
        yield put(GroundAction.getAllFail())
    }
}


function* retryApi(apiRequest, data) {
    for (let i = 1; i <= MAX_RETRIES + 1; i++) {
        console.log(i)
        try {
            const apiResponse = yield call(apiRequest, data);
            return apiResponse;
        } catch (err) {
            if (err.response.status !== 404)
                break;
            if (i < MAX_RETRIES) {
                const timeRetry = i * 2 - 1;
                yield put(NotiAction.open({ duration: timeRetry }))
                yield delay(TIME_RETRY * timeRetry);
                yield take(CLOSE_NOTIFICATION)
            }
        }
    }
    throw new Error('API request failed');
}

export const watchGrounds = [
    takeLatest(FETCHING_GROUND, get),
    getAll()
]
