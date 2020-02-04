import { combineReducers } from "redux"
import homeReducer from './home.reducer'
import infoReducer from './info.reducer'

export default combineReducers({
    homeReducer,
    infoReducer
})