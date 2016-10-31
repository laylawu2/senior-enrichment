import { combineReducers } from 'redux'
import axios from 'axios'
const initialState = {

  currentUser: {}
}

const SET_USER_MOOD = 'SET_USER_MOOD'
const SET_CURRENT_USER = 'SET_CURRENT_USER'

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_USER: return action.name
    default: return state
  }
};

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


