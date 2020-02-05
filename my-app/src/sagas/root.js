// saga effect
import { fork, all } from 'redux-saga/effects';
import {WatchSearchGrounds,WatchGetGrounds} from './grounds';
 

export default function* rootSaga() {
	 
    yield all([
        WatchSearchGrounds(),
        WatchGetGrounds()
    ]
    )
}