import { combineReducers } from "redux"
import groundReducer from './ground.reducer'
import notificationReducer from './notification.reducer'

export default combineReducers({
    groundReducer,
    notificationReducer
})