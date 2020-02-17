import { all } from 'redux-saga/effects'

import actionWatcher from './homePage'

export default function* rootSaga() {
	yield all([
		actionWatcher(),
	])
}


