import { combineReducers } from 'redux'
import axios from 'axios'
const initialState = []


const UPDATE_USERS = 'UPDATE_USERS'
const SEND_USERS = 'SEND_USERS'

export default function(state = initialState, action) {
console.log('inside users reducer', action.users)
  switch(action.type) {
    case UPDATE_USERS: return state.concat([action.user])
    case SEND_USERS: return action.users
    default: return state
  }
};


// ------------ ACTION DISPATCHERS --------------
export const updateUsers = (userInfo) => ({
  type: UPDATE_USERS,
  user: userInfo
})

export const sendUsers = (users) => {

  console.log('user from db', users)
  return {
    type: SEND_USERS,
    users: users
  }

}



