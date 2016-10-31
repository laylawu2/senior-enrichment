import { combineReducers } from 'redux'
import userReducer from './user-reducer'
import moodReducer from './mood-reducer'

export default combineReducers({
  user: userReducer,
  mood: moodReducer
})
