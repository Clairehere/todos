import dataReducer from "./dataReducer"
import notificationReducer from './notificationReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  data: dataReducer,
  notifications: notificationReducer,
})
