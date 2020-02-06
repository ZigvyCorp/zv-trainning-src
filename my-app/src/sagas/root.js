// saga effect
import { fork, all } from 'redux-saga/effects';
import {WatchSearchGrounds,WatchGetGrounds,WatchFilterGrounds,WatchSortGrounds
,WatchNameSort,WatchPriceSort} from './grounds';
 

export default function* rootSaga() {
	 
    yield all([
        WatchSearchGrounds(),
        WatchGetGrounds(),
        WatchFilterGrounds(),
        WatchNameSort(),
        WatchPriceSort()
    ]
    )
}