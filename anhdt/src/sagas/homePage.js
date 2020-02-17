import { put, fork, call, takeLatest, take, cancelled, select } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'

import { stadiums } from '../assets/data'
import * as helper from '../helper'
import * as CONSTANTS from '../constants'
import * as actionCreators from '../reducers/homePageReducer'

import openNotification from '../components/Notification'

let optionStadiums = stadiums

const fakeFetch = (m) => {
	setTimeout(() => {console.log(`fake fetch for ${m} milliseconds`)}, m)
}

function* fetchStadiums() {
	yield fakeFetch(1000)

	const randomValue = Math.round(Math.random() * 100)
	

	let isSuccess = randomValue % 2 === 0 ? true : false

	console.log(`isSuccess ${isSuccess}`)

	// yield put( actionCreators.setStadiums(optionStadiums) )
	
	// isSuccess = false

	if (isSuccess) {
		yield put( actionCreators.setStadiums(optionStadiums) )
	} else {
		// yield put( actionCreators.fetchDataStadiumsFail())
		// openNotification(fetchStadiums)

		// yield put( actionCreators.fetchDataStadiumsFail() )

		// openNotification()// ,,moi lan goi den la se sinh ra notifiicaiton 1lan, ti ve hoc duolingo
	}

}

function* filterStadiumsPrice(action) {
	optionStadiums = stadiums.filter(item => item.price.search(action.value) !== -1)
	yield put( actionCreators.setStadiums(optionStadiums) )
}

function* sortStadiums(action) {	
	let callback = ''

	switch (action.value) {

		case CONSTANTS.PRICE_ASC:
			callback = helper.sortByPriceReverse
			break;

		case CONSTANTS.PRICE_DESC:
			callback = helper.sortByPrice
			break;

		case CONSTANTS.NAME_ASC:
			callback = helper.sortByNameReverse
			break;

		case CONSTANTS.NAME_DESC:
			callback = helper.sortByName
			break;
			
		default:
			callback = helper.sortByNameReverse
	}

  optionStadiums = stadiums.sort(callback)

  console.log(`stadiums before out ${optionStadiums}`)
	
	yield put( actionCreators.setStadiums(optionStadiums) )
}


function* searchStadiumsName(action) {
	optionStadiums = stadiums.filter(item => item.name.toLowerCase().search(action.value.toLowerCase()) !== -1)
	yield put( actionCreators.setStadiums(optionStadiums) )
}

function countdown(secs) {
  return eventChannel(emitter => {
      const iv = setInterval(() => {
        secs -= 1
        if (secs > 0) {
        	emitter(secs)
        } else {
          // this causes the channel to close
          console.log(`dispatch an action FETCH_FAILED`)
          
          emitter(END)
        }
      }, 1000);
      // The subscriber must return an unsubscribe function
      return () => {
        clearInterval(iv)
      }
    }
  )
}

function* fetchDataStadiumsFail() {
	yield alert('can not get stadiums')
	// console.log('can not get stadiums')
}

function* actionWatcher() {
	yield takeLatest(CONSTANTS.STADIUMS_FETCH_ALL , fetchStadiums)

	yield takeLatest(CONSTANTS.STADIUMS_SEARCH_NAME, searchStadiumsName)
	yield takeLatest(CONSTANTS.STADIUMS_SORT_DATA, sortStadiums)
	yield takeLatest(CONSTANTS.STADIUMS_FILTER_PRICE, filterStadiumsPrice)

	yield takeLatest(CONSTANTS.STADIUMS_FETCH_FAIL, fetchDataStadiumsFail)

	const chan = yield call(countdown, 14)
  try {    
    while (true) {

    	let seconds = yield take(chan)
    	console.log(`countdown: ${seconds}`)

    	const checkDataStadiums = yield select(state => state.stadiums)
    	if (checkDataStadiums.length > 0) {
    		chan.close()
    		break
    	}

    	if (seconds === 13) {
    		openNotification(1)
    	}

    	if (seconds === 12) {
    		yield put( actionCreators.fetchDataStadiums() )
    	}

    	if (seconds === 11) {
    		openNotification(3)
    	}

    	if (seconds === 8) {
    		yield put( actionCreators.fetchDataStadiums() )
    	}

    	if (seconds === 7) {
    		openNotification(5)
    	}

    	if (seconds === 2) {
    		yield put( actionCreators.fetchDataStadiums() )
    	}

    	if (seconds === 1) {
    		yield put( actionCreators.fetchDataStadiumsFail() )
    	}

    }
  } finally {
    if (yield cancelled()) {
      chan.close()
      console.log('countdown cancelled')
      // yield put( actionCreators.fetchDataStadiumsFail() )
    }    
  }
}

export default actionWatcher

