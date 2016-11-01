import { combineReducers } from 'redux'
import axios from 'axios'
const initialState = {
  users: [],
  currentUser: {}
}

const SET_USER_MOOD = 'SET_USER_MOOD'
const SET_CURRENT_USER = 'SET_CURRENT_USER'
const UPDATE_USERS = 'UPDATE_USERS'
const SEND_USERS = 'SEND_USERS'

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_USER: return Object.assign({}, state, {currentUser: action.name})
    case UPDATE_USERS: return Object.assign({}, state, {users: state.users.concat([action.name])})
    case SEND_USERS: return Object.assign({}, state, {users: state.users.concat(action.users)})
    default: return state
  }
};


// ------------ ACTION DISPATCHERS --------------
export const updateUsers = (userInfo) => ({
  type: UPDATE_USERS,
  name: userInfo.userName
})

export const sendUsers = (users) => ({
  type: SEND_USERS,
  users: users
})

export const setCurrentUser = (moodInfo) => ({
  type: SET_CURRENT_USER,
  name: moodInfo.userName
})

export const setUserMood = (moodInfo) => ({
  type: SET_USER_MOOD,
  moodInfo
})
export const getUserMoodInfo = moodInfo => dispatch => {
  console.log('getUserMoodInfo', moodInfo)
    axios.get(`/api/users/${moodInfo.name}`)
      .then(res => res.send(res.data))
}


