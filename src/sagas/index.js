import { all } from 'redux-saga/effects'
import homeSaga from "./home.saga";
import infoSaga from "./info.saga";


export default function* rootSaga() {
    yield all([
        homeSaga.watchFetchGrounds(),
        infoSaga.watchGetRound()
    ])
}