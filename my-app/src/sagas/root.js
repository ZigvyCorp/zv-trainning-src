// saga effect
import { all } from 'redux-saga/effects';
import {Watch} from './grounds'; 

export default function* rootSaga() {
	 
    yield all([
        Watch()
    ]
    )
}