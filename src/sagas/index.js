import { all } from 'redux-saga/effects'
import { watchGrounds } from "./ground.saga";


export default function* rootSaga() {
    yield all([
        ...watchGrounds
    ])
}