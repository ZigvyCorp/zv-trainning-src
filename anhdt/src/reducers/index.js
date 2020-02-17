import { combineReducers } from 'redux'

import { homePageReducer } from './homePageReducer'

const rootReducer = combineReducers({
	stadiums: homePageReducer,
})

export default rootReducer