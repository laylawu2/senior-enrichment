import { combineReducers } from 'redux'
import users from './user-reducer'
import moods from './mood-reducer'
import currentUser from './current-user-reducer'
export default combineReducers({users, currentUser, moods})
