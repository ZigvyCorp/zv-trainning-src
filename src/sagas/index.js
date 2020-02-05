import { all } from 'redux-saga/effects'
import groundSaga from "./ground.saga";


export default function* rootSaga() {
    yield all([
        groundSaga.watchGetAll(),
        groundSaga.watchGet()
    ])
}